# Travaux Pratiques : intégrer une "Card" en HTML / CSS

## :link: Voir l'intégration ici

:one: [solution avec grid](https://littlebirdwarrior.github.io/tp-card/tp-grid)

:two: [solution avec flex](https://littlebirdwarrior.github.io/tp-card/tp-flex)

:three: [solution avec tailwind](https://littlebirdwarrior.github.io/tp-card/tp-card/tp-tailwind)

### :watch: Temps passé :

- solution flex: 2h
- solution grid: 3h
- solution tailwind: 6h

## :question: Faut faire quoi ?

- Cloner ce repo,
- Puis comme dirait *R.* : "next, next, next",
- Ton livrable sera l'URL de ton repo sur Github ou Gitlab

*On a combien de temps ?*

- Tu fais ce que tu veux avec les dispos et l'envie que tu as
- Si tu n'arrives pas à avancer, tu me préviens et on voit ça ensemble
- Dès que c'est fini, tu me préviens et on voit ça ensemble

## :pen: Consignes globales

- Tu es censé réaliser ce TP **sans aide extérieure**, mais ce n'est pas grave si tu le fais&#8239;: dans ce cas, laisse un commentaire indiquant où (et pourquoi) tu as cherché de l'aide.
- Il est **inutile de reproduire à la perfection** les couleurs exactes, les arrondis ou autre détail décoratif&hellip; mais si ça t'intéresse&nbsp;:
  - la valeur de l'arrondi est de `16px`,
  - la valeur de gouttière est de `12px` sur petit écran et `24px` sur grand écran,
  - et la couleur de fond de la card est `aliceblue`.
- Merci de **noter le temps** que tu as passé pour réaliser ton TP.
- Si tu vois des gros problèmes d'accessibilité, merci de les corriger ;)

Deux versions de ce TP sont possibles **(vous choisissez la version que vous voulez)** (vous pouvez faire les deux pour comparer)&#8239;:

- Version 1 : HTML et CSS "vanilla"
- Version 2 : Tailwind CSS

Les consignes spécifiques pour chaque version sont disponibles sous l'image d'illustration&hellip;

![Consignes pour la card](tp/consignes.png "Consignes pour la card]")

#### :one: Version 1 : HTML / CSS vanilla

Reproduire la Card telle que présentée dans l'image `consignes.png`, en HTML et CSS :

1. Opter pour une structure HTML adaptée dans le fichier `index.html`.
2. Appliquer les styles CSS sous le commentaire `/* Ma solution */` dans le fichier `styles.css`.

**Note :** Les assets (images) sont dans le dossier `/images`.

**Note :** Merci de te renseigner pour comprendre l'intérêt de `@layer` présent dans le fichier `styles.css`.

#### :two: Version 2 : Tailwind

Reproduire la Card telle que présentée dans l'image `consignes.png`, à l'aide de Tailwind.

Se servir de l'outil en ligne <https://play.tailwindcss.com/> *(juste parce que ça va plus vite que d'installer plein d'outillage)* et **placer la partie `@layer reset {...}` dans l'onglet `CSS` de Tailwind Play** pour appliquer les styles sur `body`.

URL des assets *(uniquement nécessaires si vous passez par Tailwind Play)* :

- icone "homme" : <https://assets.codepen.io/9425/020-man-1.svg>
- icone "femme" : <https://assets.codepen.io/9425/022-woman-1.svg>
- icone "licorne" : <https://assets.codepen.io/9425/002-unicorn.svg>
- icone "filters" : <https://assets.codepen.io/9425/icon-filters.svg>
- icone "edit" : <https://assets.codepen.io/9425/icon-edit.svg>
- icone "charts" : <https://assets.codepen.io/9425/icon-charts.svg>
