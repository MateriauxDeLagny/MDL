"use client";

import { useState } from "react";

const PRODUCT_OPTIONS = [
  "Gros Œuvre (blocs, briques, ciment…)",
  "Bois (charpente, panneaux, terrasse…)",
  "Plâtre / Isolation (BA13, laine de verre…)",
  "Revêtement / ITE (enduit, peinture façade…)",
  "Colles & Produits Techniques",
  "Outillage & Visserie",
  "Autre / Plusieurs catégories",
];

export default function DevisForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "error">("idle");
  const [form, setForm] = useState({
    company: "",
    name: "",
    email: "",
    phone: "",
    category: "",
    project: "",
    address: "",
    deadline: "",
    details: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/devis", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      setStatus(res.ok ? "ok" : "error");
    } catch {
      setStatus("error");
    }
  };

  const inputClass =
    "w-full px-4 py-3 border border-warm-border bg-white rounded text-dark placeholder-gray-400 text-sm focus:outline-none focus:border-orange transition-colors";

  const labelClass = "block font-heading text-xs uppercase tracking-wider text-dark mb-1";

  if (status === "ok") {
    return (
      <div className="text-center py-16">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-5">
          <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="font-heading text-2xl uppercase text-dark mb-3">Demande envoyée !</h3>
        <p className="text-gray-500 max-w-md mx-auto">
          Votre demande de devis a bien été reçue. Nous vous contacterons dans les plus brefs délais.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className={labelClass}>Nom *</label>
          <input type="text" name="name" required value={form.name} onChange={handleChange} placeholder="Jean Dupont" className={inputClass} />
        </div>
        <div>
          <label className={labelClass}>Entreprise / Société</label>
          <input type="text" name="company" value={form.company} onChange={handleChange} placeholder="Ma Maison SARL" className={inputClass} />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className={labelClass}>Email *</label>
          <input type="email" name="email" required value={form.email} onChange={handleChange} placeholder="jean@exemple.com" className={inputClass} />
        </div>
        <div>
          <label className={labelClass}>Téléphone *</label>
          <input type="tel" name="phone" required value={form.phone} onChange={handleChange} placeholder="06 00 00 00 00" className={inputClass} />
        </div>
      </div>

      <div>
        <label className={labelClass}>Catégorie de produits *</label>
        <select name="category" required value={form.category} onChange={handleChange} className={inputClass}>
          <option value="">Sélectionner une catégorie…</option>
          {PRODUCT_OPTIONS.map((o) => (
            <option key={o} value={o}>{o}</option>
          ))}
        </select>
      </div>

      <div>
        <label className={labelClass}>Type de projet *</label>
        <input
          type="text"
          name="project"
          required
          value={form.project}
          onChange={handleChange}
          placeholder="Ex : Extension maison, rénovation façade, construction neuve…"
          className={inputClass}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className={labelClass}>Adresse du chantier</label>
          <input type="text" name="address" value={form.address} onChange={handleChange} placeholder="Ville, code postal" className={inputClass} />
        </div>
        <div>
          <label className={labelClass}>Délai souhaité</label>
          <input type="text" name="deadline" value={form.deadline} onChange={handleChange} placeholder="Ex : Courant octobre, urgent…" className={inputClass} />
        </div>
      </div>

      <div>
        <label className={labelClass}>Détails & quantités</label>
        <textarea
          name="details"
          rows={6}
          value={form.details}
          onChange={handleChange}
          placeholder="Décrivez votre besoin : matériaux, quantités estimées, contraintes particulières…"
          className={inputClass + " resize-none"}
        />
      </div>

      {status === "error" && (
        <p className="text-red-600 text-sm">
          Une erreur est survenue. Veuillez réessayer ou nous appeler au 01.85.42.12.34.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full py-4 bg-orange text-white font-heading text-sm uppercase tracking-wider hover:bg-orange-600 transition-colors rounded disabled:opacity-60"
      >
        {status === "sending" ? "Envoi en cours…" : "Envoyer ma demande de devis"}
      </button>

      <p className="text-xs text-gray-400 text-center">
        * Champs obligatoires. Vos données ne sont utilisées qu'à des fins de traitement de votre demande.
      </p>
    </form>
  );
}
