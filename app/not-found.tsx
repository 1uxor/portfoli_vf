import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="not-found">
      <span>404 / NOT FOUND</span>
      <h1>Cette page n&apos;existe pas.</h1>
      <p>Le chemin demandé ne mène vers aucun projet du portfolio.</p>
      <Link className="button button-primary" href="/">
        <ArrowLeft size={17} /> Retour au portfolio
      </Link>
    </main>
  );
}
