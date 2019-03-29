# english-dictionary-client
Client-side code for the WF Technical Test

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

'npm start' runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

## Open questions

### Qu'est-ce que tu peux dire sur JavaScript ? 
Le JavaScript est un langage interprété (par opposition à compilé) employé dans le développement web côté front-end que back-end, notamment avec Node.js.
On note que Brendan Eich avait initialement développé un langage de script côté serveur (LiveScript), avant que Netscape ne travaille au développement de JavaScript, 
une version orientée client de LiveScript.
Ceci abouti à la defintion d'ECMAScript, un standart de langage de programmation que respecte JavaScript.
Actuellement c'est la la 8e édition (juin 2017) du standard ECMA-262 qui a cours. 

#### Front-End
Sur le poste client c'est le navigateur web qui prend en charge l'exécution des scripts. Intégré directement au sein des pages web, JavaScript sert à contrôler les interactions utilisateur, ou à manipuler le DOM ou encore pour réaliser des applications dynamiques, des transitions, des animations. Il permet également de découpler l'échange de données client/serveur de l'affichage d'une page web, ce qui permet de modifier le contenu des pages web sans les recharger (Ajax). JSON (JavaScript Object Notation) est un format de données strcuturées utilisant la notation des objets JavaScriptavec plusieurs avantages sur le XML.

#### Back-End

JavaScript peut également être utilisé comme langage de programmation sur un serveur HTTP à l'image des langages comme PHP, ASP, etc. D'ailleurs le projet CommonJS travaille dans le but de spécifier un écosystème pour JavaScript en dehors du navigateur (par exemple sur le serveur ou pour les applications de bureau natives). 

Parmi eux, on pourra distinguer Node.js, une plateforme polyvalente de développement d'applications réseau se basant sur le moteur JavaScript V8 et les spécifications CommonJS. 

### Ses pros et ses cons ? 

Les pros des uns sont les cons des autres. Toutefois:

#### Pros

* Vitesse: Le code  est executé sans compilation préalable sur le navigateur côté & client.

* Popularité: Le JavaScript est ancré dans le web, d'ailleurs les mises à jours sont fréquentes. Relativement facile à lire (et donc à apprendre) de nombreuses ressources existent en ligne, fonctionne avec de nombreux autres langages et sur de nombreuses plateformes de sorte que ses fonctionalités sont aisément étendues.
The resources to learn JavaScript are numerous and JavaScript is relatively easy to learn. Hence the overall versatility of Javascript, updates are frequent and its functionalities are easily extended.

* Scalabilité: Une partie de la charge est déportée côté client, il est par ailleurs relativement aisé de dimensionner dynamiquement la capacité des charge des serveurs.

#### Cons

* Sécurité: Le code côté client s'executant chez l'utilisateur ceci peut être utilisé à des fins malhonnêtes.The client-side code executes on the users’ computer where this can be exploited for malicious purposes.
    
* Spécificité des moteurs (navigateurs): Le JavaScript est parfois interprété différement selon les navigateurs, ce qui est à prendre en compte, notamment au moment des mises à jours.

### Une comparaison avec d'autres langages ?
C'est un langage interprété (comme R) par opposition aux langages compilés (C++).

#### Séparation des instructions

Comme pour le C chaque instruction doit normalement se conclure par un point-virgule sous réserve d'obetenir des effets inattendus et _a priori_ indésirables.

#### Typage des variables

En JavaScript les variables sont typées dynamiquement par opposition au typage statique (C++), le typage est plus fort que dans R.

#### Passage par référence 

L'évaluation des expressions ne produit pas une donnée directement mais une référence vers une donnée là ou d'autre langage permettent un passage par valeur (C++, R)

#### Déclaration et portée lexicale des variables

En JavaScript, la portée lexicale d'une variable peut être de deux types:
* _var_ (niveau de la fonction, la variable est pré-initialisée)
* _let_ ou _const_ (niveau du bloc)

En JavaScript une fonction capture par référence son environnement lexical externe (Fermetures lexicales), il existe par ailleurs pluseurs façon de déclarer une variable globale.

#### Prototypage d'objets

JavaScript est un langage orienté objet à prototype: les bases du langage et ses principales interfaces sont fournies par des objets chacun équipés de constructeurs permettant de créer leurs propriétés.

#### Fonction anonymes et invocation immédiate

Il est possible de décrire des fonctions anonymes, donc sans nom. Il est par ailleurs parfois utile d'encapsuler du code dans une fonction pour invoquer cette dernière juste aprèsen bénéficiant des variables disponibles dans la portée lexicale.

### Conclusion

Un certains nombre de traits du JavaScript lui confère une certaine souplesse paradigmatique (OO, fonctionnel...)

**Bonus : Quel éditeur de texte / IDE utilises-tu ? Pourquoi ?**

J'utilise actuellement VSCode pour la seule raison de suivre efficacement le bootcamp. De fait c'est à présent l'éditeur sur lequel je suis le plus efficace aujourd'hui pour ce qui concerne le développement web. Auparavant j'utilisais Rstudio, moins conçu pour le web. J'apprécie également d'être efficace avec les éditeurs disponibles via le temrinal pour de courtes éditions.

Je pense qu'il est autant nécessaire de bien connaitre son éditeur mais aussi d'être capable de remttre en question le choix de l'éditeur en fonction du contexte.
