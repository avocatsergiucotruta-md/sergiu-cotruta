import { Phone, Mail, MapPin, MessageCircle, Send } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-secondary/30 border-t border-border mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8 items-start justify-items-center md:justify-items-stretch">
          {/* Brand & Description */}
          <div className="text-center md:text-left max-w-xs lg:max-w-sm">
            <div className="flex items-center justify-center md:justify-start gap-2 mb-4">
              <img
                src={logo}
                alt="Sergiu Cotruta Logo"
                className="h-14 w-auto object-contain"
              />
            </div>
            <p className="text-muted-foreground text-sm">
              Cabinetul Avocatului "Cotruța Sergiu", reprezentat de avocatul
              Sergiu Cotruța, titular al Licenței Nr. 3271 din 25 iunie 2018,
              înregistrat prin Decizia nr. 164 din 3 septembrie 2018 de către
              Ministerul Justiţiei al RM, parte al Uniunii Avocaților din
              Republica Moldova, Baroul Avocaților Chișinău.
            </p>
          </div>

          {/* Contact Info */}
          <div className="text-center md:text-left max-w-xs lg:max-w-sm">
            <h3 className="font-semibold text-foreground mb-4">Contact</h3>
            <div className="space-y-5  text-sm text-muted-foreground">
              <div className="flex items-start justify-center md:justify-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>bd. Cuza Vodă, 37/1</span>
              </div>

              <div className="flex items-start justify-center md:justify-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>Republica Moldova</span>
              </div>

              <div className="flex items-center justify-center md:justify-start gap-2">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <span>+373 68 88 88 68</span>
              </div>
              <div className="flex items-center justify-center md:justify-start gap-2">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <span>avocat.sergiu.cotruta@gmail.com</span>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="text-center md:text-left max-w-xs lg:max-w-sm">
            <h3 className="font-semibold text-foreground mb-4">
              Conectează-te cu noi
            </h3>
            <div className="flex gap-4 justify-center md:justify-start">
              <a
                href="https://wa.me/37368888868"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center h-10 w-10 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
                aria-label="WhatsApp"
              >
                <MessageCircle className="h-5 w-5" />
              </a>

              <a
                href="https://t.me/+37368888868"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center h-10 w-10 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
                aria-label="Telegram"
              >
                <Send className="h-5 w-5" />
              </a>

              <a
                href="mailto:avocat.sergiu.cotruta@gmail.com"
                className="flex items-center justify-center h-10 w-10 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border pt-6">
          <p className="text-sm text-muted-foreground text-center">
            © {new Date().getFullYear()} Sergiu Cotruta. Toate drepturile
            rezervate.
          </p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
