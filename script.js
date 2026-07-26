// ================================================================
// TRADUCTIONS (FR / EN)
// -> Chaque clé correspond à un attribut data-i18n="cle" dans index.html.
//    Pour ajouter un texte traduisible : donne-lui data-i18n="ma_cle"
//    dans le HTML, puis ajoute "ma_cle": { fr: "...", en: "..." } ici.
// ================================================================
const TRANSLATIONS = {
  page_title: {
    fr: "Mor SAMB | Data Analyst - Power BI & SQL - Sénégal",
    en: "Mor SAMB | Data Analyst - Power BI & SQL - Senegal"
  },
  nav_toggle_aria: { fr: "Ouvrir le menu", en: "Open menu" },
  nav_about: { fr: "À propos", en: "About" },
  nav_skills: { fr: "Compétences", en: "Skills" },
  nav_projects: { fr: "Projets", en: "Projects" },
  nav_certs: { fr: "Certifications", en: "Certifications" },
  nav_contact: { fr: "Contact", en: "Contact" },
  nav_cv: { fr: "Télécharger mon CV", en: "Download my resume" },

  hero_eyebrow: {
    fr: "Data Analyst • Étudiant en Licence 3 Économie Appliquée",
    en: "Data Analyst • 3rd-Year Applied Economics Student"
  },
  hero_title: { fr: "Bonjour, je suis Mor SAMB", en: "Hi, I'm Mor SAMB" },
  hero_subtitle: {
    fr: "Je transforme vos données en décisions concrètes : dashboards clairs, prévisions fiables et analyses chiffrées, pour des entreprises, PME et ONG en quête de clarté.",
    en: "I turn your data into concrete decisions: clear dashboards, reliable forecasts and data-driven analysis, for businesses, SMEs and NGOs seeking clarity."
  },
  hero_btn_projects: { fr: "Voir mes projets", en: "View my projects" },
  hero_btn_contact: { fr: "Me contacter", en: "Contact me" },
  hero_btn_cv: { fr: "Télécharger mon CV", en: "Download my resume" },
  hero_stat_certs: { fr: "Certifications obtenues", en: "Certifications earned" },
  hero_stat_projects: { fr: "Projets data livrés", en: "Data projects delivered" },
  hero_stat_tools: { fr: "Outils d'analyse maîtrisés", en: "Analytics tools mastered" },
  hero_photo_alt: { fr: "Photo professionnelle de Mor SAMB, data analyst à Dakar", en: "Professional photo of Mor SAMB, data analyst based in Dakar" },
  hero_badge_title: { fr: "Disponible immédiatement", en: "Available immediately" },

  about_eyebrow: { fr: "À propos", en: "About" },
  about_heading: { fr: "Qui suis-je ?", en: "Who am I?" },
  about_photo_alt: { fr: "Photo de profil de Mor SAMB, data analyst à Dakar", en: "Profile photo of Mor SAMB, data analyst based in Dakar" },
  about_photo_caption: { fr: "Data Analyst — Dakar, Sénégal", en: "Data Analyst — Dakar, Senegal" },
  about_btn_cv: { fr: "Télécharger mon CV complet", en: "Download my full resume" },
  about_btn_certs: { fr: "Voir mes certifications", en: "View my certifications" },
  about_p1: {
    fr: "Étudiant en Licence 3 économie appliquée à l'Université Amadou Makhtar MBOW (UAM) de Diamniadio, à Dakar, je me suis progressivement spécialisé dans l'analyse de données au fil de mes travaux de recherche, jusqu'à en faire aujourd'hui mon activité principale.",
    en: "A 3rd-year Applied Economics student at Université Amadou Makhtar MBOW (UAM) in Diamniadio, Dakar, I gradually specialized in data analysis through my research work, and it has since become my main focus."
  },
  about_p2: {
    fr: "Je conçois des dashboards sous Excel et Power BI, j'interroge et je structure des bases de données en SQL, et je mène des analyses statistiques et économétriques avec Python, R, Stata et SPSS. J'utilise aussi l'intelligence artificielle pour accélérer l'exploration de données volumineuses et fiabiliser mes résultats. Concrètement, j'aide à répondre à des questions comme : où se situent les pertes de revenus, quels clients partent et pourquoi, ou comment prioriser un budget limité.",
    en: "I build dashboards in Excel and Power BI, query and structure databases in SQL, and run statistical and econometric analysis with Python, R, Stata and SPSS. I also use artificial intelligence to speed up the exploration of large datasets and strengthen the reliability of my results. In practice, I help answer questions like: where is revenue being lost, which customers are churning and why, or how to prioritize a limited budget."
  },
  about_p3: {
    fr: "Ma formation en économie appliquée m'a appris à replacer chaque chiffre dans son contexte : je ne livre pas un graphique, je livre une explication claire de ce qu'il implique pour une décision. Cette conviction — que la donnée peut éclairer des choix concrets pour des structures qui n'ont pas toujours d'équipe dédiée — guide mon travail, notamment auprès des PME et ONG d'Afrique francophone, en particulier au Sénégal.",
    en: "My background in applied economics taught me to put every number back into context: I don't just deliver a chart, I deliver a clear explanation of what it means for a decision. This belief — that data can inform concrete choices for organizations that don't always have a dedicated data team — guides my work, particularly with SMEs and NGOs across French-speaking Africa, and Senegal in particular."
  },
  about_p4: {
    fr: "Je recherche actuellement un stage dans mon domaine, que je peux mener en parallèle de missions freelance ponctuelles — et je suis disponible immédiatement pour toute opportunité d'emploi. N'hésitez pas à me contacter pour en discuter.",
    en: "I'm currently looking for an internship in my field, which I can combine with occasional freelance work — and I'm available immediately for any job opportunity. Feel free to reach out to discuss."
  },

  skills_eyebrow: { fr: "Compétences", en: "Skills" },
  skills_heading: { fr: "Ce que je sais faire", en: "What I can do" },
  skills_lead: {
    fr: "Un socle technique complet, de la préparation de la donnée à sa mise en récit, renforcé par des certifications récentes.",
    en: "A complete technical foundation, from data preparation to storytelling, backed by recent certifications."
  },
  skill_cat_analysis: { fr: "Analyse de données", en: "Data Analysis" },
  skill_cat_db: { fr: "Bases de données", en: "Databases" },
  skill_cat_prog: { fr: "Programmation", en: "Programming" },
  skill_cat_ai: { fr: "IA appliquée", en: "Applied AI" },
  skill_excel: { fr: "Excel (avancé)", en: "Excel (advanced)" },
  skill_datamodel: { fr: "Modélisation de données", en: "Data modeling" },
  skill_claude: { fr: "Claude (analyse assistée)", en: "Claude (AI-assisted analysis)" },
  skill_automation: { fr: "Automatisation de tâches", en: "Task automation" },

  projects_eyebrow: { fr: "Projets", en: "Projects" },
  projects_heading: { fr: "Réalisations récentes", en: "Recent work" },
  projects_lead: {
    fr: "Trois études de cas complètes, du problème métier jusqu'aux résultats chiffrés.",
    en: "Three complete case studies, from the business problem to the measurable results."
  },
  btn_details: { fr: "Voir le détail", en: "View details" },

  proj1_title: { fr: "Analyse RH & Turnover — DataLendo", en: "HR & Turnover Analysis — DataLendo" },
  proj1_summary: {
    fr: "Analyse SQL des effectifs, performances et turnover pour répondre à 15 questions business RH.",
    en: "SQL analysis of headcount, performance and turnover to answer 15 HR business questions."
  },
  proj1_img_alt: { fr: "Aperçu de l'analyse RH DataLendo en SQL", en: "Preview of the DataLendo HR analysis in SQL" },

  proj2_title: { fr: "Analyse Stratégique AfriMarket", en: "AfriMarket Strategic Analysis" },
  proj2_summary: {
    fr: "Étude data d'une plateforme e-commerce panafricaine : 10 100 commandes analysées pour orienter la stratégie produit et marketing.",
    en: "Data study of a pan-African e-commerce platform: 10,100 orders analyzed to guide product and marketing strategy."
  },
  proj2_img_alt: { fr: "Aperçu du dashboard d'analyse e-commerce AfriMarket en Python", en: "Preview of the AfriMarket e-commerce analysis dashboard in Python" },

  proj3_title: { fr: "Dashboard Santé Publique — Cameroun", en: "Public Health Dashboard — Cameroon" },
  proj3_summary: {
    fr: "Dashboard R Shiny interactif sur 10 000 consultations médicales pour suivre l'activité sanitaire par région.",
    en: "Interactive R Shiny dashboard on 10,000 medical consultations to monitor healthcare activity by region."
  },
  proj3_img_alt: { fr: "Aperçu du dashboard santé publique Cameroun en R Shiny", en: "Preview of the Cameroon public health dashboard in R Shiny" },

  certs_eyebrow: { fr: "Certifications", en: "Certifications" },
  certs_heading: { fr: "Formations & certifications", en: "Training & certifications" },
  certs_lead: {
    fr: "Une montée en compétence continue, validée par des organismes reconnus — chaque certificat est consultable et téléchargeable.",
    en: "Continuous upskilling, validated by recognized organizations — every certificate can be viewed and downloaded."
  },
  cert_view: { fr: "Voir", en: "View" },
  cert_download: { fr: "Télécharger", en: "Download" },

  cert1_title: { fr: "Claude pour l'Analyse des Données", en: "Claude for Data Analysis" },
  cert1_date: { fr: "Kinshasa · Juin 2026", en: "Kinshasa · June 2026" },
  cert2_title: { fr: "Analyse de Données — R, SPSS & Stata", en: "Data Analysis — R, SPSS & Stata" },
  cert2_date: { fr: "Kinshasa · Juin 2026", en: "Kinshasa · June 2026" },
  cert3_title: { fr: "Intelligence Artificielle pour tous", en: "Artificial Intelligence for All" },
  cert3_date: { fr: "Juillet 2026", en: "July 2026" },
  cert4_title: { fr: "Ready, Set, Career", en: "Ready, Set, Career" },
  cert4_date: { fr: "Dakar · Juin 2026", en: "Dakar · June 2026" },
  cert5_title: { fr: "Intelligence Artificielle sur mobile", en: "Artificial Intelligence on Mobile" },
  cert5_date: { fr: "Ouagadougou · Juin 2026", en: "Ouagadougou · June 2026" },
  cert6_title: { fr: "Débuter en Programmation", en: "Getting Started with Programming" },
  cert6_date: { fr: "Mai 2026", en: "May 2026" },

  cv_eyebrow: { fr: "Curriculum Vitae", en: "Curriculum Vitae" },
  cv_heading: { fr: "Un CV complet, prêt pour vos offres", en: "A complete resume, ready for your job offers" },
  cv_text: {
    fr: "Profil, expériences data, formation, compétences et l'ensemble de mes certifications réunis sur une page, avec photo professionnelle — au format PDF, prêt à être partagé avec vos équipes RH.",
    en: "Profile, data experience, education, skills and all my certifications on a single page, with a professional photo — in PDF format, ready to share with your HR team."
  },
  cv_btn_download: { fr: "Télécharger le CV (PDF)", en: "Download resume (PDF)" },
  cv_btn_view: { fr: "Aperçu en ligne", en: "Preview online" },
  cv_hl1_title: { fr: "6 certifications", en: "6 certifications" },
  cv_hl1_sub: { fr: "Data, IA & professionnel", en: "Data, AI & professional" },
  cv_hl2_title: { fr: "3 projets détaillés", en: "3 detailed projects" },
  cv_hl2_sub: { fr: "Résultats chiffrés à l'appui", en: "Backed by measurable results" },
  cv_hl3_title: { fr: "Disponible immédiatement", en: "Available immediately" },
  cv_hl3_sub: { fr: "Stage, offre d'emploi ou freelance", en: "Internship, job opportunity or freelance" },

  contact_eyebrow: { fr: "Contact", en: "Contact" },
  contact_heading: { fr: "Discutons de votre projet", en: "Let's talk about your project" },
  contact_intro: {
    fr: "Actuellement à la recherche d'un stage dans mon domaine, en parallèle de missions freelance — et disponible immédiatement pour toute opportunité d'emploi.",
    en: "Currently looking for an internship in my field alongside freelance work — and available immediately for any job opportunity."
  },
  contact_phone_label: { fr: "Téléphone", en: "Phone" },
  contact_email_label: { fr: "Email", en: "Email" },
  contact_linkedin_label: { fr: "LinkedIn", en: "LinkedIn" },
  contact_github_label: { fr: "GitHub", en: "GitHub" },

  form_name_label: { fr: "Nom", en: "Name" },
  form_email_label: { fr: "Email", en: "Email" },
  form_message_label: { fr: "Message", en: "Message" },
  form_submit: { fr: "Envoyer", en: "Send" },
  form_sending: { fr: "Envoi en cours...", en: "Sending..." },
  form_success: { fr: "Merci ! Votre message a bien été envoyé.", en: "Thank you! Your message has been sent." },
  form_error: {
    fr: "Une erreur est survenue. Merci de réessayer ou de m'écrire directement par email.",
    en: "Something went wrong. Please try again or email me directly."
  },

  modal_problem: { fr: "Problème", en: "Problem" },
  modal_method: { fr: "Méthode", en: "Method" },
  modal_result: { fr: "Résultat", en: "Result" },
  modal_view_code: { fr: "Voir le code", en: "View code" },
  modal_close_aria: { fr: "Fermer", en: "Close" },

  quote_text: {
    fr: "Je viens d'un pays où le talent ne manque pas — ce sont les portes qui manquent. Chaque donnée que j'analyse, chaque dashboard que je construis, est ma façon de prouver que la rigueur et la curiosité n'ont pas de frontières. Je ne demande pas qu'on croie en moi : je demande une chance de le montrer.",
    en: "I come from a place where talent isn't scarce — opportunity is. Every dataset I analyze, every dashboard I build, is my way of proving that rigor and curiosity know no borders. I'm not asking anyone to believe in me: I'm asking for the chance to show it."
  },

  footer_rights: { fr: "Tous droits réservés.", en: "All rights reserved." },
  footer_cv: { fr: "CV", en: "Resume" },
  footer_credit: { fr: "Site créé avec Claude Code", en: "Site built with Claude Code" }
};

