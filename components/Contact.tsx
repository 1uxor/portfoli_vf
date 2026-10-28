"use client";

import { ArrowRight, ArrowUpRight, Github, Linkedin, Mail, Phone } from "lucide-react";
import { FormEvent, useState } from "react";
import { contactConfig, profile } from "@/data/profile";

export function Contact() {
  const [message, setMessage] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (contactConfig.provider === "unconfigured") {
      setMessage(
        `Le formulaire n'est pas encore relié à un service d'envoi. Écrivez-moi directement à ${profile.email}.`,
      );
      return;
    }

    setMessage("L'intégration du formulaire doit être finalisée dans data/profile.ts.");
  }

  return (
    <section id="contact" className="contact-section section-anchor">
      <div className="page-shell contact-shell">
        <div className="contact-intro">
          <span className="eyebrow-inline">07 / CONTACT</span>
          <h2>
            <span>Construisons quelque chose</span>
            <span className="text-gradient">d&apos;intelligent.</span>
          </h2>
          <p>
            Je suis ouvert aux opportunités professionnelles en CDI, freelance ou mission autour
            de l&apos;IA, de la Data et du Machine Learning.
          </p>

          <div className="contact-details">
            <a href={`mailto:${profile.email}`}>
              <Mail size={17} />
              <span>
                <small>EMAIL</small>
                {profile.email}
              </span>
            </a>
            <a href={`tel:${profile.phone.replace(/\s/g, "")}`}>
              <Phone size={17} />
              <span>
                <small>TÉLÉPHONE</small>
                {profile.phone}
              </span>
            </a>
          </div>

          <div className="contact-actions">
            <a className="button button-primary" href={`mailto:${profile.email}`}>
              Email me <ArrowUpRight size={16} />
            </a>
            <a className="button button-secondary" href={profile.linkedin} target="_blank" rel="noreferrer">
              <Linkedin size={16} /> LinkedIn
            </a>
            {profile.github ? (
              <a className="button button-secondary" href={profile.github} target="_blank" rel="noreferrer">
                <Github size={16} /> GitHub
              </a>
            ) : null}
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-head">
            <span>NOUVEAU MESSAGE</span>
            <i aria-hidden="true" />
          </div>
          <div className="form-row">
            <label>
              <span>Nom</span>
              <input name="name" type="text" autoComplete="name" placeholder="Votre nom" required />
            </label>
            <label>
              <span>Email</span>
              <input name="email" type="email" autoComplete="email" placeholder="vous@entreprise.com" required />
            </label>
          </div>
          <label>
            <span>Sujet</span>
            <input name="subject" type="text" placeholder="Opportunité, mission, collaboration…" required />
          </label>
          <label>
            <span>Message</span>
            <textarea name="message" rows={5} placeholder="Parlez-moi de votre besoin." required />
          </label>
          <button className="button button-primary form-submit" type="submit">
            Envoyer <ArrowRight size={17} />
          </button>
          <p className="form-note">{contactConfig.note}</p>
          {message ? (
            <p className="form-feedback" role="status" aria-live="polite">
              {message}
            </p>
          ) : null}
        </form>
      </div>
    </section>
  );
}
