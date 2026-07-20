# Portfolio — Mor SAMB

Portfolio professionnel de **Mor SAMB**, data analyst et étudiant économiste, présentant ses compétences et projets d'analyse de données à destination de recruteurs et clients potentiels (entreprises, PME, ONG) en Afrique francophone et à l'international.

🔗 **Site en ligne** : [mor-samb-portfolio.vercel.app](https://mor-samb-portfolio.vercel.app)

## Stack technique

Site statique en **HTML / CSS / JavaScript** natif, sans framework ni backend.

- `index.html` — structure de la page (sections par ancre : Hero, À propos, Compétences, Projets, Contact)
- `style.css` — styles et palette de couleurs (variables CSS en haut du fichier)
- `script.js` — menu mobile, modal des projets, envoi du formulaire de contact
- `images/` — photo de profil et visuels des projets

## Fonctionnalités

- 100 % responsive (mobile, tablette, desktop)
- Fiches détaillées par projet (problème / méthode / résultat) via une fenêtre modale
- Formulaire de contact relié à [Formspree](https://formspree.io)
- SEO on-page de base (balises title, meta description, structure de titres)

## Déploiement

Le site est déployé sur [Vercel](https://vercel.com). Chaque modification poussée sur la branche `main` déclenche un redéploiement automatique.

## Développement local

Aucune dépendance à installer. Pour prévisualiser le site en local, servir le dossier avec un serveur statique, par exemple :

```bash
python -m http.server 5500
```

Puis ouvrir `http://localhost:5500`.

---

Site créé avec [Claude Code](https://claude.com/claude-code).
