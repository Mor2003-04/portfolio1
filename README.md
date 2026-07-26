# Portfolio — Mor SAMB

Portfolio professionnel de **Mor SAMB**, data analyst et étudiant économiste, présentant ses compétences et projets d'analyse de données à destination de recruteurs et clients potentiels (entreprises, PME, ONG) en Afrique francophone et à l'international.

🔗 **Site en ligne** : [mor-samb-portfolio.vercel.app](https://mor-samb-portfolio.vercel.app)

## Stack technique

Site statique en **HTML / CSS / JavaScript** natif, sans framework ni backend.

- `index.html` — structure de la page (sections par ancre : Hero, À propos, Compétences, Projets, Certifications, CV, Contact)
- `style.css` — styles et palette de couleurs (variables CSS en haut du fichier)
- `script.js` — menu mobile, modal des projets, FR/EN, ombre navbar, envoi du formulaire de contact
- `images/` — photo de profil
- `certificates/` — certificats et attestations (PDF), affichés dans la section Certifications
- `cv/` — CV généré en PDF (`Mor-SAMB-CV.pdf`) + sources pour le régénérer (voir ci-dessous)

## Fonctionnalités

- 100 % responsive (mobile, tablette, desktop)
- Fiches détaillées par projet (problème / méthode / résultat) via une fenêtre modale
- Section Certifications avec liens "Voir" / "Télécharger" vers chaque certificat (PDF)
- CV téléchargeable en un clic (boutons dans la navbar, le hero, la section À propos et une section CV dédiée)
- Formulaire de contact relié à [Formspree](https://formspree.io)
- SEO on-page de base (balises title, meta description, structure de titres)

## Régénérer le CV PDF

Le CV (`cv/Mor-SAMB-CV.pdf`) est généré à partir de `cv/cv-template.html` (photo encodée en base64) via l'impression PDF headless d'un navigateur Chromium. Pour le régénérer après une modification du template :

```bash
node cv/build.js   # injecte la photo en base64 -> cv/_cv-render.html
```

Puis imprimer `cv/_cv-render.html` en PDF sans marges/en-têtes (ex. Chrome/Edge headless `--print-to-pdf`) vers `cv/Mor-SAMB-CV.pdf`.

## Déploiement

Le site est déployé sur [Vercel](https://vercel.com). Chaque modification poussée sur la branche `main` déclenche un redéploiement automatique.

## Développement local

Aucune dépendance à installer. Pour prévisualiser le site en local, servir le dossier avec un serveur statique, par exemple :

```bash
python -m http.server 5500
```

Ou, si Python n'est pas installé mais Node.js l'est :

```bash
node serve.js
```

Puis ouvrir `http://localhost:5500`.

---

Site créé avec [Claude Code](https://claude.com/claude-code).
