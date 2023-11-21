// 02-DOM : PARCOUREZ LE DOM
/*
SOURCE : https://github.com/oc-courses/javascript-web
*/

/*
 DOM - PREPA 3 : « Instruments » : attributs et classes
- Créez une fonction getInfosLiens qui doit afficher :
    - le nombre total de liens dans la page web ;
    - la cible du premier et du dernier lien.
    N.B. Cette fonction doit afficher un résultat correct, quel que soit le nombre de liens présents dans la page.
- Ajoutez un nouvel instrument à la page web, puis vérifiez le nouveau résultat de votre programme.
    <li id="clavecin" class="cordes pincees">
        Le <a href="https://fr.wikipedia.org/wiki/Clavecin">clavecin</a>
    </li>
- Écrivez la fonction possede qui vérifie qu'un élément avec un certain id possède une classe
- Testez grâce à cette foncion 
    - si l'élément d'id "saxophone" possède la classe "bois" (doit afficher true)
    - si l'élément d'id "saxophone" possède la classe "cuivre" (doit afficher false)
    - si l'élément d'id "trompette" possède la classe "cuivre" (doit afficher true)
    - si l'élément d'id "contrebasse" possède la classe "cordes" (doit afficher "Aucun élément ne possède l'id contrebasse")
*/

function getInfosLiens(element) {
    const x = document.querySelectorAll(element);
    const premierElt = x[0];
    const dernierElt = x[x.length - 1];
    console.log(x.length);
    console.log(premierElt.getAttribute('href'));
    console.log(dernierElt.getAttribute('href'));
}

function possede(id, classe) {
    const c = document.getElementById(id)
    if (c === null) {
        console.log(`L'id ${id} n'existe pas.`)
    } else {
        const k = c.classList.contains(classe);
        if (k === true) {
            console.log(`L'id ${id} contient une classe ${classe}.`);
        } else {
            console.log(`L'id ${id} ne contient pas d'attribut "class".`);
        }
    }
}

let p = document.createElement('li');
p.setAttribute('id', 'guitare');
p.setAttribute('class', 'cordes');
p.innerHTML = 'La <a href="https://wikipedia.org/wiki/Guitare">guitare</a>'
let h = document.querySelector('ul');
h.insertAdjacentElement("beforeend", p);


getInfosLiens('a');
possede('saxophone', 'bois');
possede('saxophone', 'cuivre');
possede('trompette', 'cuivre');
possede('contrebasse', 'corde');
