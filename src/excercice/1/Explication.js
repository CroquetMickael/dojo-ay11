

export class Explication extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = `
        <details name="exercice">
            <summary><h1 class="text-3xl font-bold underline" id="ex1">Exercice 1</h1></summary>
            Dans cet exercice, vous devez modifier le HTML se trouvant dans le
            fichier <code>src/excercice/1/excercice.html</code> en ajoutant
            différente information dans le block <code>html</code>.

            <h2 class="text-2xl font-bold underline">Objectifs</h2>
            <ul>
                <li>Modifier le titre de la page avec la balise <code>title</code></li>
                <li>Ajouter une langue cohérente (ici en français) en propriété de la balise <code>html</code></li>
            </ul>

            <h2 class="text-2xl font-bold underline">Explications</h2>
            Une page HTML doit contenir un titre cohérent pour un lecteur d'écran
            et son référencement. De plus, la langue de la page doit être définie
            pour une meilleure accessibilité car les lecteurs d'écran peuvent lire
            le contenu de la page dans la langue définie.
        </details>
`
    }
}
window.customElements.define('exercice-1', Explication);