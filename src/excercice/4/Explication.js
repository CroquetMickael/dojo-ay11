

export class Explication extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = `
        <details name="exercice">
            <summary><h1 class="text-3xl font-bold underline" id="ex4">Exercice 4</h1></summary>
            <p>
                Dans cet exercice, vous devez modifier le HTML se trouvant dans le
                fichier <code>src/excercice/4/excercice.html</code>, Nous allons
                travailler sur la gestion de l'affichage de données via un tableau
                et via une liste.
            </p>

            <h2 class="text-2xl font-bold underline">Objectifs</h2>
            <ul>
                <li>Structurer le formulaire proprement</li>
                <li>Rendre l'erreur accessible</li>
                <li>Grouper les champs de même nature avec la balise adéquate</li>
            </ul>

            <h2 class="text-2xl font-bold underline">Explications</h2>
            <h3>La structure du formulaire</h3>
            <p>
                Un formulaire doit avoir une balise <code>form</code> pour
                structurer les éléments du formulaire. De plus, chaque élément du
                formulaire (inputs) doivent être rattaché a un attribut
                <code>label</code> pour être accessible.
            </p>
            <h3>Les groupes de formulaire</h3>
            <p>
                Un groupe de formulaire doit être structuré avec une balise
                <code>fieldset</code> pour structurer les éléments du groupe. De
                plus, chaque groupe doit avoir un attribut <code>legend</code> pour
                décrire le groupe.
            </p>

            <h3>Les erreurs</h3>
            <p>
                De plus, un formulaire qui contient des erreurs. Ces élément doivent
                avoir un attribut un attribut
                <code>role="alert"</code> pour être accessible.
            <p>Ils doivent aussi
                être décrit par un attribut <code>aria-describedby</code> qui pointe
                vers l'élément qui décrit l'erreur.</p>
            </p>
        </details>
`
    }
}
window.customElements.define('exercice-4', Explication);