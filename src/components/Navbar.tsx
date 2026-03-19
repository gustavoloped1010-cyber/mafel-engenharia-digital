import { useState } from "react";
import { Menu, X, Instagram, MessageCircle } from "lucide-react";
import logoImg from "@/assets/logo-mafel-full.png";

const links = [
  { label: "Sobre", href: "#sobre" },
  { label: "Serviços", href: "#servicos" },
  { label: "Diferenciais", href: "#diferenciais" },
  { label: "Galeria", href: "#galeria" },
  { label: "Contato", href: "#contato" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-3">
        <a href="#">
          <img src={logoImg} alt="Mafel Engenharia" className="h-10 w-auto" />
        </a>
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="label-text text-muted-foreground hover:text-foreground transition-colors text-[11px]">
              {l.label}
            </a>
          ))}
        </div>
        <div className="flex md:hidden items-center gap-4">
          <a href="https://instagram.com/nossomafel" target="_blank" rel="noopener noreferrer" className="text-foreground/60 hover:text-foreground transition-colors">
            <Instagram size={20} />
          </a>
          <a href="https://wa.me/5587981532650" target="_blank" rel="noopener noreferrer" className="text-foreground/60 hover:text-foreground transition-colors">
            <MessageCircle size={20} />
          </a>
          <button onClick={() => setOpen(!open)} className="text-foreground">
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      {open && (
        <div className="md:hidden bg-background border-b border-border px-6 pb-4 space-y-3">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block label-text text-muted-foreground hover:text-foreground transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