// ================================================================
// DONNÉES DES PROJETS (contenu du modal, par langue)
// -> Modifie ou duplique un objet ici pour ajouter/éditer un projet.
//    La clé (ex: "project-1") doit correspondre à data-project="..."
//    sur le bouton "Voir le détail" dans index.html.
// ================================================================
const PROJECTS_DATA = {
  "project-1": {
    url: "https://github.com/Mor2003-04/Analyse_RH_DataLendo",
    fr: {
      title: "Analyse RH & Turnover — DataLendo",
      problem: "Le service RH de DataLendo avait besoin de réponses chiffrées à 15 questions business sur les effectifs, la performance et le turnover, à partir de données réparties dans plusieurs tables.",
      method: "Modélisation d'une base SQLite à partir de 4 tables sources (employés, départements, performances, turnover — plus de 19 500 lignes au total), construction d'une vue enrichie (ancienneté, cohortes d'embauche, catégories de performance) et rédaction de 15 requêtes SQL commentées.",
      result: "Livraison d'un dataset enrichi exploitable et de KPIs de synthèse (effectifs actifs, taux de turnover par département, tendances de performance sur 2022-2024), avec des requêtes documentées et reproductibles."
    },
    en: {
      title: "HR & Turnover Analysis — DataLendo",
      problem: "DataLendo's HR department needed data-driven answers to 15 business questions about headcount, performance and turnover, drawn from data spread across multiple tables.",
      method: "Modeled a SQLite database from 4 source tables (employees, departments, performance, turnover — 19,500+ rows total), built an enriched view (tenure, hiring cohorts, performance categories) and wrote 15 commented SQL queries.",
      result: "Delivered a ready-to-use enriched dataset and summary KPIs (active headcount, turnover rate by department, performance trends over 2022-2024), with documented, reproducible queries."
    }
  },
  "project-2": {
    url: "https://github.com/Mor2003-04/Analyse_AfrikMarket",
    fr: {
      title: "Analyse Stratégique AfriMarket",
      problem: "La direction d'une plateforme e-commerce panafricaine avait besoin d'éclairer ses décisions stratégiques (catégories Électronique, Mode, Beauté, Maison) à partir de 6 mois d'activité commerciale (10 100 commandes dans 8 villes d'Afrique francophone).",
      method: "Audit et nettoyage des données (déduplication, correction orthographique, valeurs manquantes) sous Python (pandas), feature engineering (chiffre d'affaires, marge brute, profit net, valeur vie client), puis analyses multidimensionnelles (performance globale, par catégorie/ville, marketing) restituées via un dashboard Streamlit.",
      result: "CA total analysé de ~2,50 M€ pour un profit net estimé de ~507 K€. Mise en évidence d'un taux de retour de 8,1% (15% en Électronique), d'une récurrence clients de 74%, d'une concentration Pareto (31,6% des clients génèrent 80% du CA), et d'un ROI email marketing ~224× supérieur au canal influenceurs."
    },
    en: {
      title: "AfriMarket Strategic Analysis",
      problem: "The leadership of a pan-African e-commerce platform needed to inform strategic decisions (Electronics, Fashion, Beauty, Home categories) based on 6 months of business activity (10,100 orders across 8 cities in French-speaking Africa).",
      method: "Data audit and cleaning (deduplication, spelling correction, missing values) in Python (pandas), feature engineering (revenue, gross margin, net profit, customer lifetime value), then multidimensional analysis (overall performance, by category/city, marketing) delivered via a Streamlit dashboard.",
      result: "Total analyzed revenue of ~€2.50M for an estimated net profit of ~€507K. Highlighted an 8.1% return rate (15% in Electronics), 74% customer recurrence, Pareto concentration (31.6% of customers generate 80% of revenue), and email marketing ROI ~224× higher than the influencer channel."
    }
  },
  "project-3": {
    url: "https://019f7f6a-58ef-85b5-9ca7-e65db6e22fbb.share.connect.posit.cloud/",
    fr: {
      title: "Dashboard Santé Publique — Cameroun",
      problem: "Les décideurs sanitaires avaient besoin d'une vue consolidée et filtrable de l'activité des centres de santé (consultations, coûts, ruptures de stock) à travers les 10 régions du Cameroun pour identifier les zones à risque.",
      method: "Développement d'un dashboard interactif en R (Shiny) à partir d'une base de 10 000 consultations patients, avec filtres dynamiques par région, période et type de consultation (urgence, suivi, externe, prénatal, vaccination). Visualisations : consultations par région, évolution mensuelle, top pathologies et taux de rupture de stock par région.",
      result: "Cas d'étude construit sur 10 000 enregistrements simulés mais réalistes, mettant en évidence un taux de rupture de stock moyen de 18% (avec des pics proches de 20% dans certaines régions comme le Nord-Ouest), un taux de couverture d'assurance de seulement 33,4%, et un coût total de traitements de 173 278 $ sur la période — des indicateurs directement actionnables pour prioriser les réapprovisionnements."
    },
    en: {
      title: "Public Health Dashboard — Cameroon",
      problem: "Health decision-makers needed a consolidated, filterable view of healthcare center activity (consultations, costs, stock shortages) across Cameroon's 10 regions to identify at-risk areas.",
      method: "Built an interactive R (Shiny) dashboard from a base of 10,000 patient consultations, with dynamic filters by region, period and consultation type (emergency, follow-up, outpatient, prenatal, vaccination). Visualizations: consultations by region, monthly trend, top pathologies, and stock shortage rate by region.",
      result: "Case study built on 10,000 simulated but realistic records, highlighting an average stock shortage rate of 18% (peaking near 20% in regions like Nord-Ouest), an insurance coverage rate of only 33.4%, and total treatment costs of $173,278 over the period — directly actionable indicators for prioritizing restocking."
    }
  }
};

