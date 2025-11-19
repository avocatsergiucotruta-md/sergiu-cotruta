import { Card } from "@/components/ui/card";
import {
  Award,
  GraduationCap,
  Star,
  Shield,
  BookOpenCheck,
  UserSearch,
  Medal,
} from "lucide-react";
import lawyerPortrait from "@/assets/lawyer-portrait.jpg";
import licentaAvocat from "@/assets/licentaAvocat.jpg";
import mediatorCertificat from "@/assets/mediator.jpg";
import bgImg from "@/assets/study-img.jpg";
import { useState } from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

const reviews = [
  {
    name: "V. Igor",
    text: "Am fost implicat într-un dosar penal complicat și eram complet pierdut. Domnul avocat a fost mereu alături de mine, mi-a oferit încredere și a reușit să obțină o soluție favorabilă. Profesionalism, calm și seriozitate — un om care chiar luptă pentru tine exemplar! Recomand cu încredere!",
    rating: 5,
  },
  {
    name: "M. Gheorghe",
    text: "Foarte mulțumit. Am apelat la ajutorul său pentru încheierea unui contract de vânzare-cumpărare a unui apartament. Totul s-a desfășurat rapid și fără probleme. A verificat actele cu atenție și m-a ferit de o greșeală costisitoare. Se vede că are experiență și tratează fiecare detaliu cu grijă. Comunicare excelentă și rezultate peste așteptări în cazul meu de drept civil.",
    rating: 5,
  },
  {
    name: "S. Marina",
    text: "Am fost implicată într-un incident unde mi-au fost provocate pagube materiale și nu știam cum să procedez. Am primit ajutor rapid, explicații pe înțelesul meu și o reprezentare excelentă. În final, am primit despăgubirea integral. Recomand cu toată încrederea!",
    rating: 5,
  },
];

