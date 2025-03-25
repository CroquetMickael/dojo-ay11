

export class Explication extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = `
        <details name="exercice">
            <summary><h1 class="text-3xl font-bold underline" id="ex3">Exercice 3</h1></summary>
            <p>
                Dans cet exercice, vous devez modifier le HTML se trouvant dans le
                fichier <code>src/excercice/3/excercice.html</code>, Nous allons
                travailler sur la gestion de l'affichage de données via un tableau
                et via une liste.
            </p>

            <h2 class="text-2xl font-bold underline">Objectifs</h2>
            <ul>
                <li>Modifier le tableau existant pour qu'il soit accessible.</li>
                <li>
                    Modifier le listing existant pour avoir un usage + cohérent.
                </li>
            </ul>

            <h2 class="text-2xl font-bold underline">Explications</h2>
            <h3>Les tableaux</h3>
            <p>
                Un tableau doit avoir plusieurs élément pour être accessible, il
                doit avoir une balise <code>thead</code> et <code>tbody</code> pour
                structurer les données. De plus, les balises <code>th</code> doivent
                avoir un attribut <code>scope</code> pour définir si la cellule est
                une colonne ou une ligne.
            </p>

            <p>
                De plus un tableau doit avoir une balise <code>caption</code> ou un
                aria-label, il est principalement conseiller d'utiliser la balise
                <code>caption</code> au maximum.
            </p>

            <h3>Les listes</h3>
            <p>
                Une liste de titre et de data doit être structuré avec une balise <code>dl</code> pour structurer les
                éléments de la liste.

                De plus, chaque titre doit être structuré avec une balise <code>dt</code> et chaque data doit être
                structuré avec une balise <code>dd</code>.
            </p>
        </details>

`
    }
}
window.customElements.define('exercice-3', Explication);