// ================================================================
// GESTION DE LA LANGUE (FR / EN)
// -> Sélecteur dans la navbar. Le choix est mémorisé (localStorage).
// ================================================================
let currentLang = localStorage.getItem("lang") || "fr";
let currentProjectKey = null;

function applyLanguage(lang) {
  currentLang = lang;
  localStorage.setItem("lang", lang);
  document.documentElement.lang = lang;
  document.title = TRANSLATIONS.page_title[lang];

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const entry = TRANSLATIONS[el.dataset.i18n];
    if (entry) el.textContent = entry[lang];
  });

  document.querySelectorAll("[data-i18n-alt]").forEach((el) => {
    const entry = TRANSLATIONS[el.dataset.i18nAlt];
    if (entry) el.alt = entry[lang];
  });

  document.querySelectorAll("[data-i18n-aria]").forEach((el) => {
    const entry = TRANSLATIONS[el.dataset.i18nAria];
    if (entry) el.setAttribute("aria-label", entry[lang]);
  });

  document.querySelectorAll(".lang-btn").forEach((btn) => {
    const isActive = btn.dataset.lang === lang;
    btn.classList.toggle("is-active", isActive);
    btn.setAttribute("aria-pressed", isActive);
  });

  // Si le modal d'un projet est ouvert, on rafraîchit son contenu dans la nouvelle langue
  if (currentProjectKey) {
    renderModal(currentProjectKey);
  }
}

