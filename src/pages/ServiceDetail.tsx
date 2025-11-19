import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, Check } from "lucide-react";

const serviceDetails: Record<
  string,
  {
    title: string;
    description: string;
    details: string[];
  }
> = {
  "drept-civil": {
    title: "Drept Civil",
    description:
      "Oferim asistență juridică completă în toate aspectele dreptului civil.",
    details: [
      "Redactare și verificare contracte civile",
      "Consultanță în materie de succesiuni și moșteniri",
      "Asistență în cazuri de uzucapiune",
      "Reprezentare în litigii privind drepturi de proprietate",
      "Consultanță în materie de obligații contractuale",
      "Asistență în proceduri de partaj bunuri comune",
      "Consultanță privind răspunderea civilă delictuală",
      "Redactare testamente și acte de donație",
    ],
  },
  "drept-comercial": {
    title: "Drept Comercial",
    description:
      "Suport juridic pentru afacerea dumneavoastră și tranzacții comerciale.",
    details: [
      "Înființare și lichidare societăți comerciale",
      "Redactare contracte comerciale complexe",
      "Consultanță în fuziuni și achiziții",
      "Asistență în restructurări corporative",
      "Recuperare creanțe comerciale",
      "Consultanță în proceduri de insolvență",
      "Protecția proprietății intelectuale",
      "Consultanță în relații cu partenerii de afaceri",
    ],
  },
  "drept-imobiliar": {
    title: "Drept Imobiliar",
    description:
      "Expertiza noastră în domeniul imobiliar vă protejează investițiile.",
    details: [
      "Solutionare imobiliară completă",
      "Redactare contracte de vânzare-cumpărare",
      "Asistență în obținerea autorizațiilor de construire",
      "Consultanță în litigii privind imobile",
      "Verificare juridică proprietăți",
      "Asistență în tranzacții imobiliare complexe",
      "Consultanță pentru dezvoltatori imobiliari",
      "Regularizare situații juridice imobile",
    ],
  },
  "drept-familie": {
    title: "Dreptul Familiei",
    description:
      "Oferim consultanță sensibilă și profesională în probleme de dreptul familiei.",
    details: [
      "Asistență juridică în divorț",
      "Stabilirea custodiei și programului de vizitare",
      "Partaj bunuri matrimoniale",
      "Pensie de întreținere (copii și soț/soție)",
      "Adopție și tutelă",
      "Recunoaștere paternitate",
      "Proceduri de acordare protecție împotriva violenței domestice",
      "Modificare măsuri privind copiii minori",
    ],
  },
  "drept-penal": {
    title: "Drept Penal",
    description: "Apărare profesională în toate fazele procesului penal.",
    details: [
      "Reprezentare în faza de urmărire penală",
      "Apărare în fața instanțelor de judecată",
      "Asistență în proceduri de contestare a măsurilor preventive",
      "Consultanță pentru persoane vătămate",
      "Pregătirea și depunerea plângerilor penale",
      "Asistență în proceduri de revizuire",
      "Consultanță în infracțiuni economice",
      "Negociere acorduri de recunoaștere a vinovăției",
    ],
  },
  "drept-administrativ": {
    title: "Drept Administrativ",
    description:
      "Asistență în relația cu autoritățile publice și administrația de stat.",
    details: [
      "Contestarea actelor administrative",
      "Recuperarea daunelor cauzate de autorități publice",
      "Asistență în obținerea autorizațiilor administrative",
      "Consultanță în achiziții publice",
      "Reprezentare în litigii cu instituții publice",
      "Consultanță în proceduri de expropriere",
      "Asistență în contencios administrativ-fiscal",
      "Consultanță în relația cu autoritățile locale",
    ],
  },

  mediere: {
    title: "Mediere",
    description:
      "Metodă alternativă avantajoasă de soluționare amiabilă a conflictelor",
    details: [
      "Identificarea și analiza conflictului (cauze, interese, nevoi)",
      "Facilitarea comunicării inter-părți într-un cadru neutru și confidențial",
      "Negociere asistată și explorarea soluțiilor reciproc acceptabile",
      "Mediere civilă și comercială (dispute contractuale, litigii de muncă, partaje)",
      "Soluționarea disputelor familiale (divorț, custodie, program de vizită, pensie de întreținere)",
      "Mediere în cauze penale (soluționarea amiabilă a acțiunii civile)",
      "Redactarea acordului de mediere (document cu forță juridică)",
      "Asistență în vederea autentificării sau încuviințării acordului la instanță",
    ],
  },
};

const ServiceDetail = () => {
  const { serviceId } = useParams();
  const service = serviceId ? serviceDetails[serviceId] : null;

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Serviciu negăsit</h1>
          <Link to="/servicii">
            <Button>Înapoi la Servicii</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <Link
          to="/servicii"
          className="inline-flex items-center gap-2 text-primary hover:underline mb-8"
        >
          <ArrowLeft className="h-4 w-4" />
          Înapoi la Servicii
        </Link>

        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            {service.title}
          </h1>
          <p className="text-xl text-muted-foreground mb-12">
            {service.description}
          </p>

          <Card className="p-8">
            <h2 className="text-2xl font-semibold mb-6">
              Serviciile Noastre Includ:
            </h2>
            <div className="grid gap-4">
              {service.details.map((detail, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="mt-1 p-1 rounded-full bg-primary/10">
                    <Check className="h-4 w-4 text-primary" />
                  </div>
                  <p className="text-foreground/90">{detail}</p>
                </div>
              ))}
            </div>
          </Card>

          <div className="mt-12 text-center">
            <h3 className="text-2xl font-semibold mb-4">
              Doriți să Discutăm Cazul Dumneavoastră?
            </h3>
            <p className="text-muted-foreground mb-6">
              Contactați-ne pentru o consultație inițială și vom găsi împreună
              cea mai bună soluție juridică.
            </p>
            <Link to="/contact">
              <Button size="lg">Contactează-ne</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;
