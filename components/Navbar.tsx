"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Github, Linkedin, Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { profile } from "@/data/profile";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className={cn("site-nav", scrolled && "site-nav--scrolled")}>
      <nav className="page-shell nav-inner" aria-label="Navigation principale">
        <Link href="/#accueil" className="brand" aria-label="Saad Filali — Accueil">
          <span>SF</span>
          <b>.</b>
        </Link>

        <div className="nav-links" aria-label="Sections du portfolio">
          {profile.navItems.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </div>

        <div className="nav-actions">
          {profile.github ? (
            <a
              className="icon-link"
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub de Saad Filali"
            >
              <Github size={17} />
            </a>
          ) : null}
          <a
            className="icon-link"
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn de Saad Filali"
          >
            <Linkedin size={17} />
          </a>
          <Link className="nav-cta" href="/#contact">
            Me contacter <ArrowUpRight size={15} />
          </Link>
        </div>

        <button
          className="menu-button"
          type="button"
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={21} /> : <Menu size={21} />}
        </button>
      </nav>

      <AnimatePresence>
        {open ? (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.2 }}
          >
            <div className="page-shell mobile-menu-inner">
              {profile.navItems.map((item, index) => (
                <Link key={item.href} href={item.href} onClick={() => setOpen(false)}>
                  <span>0{index + 1}</span>
                  {item.label}
                </Link>
              ))}
              <div className="mobile-socials">
                <a href={profile.linkedin} target="_blank" rel="noreferrer">
                  LinkedIn <ArrowUpRight size={16} />
                </a>
                {profile.github ? (
                  <a href={profile.github} target="_blank" rel="noreferrer">
                    GitHub <ArrowUpRight size={16} />
                  </a>
                ) : (
                  <span>GitHub à configurer</span>
                )}
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
