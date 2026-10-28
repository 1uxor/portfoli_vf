import { ArrowUp } from "lucide-react";
import Link from "next/link";
import { profile } from "@/data/profile";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="page-shell footer-main">
        <div>
          <Link href="/#accueil" className="brand" aria-label="Retour en haut">
            <span>SF</span>
            <b>.</b>
          </Link>
          <p>AI &amp; Data Engineer — des données brutes aux systèmes intelligents.</p>
        </div>
        <div className="footer-links">
          {profile.navItems.slice(1).map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </div>
        <Link className="back-top" href="/#accueil" aria-label="Retour en haut de la page">
          <ArrowUp size={18} />
        </Link>
      </div>
      <div className="page-shell footer-bottom">
        <span>© {new Date().getFullYear()} Saad Filali</span>
        <span>Conçu avec précision · Next.js / TypeScript</span>
      </div>
    </footer>
  );
}
