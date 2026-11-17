# Carte produit en JSX — React

Exercice réalisé pendant la formation GoMyCode : construire une carte produit en découpant l'affichage en petits composants JSX.

## Ce que fait le projet

- Affiche une carte produit (casque Bluetooth) : image, nom, prix en F CFA et description.
- Les données viennent d'un objet unique (`src/data/product.js`) importé par chaque composant.
- Affiche un message de salutation : « Bonjour, Élie ! » avec un avatar si un prénom est défini dans `App.js`, sinon « Bonjour ! » sans image.

## Notions travaillées

- Syntaxe JSX et expressions JavaScript dans le rendu
- Découpage en composants (`Name`, `Price`, `Description`, `Image`)
- Import / export de modules ES
- Rendu conditionnel (opérateur ternaire, `&&`)
- Composants React-Bootstrap (`Card`, `Container`, `Row`, `Col`, `Image`)
- Fichiers statiques servis depuis `public/` (`public/images/headset.jpg`)

## Stack

- React 19
- React-Bootstrap 2
- Create React App (`react-scripts` 5)

## Lancer le projet

```bash
npm install
npm start
```

L'application s'ouvre sur http://localhost:3000.
