import normalize from "../../normalize";

const template = document.createElement("template");
template.innerHTML = `
	<style>
		section {
			background-color: #006666;
			color: white;
			padding-block: 7rem;
			paddin-inline: 5vw;
			display: flex;
			flex-direction: column;
			align-items: center;
			text-align: center;
		}
		h2 {
			font-size: 2.5rem;
			margin: 0;
			width: 380px;
		}
		.cta-button {
			color: #004040;
			margin-top: 1.5rem;
			padding: 1.2rem 2.5rem;
			border-radius: 5px;
			letter-spacing: 1px;
			background-color: white;
			font-weight: 500;
			font-size: 1.5rem;
			cursor: pointer;
			transition: ease-in 200ms;
			text-decoration: none;
		}
		@media only screen and (min-width: 740px) {
			h2 {
				font-size: 3rem;
				width: auto;
				text-wrap: wrap;
			}
			section {
				padding-block: 5rem;
			}
			.cta-button:hover {
				background-color: #004040;
				color: white;
			}
		}

	</style>
	<section>
		<h2>¿Te interesa trabajar conmigo?</h2>
		<a href="contact.html" class="cta-button">¡Contactame!</a>
	</section>
`;
export default class CTA extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: "open" });
		this.shadowRoot?.appendChild(template.content.cloneNode(true));
	}
	connectedCallback() {
		const resetCSS = new CSSStyleSheet();
		resetCSS.replaceSync(normalize);
		this.shadowRoot?.adoptedStyleSheets.push(resetCSS);
	}
}
