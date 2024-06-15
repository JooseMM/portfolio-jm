import normalize from "../../normalize";
import { whatsapp, github, linkedin, mail } from "./icons";

const template = document.createElement("template");
template.innerHTML = `
	<style>
		.contact-container {
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			text-align: center;
			padding-bottom: 3rem;
		}
		#heroImage {
			width: 90%;
		}
		.contact-container h1 {
			font-weight: 400;
			max-width: 12ch;
			font-size: 2.5rem;
			margin-top: 1rem;
		}
		p {
			margin-top: 0.8rem;
			max-width: 350px;
			margin-inline: 1rem;
			line-height: 1.3rem;
		}
		b {
			opacity: 0.85;
		}
		h1 > b {
			color: #006666;
		}
		.dark-container > h1 > b {
			color: #E09F29;
		}
		.dark-container b {
			opacity: 1;
		}
		.links-container a {
			display: flex;
			align-items: center;
			margin-inline: auto;
			background-color: #006666;
			color: white;
			padding: 1rem 1rem;
			width: 100%;
			border-radius: 10px;
			font-size: 1rem;
			font-weight: 500;
			overflow: hidden;
		}
		.links-container a:not(:last-child) {
			margin-bottom: 0.8rem;
		}
		.links-container {
			display: grid;
			grid-template-columns: 1fr;
			grid-gap: 0.3rem 0rem;
			margin-top: 1.5rem;
			width: 100%;
			padding-inline: 1rem;
			max-width: 420px;
		}

		a > div {
			background-color: white;
			width: fit-content;
			padding: 0.5rem;
			border-radius: 100px;
			margin-right: 1rem;
		}

		figure svg {
			width: 35px;
			height: 35px;
			margin: 0 auto;
		}
		a:last-child figure svg {
			width: 30px;
			height: 30px;
			margin: 0.2rem;
		}
		@media only screen and (min-width: 350px) {
			#heroImage {
				width: 300px;
			}
		}
		@media only screen and (min-width: 1000px) {
			.links-container {
				margin-top: 2rem;
				margin-bottom: 4rem;
				max-width: 1000px;
				grid-template: 90px / 1fr 1fr;
				grid-gap: 1rem 2rem;
			}
			.links-container a {
				font-size: 1.3rem;
			}
			.links-container a:hover {
				transform: translateY(-5px);
				transition: 300ms;
			}
			.links-container a:not(:last-child) {
				margin: 0;
			}
			a > div {
				padding: 0.7rem;
				margin-right: 1.5rem;
			}
			a > div > img {
				width: 30px;
			}
			.contact-container h1 {
				margin-top: 2rem;
				font-size: 3.5rem;
				max-width: none;
			}
			#heroImage {
				margin-top: 2.5rem;
				width: 350px;
			}
			p {
				max-width: 500px;
				margin-inline: 0;
				font-size: 1.1rem;
				letter-spacing: 0.8px;
				line-height: 1.3rem;
			}
		}

	</style>
	<main class="contact-container">
		<img id="heroImage" width="300" src="src/assets/images/about-image.png"></img>
		<h1>¡Pongámonos en <b>contacto</b>!</h1>
		<p>Puedo ser de <b>gran ayuda para tu empresa o proyecto</b>, por lo que acá abajo te dejo todos los medios por los cuales me puedes contactar.</p>
		<div class="links-container">
			<a href="mailto:jamm.webdev@gmail.com">
				<div id="mail">
				</div>
			jamm.webdev@gmail.com
			</a>
			<a href="callto:+56932339545">
				<div id="whatsapp">
				</div>
				( +56 ) 9 3233 9545
			</a>
			<a href="https://github.com/JooseMM" target="_blank">
				<div id="github">
				</div>
				github.com/JooseMM
			</a>
			<a href="https:www.linkedin.com/in/jamm-dev" target="_blank">
				<div id="linkedin">
				</div>
				linkedin.com/in/jamm-dev
			</a>
		</div>
	</main>
`;
export default class Contact extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: "open" });
		this.shadowRoot?.appendChild(template.content.cloneNode(true));
		this.setIcons();
	}

	static observedAttributes = ["dark"];
	connectedCallback() {
		const resetCSS = new CSSStyleSheet();
		resetCSS.replaceSync(normalize);
		this.shadowRoot?.adoptedStyleSheets.push(resetCSS);
	}
	attributeChangedCallback(name: string, _oldValue: string, newValue: string) {
		const isDarkTheme = newValue === "true" ? true : false;
		if(name === "dark")
			this.setInternalTheme(isDarkTheme);

	}
	setInternalTheme(darkTheme: boolean) {
		const container = this.shadowRoot?.querySelector(".contact-container");
		const hero = this.shadowRoot?.querySelector("#heroImage");

		container?.classList.toggle("dark-container", darkTheme);
		if(darkTheme)
			hero?.setAttribute("src", "src/assets/images/about-image-dark.png");
		else 
			hero?.setAttribute("src", "src/assets/images/about-image.png");
	}
	setIcons() {
		const mailSelector = this.shadowRoot?.querySelector("#mail");
		const githubSelector = this.shadowRoot?.querySelector("#github");
		const whatsappSelector = this.shadowRoot?.querySelector("#whatsapp");
		const linkedinSelector = this.shadowRoot?.querySelector("#linkedin");

		mailSelector?.replaceChildren(mail.cloneNode(true));
		githubSelector?.replaceChildren(github.cloneNode(true));
		whatsappSelector?.replaceChildren(whatsapp.cloneNode(true));
		linkedinSelector?.replaceChildren(linkedin.cloneNode(true));
		
	}
}