const Despre = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Despre
          </h1>

          {/* Profile Section */}
          <div className="grid md:grid-cols-2 gap-12 mb-20">
            <div>
              <img
                src={lawyerPortrait}
                alt="Sergiu"
                className="w-full h-[34rem] object-cover rounded-lg shadow-lg"
              />
            </div>
            <div className="flex flex-col justify-center">
              <h2 className="text-3xl font-bold mb-4">
                Experiență și Profesionalism
              </h2>
              <p className="text-muted-foreground mb-4">
                Sunt un profesionist dedicat dreptului, cu o traiectorie
                academică și profesională bine definită. Sunt Licențiat în Drept
                la Universitatea din Pitești, România și dețin o diplomă de
                Master în Drept Judiciar Privat la Universitatea "Lucian Blaga"
                din Sibiu, România. Am investit constant în dezvoltarea mea,
                incluzând formări în mediere și participarea la programe de
                leadership pentru juriști.
              </p>
              <p className="text-muted-foreground mb-4">
                Începând cu anul 2018, activez ca Avocat Titular în cadrul
                Cabinetului Avocatului "Cotruța Sergiu", gestionând un
                portofoliu diversificat de cazuri. Experiența mea anterioară ca
                avocat stagiar și manager mi-a determinat o înțelegere profundă
                a necesităților clienților, atât în mediul juridic, cât și în
                cel de afaceri.
              </p>
              <p className="text-muted-foreground">
                Ofer consultanță și reprezentare juridică de specialitate în
                următoarele arii principale:
              </p>

              <ul className="list-disc list-inside text-muted-foreground mt-2 space-y-1">
                <li>Drept Penal</li>
                <li>Drept Civil și Drept Comercial.</li>
                <li>Drept Administrativ și Fiscal.</li>
                <li>Dreptul Familiei și Executarea Silită.</li>
              </ul>
            </div>
          </div>

          {/* Credentials */}
          <div className="grid md:grid-cols-3 gap-6 mb-20">
            <Card className="p-6 text-center">
              <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">
                Reprezentare puternică
              </h3>
              <p className="text-muted-foreground">
                Apăr interesele clienților cu determinare și profesionalism,
                obținând rezultate excelente. <br />
              </p>
            </Card>

            <Card className="p-6 text-center">
              <BookOpenCheck className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">
                Transparență și claritate
              </h3>
              <p className="text-muted-foreground">
                Vă explic fiecare pas al procesului și vă ofer soluții concrete.
              </p>
            </Card>

            <Card className="p-6 text-center">
              <UserSearch className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">
                Abordare personalizată
              </h3>
              <p className="text-muted-foreground">
                Fiecare caz este unic, iar soluțiile sunt adaptate nevoilor
                specifice ale ficărui client.
              </p>
            </Card>
          </div>

          {/* Licenses Section */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-10">
              Licențe și Acreditări
            </h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <Dialog>
                <DialogTrigger asChild>
                  <Card className="p-4 hover:shadow-xl transition-all duration-300 cursor-pointer hover:scale-105">
                    <img
                      src={licentaAvocat}
                      alt="Licență Avocat"
                      className="w-full h-auto rounded-lg"
                    />
                    <p className="text-center mt-4 font-semibold text-muted-foreground">
                      Licență de Avocat - Uniunea Avocaților din Republica
                      Moldova
                    </p>
                  </Card>
                </DialogTrigger>
                <DialogContent className="max-w-4xl w-full animate-scale-in">
                  <img
                    src={licentaAvocat}
                    alt="Licență Avocat"
                    className="w-full h-auto rounded-lg"
                  />
                </DialogContent>
              </Dialog>

              <Dialog>
                <DialogTrigger asChild>
                  <Card className="p-4 hover:shadow-xl transition-all duration-300 cursor-pointer hover:scale-105">
                    <img
                      src={mediatorCertificat}
                      alt="Certificat Mediator"
                      className="w-full h-auto rounded-lg"
                    />
                    <p className="text-center mt-4 font-semibold text-muted-foreground">
                      Atestat de Mediator - Consiliul de Mediere
                    </p>
                  </Card>
                </DialogTrigger>
                <DialogContent className="max-w-4xl w-full animate-scale-in">
                  <img
                    src={mediatorCertificat}
                    alt="Certificat Mediator"
                    className="w-full h-auto rounded-lg"
                  />
                </DialogContent>
              </Dialog>
            </div>
          </div>

          {/* Mediator & Studies Section */}
          <div className="mb-20">
            <Card className="p-8">
              <div className="space-y-6">
                <div>
                  <h2 className="text-3xl font-bold text-center mb-10">
                    Mediator
                  </h2>

                  <p className="text-muted-foreground">
                    Dețin Atestat de Mediator licențiat, specializat în
                    solutionarea alternativă a disputelor în domeniul penal,
                    civil, comercial și familial. Facilitate în negocieri și
                    mediere de conflicte pentru a ajunge la soluții amiabile,
                    evitând procedurile judiciare îndelungate.
                  </p>
                </div>

                <div className="border-t pt-6">
                  <h2 className="text-3xl font-bold text-center mb-10">
                    Studii și Formări
                  </h2>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <GraduationCap className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold">Licență în Drept</h4>
                        <p className="text-muted-foreground">
                          Universitatea din Pitești (România) - Facultatea de
                          Drept și Științe Administrative
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <GraduationCap className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold">Masterat</h4>
                        <p className="text-muted-foreground">
                          Universitatea „Lucian Blaga” din Sibiu (România) -
                          Facultatea de Drept - Titlu de Master în Drept
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Award className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold">Formare Profesională</h4>
                        <p className="text-muted-foreground">
                          Centrul pentru dezvoltare personală și profesională.
                          Formarea prefesională în domeniul medierii - 2017
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Medal className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold">Program de Leadership</h4>
                        <p className="text-muted-foreground">
                          Program de leadership pentru juriști din Republica
                          Moldova - Lead 2018
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Reviews Section */}
          <div>
            <h2 className="text-3xl font-bold text-center mb-10">
              Ce Spun Clienții
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {reviews.map((review, index) => (
                <Card key={index} className="p-6">
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: review.rating }).map((_, i) => (
                      <Star
                        key={i}
                        className="h-5 w-5 fill-primary text-primary"
                      />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 italic">
                    "{review.text}"
                  </p>
                  <p className="font-semibold">- {review.name}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Despre;
