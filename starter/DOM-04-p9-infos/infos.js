// 04-DOM : DONNEZ DU STYLE À VOS ÉLÉMENTS
/*
SOURCE : https://github.com/oc-courses/javascript-web
*/

/*
DOM - PREPA 9 : « Infos » : informations sur un élément
Récupérez la largeur et la hauteur de la section d'id "contenu"
et affichez les deux informations dans une liste
(un item pour la largeur et un item pour la hauteur)
que vous insérez dans la section d'id "infos" après le titre
*/

const test = {
    getSection: document.getElementById('contenu'),
    infos: [],
    informations() {
        this.infos.push(this.getSection.offsetWidth);
        this.infos.push(this.getSection.offsetHeight);
        const getSection2 = document.getElementById('infos');
        const createUl = document.createElement('ul');
        createUl.setAttribute('id', 'liste');
        getSection2.insertAdjacentElement('beforeend', createUl);
        this.infos.forEach(info => {
            const createLi = document.createElement('li');
            createLi.textContent = info;
            createUl.insertAdjacentElement('beforeend', createLi);
        })
    }
}

test.informations();