document.querySelectorAll(".lang-btn").forEach((btn) => {
  btn.addEventListener("click", () => applyLanguage(btn.dataset.lang));
});

// ================================================================
// ANNÉE COURANTE DANS LE FOOTER
// ================================================================
document.getElementById("year").textContent = new Date().getFullYear();

// ================================================================
// OMBRE DE LA NAVBAR AU DÉFILEMENT
// ================================================================
const navbarEl = document.getElementById("navbar");
const updateNavbarShadow = () => {
  navbarEl.classList.toggle("is-scrolled", window.scrollY > 8);
};
window.addEventListener("scroll", updateNavbarShadow, { passive: true });
updateNavbarShadow();

// ================================================================
// MENU MOBILE (hamburger)
// ================================================================
const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");

navToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("is-open");
  navToggle.setAttribute("aria-expanded", isOpen);
});

// Ferme le menu mobile après un clic sur un lien (mais pas sur le sélecteur de langue)
navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("is-open");
    navToggle.setAttribute("aria-expanded", "false");
  });
});

// ================================================================
// MODAL DE DÉTAIL PROJET
// ================================================================
const modal = document.getElementById("projectModal");
const modalTitle = document.getElementById("modalTitle");
const modalProblem = document.getElementById("modalProblem");
const modalMethod = document.getElementById("modalMethod");
const modalResult = document.getElementById("modalResult");
const modalLink = document.getElementById("modalLink");

