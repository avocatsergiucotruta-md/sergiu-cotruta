import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "@/assets/logo.png";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";

const Navigation = () => {
  const location = useLocation();
  const [open, setOpen] = useState(false);

  const links = [
    { path: "/", label: "Acasă" },
    { path: "/servicii", label: "Servicii" },
    { path: "/despre", label: "Despre" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2">
            <img
              src={logo}
              alt="Sergiu Cotruta Logo"
              className="h-12 w-auto object-contain"
            />
          </Link>

          <div className="hidden md:flex gap-8">
            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  location.pathname === link.path
                    ? "text-primary"
                    : "text-foreground/80"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild className="md:hidden">
              <button
                className="p-2 hover:bg-accent rounded-lg transition-colors"
                aria-label="Toggle menu"
              >
                <Menu className="h-6 w-6" />
              </button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-[280px] sm:w-[350px] animate-slide-in-right"
            >
              <SheetTitle className="text-left mb-8">Meniu</SheetTitle>
              <div className="flex flex-col gap-6">
                {links.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setOpen(false)}
                    className={`text-lg font-medium transition-all duration-200 hover:text-primary hover:translate-x-2 ${
                      location.pathname === link.path
                        ? "text-primary"
                        : "text-foreground/80"
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
