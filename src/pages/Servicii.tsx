import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Scale,
  Building,
  Users,
  FileText,
  Home,
  Briefcase,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import dreptPenalBg from "@/assets/drept-penal-bg.jpg";
import dreptCivilBg from "@/assets/drept-civil-bg.jpg";
import dreptComercialBg from "@/assets/drept-comercial-bg.jpg";
import dreptImobiliarBg from "@/assets/drept-imobiliar-bg.jpg";
import dreptFamilieBg from "@/assets/drept-familie-bg.jpg";
import dreptAdministrativBg from "@/assets/drept-administrativ-bg.jpg";
import mediereServicii from "@/assets/servicii_mediere.png";

const services = [
  {
    id: "drept-penal",
    title: "Drept Penal",
    description:
      "Apărare în procese penale și reprezentare juridică în cazuri de natură penală.",
    icon: Scale,
    bgImage: dreptPenalBg,
  },
  {
    id: "drept-civil",
    title: "Drept Civil",
    description:
      "Asistență juridică în domeniul dreptului civil, inclusiv contracte, succesiuni și drepturi de proprietate.",
    icon: FileText,
    bgImage: dreptCivilBg,
  },
  {
    id: "drept-comercial",
    title: "Drept Comercial",
    description:
      "Consultanță pentru afaceri, înființare societăți comerciale și sprijin în tranzacții comerciale.",
    icon: Briefcase,
    bgImage: dreptComercialBg,
  },
  {
    id: "drept-imobiliar",
    title: "Drept Imobiliar",
    description:
      "Asistență în tranzacții imobiliare, verificări juridice și redactare contracte de vânzare-cumpărare.",
    icon: Home,
    bgImage: dreptImobiliarBg,
  },
  {
    id: "drept-familie",
    title: "Dreptul Familiei",
    description:
      "Consultanță în divorțuri, custodie copii, partaj bunuri și alte aspecte ale dreptului familiei.",
    icon: Users,
    bgImage: dreptFamilieBg,
  },
  {
    id: "drept-administrativ",
    title: "Drept Administrativ",
    description:
      "Asistență în litigii cu autoritățile publice și contestarea actelor administrative.",
    icon: Building,
    bgImage: dreptAdministrativBg,
  },

  {
    id: "mediere",
    title: "Mediere",
    description:
      "Metodă alternativă avantajoasă de soluționare amiabilă a conflictelor",
    icon: Building,
    bgImage: mediereServicii,
  },
];

const Servicii = () => {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Serviciile Noastre
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Oferim o gamă completă de servicii juridice adaptate nevoilor
            dumneavoastră. Selectați domeniul de interes pentru mai multe
            detalii.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-20">
          {services.map((service) => {
            return (
              <Link key={service.id} to={`/servicii/${service.id}`}>
                <Card className="relative overflow-hidden hover:shadow-xl transition-all duration-300 h-64 group cursor-pointer">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-110"
                    style={{ backgroundImage: `url(${service.bgImage})` }}
                  >
                    <div className="absolute inset-0 bg-background/45 group-hover:bg-background/40 transition-colors duration-300" />
                  </div>
                  <div className="relative z-10 h-full flex items-center justify-center">
                    <h3
                      className="text-3xl font-bold text-center px-6 drop-shadow-lg"
                      style={{ color: "oklch(21% 0.006 285.885)" }}
                    >
                      {service.title}
                    </h3>
                  </div>
                </Card>
              </Link>
            );
          })}
        </div>

        {/* FAQ Section */}
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Întrebări Frecvente
            </h2>
            <p className="text-muted-foreground text-lg">
              Răspunsuri la cele mai comune întrebări despre serviciile noastre
              juridice
            </p>
          </div>

          <Card className="p-6 animate-fade-in">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-left">
                  Cât costă o consultație juridică ?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Prima consultație poate fi gratuită sau cu o taxă accesibilă,
                  în funcție de complexitatea cazului. După evaluarea inițială,
                  vă vom prezenta o ofertă clară și transparentă pentru
                  serviciile juridice necesare. Tarifele variază în funcție de
                  domeniul juridic și complexitatea cazului.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger className="text-left">
                  Cât durează un proces juridic ?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Durata unui proces depinde de mai mulți factori: complexitatea
                  cazului, instanța în care este judecat, numărul de părți
                  implicate și colaborarea cu autoritățile. Vă vom oferi o
                  estimare realistă după analiza cazului dumneavoastră.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger className="text-left">
                  Ce documente sunt necesare pentru consultație ?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Documentele necesare variază în funcție de tipul problemei
                  juridice. În general, aveți nevoie de: acte de identitate,
                  contracte relevante, corespondență, hotărâri judecătorești
                  anterioare (dacă este cazul), și orice alt document legat de
                  cazul dumneavoastră. Vă vom informa exact ce documente să
                  pregătiți pentru prima consultație.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4">
                <AccordionTrigger className="text-left">
                  Oferiți servicii de mediere ?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Da, sunt mediator licențiat și ofer servicii de mediere pentru
                  solutionarea alternativă a disputelor. Medierea poate fi o
                  soluție mai rapidă și mai economă decât procesul judiciar,
                  fiind recomandată în cazuri de divorț, dispute comerciale,
                  conflicte de muncă și alte situații în care părțile doresc să
                  ajungă la o înțelegere amiabilă.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5">
                <AccordionTrigger className="text-left">
                  Cum pot programa o consultație ?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Puteți programa o consultație prin telefon, e-mail sau
                  completând formularul de contact de pe site. Vom răspunde în
                  cel mai scurt timp și vom stabili împreună data și ora
                  întrevederii. Oferim consultații atât la birou, cât și online,
                  pentru comoditatea dumneavoastră.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6">
                <AccordionTrigger className="text-left">
                  Confidențialitatea este garantată ?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Absolut! Confidențialitatea este una dintre valorile
                  fundamentale ale profesiei de avocat. Toate informațiile pe
                  care le împărtășiți cu mine sunt strict confidențiale și
                  protejate de secretul profesional. Nu voi dezvălui niciodată
                  informații despre cazul dumneavoastră fără consimțământul
                  explicit.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-7">
                <AccordionTrigger className="text-left">
                  Oferiți asistență juridică de urgență ?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Da, în cazuri de urgență oferim asistență rapidă. Dacă aveți o
                  problemă juridică urgentă, vă rugăm să ne contactați telefonic
                  pentru a evalua situația și a oferi sprijinul necesar. Înțeleg
                  că anumite situații necesită un răspuns prompt și sunt
                  pregătit să ofer asistență imediată atunci când este nevoie.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Servicii;