function renderModal(projectKey) {
  const project = PROJECTS_DATA[projectKey];
  if (!project) return;
  const data = project[currentLang];

  modalTitle.textContent = data.title;
  modalProblem.textContent = data.problem;
  modalMethod.textContent = data.method;
  modalResult.textContent = data.result;

  // Le lien "Voir le code" ne s'affiche que si une URL est renseignée
  if (project.url) {
    modalLink.href = project.url;
    modalLink.style.display = "inline-block";
  } else {
    modalLink.style.display = "none";
  }
}

function openModal(projectKey) {
  if (!PROJECTS_DATA[projectKey]) return;
  currentProjectKey = projectKey;
  renderModal(projectKey);
  modal.classList.add("is-open");
  modal.setAttribute("aria-hidden", "false");
}

function closeModal() {
  modal.classList.remove("is-open");
  modal.setAttribute("aria-hidden", "true");
}

document.querySelectorAll(".btn-details").forEach((button) => {
  button.addEventListener("click", () => openModal(button.dataset.project));
});

document.querySelectorAll("[data-close-modal]").forEach((el) => {
  el.addEventListener("click", closeModal);
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeModal();
});

// ================================================================
// FORMULAIRE DE CONTACT
// -> Envoi géré par Formspree (service gratuit, voir README pour
//    la configuration). Affiche un message de statut sans recharger
//    la page.
// ================================================================
const contactForm = document.getElementById("contactForm");
const formNote = document.getElementById("formNote");

contactForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  formNote.textContent = TRANSLATIONS.form_sending[currentLang];

  try {
    const response = await fetch(contactForm.action, {
      method: "POST",
      body: new FormData(contactForm),
      headers: { Accept: "application/json" }
    });

    if (response.ok) {
      formNote.textContent = TRANSLATIONS.form_success[currentLang];
      contactForm.reset();
    } else {
      formNote.textContent = TRANSLATIONS.form_error[currentLang];
    }
  } catch (error) {
    formNote.textContent = TRANSLATIONS.form_error[currentLang];
  }
});

// ================================================================
// INITIALISATION DE LA LANGUE AU CHARGEMENT
// ================================================================
applyLanguage(currentLang);
