"use client";

import { useState } from 'react';

export default function Home() {
  const [cvText, setCvText] = useState('Télécharger CV');
  const [emailText, setEmailText] = useState('mouhamadafrid.azar@gmail.com');
const handleDownloadCv = () => {
    // 1. Ouvre le CV dans un nouvel onglet de manière sécurisée
    window.open('/cv.pdf', '_blank', 'noopener,noreferrer');

    // 2. Animation du texte du bouton
    setCvText('Téléchargé !');
    setTimeout(() => setCvText('Télécharger CV'), 2000);
  };

  const handleCopyEmail = async () => {
    const email = 'mouhamadafrid.azar@gmail.com';
    try {
      await navigator.clipboard.writeText(email);
      setEmailText('Email copié !');
      setTimeout(() => setEmailText(email), 2000);
    } catch (err) {
      console.error('Erreur lors de la copie :', err);
    }
  };

  return (
    <>
      {/* Header */}
      <header className="fixed top-0 w-full z-50 pt-safe bg-surface-container-lowest/80 backdrop-blur-xl shadow-[0_4px_24px_rgba(0,0,0,0.4)]">
        <div className="h-20 px-margin-mobile flex items-center justify-between gap-space-sm">
          <div className="flex items-center gap-space-sm min-w-0">
            <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-primary-container to-tertiary-container flex items-center justify-center text-on-primary font-headline-sm font-bold text-sm flex-shrink-0">
              MA
            </div>
            <div className="flex flex-col min-w-0">
              <div className="flex items-center gap-space-xs">
                <span className="font-headline-sm text-headline-sm text-on-surface truncate">Mouhamad Azar</span>
              </div>
              <div className="flex items-center gap-space-xs mt-0.5">
                <span className="relative flex h-2 w-2 flex-shrink-0">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-tertiary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-tertiary"></span>
                </span>
                <span className="font-label-sm text-label-sm text-tertiary truncate uppercase tracking-wider">Recherche Alternance M1 IA (Sept 2026)</span>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-space-sm flex-shrink-0">
            <a href="#contact" className="hidden sm:inline-flex items-center justify-center px-3 py-1.5 rounded-full bg-gradient-to-r from-primary-container to-secondary-container text-on-primary font-label-md text-label-md shadow-[0_0_16px_rgba(77,142,255,0.4)] hover:opacity-90 transition-opacity">
              Me Contacter
            </a>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex flex-col relative w-full pt-20 pb-24 bg-surface min-h-screen">
        <div className="flex flex-col w-full relative overflow-hidden">
          {/* Atmospheric Glow Orbs */}
          <div className="absolute -top-12 -left-20 w-72 h-72 rounded-full bg-primary-container/15 blur-[90px] pointer-events-none"></div>
          <div className="absolute top-80 -right-24 w-80 h-80 rounded-full bg-secondary-container/15 blur-[100px] pointer-events-none"></div>
          <div className="absolute top-[850px] left-1/2 -translate-x-1/2 w-96 h-64 rounded-full bg-tertiary-container/10 blur-[110px] pointer-events-none"></div>

          <div className="flex flex-col px-margin-mobile gap-space-xl relative z-10 pt-space-md pb-space-lg max-w-4xl mx-auto w-full">
            {/* HERO SECTION */}
            <section className="flex flex-col gap-space-md">
              <div className="inline-flex items-center gap-space-xs self-start px-3 py-1.5 rounded-full bg-surface-container-high/80 backdrop-blur-md shadow-sm">
                <span className="relative flex h-2 w-2 flex-shrink-0">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-tertiary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-tertiary"></span>
                </span>
                <span className="font-label-sm text-label-sm text-tertiary tracking-wide">Rythme : 2 Semaines École / 2 Semaines Entreprise</span>
              </div>
              
              <h1 className="font-headline-lg-mobile text-headline-lg-mobile text-on-surface tracking-tight">
                Bonjour, je suis <span className="bg-gradient-to-r from-primary-fixed to-secondary-fixed text-transparent bg-clip-text">Mouhamad Azar</span> — Développeur Backend / Full-Stack &amp; Intelligence Artificielle
              </h1>
              
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                Étudiant en M1 IA à L'École Supérieure du Numérique 89. Fort d'expériences concrètes en PHP (Symfony, Laravel), Node.js (TypeScript, Socket.io), APIs REST, C# et pipelines CI/CD.
              </p>

              <div className="flex items-center gap-space-sm pt-space-xs">
                <a href="#projects" className="flex-1 inline-flex items-center justify-center gap-space-xs py-3 px-4 rounded-xl bg-gradient-to-r from-primary-container to-secondary-container text-on-primary font-headline-sm text-[15px] shadow-[0_4px_20px_rgba(77,142,255,0.35)] active:scale-[0.98] transition-transform">
                  <span>Découvrir mes projets</span>
                  <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                </a>
                <button onClick={handleDownloadCv} className="inline-flex items-center justify-center gap-space-xs py-3 px-4 rounded-xl bg-surface-container-high text-on-surface font-headline-sm text-[15px] shadow-sm active:scale-[0.98] transition-transform">
                  <span className="material-symbols-outlined text-[18px] text-primary">description</span>
                  <span>{cvText}</span>
                </button>
              </div>

              {/* Social & Location Info */}
              <div className="flex items-center gap-space-xs pt-space-xs overflow-x-auto pb-1">
                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-surface-container-low text-on-surface-variant text-label-sm font-label-sm shadow-sm flex-shrink-0">
                  <span className="material-symbols-outlined text-[16px] text-primary">location_on</span>
                  <span>Meaux (77100) — Mobilité Île-de-France</span>
                </div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-surface-container-low text-on-surface-variant text-label-sm font-label-sm shadow-sm flex-shrink-0">
                  <span className="material-symbols-outlined text-[16px] text-tertiary">translate</span>
                  <span>Anglais C1</span>
                </div>
              </div>

              {/* Metric Bento */}
              <div className="grid grid-cols-3 gap-space-sm pt-space-xs">
                <div className="flex flex-col items-center justify-center p-3 rounded-xl bg-surface-container-low/90 backdrop-blur-md shadow-sm text-center">
                  <span className="font-headline-sm text-headline-sm text-primary">Bac+4</span>
                  <span className="font-label-sm text-[11px] text-on-surface-variant mt-0.5 leading-tight">M1 IA (En cours)</span>
                </div>
                <div className="flex flex-col items-center justify-center p-3 rounded-xl bg-surface-container-low/90 backdrop-blur-md shadow-sm text-center">
                  <span className="font-headline-sm text-headline-sm text-secondary">3+</span>
                  <span className="font-label-sm text-[11px] text-on-surface-variant mt-0.5 leading-tight">Projets Majeurs</span>
                </div>
                <div className="flex flex-col items-center justify-center p-3 rounded-xl bg-surface-container-low/90 backdrop-blur-md shadow-sm text-center">
                  <span className="font-headline-sm text-headline-sm text-tertiary">C1</span>
                  <span className="font-label-sm text-[11px] text-on-surface-variant mt-0.5 leading-tight">Niveau d'Anglais</span>
                </div>
              </div>
            </section>

            {/* PROJETS TECHNIQUES */}
            <section id="projects" className="flex flex-col gap-space-md">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-space-xs">
                  <span className="material-symbols-outlined text-primary text-[20px]">folder_special</span>
                  <h2 className="font-headline-sm text-headline-sm text-on-surface">Projets Techniques</h2>
                </div>
              </div>

              {/* Project 1 */}
              <div className="flex flex-col rounded-2xl bg-surface-container-low/95 backdrop-blur-xl shadow-md overflow-hidden p-5 gap-3">
                <div className="flex items-center justify-between">
                  <h3 className="font-headline-sm text-headline-sm text-on-surface">Application Backend &amp; Pipeline CI/CD (Football App)</h3>
                  <span className="px-2.5 py-1 rounded-full bg-primary-container/20 text-primary font-label-sm text-label-sm font-semibold">2025</span>
                </div>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Développement d'une API REST complète de gestion de matchs de football avec tests automatisés (Unitaires, Intégration, End-to-End) et mise en place d'une pipeline CI/CD automatisée.
                </p>
                <div className="flex flex-wrap gap-1.5 pt-1">
                  <span className="px-2 py-1 rounded-md bg-surface-container text-on-surface-variant font-code-inline text-[11px]">API REST</span>
                  <span className="px-2 py-1 rounded-md bg-surface-container text-on-surface-variant font-code-inline text-[11px]">CI/CD</span>
                  <span className="px-2 py-1 rounded-md bg-surface-container text-on-surface-variant font-code-inline text-[11px]">Tests E2E &amp; Unitaires</span>
                  <span className="px-2 py-1 rounded-md bg-surface-container text-on-surface-variant font-code-inline text-[11px]">Node.js</span>
                </div>
              </div>

              {/* Project 2 */}
              <div className="flex flex-col rounded-2xl bg-surface-container-low/95 backdrop-blur-xl shadow-md overflow-hidden p-5 gap-3">
                <div className="flex items-center justify-between">
                  <h3 className="font-headline-sm text-headline-sm text-on-surface">Application de Chat Instantané Temps Réel</h3>
                  <span className="px-2.5 py-1 rounded-full bg-secondary-container/20 text-secondary-fixed-dim font-label-sm text-label-sm font-semibold">2024</span>
                </div>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Plateforme de communication en temps réel développée en Node.js, TypeScript et Socket.IO avec Express. Inclut une interface web dynamique et responsive en HTML/CSS.
                </p>
                <div className="flex flex-wrap gap-1.5 pt-1">
                  <span className="px-2 py-1 rounded-md bg-surface-container text-on-surface-variant font-code-inline text-[11px]">Node.js</span>
                  <span className="px-2 py-1 rounded-md bg-surface-container text-on-surface-variant font-code-inline text-[11px]">TypeScript</span>
                  <span className="px-2 py-1 rounded-md bg-surface-container text-on-surface-variant font-code-inline text-[11px]">Socket.IO</span>
                  <span className="px-2 py-1 rounded-md bg-surface-container text-on-surface-variant font-code-inline text-[11px]">Express</span>
                </div>
              </div>

              {/* Project 3 */}
              <div className="flex flex-col rounded-2xl bg-surface-container-low/95 backdrop-blur-xl shadow-md overflow-hidden p-5 gap-3">
                <div className="flex items-center justify-between">
                  <h3 className="font-headline-sm text-headline-sm text-on-surface">Plateforme de Réservation de Bateaux</h3>
                  <span className="px-2.5 py-1 rounded-full bg-tertiary-container/20 text-tertiary font-label-sm text-label-sm font-semibold">2023</span>
                </div>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Application de gestion et réservation maritimes en C# et Symfony. Système de sélection intelligente des ports de départ/arrivée et gestion complète des horaires des traversées.
                </p>
                <div className="flex flex-wrap gap-1.5 pt-1">
                  <span className="px-2 py-1 rounded-md bg-surface-container text-on-surface-variant font-code-inline text-[11px]">Symfony (PHP)</span>
                  <span className="px-2 py-1 rounded-md bg-surface-container text-on-surface-variant font-code-inline text-[11px]">C#</span>
                  <span className="px-2 py-1 rounded-md bg-surface-container text-on-surface-variant font-code-inline text-[11px]">SQL / Base de données</span>
                </div>
              </div>
            </section>

            {/* COMPÉTENCES */}
            <section id="skills" className="flex flex-col gap-space-md">
              <div className="flex items-center gap-space-xs">
                <span className="material-symbols-outlined text-secondary text-[20px]">tune</span>
                <h2 className="font-headline-sm text-headline-sm text-on-surface">Compétences &amp; Stack Technique</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-space-sm">
                <div className="flex flex-col p-4 rounded-xl bg-surface-container-low shadow-sm gap-2">
                  <span className="font-headline-sm text-[15px] text-primary font-semibold flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-[16px]">dns</span>
                    Développement Backend
                  </span>
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    <span className="px-2.5 py-1 rounded-full bg-surface-container-high text-on-surface font-label-sm text-label-sm">PHP (Symfony, Laravel)</span>
                    <span className="px-2.5 py-1 rounded-full bg-surface-container-high text-on-surface font-label-sm text-label-sm">Node.js (Express, Socket.IO)</span>
                    <span className="px-2.5 py-1 rounded-full bg-surface-container-high text-on-surface font-label-sm text-label-sm">Python</span>
                    <span className="px-2.5 py-1 rounded-full bg-surface-container-high text-on-surface font-label-sm text-label-sm">C#</span>
                    <span className="px-2.5 py-1 rounded-full bg-surface-container-high text-on-surface font-label-sm text-label-sm">Java &amp; Ruby on Rails</span>
                    <span className="px-2.5 py-1 rounded-full bg-surface-container-high text-on-surface font-label-sm text-label-sm">Intégration d'APIs REST</span>
                    <span className="px-2.5 py-1 rounded-full bg-surface-container-high text-on-surface font-label-sm text-label-sm">Bases de données SQL</span>
                  </div>
                </div>

                <div className="flex flex-col p-4 rounded-xl bg-surface-container-low shadow-sm gap-2">
                  <span className="font-headline-sm text-[15px] text-secondary font-semibold flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-[16px]">web</span>
                    Développement Frontend &amp; Mobile
                  </span>
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    <span className="px-2.5 py-1 rounded-full bg-surface-container-high text-on-surface font-label-sm text-label-sm">JavaScript / TypeScript</span>
                    <span className="px-2.5 py-1 rounded-full bg-surface-container-high text-on-surface font-label-sm text-label-sm">Next.js &amp; React</span>
                    <span className="px-2.5 py-1 rounded-full bg-surface-container-high text-on-surface font-label-sm text-label-sm">Vue.js &amp; Angular</span>
                    <span className="px-2.5 py-1 rounded-full bg-surface-container-high text-on-surface font-label-sm text-label-sm">HTML5 / CSS3</span>
                    <span className="px-2.5 py-1 rounded-full bg-surface-container-high text-on-surface font-label-sm text-label-sm">Flutter (Mobile)</span>
                    <span className="px-2.5 py-1 rounded-full bg-surface-container-high text-on-surface font-label-sm text-label-sm">WordPress</span>
                  </div>
                </div>

                <div className="flex flex-col p-4 rounded-xl bg-surface-container-low shadow-sm gap-2 md:col-span-2">
                  <span className="font-headline-sm text-[15px] text-tertiary font-semibold flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-[16px]">psychology</span>
                    Intelligence Artificielle &amp; Outils
                  </span>
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    <span className="px-2.5 py-1 rounded-full bg-surface-container-high text-on-surface font-label-sm text-label-sm">Concepts &amp; Algorithmes IA (M1)</span>
                    <span className="px-2.5 py-1 rounded-full bg-surface-container-high text-on-surface font-label-sm text-label-sm">Git / GitHub / CI/CD</span>
                    <span className="px-2.5 py-1 rounded-full bg-surface-container-high text-on-surface font-label-sm text-label-sm">Tests Automatisés</span>
                  </div>
                </div>
              </div>
            </section>

            {/* EXPÉRIENCES PROFESSIONNELLES */}
            <section id="experience" className="flex flex-col gap-space-md">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-space-xs">
                  <span className="material-symbols-outlined text-primary text-[20px]">history_edu</span>
                  <h2 className="font-headline-sm text-headline-sm text-on-surface">Expériences Professionnelles</h2>
                </div>
              </div>

              {/* Experience 1 */}
              <div className="relative flex flex-col p-4 rounded-2xl bg-surface-container-low/95 shadow-md gap-space-sm overflow-hidden">
                <div className="flex items-start justify-between gap-space-sm">
                  <div className="flex items-center gap-space-sm min-w-0">
                    <div className="w-11 h-11 rounded-xl bg-gradient-to-tr from-primary-container to-secondary-container flex items-center justify-center text-on-primary font-headline-sm font-bold flex-shrink-0 shadow-sm">
                      SO
                    </div>
                    <div className="flex flex-col min-w-0">
                      <h3 className="font-headline-sm text-[16px] text-on-surface font-semibold truncate">Développeur PHP</h3>
                      <p className="font-body-sm text-body-sm text-primary font-medium">SO CONSEIL — Créteil</p>
                    </div>
                  </div>
                  <span className="px-2 py-1 rounded-full bg-surface-container-high text-on-surface font-label-sm text-[11px] font-semibold whitespace-nowrap">
                    2023 — 2024
                  </span>
                </div>
                <p className="font-body-sm text-body-sm text-on-surface-variant pt-1 leading-relaxed">
                  Élaboration et création d'une plateforme web sur mesure destinée aux clients et prestataires de l'entreprise. Présentation des fonctionnalités métiers et développement sur mesure en HTML/CSS et PHP.
                </p>
              </div>

              {/* Experience 2 */}
              <div className="relative flex flex-col p-4 rounded-2xl bg-surface-container-low/95 shadow-md gap-space-sm overflow-hidden">
                <div className="flex items-start justify-between gap-space-sm">
                  <div className="flex items-center gap-space-sm min-w-0">
                    <div className="w-11 h-11 rounded-xl bg-gradient-to-tr from-secondary-container to-tertiary-container flex items-center justify-center text-on-primary font-headline-sm font-bold flex-shrink-0 shadow-sm">
                      TG
                    </div>
                    <div className="flex flex-col min-w-0">
                      <h3 className="font-headline-sm text-[16px] text-on-surface font-semibold truncate">Développeur WordPress</h3>
                      <p className="font-body-sm text-body-sm text-primary font-medium">TEKGYM — Meaux</p>
                    </div>
                  </div>
                  <span className="px-2 py-1 rounded-full bg-surface-container-high text-on-surface font-label-sm text-[11px] font-semibold whitespace-nowrap">
                    2021 — 2022
                  </span>
                </div>
                <p className="font-body-sm text-body-sm text-on-surface-variant pt-1 leading-relaxed">
                  Conception d'une plateforme web pour l'association sportive : mise en valeur de la boutique d'équipements, vente en ligne et organisation d'évènements sportifs via WordPress.
                </p>
              </div>
            </section>

            {/* FORMATION */}
            <section id="education" className="flex flex-col gap-space-md">
              <div className="flex items-center gap-space-xs">
                <span className="material-symbols-outlined text-secondary text-[20px]">school</span>
                <h2 className="font-headline-sm text-headline-sm text-on-surface">Parcours &amp; Formations</h2>
              </div>
              <div className="flex flex-col gap-3">
                <div className="p-4 rounded-xl bg-surface-container-low flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <h3 className="font-headline-sm text-[15px] text-on-surface font-semibold">Mastère 1 (M1) Intelligence Artificielle</h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">L'École Supérieure du Numérique 89</p>
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-tertiary-container/20 text-tertiary font-label-sm text-label-sm font-semibold self-start sm:self-center">2026 — 2027 (En cours)</span>
                </div>

                <div className="p-4 rounded-xl bg-surface-container-low flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <h3 className="font-headline-sm text-[15px] text-on-surface font-semibold">Bachelor Concepteur de systèmes d'information — Développeur web et application (Bac+3)</h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">L'École Supérieure du Numérique 89</p>
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-surface-container-high text-on-surface font-label-sm text-label-sm font-semibold self-start sm:self-center">2025 — 2026</span>
                </div>

                <div className="p-4 rounded-xl bg-surface-container-low flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <h3 className="font-headline-sm text-[15px] text-on-surface font-semibold">BTS SIO option SLAM (Bac+2)</h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">Lycée polyvalent de Cachan</p>
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-surface-container-high text-on-surface font-label-sm text-label-sm font-semibold self-start sm:self-center">2021 — 2023</span>
                </div>
              </div>
            </section>

            {/* CTA BANNER / CONTACT */}
            <section id="contact" className="relative rounded-2xl p-5 bg-gradient-to-br from-surface-container-high/90 via-surface-container/80 to-surface-container-low/90 backdrop-blur-2xl shadow-xl overflow-hidden">
              <div className="absolute -right-8 -bottom-8 w-44 h-44 rounded-full bg-primary-container/20 blur-2xl pointer-events-none"></div>
              <div className="relative z-10 flex flex-col gap-space-sm">
                <div className="inline-flex items-center gap-1.5 text-primary">
                  <span className="material-symbols-outlined text-[18px]">handshake</span>
                  <span className="font-label-sm text-label-sm font-semibold uppercase tracking-wider">Discutons de votre besoin en alternance</span>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-on-surface leading-snug">
                  À la recherche d'un alternant Développeur / IA ?<br/>Collaborons dès septembre 2026.
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Rythme : 2 semaines école / 2 semaines entreprise • Mobilité : Île-de-France.
                </p>
                <div className="pt-space-xs flex flex-col sm:flex-row gap-space-sm">
                  <a href="mailto:mouhamadafrid.azar@gmail.com" className="inline-flex items-center justify-center gap-2 py-3 px-5 rounded-xl bg-gradient-to-r from-primary-container to-secondary-container text-on-primary font-headline-sm text-[15px] shadow-[0_4px_24px_rgba(77,142,255,0.4)] active:scale-[0.98] transition-transform">
                    <span className="material-symbols-outlined text-[18px]">mail</span>
                    <span>Envoyer un email</span>
                  </a>
                  <button onClick={handleCopyEmail} className="inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-surface-container text-on-surface font-headline-sm text-[14px] active:scale-[0.98] transition-transform">
                    <span className="material-symbols-outlined text-[18px] text-outline">content_copy</span>
                    <span>{emailText}</span>
                  </button>
                </div>
                <div className="pt-2 flex flex-col gap-1 text-xs text-on-surface-variant">
                  <span>📞 07 68 77 17 26</span>
                  <span>📍 Meaux (77100)</span>
                  <div className="flex items-center gap-3 pt-1">
                    <a href="https://github.com/frerrt" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors font-medium">
                      🔗 GitHub (frerrt)
                    </a>
                    <a href="https://www.linkedin.com/in/mouhamad-azar-3b8493207/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors font-medium">
                      💼 LinkedIn
                    </a>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>

      {/* Mobile Navbar */}
      <nav className="fixed bottom-0 w-full z-50 pb-safe bg-surface-container-lowest/85 backdrop-blur-2xl shadow-[0_-8px_30px_rgba(0,0,0,0.6)]">
        <div className="flex justify-around items-center h-16 px-space-xs max-w-md mx-auto">
          <a href="#" className="flex flex-col items-center justify-center min-w-[56px] min-h-[44px] text-primary font-semibold">
            <span className="material-symbols-outlined text-[22px]">dashboard</span>
            <span className="font-label-sm text-[10px] mt-0.5">Accueil</span>
          </a>
          <a href="#projects" className="flex flex-col items-center justify-center min-w-[56px] min-h-[44px] text-on-surface-variant hover:text-on-surface">
            <span className="material-symbols-outlined text-[22px]">folder_code</span>
            <span className="font-label-sm text-[10px] mt-0.5">Projets</span>
          </a>
          <a href="#skills" className="flex flex-col items-center justify-center min-w-[56px] min-h-[44px] text-on-surface-variant hover:text-on-surface">
            <span className="material-symbols-outlined text-[22px]">layers</span>
            <span className="font-label-sm text-[10px] mt-0.5">Stack</span>
          </a>
          <a href="#experience" className="flex flex-col items-center justify-center min-w-[56px] min-h-[44px] text-on-surface-variant hover:text-on-surface">
            <span className="material-symbols-outlined text-[22px]">timeline</span>
            <span className="font-label-sm text-[10px] mt-0.5">Parcours</span>
          </a>
          <a href="#contact" className="flex flex-col items-center justify-center min-w-[56px] min-h-[44px] text-on-surface-variant hover:text-on-surface">
            <span className="material-symbols-outlined text-[22px]">send</span>
            <span className="font-label-sm text-[10px] mt-0.5">Contact</span>
          </a>
        </div>
      </nav>
    </>
  );
}