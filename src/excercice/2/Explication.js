

export class Explication extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = `
        <details name="exercice">
            <summary><h1 class="text-3xl font-bold underline" id="ex2">Exercice 2</h1></summary>
            <p>
                Dans cet exercice, vous devez modifier le HTML se trouvant dans le
                fichier <code>src/excercice/2/excercice.html</code>, une page HTML
                doit avoir un contenu cohérent pour décrire la navigation, le
                contenu et le footer.
            </p>

            <h2 class="text-2xl font-bold underline">Objectifs</h2>
            <ul>
                <li>
                    Modifier les div pour avoir les balises
                    <code>nav / main / footer</code>
                </li>
                <li>
                    Ajouter un titre à la page avec un H1 (pensez à le mettre dans la
                    balise qui correspond 😊 )
                </li>
                <li>
                    Ajouter un titre à chaque section de type H2
                </li>
            </ul>

            <h2 class="text-2xl font-bold underline">Explications</h2>
            Une page HTML doit contenir un contenu cohérent pour décrire la page,
            de ce fait il est important de structurer le contenu de la page avec
            des balises sémantiques pour une meilleure accessibilité. C'est pour
            cela que HTML 5 a introduit de nouvelles balises sémantiques pour
            structurer le contenu de la page.

            <ul>
                <li><code>nav</code> : pour la navigation</li>
                <li><code>main</code> : pour le contenu principal</li>
                <li><code>footer</code> : pour le footer</li>
            </ul>

            <h3>Le titre de page</h3>
            <p>
                Chaque page doit avoir un titre de page pour décrire le
                contenu de la page. Le titre de la page doit être sous format h1.
            </p>

            <h3>Hierarchie des titres</h3>
            <p>
            Les lecteurs d'écran et autres technologies d'assistance utilisent la hiérarchie des titres pour aider les utilisateurs à naviguer et comprendre la structure du contenu de la page.
            </p>
            <br/>
            <p>
             Une hiérarchie de titres bien définie aide les utilisateurs à scanner rapidement la page et à trouver les informations qu'ils recherchent.
            </p>

            <h3>La balise main</h3>
            <p>
                L'élément HTML <code>main</code> représente le contenu principal de
                la page.
            </p>

            <h3>La balise footer</h3>
            <p>
                L'élément HTML <code>footer</code> représente un pied de page.
            </p>

            <h3>La balise nav</h3>
            <p>
                L'élément HTML <code>nav</code> représente une section d'une page ayant des liens vers d'autres pages ou des fragments de cette page. Autrement dit, c'est une section destinée à la navigation dans un document (avec des menus, des tables des matières, des index, etc.).

                <br/>
            </p>
        </details>
`
    }
}
window.customElements.define('exercice-2', Explication);