/*
Exercices qui accompagnent le tuto en anglais de Christian Heilmann :
« The essentials of DOM scripting in 10 minutes »,
http://icant.co.uk/articles/domessentials/
=> voir traduction française sur transparents (js-cours-DOM.pdf)
*/

/* 1. Cibler l'élément d'id nav */

document.getElementById('nav');

/* 2. Récupérer tous les li */

document.querySelectorAll('li');

/* 3. Cibler le 4e li */

document.querySelector('li:nth-child(4)');

/* 4. Compter le nombre de li dans la page */

document.getElementById('nav').children.length;

/* 5. Cibler le premier li pair */

document.querySelector('li:nth-child(odd)');

/* 6. Récupérer tous les li de classe impair */

document.querySelectorAll('.impair');

/* a) afficher ce qu'on obtient */

const impairs = document.querySelectorAll('.impair');
for (const impair of impairs) {
    console.log(impair);
}

/* b) afficher le 2e li de classe impair */

console.log(impairs[1]);

/* c) afficher chacun des li impair */

console.log(document.querySelectorAll('.impair'));

/* d) compter le nombre de li de classe impair dans la page */


/* 7. Cibler le 4e li puis, à partir de là, cibler son frère juste avant lui */

let x = document.querySelectorAll('li');
let o = x[3];
let d = o.previousSibling;
console.log(d);

/* 8. Cibler le 4e li puis, à partir de là, cibler le suivant */

x = document.querySelectorAll('li');
o = x[3];
d = o.nextSibling;
console.log(d);


/* 9. Cibler le parent du 4e li */

console.log(x.parentNode); //undefined

/* 10. Récupérer tous les enfants de l'ul */

let f = document.querySelector('ul').children;

/* a) afficher ce qu'on obtient */

for (const fElement of f) {
    console.log(fElement);
}

/* b) cibler le 1er enfant de l'ul */

console.log(document.querySelector('ul').children[0]); //si firstchild c'est le backspace

/* c) cibler le dernier enfant de l'ul */

console.log(document.querySelector('ul').children[4]); //si lastchild c'est le backspace

/* c) cibler le 4e enfant de l'ul */

console.log(document.querySelector('ul').children[3]);

/* 11. Chaînage de méthodes - que retournent les expressions suivantes ? */
/* a) document.getElementById("nav"). getElementsByTagName("li")[3].firstChild */

//l'élément a du 4e élément

/* b) document. getElementsByTagName("li")[2].childNodes[3].firstChild */

//erreur car pas de 3e enfant dans le 3e li (et puis childnode[3].firstchild veut rien dire)

/* c) document. getElementsByTagName("li")[2].firstChild.firstChild */

//Le texte "About me" du 3 élément a du 3e li

/* 12. Afficher les propriétés (nom du nœud, type de nœud, valeur du nœud) d'un nœud
*/
/* a) du noeud document.getElementById("nav").getElementsByTagName("li")[3].firstChild */

// a, 1, null

/* b) du noeud document.getElementById("nav").getElementsByTagName("a")[2].firstChild */

//text, 3, Photos

/* 13. Changer le texte "Photos" en "Visuals" */

document.getElementById('nav').getElementsByTagName('a')[2].firstChild.nodeValue = 'Visuals';

/* 14. Modifier les attributs d'un élément */
/* a) Changer la valeur de l'attribut href du lien "Photos" en "photos.php" */

document.getElementById('nav').getElementsByTagName('a')[2].setAttribute('href', 'photos.php');

/* a) Lui ajouter un attribut title avec la valeur "voir mes photos" */

document.getElementById('nav').getElementsByTagName('a')[2].setAttribute('title', 'voir mes photos');

/* 15. Supprimer le dernier li du menu
       (faites-le en utilisant la méthode querySelector pour cible l'ul
        et querySelectorAll pour cibler les li)
*/

x = document.getElementById('nav');
o = x.getElementsByTagName('li')[5];
x.removeChild(o);

/* 16. Ajouter un li à la fin de la liste */

x = document.getElementById('nav');
o = document.createElement('li');
x.appendChild(o);


/* 17. Ajouter un lien dans le menu. Ce lien doit
	- venir avant "photos",
	- afficher le texte "Bibliographie",
	- pointer vers la page "biblio.html" et
	- afficher au survol la boîte de dialogue avec le texte "consulter ma bibliographie"  */

x = document.getElementById('nav');
o = document.createElement('li');
x.appendChild(o);
let g = document.getElementById('nav').lastChild;
let h = document.createElement('a');
h.appendChild(document.createTextNode('Bibliographie'));
h.setAttribute('href', 'biblio.html');
h.setAttribute('title', 'consulter ma bibliographie');
g.appendChild(h);





/* 18. Modifier le lien "Photos"
	  - changer son libellé en "Visuals" 
	  - ajouter une boîte de dialogue au survol avec le texte "voir la galerie" 
	  - changer la cible du lien en "visuals.html " */

x = document.getElementById('nav').getElementsByTagName('li')[3].firstChild;
x.setAttribute('title', 'voir la galerie');
x.replaceChild();
x.nodeValue = 'Visuals';


/* 19. Dupliquer le li "Photos" et s'en servir pour ajouter un lien
	   - juste après le lien "Photos"
	   - dont le libellé est "Visuals" 
	   - avec une boîte de dialogue au survol qui affiche le texte "voir la galerie" 
	   - qui pointe vers la page "visuals.html " */

x = document.getElementById('nav')
o = x.getElementsByTagName('li')[3];
a = o.cloneNode(true);



/* 20. Remplacer le dernier lien par le texte (non cliquable) "Contact : monmail@gmail.com"*/

x = document.getElementById('nav')
o = x.lastChild.lastChild;
o.nodeValue = 'monmail@gmail.com';
