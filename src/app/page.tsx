"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { useLanguage } from "@/lib/i18n";
import { LanguageToggle } from "@/components/language-toggle";

function Section({
  title,
  number,
  children,
}: {
  title: string;
  number: string;
  children: React.ReactNode;
}) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      className="mb-16"
    >
      <div className="flex items-baseline gap-4 mb-6">
        <span
          className="text-5xl font-bold text-primary/20"
          style={{ fontFamily: "var(--font-display)" }}
        >
          {number}
        </span>
        <h2
          className="text-2xl md:text-3xl font-bold text-foreground"
          style={{ fontFamily: "var(--font-display)" }}
        >
          {title}
        </h2>
      </div>
      <div className="pl-0 md:pl-16">{children}</div>
    </motion.section>
  );
}

function Card({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`bg-card rounded-xl p-6 border border-border shadow-sm ${className}`}
    >
      {children}
    </div>
  );
}

export default function LittleMoversPage() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Nav */}
      <nav className="sticky top-0 z-50 backdrop-blur bg-background/80 border-b border-border">
        <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
          <a
            href="https://le-village.fr"
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            {t("Retour", "Back")}
          </a>
          <div className="flex items-center gap-4">
            <LanguageToggle />
            <span
              className="text-xs font-semibold bg-primary text-primary-foreground px-3 py-1 rounded-full"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Le Village
            </span>
          </div>
        </div>
      </nav>

      {/* Header */}
      <header className="relative h-[60vh] min-h-[400px] flex items-end">
        <Image
          src="/little-movers-hero.jpg"
          alt="Little Movers"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
        <div className="relative z-10 max-w-5xl mx-auto px-4 pb-12 w-full">
          <h1
            className="text-4xl md:text-6xl font-bold text-foreground mb-2"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Little Movers
          </h1>
          <p
            className="text-lg md:text-xl italic text-primary mb-4"
            style={{ fontFamily: "var(--font-body)" }}
          >
            English Movement &amp; Confidence Club
          </p>
          <p
            className="text-sm text-muted-foreground"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Marseille 11/12 — {t("Dossier complet MVP", "Complete MVP Dossier")}
          </p>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 py-16">
        {/* Section 01 */}
        <Section
          number="01"
          title={t("MVP — Format Lancement", "MVP — Launch Format")}
        >
          <p
            className="text-muted-foreground mb-6"
            style={{ fontFamily: "var(--font-body)" }}
          >
            {t(
              "Lancement simple, maîtrisé et premium.",
              "Simple, controlled and premium launch."
            )}
          </p>
          <div className="grid grid-cols-2 gap-4 mb-6">
            <Card>
              <div className="text-2xl mb-2">📅</div>
              <p
                className="font-semibold text-foreground"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {t("Dimanche matin", "Sunday morning")}
              </p>
            </Card>
            <Card>
              <div className="text-2xl mb-2">⏱</div>
              <p
                className="font-semibold text-foreground"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {t("3 classes consécutives", "3 consecutive classes")}
              </p>
            </Card>
            <Card>
              <div className="text-2xl mb-2">⏳</div>
              <p
                className="font-semibold text-foreground"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {t("45 minutes par session", "45 minutes per session")}
              </p>
            </Card>
            <Card>
              <div className="text-2xl mb-2">🕒</div>
              <p
                className="font-semibold text-foreground"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {t("15 min entre chaque cours", "15 min between each class")}
              </p>
              <p
                className="text-sm text-muted-foreground mt-1"
                style={{ fontFamily: "var(--font-body)" }}
              >
                {t("Échange avec les parents", "Chat with parents")}
              </p>
            </Card>
          </div>
          <p
            className="italic text-muted-foreground"
            style={{ fontFamily: "var(--font-body)" }}
          >
            {t(
              "Objectif : créer une communauté qualitative avant expansion.",
              "Goal: build a quality community before expansion."
            )}
          </p>
        </Section>

        {/* Section 02 */}
        <Section
          number="02"
          title={t(
            "Organisation Dimanche (MVP)",
            "Sunday Schedule (MVP)"
          )}
        >
          <p
            className="text-muted-foreground mb-6"
            style={{ fontFamily: "var(--font-body)" }}
          >
            {t(
              "Début possible : 9h00 ou 9h30 — Planning recommandé (version 9h30)",
              "Possible start: 9:00 or 9:30 AM — Recommended schedule (9:30 version)"
            )}
          </p>
          <div className="space-y-4 mb-6">
            <div className="bg-teal-light border-l-4 border-primary rounded-xl p-5">
              <p
                className="font-bold text-foreground"
                style={{ fontFamily: "var(--font-display)" }}
              >
                9h30–10h15
              </p>
              <p
                className="text-foreground"
                style={{ fontFamily: "var(--font-body)" }}
              >
                {t("Yoga parent + enfant", "Parent + child Yoga")}
              </p>
              <p
                className="text-sm text-muted-foreground"
                style={{ fontFamily: "var(--font-body)" }}
              >
                {t("jusqu'à 3 ans", "up to 3 years")}
              </p>
            </div>
            <div className="bg-coral-light border-l-4 border-accent rounded-xl p-5">
              <p
                className="font-bold text-foreground"
                style={{ fontFamily: "var(--font-display)" }}
              >
                10h30–11h15
              </p>
              <p
                className="text-foreground"
                style={{ fontFamily: "var(--font-body)" }}
              >
                {t("Danse en portage", "Babywearing Dance")}
              </p>
              <p
                className="text-sm text-muted-foreground"
                style={{ fontFamily: "var(--font-body)" }}
              >
                {t("bébé 4–12 mois", "baby 4–12 months")}
              </p>
            </div>
            <div className="bg-gold-light border-l-4 border-gold rounded-xl p-5">
              <p
                className="font-bold text-foreground"
                style={{ fontFamily: "var(--font-display)" }}
              >
                11h30–12h15
              </p>
              <p
                className="text-foreground"
                style={{ fontFamily: "var(--font-body)" }}
              >
                {t("Parcours moteur", "Motor Skills Course")}
              </p>
              <p
                className="text-sm text-muted-foreground"
                style={{ fontFamily: "var(--font-body)" }}
              >
                {t("2–5 ans", "2–5 years")}
              </p>
            </div>
          </div>
          <ul
            className="space-y-2 text-muted-foreground"
            style={{ fontFamily: "var(--font-body)" }}
          >
            <li>
              ✦{" "}
              {t(
                "Accueil personnalisé pour chaque famille",
                "Personalized welcome for each family"
              )}
            </li>
            <li>
              ✦{" "}
              {t(
                "Temps d'échange entre les sessions",
                "Exchange time between sessions"
              )}
            </li>
            <li>
              ✦{" "}
              {t(
                "Approche bienveillante et inclusive",
                "Caring and inclusive approach"
              )}
            </li>
          </ul>
        </Section>

        {/* Section 03 */}
        <Section
          number="03"
          title={t("Positionnement", "Positioning")}
        >
          <Card className="bg-teal-light border-primary/20">
            <h3
              className="text-xl font-bold text-foreground mb-4"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Little Movers – English Movement &amp; Confidence
            </h3>
            <ul
              className="space-y-3 text-foreground mb-4"
              style={{ fontFamily: "var(--font-body)" }}
            >
              <li>
                ✦{" "}
                {t(
                  "Développement moteur et sensoriel dès le plus jeune âge",
                  "Motor and sensory development from the earliest age"
                )}
              </li>
              <li>
                ✦{" "}
                {t(
                  "Confiance en soi par le mouvement et l'expression corporelle",
                  "Self-confidence through movement and body expression"
                )}
              </li>
              <li>
                ✦{" "}
                {t(
                  "Lien parent-enfant renforcé dans un cadre bienveillant",
                  "Strengthened parent-child bond in a caring environment"
                )}
              </li>
              <li>
                ✦{" "}
                {t(
                  "Approche premium, bilingue et communautaire",
                  "Premium, bilingual and community-driven approach"
                )}
              </li>
            </ul>
            <p
              className="italic text-muted-foreground"
              style={{ fontFamily: "var(--font-body)" }}
            >
              {t(
                "Un club familial où chaque dimanche devient un moment de connexion et de joie.",
                "A family club where every Sunday becomes a moment of connection and joy."
              )}
            </p>
          </Card>
        </Section>

        {/* Image gallery */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16"
        >
          {[
            "/psychomotricite.png",
            "/atelier-psychomotricite.jpg",
            "/atelier-motricite.jpg",
            "/parcours-motricite.avif",
          ].map((src) => (
            <div key={src} className="relative h-48 rounded-xl overflow-hidden">
              <Image src={src} alt="" fill className="object-cover" />
            </div>
          ))}
        </motion.div>

        {/* Section 04 */}
        <Section
          number="04"
          title={t("Détail des Classes", "Class Details")}
        >
          <div className="space-y-6">
            <Card>
              <h3
                className="text-lg font-bold text-foreground mb-3"
                style={{ fontFamily: "var(--font-display)" }}
              >
                🧒{" "}
                {t(
                  "Yoga parent + enfant (0–3 ans)",
                  "Parent + Child Yoga (0–3 years)"
                )}
              </h3>
              <ul
                className="space-y-2 text-muted-foreground mb-3"
                style={{ fontFamily: "var(--font-body)" }}
              >
                <li>
                  ✦{" "}
                  {t(
                    "Postures douces adaptées aux tout-petits",
                    "Gentle postures adapted for toddlers"
                  )}
                </li>
                <li>
                  ✦{" "}
                  {t(
                    "Jeux de respiration et relaxation guidée",
                    "Breathing games and guided relaxation"
                  )}
                </li>
                <li>
                  ✦{" "}
                  {t(
                    "Renforcement du lien parent-enfant",
                    "Strengthening the parent-child bond"
                  )}
                </li>
                <li>
                  ✦{" "}
                  {t(
                    "Éveil sensoriel et moteur",
                    "Sensory and motor awakening"
                  )}
                </li>
              </ul>
              <p
                className="italic text-sm text-muted-foreground"
                style={{ fontFamily: "var(--font-body)" }}
              >
                {t(
                  "Format : musique douce, consignes en anglais, ambiance cocooning.",
                  "Format: soft music, instructions in English, cocooning atmosphere."
                )}
              </p>
            </Card>

            <Card>
              <h3
                className="text-lg font-bold text-foreground mb-3"
                style={{ fontFamily: "var(--font-display)" }}
              >
                👶{" "}
                {t(
                  "Danse en portage (4–12 mois)",
                  "Babywearing Dance (4–12 months)"
                )}
              </h3>
              <ul
                className="space-y-2 text-muted-foreground mb-3"
                style={{ fontFamily: "var(--font-body)" }}
              >
                <li>
                  ✦{" "}
                  {t(
                    "Chorégraphies simples avec bébé en portage",
                    "Simple choreographies with baby in carrier"
                  )}
                </li>
                <li>
                  ✦{" "}
                  {t(
                    "Travail cardio doux et renforcement postural",
                    "Gentle cardio and postural strengthening"
                  )}
                </li>
                <li>
                  ✦{" "}
                  {t(
                    "Moment de reconnexion corporelle pour le parent",
                    "Body reconnection moment for the parent"
                  )}
                </li>
                <li>
                  ✦{" "}
                  {t(
                    "Stimulation vestibulaire pour bébé",
                    "Vestibular stimulation for baby"
                  )}
                </li>
              </ul>
              <p
                className="italic text-sm text-muted-foreground"
                style={{ fontFamily: "var(--font-body)" }}
              >
                {t(
                  "Format : musique afro/world, ambiance joyeuse, consignes bilingues.",
                  "Format: afro/world music, joyful atmosphere, bilingual instructions."
                )}
              </p>
            </Card>

            <Card>
              <h3
                className="text-lg font-bold text-foreground mb-3"
                style={{ fontFamily: "var(--font-display)" }}
              >
                🏃{" "}
                {t(
                  "Parcours moteur (2–5 ans)",
                  "Motor Skills Course (2–5 years)"
                )}
              </h3>
              <ul
                className="space-y-2 text-muted-foreground mb-3"
                style={{ fontFamily: "var(--font-body)" }}
              >
                <li>
                  ✦{" "}
                  {t(
                    "Parcours de motricité avec obstacles adaptés",
                    "Motor skills course with adapted obstacles"
                  )}
                </li>
                <li>
                  ✦{" "}
                  {t(
                    "Jeux de coordination, équilibre et agilité",
                    "Coordination, balance and agility games"
                  )}
                </li>
                <li>
                  ✦{" "}
                  {t(
                    "Développement de la confiance en soi",
                    "Self-confidence development"
                  )}
                </li>
                <li>
                  ✦{" "}
                  {t(
                    "Apprentissage par le jeu et l'exploration",
                    "Learning through play and exploration"
                  )}
                </li>
              </ul>
              <p
                className="italic text-sm text-muted-foreground"
                style={{ fontFamily: "var(--font-body)" }}
              >
                {t(
                  "Format : musique dynamique, encouragements en anglais, parcours évolutif.",
                  "Format: dynamic music, encouragement in English, progressive course."
                )}
              </p>
            </Card>
          </div>
        </Section>

        {/* Section 05 */}
        <Section
          number="05"
          title={t("Capacité & Tarifs (MVP)", "Capacity & Pricing (MVP)")}
        >
          <Card className="mb-6">
            <h3
              className="text-lg font-bold text-foreground mb-3"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {t("Capacité", "Capacity")}
            </h3>
            <p
              className="text-muted-foreground"
              style={{ fontFamily: "var(--font-body)" }}
            >
              {t(
                "6 à 8 familles maximum par session — intimité et qualité garanties.",
                "6 to 8 families maximum per session — intimacy and quality guaranteed."
              )}
            </p>
          </Card>

          <Card className="mb-6">
            <h3
              className="text-lg font-bold text-foreground mb-4"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {t("Grille tarifaire", "Pricing")}
            </h3>
            <div
              className="space-y-3"
              style={{ fontFamily: "var(--font-body)" }}
            >
              <div className="flex justify-between items-center py-2 border-b border-border">
                <span className="text-foreground">
                  {t("Yoga parent + enfant", "Parent + Child Yoga")}
                </span>
                <span className="font-bold text-foreground">18–20 €</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-border">
                <span className="text-foreground">
                  {t("Danse en portage", "Babywearing Dance")}
                </span>
                <span className="font-bold text-foreground">20 €</span>
              </div>
              <div className="flex justify-between items-center py-2">
                <span className="text-foreground">
                  {t("Parcours moteur", "Motor Skills Course")}
                </span>
                <span className="font-bold text-foreground">16–18 €</span>
              </div>
            </div>
          </Card>

          <p
            className="italic text-muted-foreground"
            style={{ fontFamily: "var(--font-body)" }}
          >
            {t(
              "Abonnements mensuels et packs à venir après validation MVP.",
              "Monthly subscriptions and packs coming after MVP validation."
            )}
          </p>
        </Section>

        {/* Section 06 */}
        <Section
          number="06"
          title={t("Stratégie MVP", "MVP Strategy")}
        >
          <div className="space-y-6 mb-6">
            {[
              {
                step: "1",
                fr: "Tester le format avec 1 dimanche gratuit (session découverte)",
                en: "Test the format with 1 free Sunday (discovery session)",
              },
              {
                step: "2",
                fr: "Collecter les retours et ajuster le contenu",
                en: "Collect feedback and adjust the content",
              },
              {
                step: "3",
                fr: "Lancer les inscriptions payantes avec offre fondateur",
                en: "Launch paid registrations with founder offer",
              },
              {
                step: "4",
                fr: "Stabiliser à 6-8 familles par classe avant expansion",
                en: "Stabilize at 6-8 families per class before expansion",
              },
            ].map((item) => (
              <div key={item.step} className="flex items-start gap-4">
                <div
                  className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold shrink-0"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {item.step}
                </div>
                <p
                  className="text-foreground pt-2"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  {t(item.fr, item.en)}
                </p>
              </div>
            ))}
          </div>
          <p
            className="italic text-muted-foreground"
            style={{ fontFamily: "var(--font-body)" }}
          >
            {t(
              "On commence petit, on grandit avec la communauté.",
              "We start small, we grow with the community."
            )}
          </p>
        </Section>

        {/* Section 07 */}
        <Section
          number="07"
          title={t("Vision à Moyen Terme", "Medium-Term Vision")}
        >
          <Card>
            <ul
              className="space-y-3 text-foreground"
              style={{ fontFamily: "var(--font-body)" }}
            >
              <li>
                ✦{" "}
                {t(
                  "Ajouter un créneau en semaine (mercredi matin)",
                  "Add a weekday slot (Wednesday morning)"
                )}
              </li>
              <li>
                ✦{" "}
                {t(
                  "Développer des ateliers saisonniers (été en extérieur)",
                  "Develop seasonal workshops (outdoor summer)"
                )}
              </li>
              <li>
                ✦{" "}
                {t(
                  "Proposer des stages vacances (1 semaine immersive)",
                  "Offer holiday camps (1 immersive week)"
                )}
              </li>
              <li>
                ✦{" "}
                {t(
                  "Créer un réseau de familles ambassadrices",
                  "Build a network of ambassador families"
                )}
              </li>
            </ul>
          </Card>
        </Section>

        {/* Section 08 */}
        <Section
          number="08"
          title={t(
            "Financement & Stratégie de Lancement",
            "Funding & Launch Strategy"
          )}
        >
          <div className="grid md:grid-cols-3 gap-4">
            <Card>
              <h3
                className="text-lg font-bold text-foreground mb-3"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {t("Phase Test", "Test Phase")}
              </h3>
              <ul
                className="space-y-2 text-muted-foreground"
                style={{ fontFamily: "var(--font-body)" }}
              >
                <li>
                  ✦ {t("Autofinancement initial", "Initial self-funding")}
                </li>
                <li>
                  ✦{" "}
                  {t(
                    "Matériel minimal (tapis, enceinte)",
                    "Minimal equipment (mats, speaker)"
                  )}
                </li>
                <li>
                  ✦{" "}
                  {t("Location salle ponctuelle", "Occasional room rental")}
                </li>
              </ul>
            </Card>
            <Card>
              <h3
                className="text-lg font-bold text-foreground mb-3"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {t("Acquisition & Marketing", "Acquisition & Marketing")}
              </h3>
              <ul
                className="space-y-2 text-muted-foreground"
                style={{ fontFamily: "var(--font-body)" }}
              >
                <li>
                  ✦{" "}
                  {t("Instagram local ciblé", "Targeted local Instagram")}
                </li>
                <li>
                  ✦{" "}
                  {t(
                    "Partenariats crèches et PMI",
                    "Nursery and PMI partnerships"
                  )}
                </li>
                <li>
                  ✦{" "}
                  {t("Bouche-à-oreille premium", "Premium word-of-mouth")}
                </li>
              </ul>
            </Card>
            <Card>
              <h3
                className="text-lg font-bold text-foreground mb-3"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {t(
                  "Activation Été Parc de la Moline",
                  "Summer Activation Parc de la Moline"
                )}
              </h3>
              <ul
                className="space-y-2 text-muted-foreground"
                style={{ fontFamily: "var(--font-body)" }}
              >
                <li>
                  ✦{" "}
                  {t(
                    "Sessions gratuites en plein air",
                    "Free outdoor sessions"
                  )}
                </li>
                <li>
                  ✦{" "}
                  {t(
                    "Visibilité locale maximale",
                    "Maximum local visibility"
                  )}
                </li>
                <li>
                  ✦{" "}
                  {t(
                    "Conversion rentrée septembre",
                    "September back-to-school conversion"
                  )}
                </li>
              </ul>
            </Card>
          </div>
        </Section>

        {/* Section 09 */}
        <Section
          number="09"
          title={t("Profil & Légitimité", "Profile & Legitimacy")}
        >
          <Card>
            <h3
              className="text-lg font-bold text-foreground mb-4"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {t("Certification CQP ALS", "CQP ALS Certification")}
            </h3>
            <ul
              className="space-y-3 text-foreground"
              style={{ fontFamily: "var(--font-body)" }}
            >
              <li>
                ✦{" "}
                {t(
                  "CQP ALS — Certificat de Qualification Professionnelle Animation Loisir Sportif",
                  "CQP ALS — Professional Qualification Certificate for Sports & Leisure Animation"
                )}
              </li>
              <li>
                ✦{" "}
                {t(
                  "Habilitation à encadrer des activités physiques pour tous publics",
                  "Authorization to supervise physical activities for all audiences"
                )}
              </li>
              <li>
                ✦{" "}
                {t(
                  "Formation aux premiers secours PSC1",
                  "PSC1 first aid training"
                )}
              </li>
              <li>
                ✦{" "}
                {t(
                  "Expérience en animation et pédagogie active",
                  "Experience in animation and active pedagogy"
                )}
              </li>
            </ul>
          </Card>
        </Section>

        {/* Section 10 */}
        <Section
          number="10"
          title={t(
            "Stratégie Institutionnelle",
            "Institutional Strategy"
          )}
        >
          <Card className="bg-teal-light">
            <h3
              className="text-lg font-bold text-foreground mb-4"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {t(
                "Soutien mairie et contexte électoral",
                "Town hall support and election context"
              )}
            </h3>
            <p
              className="text-muted-foreground mb-4"
              style={{ fontFamily: "var(--font-body)" }}
            >
              {t(
                "Contexte favorable : élections municipales 2026. Les élus cherchent des projets concrets à soutenir.",
                "Favorable context: 2026 municipal elections. Elected officials are looking for concrete projects to support."
              )}
            </p>
            <ul
              className="space-y-3 text-foreground"
              style={{ fontFamily: "var(--font-body)" }}
            >
              <li>
                ✦{" "}
                {t(
                  "Demander un créneau salle municipale gratuit ou réduit",
                  "Request a free or reduced municipal room slot"
                )}
              </li>
              <li>
                ✦{" "}
                {t(
                  "Proposer le projet comme initiative de quartier",
                  "Present the project as a neighbourhood initiative"
                )}
              </li>
              <li>
                ✦{" "}
                {t(
                  "Solliciter une subvention de démarrage (FDVA, CAF)",
                  "Apply for a startup grant (FDVA, CAF)"
                )}
              </li>
              <li>
                ✦{" "}
                {t(
                  "Intégrer le réseau des associations locales",
                  "Join the local association network"
                )}
              </li>
            </ul>
          </Card>
        </Section>

        {/* Section 11 */}
        <Section
          number="11"
          title={t(
            "Dossier Mairie — Synthèse",
            "Town Hall Dossier — Summary"
          )}
        >
          <div className="border-2 border-primary/30 rounded-2xl p-8">
            <h3
              className="text-xl font-bold text-foreground mb-6"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {t("Présentation du projet", "Project Overview")}
            </h3>
            <p
              className="text-muted-foreground mb-6"
              style={{ fontFamily: "var(--font-body)" }}
            >
              {t(
                "Little Movers est un club d'activités motrices en anglais pour les familles avec enfants de 0 à 5 ans, implanté dans les 11e et 12e arrondissements de Marseille.",
                "Little Movers is an English-language motor activity club for families with children aged 0 to 5, based in Marseille's 11th and 12th arrondissements."
              )}
            </p>

            <h4
              className="text-lg font-bold text-foreground mb-4"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {t("Impact local", "Local Impact")}
            </h4>
            <ul
              className="space-y-2 text-foreground mb-6"
              style={{ fontFamily: "var(--font-body)" }}
            >
              <li>
                ✦{" "}
                {t(
                  "Réponse à un manque d'offre petite enfance le dimanche",
                  "Addresses the lack of early childhood offerings on Sundays"
                )}
              </li>
              <li>
                ✦{" "}
                {t(
                  "Création de lien social entre familles du quartier",
                  "Creates social bonds between neighbourhood families"
                )}
              </li>
              <li>
                ✦{" "}
                {t(
                  "Promotion de l'activité physique dès le plus jeune âge",
                  "Promotes physical activity from the earliest age"
                )}
              </li>
              <li>
                ✦{" "}
                {t(
                  "Ouverture culturelle par le bilinguisme",
                  "Cultural openness through bilingualism"
                )}
              </li>
              <li>
                ✦{" "}
                {t(
                  "Dynamisation du quartier le dimanche matin",
                  "Revitalizes the neighbourhood on Sunday mornings"
                )}
              </li>
            </ul>

            <h4
              className="text-lg font-bold text-foreground mb-4"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {t("Demande à la mairie", "Request to Town Hall")}
            </h4>
            <ul
              className="space-y-2 text-foreground mb-6"
              style={{ fontFamily: "var(--font-body)" }}
            >
              <li>
                ✦{" "}
                {t(
                  "Mise à disposition d'une salle le dimanche matin",
                  "Provision of a room on Sunday mornings"
                )}
              </li>
              <li>
                ✦{" "}
                {t(
                  "Soutien à la communication locale (affichage, site mairie)",
                  "Support for local communication (posters, town hall website)"
                )}
              </li>
              <li>
                ✦{" "}
                {t(
                  "Orientation vers les dispositifs de subvention existants",
                  "Guidance towards existing grant schemes"
                )}
              </li>
            </ul>

            <div className="flex flex-wrap gap-2">
              <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                {t("Santé & bien-être", "Health & wellness")}
              </span>
              <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                {t("Soutien aux familles", "Family support")}
              </span>
              <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                {t("Dynamique de quartier", "Neighbourhood dynamics")}
              </span>
            </div>
          </div>
        </Section>

        {/* Section 12 */}
        <Section
          number="12"
          title={t("Plan d'action — 60 jours", "Action Plan — 60 Days")}
        >
          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <Card>
              <h3
                className="text-lg font-bold text-foreground mb-3"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {t("Semaines 1–2", "Weeks 1–2")}
              </h3>
              <ul
                className="space-y-2 text-muted-foreground"
                style={{ fontFamily: "var(--font-body)" }}
              >
                <li>
                  ✦{" "}
                  {t(
                    "Finaliser le dossier mairie",
                    "Finalize town hall dossier"
                  )}
                </li>
                <li>
                  ✦{" "}
                  {t(
                    "Créer le compte Instagram",
                    "Create Instagram account"
                  )}
                </li>
                <li>
                  ✦{" "}
                  {t(
                    "Identifier 3 salles potentielles",
                    "Identify 3 potential rooms"
                  )}
                </li>
              </ul>
            </Card>
            <Card>
              <h3
                className="text-lg font-bold text-foreground mb-3"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {t("Semaines 3–4", "Weeks 3–4")}
              </h3>
              <ul
                className="space-y-2 text-muted-foreground"
                style={{ fontFamily: "var(--font-body)" }}
              >
                <li>
                  ✦{" "}
                  {t(
                    "Rendez-vous mairie de secteur",
                    "District town hall meeting"
                  )}
                </li>
                <li>
                  ✦{" "}
                  {t(
                    "Préparer le matériel pédagogique",
                    "Prepare teaching materials"
                  )}
                </li>
                <li>
                  ✦{" "}
                  {t(
                    "Lancer la communication Instagram",
                    "Launch Instagram communication"
                  )}
                </li>
              </ul>
            </Card>
            <Card>
              <h3
                className="text-lg font-bold text-foreground mb-3"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {t("Semaines 5–6", "Weeks 5–6")}
              </h3>
              <ul
                className="space-y-2 text-muted-foreground"
                style={{ fontFamily: "var(--font-body)" }}
              >
                <li>
                  ✦{" "}
                  {t(
                    "Organiser la session découverte gratuite",
                    "Organize free discovery session"
                  )}
                </li>
                <li>
                  ✦{" "}
                  {t(
                    "Activer les partenariats locaux",
                    "Activate local partnerships"
                  )}
                </li>
                <li>
                  ✦{" "}
                  {t(
                    "Collecter les pré-inscriptions",
                    "Collect pre-registrations"
                  )}
                </li>
              </ul>
            </Card>
            <Card>
              <h3
                className="text-lg font-bold text-foreground mb-3"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {t("Semaines 7–8", "Weeks 7–8")}
              </h3>
              <ul
                className="space-y-2 text-muted-foreground"
                style={{ fontFamily: "var(--font-body)" }}
              >
                <li>
                  ✦{" "}
                  {t(
                    "Lancement officiel des cours payants",
                    "Official launch of paid classes"
                  )}
                </li>
                <li>
                  ✦{" "}
                  {t("Activer l'offre fondateur", "Activate founder offer")}
                </li>
                <li>
                  ✦{" "}
                  {t("Ajuster selon les retours", "Adjust based on feedback")}
                </li>
              </ul>
            </Card>
          </div>
          <p
            className="italic text-muted-foreground"
            style={{ fontFamily: "var(--font-body)" }}
          >
            {t(
              "Un lancement en 2 mois, de l'idée au premier cours payant.",
              "A 2-month launch, from idea to first paid class."
            )}
          </p>
        </Section>

        {/* Section 13 */}
        <Section
          number="13"
          title={t(
            "Convertir Gratuit → Payant",
            "Converting Free → Paid"
          )}
        >
          <Card className="mb-6">
            <h3
              className="text-lg font-bold text-foreground mb-3"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {t("Message clé", "Key Message")}
            </h3>
            <p
              className="text-muted-foreground mb-4"
              style={{ fontFamily: "var(--font-body)" }}
            >
              {t(
                "La session pilote gratuite est un cadeau, pas un engagement. Elle permet aux familles de vivre l'expérience avant de s'inscrire.",
                "The free pilot session is a gift, not a commitment. It allows families to experience the class before signing up."
              )}
            </p>
            <h4
              className="font-bold text-foreground mb-3"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {t("Pendant la session gratuite", "During the free session")}
            </h4>
            <ul
              className="space-y-2 text-muted-foreground"
              style={{ fontFamily: "var(--font-body)" }}
            >
              <li>
                ✦{" "}
                {t(
                  "Offrir une expérience premium complète",
                  "Deliver a complete premium experience"
                )}
              </li>
              <li>
                ✦{" "}
                {t(
                  "Créer un moment émotionnel fort (musique, ambiance)",
                  "Create a strong emotional moment (music, atmosphere)"
                )}
              </li>
              <li>
                ✦{" "}
                {t(
                  "Distribuer une fiche récapitulative avec QR code inscription",
                  "Distribute a summary sheet with registration QR code"
                )}
              </li>
              <li>
                ✦{" "}
                {t(
                  "Annoncer l'offre fondateur en fin de session",
                  "Announce the founder offer at end of session"
                )}
              </li>
            </ul>
          </Card>

          <Card className="bg-teal-light">
            <h3
              className="text-lg font-bold text-foreground mb-3"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {t("Offre Fondateur", "Founder Offer")}
            </h3>
            <p
              className="text-foreground mb-2"
              style={{ fontFamily: "var(--font-body)" }}
            >
              {t(
                "Abonnement 8 semaines — tarif préférentiel",
                "8-week subscription — preferential rate"
              )}
            </p>
            <p
              className="text-2xl font-bold text-foreground mb-2"
              style={{ fontFamily: "var(--font-display)" }}
            >
              <span className="line-through text-muted-foreground text-lg">
                160 €
              </span>{" "}
              → 144 €
            </p>
            <p
              className="text-sm italic text-muted-foreground"
              style={{ fontFamily: "var(--font-body)" }}
            >
              {t(
                "Offre valable 48h après la session découverte.",
                "Offer valid 48h after the discovery session."
              )}
            </p>
          </Card>
        </Section>

        {/* Section 14 */}
        <Section
          number="14"
          title={t("Conclusion Stratégique", "Strategic Conclusion")}
        >
          <Card className="bg-teal-light">
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                {t("Communauté", "Community")}
              </span>
              <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                {t("Premium", "Premium")}
              </span>
              <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                {t("Bilingue", "Bilingual")}
              </span>
              <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                {t("Ancrage local", "Local roots")}
              </span>
            </div>
            <p
              className="italic text-muted-foreground"
              style={{ fontFamily: "var(--font-body)" }}
            >
              {t(
                "Little Movers n'est pas un simple cours de sport. C'est un club familial qui crée du lien, de la confiance et du mouvement — chaque dimanche, en anglais, à Marseille.",
                "Little Movers is not just a sports class. It's a family club that creates connection, confidence and movement — every Sunday, in English, in Marseille."
              )}
            </p>
          </Card>
        </Section>

        {/* Section 15 */}
        <Section
          number="15"
          title={t(
            "Script Rendez-vous Mairie (5 min)",
            "Town Hall Meeting Script (5 min)"
          )}
        >
          <div className="space-y-4">
            <Card>
              <h3
                className="text-lg font-bold text-foreground mb-2"
                style={{ fontFamily: "var(--font-display)" }}
              >
                1. {t("Introduction", "Introduction")}
              </h3>
              <p
                className="text-muted-foreground"
                style={{ fontFamily: "var(--font-body)" }}
              >
                {t(
                  "Bonjour, je suis [Prénom], habitante du 12e. Je porte un projet d'activités motrices en anglais pour les familles avec jeunes enfants.",
                  "Hello, I'm [First Name], a resident of the 12th. I'm leading a project for English-language motor activities for families with young children."
                )}
              </p>
            </Card>
            <Card>
              <h3
                className="text-lg font-bold text-foreground mb-2"
                style={{ fontFamily: "var(--font-display)" }}
              >
                2. {t("Problème", "Problem")}
              </h3>
              <p
                className="text-muted-foreground"
                style={{ fontFamily: "var(--font-body)" }}
              >
                {t(
                  "Il n'existe aucune offre d'activité parent-enfant le dimanche matin dans le 11e/12e. Les familles doivent se déplacer au centre-ville.",
                  "There is no parent-child activity offering on Sunday mornings in the 11th/12th. Families have to travel to the city center."
                )}
              </p>
            </Card>
            <Card>
              <h3
                className="text-lg font-bold text-foreground mb-2"
                style={{ fontFamily: "var(--font-display)" }}
              >
                3. {t("Solution", "Solution")}
              </h3>
              <p
                className="text-muted-foreground"
                style={{ fontFamily: "var(--font-body)" }}
              >
                {t(
                  "Little Movers propose 3 cours le dimanche matin : yoga parent-enfant, danse en portage, parcours moteur. Tout en anglais, dans une ambiance premium.",
                  "Little Movers offers 3 classes on Sunday mornings: parent-child yoga, babywearing dance, motor skills course. All in English, in a premium atmosphere."
                )}
              </p>
            </Card>
            <Card>
              <h3
                className="text-lg font-bold text-foreground mb-2"
                style={{ fontFamily: "var(--font-display)" }}
              >
                4. {t("Impact local", "Local Impact")}
              </h3>
              <p
                className="text-muted-foreground"
                style={{ fontFamily: "var(--font-body)" }}
              >
                {t(
                  "Ce projet crée du lien social, favorise la santé des tout-petits et dynamise le quartier le dimanche.",
                  "This project creates social bonds, promotes toddler health and revitalizes the neighbourhood on Sundays."
                )}
              </p>
            </Card>
            <Card>
              <h3
                className="text-lg font-bold text-foreground mb-2"
                style={{ fontFamily: "var(--font-display)" }}
              >
                5. {t("Demande claire", "Clear Request")}
              </h3>
              <p
                className="text-muted-foreground"
                style={{ fontFamily: "var(--font-body)" }}
              >
                {t(
                  "Je cherche une salle municipale le dimanche matin et un soutien à la communication. Le projet est prêt à démarrer.",
                  "I'm looking for a municipal room on Sunday mornings and communication support. The project is ready to launch."
                )}
              </p>
            </Card>
          </div>
        </Section>

        {/* Section 16 */}
        <Section
          number="16"
          title={t(
            "Prévisionnel Financier Synthétique",
            "Financial Forecast Summary"
          )}
        >
          <Card>
            <div
              className="space-y-3"
              style={{ fontFamily: "var(--font-body)" }}
            >
              <div className="flex justify-between items-center py-2 border-b border-border">
                <span className="text-foreground">
                  {t("Revenus / dimanche", "Revenue / Sunday")}
                </span>
                <span className="font-bold text-foreground">432 €</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-border">
                <span className="text-foreground">
                  {t("Revenus / mois (x4)", "Revenue / month (x4)")}
                </span>
                <span className="font-bold text-foreground">1 728 €</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-border">
                <span className="text-foreground">
                  {t(
                    "Charges (assurance, matériel, comm.)",
                    "Charges (insurance, equipment, comm.)"
                  )}
                </span>
                <span className="font-bold text-red-500">-380 €</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-border">
                <span className="text-foreground">
                  {t("Location salle", "Room rental")}
                </span>
                <span className="font-bold text-red-500">-400 €</span>
              </div>
              <div className="flex justify-between items-center py-2">
                <span className="font-bold text-foreground">
                  {t("Net estimé / mois", "Estimated net / month")}
                </span>
                <span className="font-bold text-primary text-lg">
                  ~950 €
                </span>
              </div>
            </div>
            <p
              className="italic text-sm text-muted-foreground mt-4"
              style={{ fontFamily: "var(--font-body)" }}
            >
              {t(
                "Phase 2 : ajout créneau mercredi → projection ~1 800 € net/mois.",
                "Phase 2: add Wednesday slot → projection ~€1,800 net/month."
              )}
            </p>
          </Card>
        </Section>

        {/* Section 17 */}
        <Section
          number="17"
          title={t(
            "Stratégie Instagram Locale",
            "Local Instagram Strategy"
          )}
        >
          <div className="grid md:grid-cols-3 gap-4">
            <Card>
              <h3
                className="text-lg font-bold text-foreground mb-3"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {t("Bio Instagram", "Instagram Bio")}
              </h3>
              <div
                className="bg-muted rounded-lg p-4 text-sm text-foreground"
                style={{ fontFamily: "var(--font-body)" }}
              >
                <p className="font-bold">Little Movers 🤸‍♀️</p>
                <p>English Movement &amp; Confidence Club</p>
                <p>📍 Marseille 11/12</p>
                <p>👶 0–5 ans | Yoga · Danse · Motricité</p>
                <p>🇬🇧 In English | 🇫🇷 Bilingue</p>
                <p>
                  📅{" "}
                  {t("Chaque dimanche matin", "Every Sunday morning")}
                </p>
              </div>
            </Card>
            <Card>
              <h3
                className="text-lg font-bold text-foreground mb-3"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {t("Contenu Stratégique", "Strategic Content")}
              </h3>
              <ul
                className="space-y-2 text-muted-foreground"
                style={{ fontFamily: "var(--font-body)" }}
              >
                <li>
                  ✦ {t("3 posts / semaine minimum", "3 posts / week minimum")}
                </li>
                <li>
                  ✦{" "}
                  {t(
                    "Stories quotidiennes (coulisses, témoignages)",
                    "Daily stories (behind the scenes, testimonials)"
                  )}
                </li>
                <li>
                  ✦{" "}
                  {t(
                    "Reels avec extraits de cours",
                    "Reels with class excerpts"
                  )}
                </li>
              </ul>
            </Card>
            <Card>
              <h3
                className="text-lg font-bold text-foreground mb-3"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {t("Hashtags Ciblés", "Targeted Hashtags")}
              </h3>
              <div
                className="flex flex-wrap gap-2"
                style={{ fontFamily: "var(--font-body)" }}
              >
                {[
                  "#marseille12",
                  "#marseille11",
                  "#activiteenfant",
                  "#yogabebe",
                  "#portage",
                  "#motricitelibre",
                  "#parentenfant",
                  "#littlemovers",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="bg-muted text-muted-foreground px-2 py-1 rounded text-xs"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </Card>
          </div>
        </Section>

        {/* Section 18 */}
        <Section
          number="18"
          title={t(
            "Validation Terrain — Benchmark",
            "Field Validation — Benchmark"
          )}
        >
          <Card>
            <h3
              className="text-lg font-bold text-foreground mb-3"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {t("Participer pour apprendre", "Participate to learn")}
            </h3>
            <p
              className="text-muted-foreground"
              style={{ fontFamily: "var(--font-body)" }}
            >
              {t(
                "Avant le lancement, participer à des cours similaires (yoga bébé, danse en portage, motricité) dans d'autres quartiers ou villes pour observer les formats, l'ambiance, les tarifs et les points d'amélioration possibles.",
                "Before launch, participate in similar classes (baby yoga, babywearing dance, motor skills) in other neighbourhoods or cities to observe formats, atmosphere, pricing and possible improvements."
              )}
            </p>
          </Card>
        </Section>

        {/* Section 19 */}
        <Section
          number="19"
          title={t(
            "Activation Été — Parc de la Moline",
            "Summer Activation — Parc de la Moline"
          )}
        >
          <Card className="bg-teal-light">
            <h3
              className="text-lg font-bold text-foreground mb-3"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {t("Sessions en plein air", "Outdoor sessions")}
            </h3>
            <ul
              className="space-y-2 text-foreground"
              style={{ fontFamily: "var(--font-body)" }}
            >
              <li>
                ✦{" "}
                {t(
                  "Yoga en plein air sous les arbres",
                  "Outdoor yoga under the trees"
                )}
              </li>
              <li>
                ✦{" "}
                {t(
                  "Parcours moteur avec éléments naturels",
                  "Motor skills course with natural elements"
                )}
              </li>
              <li>
                ✦{" "}
                {t(
                  "Danse en portage au parc",
                  "Babywearing dance in the park"
                )}
              </li>
              <li>
                ✦{" "}
                {t(
                  "Pique-nique communautaire après les cours",
                  "Community picnic after classes"
                )}
              </li>
              <li>
                ✦{" "}
                {t(
                  "Gratuit ou prix libre — objectif visibilité",
                  "Free or pay-what-you-want — visibility goal"
                )}
              </li>
            </ul>
          </Card>
        </Section>

        {/* Section 20 */}
        <Section
          number="20"
          title={t("Marketing & Visibilité", "Marketing & Visibility")}
        >
          <div className="grid md:grid-cols-2 gap-4">
            <Card>
              <h3
                className="text-lg font-bold text-foreground mb-3"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {t("Micro-influence locale", "Local micro-influence")}
              </h3>
              <ul
                className="space-y-2 text-muted-foreground"
                style={{ fontFamily: "var(--font-body)" }}
              >
                <li>
                  ✦{" "}
                  {t(
                    "Identifier 5-10 mamans influentes du quartier",
                    "Identify 5-10 influential moms in the neighbourhood"
                  )}
                </li>
                <li>
                  ✦{" "}
                  {t(
                    "Inviter à une session gratuite en échange de contenu",
                    "Invite to a free session in exchange for content"
                  )}
                </li>
                <li>
                  ✦{" "}
                  {t(
                    "Créer un programme ambassadrice",
                    "Create an ambassador program"
                  )}
                </li>
              </ul>
            </Card>
            <Card>
              <h3
                className="text-lg font-bold text-foreground mb-3"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {t("Inspiration Artistique", "Artistic Inspiration")}
              </h3>
              <ul
                className="space-y-2 text-muted-foreground"
                style={{ fontFamily: "var(--font-body)" }}
              >
                <li>
                  ✦{" "}
                  {t(
                    "Intégrer des éléments de danse afro",
                    "Integrate afro dance elements"
                  )}
                </li>
                <li>
                  ✦{" "}
                  {t(
                    "Musiques world et percussions douces",
                    "World music and soft percussion"
                  )}
                </li>
                <li>
                  ✦{" "}
                  {t(
                    "Ambiance multiculturelle et joyeuse",
                    "Multicultural and joyful atmosphere"
                  )}
                </li>
              </ul>
            </Card>
          </div>
        </Section>

        {/* Section 21 */}
        <Section
          number="21"
          title={t("Partenariats Stratégiques", "Strategic Partnerships")}
        >
          <div className="grid md:grid-cols-2 gap-4">
            <Card>
              <h3
                className="text-lg font-bold text-foreground mb-2"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Mamma Brunch → Family Sunday
              </h3>
              <p
                className="text-muted-foreground"
                style={{ fontFamily: "var(--font-body)" }}
              >
                {t(
                  "Partenariat brunch + activité : les familles enchaînent cours et brunch.",
                  "Brunch + activity partnership: families combine class and brunch."
                )}
              </p>
            </Card>
            <Card>
              <h3
                className="text-lg font-bold text-foreground mb-2"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Alizé
              </h3>
              <p
                className="text-muted-foreground"
                style={{ fontFamily: "var(--font-body)" }}
              >
                {t(
                  "Collaboration avec l'association Alizé pour toucher les familles du réseau.",
                  "Collaboration with Alizé association to reach families in their network."
                )}
              </p>
            </Card>
            <Card>
              <h3
                className="text-lg font-bold text-foreground mb-2"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Moidemoselle du Sud
              </h3>
              <p
                className="text-muted-foreground"
                style={{ fontFamily: "var(--font-body)" }}
              >
                {t(
                  "Cross-promotion avec cette marque locale engagée.",
                  "Cross-promotion with this engaged local brand."
                )}
              </p>
            </Card>
            <Card>
              <h3
                className="text-lg font-bold text-foreground mb-2"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Charlène + Baby Social Club
              </h3>
              <p
                className="text-muted-foreground"
                style={{ fontFamily: "var(--font-body)" }}
              >
                {t(
                  "Réseau de mamans — co-animation et recommandations croisées.",
                  "Mom network — co-animation and cross-recommendations."
                )}
              </p>
            </Card>
            <Card>
              <h3
                className="text-lg font-bold text-foreground mb-2"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Baleyo
              </h3>
              <p
                className="text-muted-foreground"
                style={{ fontFamily: "var(--font-body)" }}
              >
                {t(
                  "Plateforme de réservation d'activités — visibilité et réservation en ligne.",
                  "Activity booking platform — visibility and online booking."
                )}
              </p>
            </Card>
            <Card>
              <h3
                className="text-lg font-bold text-foreground mb-2"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {t("Crèche du Château", "Crèche du Château")}
              </h3>
              <p
                className="text-muted-foreground"
                style={{ fontFamily: "var(--font-body)" }}
              >
                {t(
                  "Affichage et recommandation auprès des familles de la crèche.",
                  "Display and recommendation to nursery families."
                )}
              </p>
            </Card>
          </div>
        </Section>

        {/* Section 22 */}
        <Section
          number="22"
          title={t("Pourquoi Marseille 11/12", "Why Marseille 11/12")}
        >
          <div className="grid md:grid-cols-2 gap-4">
            <Card>
              <h3
                className="text-lg font-bold text-foreground mb-2"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {t("Profil familial", "Family Profile")}
              </h3>
              <p
                className="text-muted-foreground"
                style={{ fontFamily: "var(--font-body)" }}
              >
                {t(
                  "Forte densité de jeunes familles avec enfants en bas âge dans les 11e et 12e arrondissements.",
                  "High density of young families with young children in the 11th and 12th arrondissements."
                )}
              </p>
            </Card>
            <Card>
              <h3
                className="text-lg font-bold text-foreground mb-2"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {t("Manque d'offre", "Lack of Offerings")}
              </h3>
              <p
                className="text-muted-foreground"
                style={{ fontFamily: "var(--font-body)" }}
              >
                {t(
                  "Aucune offre structurée d'activité parent-enfant le dimanche matin dans ce secteur.",
                  "No structured parent-child activity offering on Sunday mornings in this area."
                )}
              </p>
            </Card>
            <Card>
              <h3
                className="text-lg font-bold text-foreground mb-2"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {t("Dynamique de quartier", "Neighbourhood Dynamics")}
              </h3>
              <p
                className="text-muted-foreground"
                style={{ fontFamily: "var(--font-body)" }}
              >
                {t(
                  "Quartiers en développement avec une vie associative active et des espaces verts accessibles.",
                  "Developing neighbourhoods with active community life and accessible green spaces."
                )}
              </p>
            </Card>
            <Card>
              <h3
                className="text-lg font-bold text-foreground mb-2"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {t("Avantage dimanche matin", "Sunday Morning Advantage")}
              </h3>
              <p
                className="text-muted-foreground"
                style={{ fontFamily: "var(--font-body)" }}
              >
                {t(
                  "Créneau sous-exploité : peu de concurrence, disponibilité des familles, ambiance calme.",
                  "Under-exploited slot: little competition, family availability, calm atmosphere."
                )}
              </p>
            </Card>
          </div>
        </Section>

        {/* Section 23 */}
        <Section
          number="23"
          title={t("Synthèse Stratégique", "Strategic Summary")}
        >
          <div className="border-2 border-primary/30 rounded-2xl p-8">
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              {[
                {
                  fr: "Format MVP validé : 3 cours le dimanche matin",
                  en: "Validated MVP format: 3 classes on Sunday mornings",
                },
                {
                  fr: "Positionnement unique : anglais + mouvement + premium",
                  en: "Unique positioning: English + movement + premium",
                },
                {
                  fr: "Stratégie d'acquisition : Instagram + partenariats + mairie",
                  en: "Acquisition strategy: Instagram + partnerships + town hall",
                },
                {
                  fr: "Modèle financier viable dès le mois 2",
                  en: "Viable financial model from month 2",
                },
                {
                  fr: "Vision d'expansion claire (mercredi, été, stages)",
                  en: "Clear expansion vision (Wednesday, summer, camps)",
                },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="text-primary mt-0.5">✓</span>
                  <p
                    className="text-foreground"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    {t(item.fr, item.en)}
                  </p>
                </div>
              ))}
            </div>
            <p
              className="italic text-muted-foreground"
              style={{ fontFamily: "var(--font-body)" }}
            >
              {t(
                "Tout est aligné pour un lancement réussi. Il ne reste qu'à passer à l'action.",
                "Everything is aligned for a successful launch. All that's left is to take action."
              )}
            </p>
          </div>
        </Section>

        {/* Section 24 */}
        <Section
          number="24"
          title={t(
            "Benchmark — Comparaison régions",
            "Benchmark — Regional Comparison"
          )}
        >
          <Card>
            <h3
              className="text-lg font-bold text-foreground mb-3"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {t("Phase benchmark Paris", "Paris benchmark phase")}
            </h3>
            <p
              className="text-muted-foreground"
              style={{ fontFamily: "var(--font-body)" }}
            >
              {t(
                "Étudier les offres similaires à Paris (yoga bébé, danse en portage, motricité en anglais) pour identifier les meilleures pratiques, les tarifs du marché et les formats qui fonctionnent. Objectif : s'inspirer sans copier, adapter au contexte marseillais.",
                "Study similar offerings in Paris (baby yoga, babywearing dance, motor skills in English) to identify best practices, market pricing and formats that work. Goal: draw inspiration without copying, adapt to the Marseille context."
              )}
            </p>
          </Card>
        </Section>

        {/* Section 25 */}
        <Section number="25" title={t("Annexes", "Appendices")}>
          <Card>
            <h3
              className="text-lg font-bold text-foreground mb-4"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {t(
                "Profil de la porteuse de projet",
                "Project Leader Profile"
              )}
            </h3>
            <ul
              className="space-y-3 text-foreground"
              style={{ fontFamily: "var(--font-body)" }}
            >
              <li>
                ✦{" "}
                {t(
                  "CQP ALS (Animation Loisir Sportif) + PSC1 (Premiers Secours)",
                  "CQP ALS (Sports & Leisure Animation) + PSC1 (First Aid)"
                )}
              </li>
              <li>
                ✦{" "}
                {t(
                  "Charte CFA — engagement qualité et éthique",
                  "CFA Charter — quality and ethics commitment"
                )}
              </li>
              <li>
                ✦{" "}
                {t(
                  "Master Économie Financière (Erasmus Rotterdam)",
                  "Master Financial Economics (Erasmus Rotterdam)"
                )}
              </li>
              <li>
                ✦{" "}
                {t(
                  "Double nationalité — approche interculturelle naturelle",
                  "Dual nationality — natural intercultural approach"
                )}
              </li>
              <li>
                ✦{" "}
                {t(
                  "Poste actuel : EPI — expérience en gestion de projet",
                  "Current position: EPI — project management experience"
                )}
              </li>
            </ul>
          </Card>
        </Section>

        {/* Section 26 */}
        <Section
          number="26"
          title={t("Conclusion Générale", "General Conclusion")}
        >
          <div className="bg-primary rounded-2xl p-8 text-primary-foreground">
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="bg-primary-foreground/20 text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                {t("Mouvement", "Movement")}
              </span>
              <span className="bg-primary-foreground/20 text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                {t("Confiance", "Confidence")}
              </span>
              <span className="bg-primary-foreground/20 text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                {t("Communauté", "Community")}
              </span>
              <span className="bg-primary-foreground/20 text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                {t("Bilingue", "Bilingual")}
              </span>
              <span className="bg-primary-foreground/20 text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                Marseille 11/12
              </span>
            </div>
            <p
              className="italic text-primary-foreground/90 text-lg"
              style={{ fontFamily: "var(--font-body)" }}
            >
              {t(
                "Little Movers est plus qu'un projet sportif. C'est une ambition : créer le premier club familial bilingue de Marseille Sud, où chaque dimanche devient une célébration du mouvement, de la confiance et du lien.",
                "Little Movers is more than a sports project. It's an ambition: to create the first bilingual family club in South Marseille, where every Sunday becomes a celebration of movement, confidence and connection."
              )}
            </p>
          </div>
        </Section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border py-8">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <p
            className="text-sm text-muted-foreground"
            style={{ fontFamily: "var(--font-body)" }}
          >
            {t(
              "Dossier préparé dans le cadre des élections municipales — Mars 2026",
              "Dossier prepared for municipal elections — March 2026"
            )}
          </p>
        </div>
      </footer>
    </div>
  );
}
