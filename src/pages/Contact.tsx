import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { useState, useRef } from "react";
import { toast } from "sonner";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const formRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [errors, setErrors] = useState<{
    name?: string;
    email?: string;
    phone?: string;
    message?: string;
  }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Funcții de validare
  const validateName = (name: string): string | null => {
    const trimmedName = name.trim();

    if (!trimmedName) {
      return "Numele este obligatoriu";
    }

    if (trimmedName.length < 2) {
      return "Numele trebuie să conțină cel puțin 2 caractere";
    }

    if (trimmedName.length > 50) {
      return "Numele nu poate depăși 50 de caractere";
    }

    // Verifică dacă conține doar litere, spații și caractere speciale permise
    const nameRegex = /^[a-zA-ZăâîșțĂÂÎȘȚ\s\-']+$/;
    if (!nameRegex.test(trimmedName)) {
      return "Numele poate conține doar litere și spații";
    }

    return null;
  };

  const validateEmail = (email: string): string | null => {
    const trimmedEmail = email.trim();

    if (!trimmedEmail) {
      return "Email-ul este obligatoriu";
    }

    // Regex pentru validare email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(trimmedEmail)) {
      return "Introduceți o adresă de email validă";
    }

    if (trimmedEmail.length > 100) {
      return "Email-ul este prea lung";
    }

    // Verifică dacă domeniul pare valid
    const domain = trimmedEmail.split("@")[1];
    if (domain && domain.length < 3) {
      return "Domeniul email-ului pare invalid";
    }

    return null;
  };

  const validatePhone = (phone: string): string | null => {
    const trimmedPhone = phone.trim();

    if (!trimmedPhone) {
      return "Numărul de telefon este obligatoriu";
    }

    // Elimină spațiile, cratimele și parantezele pentru validare
    const cleanPhone = trimmedPhone.replace(/[\s\-\(\)]/g, "");

    // Verifică format Moldova: +373 sau 0 urmat de 8 cifre
    const phoneRegex = /^(\+373|0)[0-9]{8}$/;
    if (!phoneRegex.test(cleanPhone)) {
      return "Introduceți un număr de telefon valid din Moldova (+373 XXX XXX XX sau 0XX XXX XXX)";
    }

    // Verifică dacă nu sunt toate cifrele identice
    const digits = cleanPhone.replace(/^\+373|^0/, "");
    if (/^(\d)\1+$/.test(digits)) {
      return "Numărul de telefon pare invalid";
    }

    return null;
  };

  const validateMessage = (message: string): string | null => {
    const trimmedMessage = message.trim();

    if (!trimmedMessage) {
      return "Mesajul este obligatoriu";
    }

    if (trimmedMessage.length < 10) {
      return "Mesajul trebuie să conțină cel puțin 10 caractere";
    }

    if (trimmedMessage.length > 1000) {
      return "Mesajul nu poate depăși 1000 de caractere";
    }

    // Verifică dacă mesajul nu conține doar caractere repetate
    if (/^(.)\1+$/.test(trimmedMessage.replace(/\s/g, ""))) {
      return "Mesajul pare invalid";
    }

    // Verifică dacă are cel puțin câteva cuvinte
    const words = trimmedMessage.split(/\s+/).filter((word) => word.length > 0);
    if (words.length < 3) {
      return "Mesajul trebuie să conțină cel puțin 3 cuvinte";
    }

    return null;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validează toate câmpurile
    const newErrors = {
      name: validateName(formData.name),
      email: validateEmail(formData.email),
      phone: validatePhone(formData.phone),
      message: validateMessage(formData.message),
    };

    // Filtrează doar erorile care există
    const filteredErrors = Object.fromEntries(
      Object.entries(newErrors).filter(([_, value]) => value !== null)
    ) as { name?: string; email?: string; phone?: string; message?: string };

    setErrors(filteredErrors);

    // Verifică dacă sunt erori
    const hasErrors = Object.values(newErrors).some((error) => error !== null);

    if (hasErrors) {
      // Scroll la prima eroare
      const firstErrorField = Object.keys(newErrors).find(
        (key) => newErrors[key as keyof typeof newErrors]
      );
      if (firstErrorField && formRef.current) {
        const errorElement = formRef.current.querySelector(
          `[name="${firstErrorField}"]`
        );
        errorElement?.scrollIntoView({ behavior: "smooth", block: "center" });
        (errorElement as HTMLElement)?.focus();
      }
      toast.error("Vă rugăm să corectați erorile din formular");
      return;
    }

    setIsSubmitting(true);

    // Creăm un FormData object pentru EmailJS
    const templateParams = {
      user_name: formData.name,
      user_email: formData.email,
      user_phone: formData.phone,
      message: formData.message,
    };

    // EmailJS API
    emailjs.send(
      "service_el9kaqp",
      "template_82hcm9s",
      templateParams,
      "2UcruGxNSzW9o8R-H"
    )

      .then(
        () => {
          toast.success(
            "Mesajul a fost trimis cu succes! Vă vom contacta în curând."
          );
          setFormData({ name: "", email: "", phone: "", message: "" });
          setErrors({});
          setIsSubmitting(false);
        },
        (error) => {
          toast.error(
            "A apărut o eroare la trimiterea mesajului. Vă rugăm încercați din nou."
          );
          console.log("FAILED...", error.text);
          setIsSubmitting(false);
        }
      );
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });

    // Curăță eroarea pentru câmpul modificat
    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name as keyof typeof errors];
        return newErrors;
      });
    }
  };

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">
            Contactează-ne
          </h1>
          <p className="text-xl text-muted-foreground text-center mb-16">
            Suntem aici să vă ajutăm. Contactați-ne pentru o consultație
            inițială.
          </p>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <Card className="p-8">
                <h2 className="text-2xl font-semibold mb-6">
                  Trimite un Mesaj
                </h2>
                <div ref={formRef} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Nume Complet <span className="text-red-500">*</span>
                    </label>
                    <Input
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Numele și prenumele dvs."
                      className={
                        errors.name ? "border-red-500 focus:ring-red-500" : ""
                      }
                      required
                    />
                    {errors.name && (
                      <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      E-mail <span className="text-red-500">*</span>
                    </label>
                    <Input
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="email@exemplu.md"
                      className={
                        errors.email ? "border-red-500 focus:ring-red-500" : ""
                      }
                      required
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.email}
                      </p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Telefon <span className="text-red-500">*</span>
                    </label>
                    <Input
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+373 XX XX XX XX"
                      className={
                        errors.phone ? "border-red-500 focus:ring-red-500" : ""
                      }
                      required
                    />
                    {errors.phone && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.phone}
                      </p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Mesaj <span className="text-red-500">*</span>
                    </label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Descrieți situația dvs. juridică..."
                      rows={5}
                      className={
                        errors.message
                          ? "border-red-500 focus:ring-red-500"
                          : ""
                      }
                      required
                    />
                    <div className="flex justify-between items-center mt-1">
                      <div>
                        {errors.message && (
                          <p className="text-red-500 text-sm">
                            {errors.message}
                          </p>
                        )}
                      </div>
                      <p className="text-sm text-gray-500">
                        {formData.message.length}/1000
                      </p>
                    </div>
                  </div>
                  <Button
                    onClick={handleSubmit}
                    className="w-full"
                    size="lg"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Se trimite..." : "Trimite Mesajul"}
                  </Button>
                </div>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <Phone className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Telefon</h3>
                    <p className="text-muted-foreground">+373 68 88 88 68</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <Mail className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">E-mail</h3>
                    <p className="text-muted-foreground">
                      avocat.sergiu.cotruta@gmail.com
                    </p>
                    <p className="text-muted-foreground">
                      sergiu_cotruta@yahoo.com
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <MapPin className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Adresă</h3>
                    <p className="text-muted-foreground">
                      bd. Cuza Vodă, 37/1
                      <br />
                      mun. Chișinău
                      <br />
                      Republica Moldova
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <Clock className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Program de Lucru</h3>
                    <p className="text-muted-foreground">
                      Luni - Vineri: 09:00 - 18:00
                    </p>
                    <p className="text-muted-foreground">
                      Sâmbătă: 10:00 - 14:00
                    </p>
                    <p className="text-muted-foreground">Duminică: Închis</p>
                  </div>
                </div>
              </Card>

              {/* Map */}
              <Card className="p-0 overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d441.29585608574354!2d28.85167479736609!3d46.975740145069814!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40c9790035701713%3A0xde7ac122bed55067!2sAvocat%20Sergiu%20Cotru%C8%9Ba!5e0!3m2!1sro!2s!4v1763233076181!5m2!1sro!2s"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Locația Biroului"
                />
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
