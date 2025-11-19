import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Scale, Shield, FileText } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-law.jpg";
import legalAssistanceBg from "@/assets/legal-assistance-bg.jpg";

const Acasa = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-background/80 to-background/50" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl">
            <h1 className="text-center text-5xl md:text-6xl font-bold text-foreground mb-6">
              Cabinetul Avocatului "Cotruța Sergiu"
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              <span className="font-bold italic block text-center mx-auto">
                Servicii juridice de încredere.
              </span>
              <br />
              Oferim asistență juridică profesională în diverse domenii ale
              dreptului. Cu experiență vastă și dedicare deplină, vă reprezentăm
              interesele cu maximă responsabilitate.
            </p>
            <Link to="/servicii">
              <Button size="lg" className="text-lg px-8">
                Descoperă Serviciile Noastre
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-secondary/20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            De ce sa ne alegeți ?
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <Scale className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-3">Experiență vastă</h3>
              <p className="text-muted-foreground">
                Ani de experiență în diverse domenii ale dreptului, oferind
                soluții juridice eficiente și personalizate.
              </p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <Shield className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-3">Protecție maximă</h3>
              <p className="text-muted-foreground">
                Vă apărăm drepturile și interesele cu profesionalism și
                dedicare, asigurând cea mai bună reprezentare juridică.
              </p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <FileText className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-3">
                Consultanță completă
              </h3>
              <p className="text-muted-foreground">
                Oferim consultanță juridică detaliată și suport constant pe
                parcursul întregului proces.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${legalAssistanceBg})` }}
        >
          <div className="absolute inset-0 bg-background/65" />
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl font-bold mb-6">
            Aveți nevoie de asistență juridică ?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Nu ezitați să ne contactați pentru o consultație inițială. Suntem
            aici să vă ajutăm să găsiți cea mai bună soluție juridică.
          </p>
          <Link to="/contact">
            <Button size="lg" variant="outline" className="text-lg px-8">
              Contactează-ne Acum
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Acasa;
