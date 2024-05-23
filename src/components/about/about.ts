import normalize from "../../normalize";

const template = document.createElement("template");
template.innerHTML = `
	<style>
		section {
			display: flex;
			flex-direction: column;
			align-items: center;
			text-align: center;
			margin-inline: 1.5rem;
			padding-block: 5rem;
			justify-content: center;
		}
		h3 {
			margin: 0;
			padding: 0;
		}
		p {
			opacity: 0.85;
			line-height: 1.4rem;
		}
		p:not(:last-child) {
			margin-bottom: 1rem;
		}
		b {
			opacity: 1;
		}
		.description, .header {
			background-color: #C3D9D9;
			border-radius: 5px;
		}
		.description {
			margin-top: 1.2rem;
			padding: 1.5rem;
			max-width: 500px;
		}
		.header {
			padding: 0.5rem 2.5rem;
			margin-top: 2rem;
			margin-inline: auto;
			width: fit-content;
			font-size: 1.1rem;
		}
		.dark {
			background-color: #004040;
			color: white;
		}
		.dark-description {
			background-color: #006666;
		}
		@media only screen and (min-width: 600px) {
			.description {
				padding: 1.5rem 2.5rem;
			}
		}
		@media only screen and (min-width: 1000px) {
			section {
				flex-direction: row;
				padding-block: 4.5rem;
				margin-inline: 10vw;
				justify-conter: start;
				align-items: center;
				text-align: start;
			}
			section img {
				width: 400px;
			}
			.description-container {
				margin: 0;
				margin-left: 3rem;
				font-size: 1.1rem;
			}
			.description {
				padding: 1.8rem 2.5rem;
				max-width: 600px;
			}
			.header {
				margin: 0;
				margin-inline: 0;
				font-size: 1.3rem;
			}
		}
	</style>
	<section> 
		<img id="aboutImage" src="src/assets/images/about-image.png" width="250" />
		<div class="description-container">
			<div id="descriptionHeader" class="header">
				<h3>Sobre Mi</h3>
			</div>
			<div id="desc" class="description">
				<p>
				Me considero <b>apasionado por la tecnología</b> en general, 
				los conceptos complejos y la resolución de problemas. 
				Desde muy pequeño desperté una fascinación por los computadores,
				a tal punto que en mis tiempos libres, de manera autodidacta,
				aprendí conceptos técnicos avanzados sobre hardware y software.
				</p>
				<p>
				Actualmente, disfruto mucho de programar utilizando <b>Vim</b> como IDE y <b>Linux</b> como sistema operativo principal.
				Aparte de mi afán por lo digital, en mis tiempos libres disfruto de instrumentos musicales y el ejercicio físico.
				</p>
			</div>
		</div>
	</section>
`;

export default class About extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: "open" });
		this.shadowRoot?.replaceChildren(template.content.cloneNode(true));
	}
	static observedAttributes = ["dark"];

	connectedCallback() {
		const resetCSS = new CSSStyleSheet();
		resetCSS.replaceSync(normalize);
		this.shadowRoot?.adoptedStyleSheets.push(resetCSS);
	}
	attributeChangedCallback(_name: string, _oldValue: string, newValue: string) {
		const isDark = newValue === "true" ? true : false;
		this.setInternalTheme(isDark);
	}
	setInternalTheme(darkTheme: boolean) {
		const section = this.shadowRoot?.querySelector("section");
		const aboutImage = this.shadowRoot?.querySelector("#aboutImage");
		const description = this.shadowRoot?.querySelector("#desc");
		const headerDesc = this.shadowRoot?.querySelector("#descriptionHeader");

		section?.classList.toggle("dark", darkTheme);
		description?.classList.toggle("dark-description", darkTheme);
		headerDesc?.classList.toggle("dark-description", darkTheme);
		if(darkTheme) 
			aboutImage?.setAttribute("src", "/src/assets/images/about-image-dark.png");
		else
			aboutImage?.setAttribute("src", "src/assets/images/about-image.png");


	}
}
