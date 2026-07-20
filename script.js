// ================================================================
// DONNÉES DES PROJETS
// -> Modifie ou duplique un objet ici pour ajouter/éditer un projet.
//    La clé (ex: "project-1") doit correspondre à data-project="..."
//    sur le bouton "Voir le détail" dans index.html.
// ================================================================
const PROJECTS_DATA = {
  "project-1": {
    title: "Analyse RH & Turnover — DataLendo",
    problem: "Le service RH de DataLendo avait besoin de réponses chiffrées à 15 questions business sur les effectifs, la performance et le turnover, à partir de données réparties dans plusieurs tables.",
    method: "Modélisation d'une base SQLite à partir de 4 tables sources (employés, départements, performances, turnover — plus de 19 500 lignes au total), construction d'une vue enrichie (ancienneté, cohortes d'embauche, catégories de performance) et rédaction de 15 requêtes SQL commentées.",
    result: "Livraison d'un dataset enrichi exploitable et de KPIs de synthèse (effectifs actifs, taux de turnover par département, tendances de performance sur 2022-2024), avec des requêtes documentées et reproductibles.",
    url: "https://github.com/Mor2003-04/Analyse_RH_DataLendo"
  },
  "project-2": {
    title: "Analyse Stratégique AfriMarket",
    problem: "La direction d'une plateforme e-commerce panafricaine avait besoin d'éclairer ses décisions stratégiques (catégories Électronique, Mode, Beauté, Maison) à partir de 6 mois d'activité commerciale (10 100 commandes dans 8 villes d'Afrique francophone).",
    method: "Audit et nettoyage des données (déduplication, correction orthographique, valeurs manquantes) sous Python (pandas), feature engineering (chiffre d'affaires, marge brute, profit net, valeur vie client), puis analyses multidimensionnelles (performance globale, par catégorie/ville, marketing) restituées via un dashboard Streamlit.",
    result: "CA total analysé de ~2,50 M€ pour un profit net estimé de ~507 K€. Mise en évidence d'un taux de retour de 8,1% (15% en Électronique), d'une récurrence clients de 74%, d'une concentration Pareto (31,6% des clients génèrent 80% du CA), et d'un ROI email marketing ~224× supérieur au canal influenceurs.",
    url: "https://github.com/Mor2003-04/Analyse_AfrikMarket"
  },
  "project-3": {
    title: "Dashboard Santé Publique — Cameroun",
    problem: "Les décideurs sanitaires avaient besoin d'une vue consolidée et filtrable de l'activité des centres de santé (consultations, coûts, ruptures de stock) à travers les 10 régions du Cameroun pour identifier les zones à risque.",
    method: "Développement d'un dashboard interactif en R (Shiny) à partir d'une base de 10 000 consultations patients, avec filtres dynamiques par région, période et type de consultation (urgence, suivi, externe, prénatal, vaccination). Visualisations : consultations par région, évolution mensuelle, top pathologies et taux de rupture de stock par région.",
    result: "Dashboard exploitant 10 000 enregistrements réels, mettant en évidence un taux de rupture de stock moyen de 18% (avec des pics proches de 20% dans certaines régions comme le Nord-Ouest), un taux de couverture d'assurance de seulement 33,4%, et un coût total de traitements de 173 278 $ sur la période — des indicateurs directement actionnables pour prioriser les réapprovisionnements.",
    url: "https://019f7f6a-58ef-85b5-9ca7-e65db6e22fbb.share.connect.posit.cloud/"
  }
};

// ================================================================
// ANNÉE COURANTE DANS LE FOOTER
// ================================================================
document.getElementById("year").textContent = new Date().getFullYear();

// ================================================================
// MENU MOBILE (hamburger)
// ================================================================
const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");

navToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("is-open");
  navToggle.setAttribute("aria-expanded", isOpen);
});

// Ferme le menu mobile après un clic sur un lien
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

function openModal(projectKey) {
  const data = PROJECTS_DATA[projectKey];
  if (!data) return;

  modalTitle.textContent = data.title;
  modalProblem.textContent = data.problem;
  modalMethod.textContent = data.method;
  modalResult.textContent = data.result;

  // Le lien "Voir le code" ne s'affiche que si une URL est renseignée
  if (data.url) {
    modalLink.href = data.url;
    modalLink.style.display = "inline-block";
  } else {
    modalLink.style.display = "none";
  }

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

  formNote.textContent = "Envoi en cours...";

  try {
    const response = await fetch(contactForm.action, {
      method: "POST",
      body: new FormData(contactForm),
      headers: { Accept: "application/json" }
    });

    if (response.ok) {
      formNote.textContent = "Merci ! Votre message a bien été envoyé.";
      contactForm.reset();
    } else {
      formNote.textContent = "Une erreur est survenue. Merci de réessayer ou de m'écrire directement par email.";
    }
  } catch (error) {
    formNote.textContent = "Une erreur est survenue. Merci de réessayer ou de m'écrire directement par email.";
  }
});
