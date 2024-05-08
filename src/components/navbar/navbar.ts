import { lightOnIcon, darkOnIcon, lightBurguerIcon, lightCloseIcon, darkBurguerIcon, darkCloseIcon } from "./icons";

const template = document.createElement("template");
template.innerHTML = `
	<style>
		header {
			display: flex;
			position: relative;
			align-items: center;
			margin-inline: 10vw;
			justify-content: space-between;
			padding-block: 2rem;
		}
		header > a:first-child {
			margin-right: 2.5rem;
			font-size: 1.2rem;
			font-weight: 500;
		}
		nav {
			position: absolute;
			top: 100%;
			left: 50%;
			transform: translateX(-50%);
			padding: 4rem 5.5rem;
			border-radius: 10px;
			border: 1px solid #619F9F;
			display: flex;
			flex-direction: column;
			flex: 1;
			align-items: center;
			font-size: 1.3rem;
			background-color: #C3D9D9;
		}
		ul {
			display: flex;
			align-items: center;
			flex-direction: column;
		}
  		li {
			margin-bottom: 3rem;
		}
		.mode  {
			display: flex;
			align-items: baseline;
			background-color: #639999;
			background-image: url(./src/assets/icons/sun-switch.svg), url(./src/assets/icons/moon-switch.svg);
			background-size: 28px;
			background-repeat: no-repeat;
			padding: 5px; 
			width: 90px;
			background-position: 14px center, 48px center;
			border-radius: 1.5rem;
		}
		.mode  > div {
			display: flex;
			justify-content: center;
			align-items: center;
			border-radius: 100%;
			padding: 0.1rem;
			width: 40px;
			height: 40px;
			background-color: #004040;
			transition:ease-in-out 300ms;
		}
		.dark-mode {
			transform: translateX(39px);
		}
		.hide-menu {
			display: none;
		}
		.menu-dark-bg {
			background-color: #006666;
		}

		@media only screen and (min-width: 500px) {
			nav {
				right: 0;
				left: none;
				transform: translateX(0);
			}
		}

		@media only screen and (min-width: 1000px) {
			a:not(#logo) {
				opacity: 0.85;
			}
			a:not(#logo):hover {
				opacity: 1;
			}
			.hide-menu {
				display: flex;
			}
			header {
				align-items: baseline;
			}
			nav {
				position: static;
				flex-direction: row;
				align-items: baseline;
				justify-content: space-between;
				padding: 0;
				border: none;
				background-color: inherit;
				font-size: 1rem;
			}
			ul {
				flex-direction: row;
				align-items: baseline;
			}
			li {
				margin: 0;
			}
			li:not(:last-child) {
				margin-right: 2.5rem;
			}
			#menuBtn {
				display: none;
			}
		}

	</style>
	<header>
		<a href="/" id="logo">Jose M.</a> 
		<nav>
			<ul>
				<li>
					<a href="/" id="homePage">Inicio</a>
				</li>
				<li>
					<a href="/#projectSection">Proyectos</a>
				</li>
				<li>
					<a href="/#aboutSection">Sobre mí</a>
				</li>
				<li>
					<a href="/contact.html" id="contactPage">Contacto</a>
				</li>
			</ul>
			<button id="themeBtn" class="mode">
				<div id="theme" class="dark-mode">
				</div>
			</button>
		</nav>
		<button id="menuBtn">
		</button>
	</header>
`;


export default class Navbar extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: "open" });
		this.shadowRoot?.appendChild(template.content.cloneNode(true));
	}

	static observedAttributes = ["dark", "visible"];

	connectedCallback() {
		
		const link = document.createElement("link"); 
		link.rel = "stylesheet";
		link.href = "./src/normalize.css";
		this.shadowRoot?.appendChild(link);
		
		this.shadowRoot?.querySelector("#menuBtn")
			?.addEventListener("click", () => {
				const toggledValue = this.getAttribute("visible") == "true" ? "false" : "true";
				this.setAttribute("visible", toggledValue);
			});

		this.shadowRoot?.querySelector("#themeBtn")
			?.addEventListener("click", () => {
				const toggledValue = this.getAttribute("dark") == "true" ? "false" : "true";
				this.setAttribute("dark", toggledValue);
			});
	}

	toggleMenu(visible: boolean) {
		this.shadowRoot?.querySelector("nav")
			?.classList.toggle("hide-menu", !visible);
	}

	attributeChangedCallback(name: string, _oldValue: string, newValue: string) {
		const updatedAttribute = newValue == "true" ? true : false;

		switch(name) {
			case "dark":
				const visible = this.getAttribute("visible") == "true" ? true : false;
				this.setInternalTheme(updatedAttribute, visible);
				this.setExternalThemes(updatedAttribute);
				break;
			case "visible": 
				const darkTheme = this.getAttribute("dark") == "true" ? true : false;
				this.toggleMenu(updatedAttribute);
				this.setInternalTheme(darkTheme, updatedAttribute);
				break;
		}
	}

	setInternalTheme(darkTheme: boolean, visible: boolean) {
		const themeIcon = this.shadowRoot?.querySelector("#theme");
		const header = this.shadowRoot?.querySelector("header");
		const menuIcon = this.shadowRoot?.querySelector("#menuBtn");
		const navbar = this.shadowRoot?.querySelector("nav");

		if(darkTheme) {
			if(visible) {
				menuIcon?.replaceChildren(darkCloseIcon.content.cloneNode(true));
				console.log("open dark");
			}
			else {
				menuIcon?.replaceChildren(darkBurguerIcon.content.cloneNode(true));
				console.log("close dark");
			}

			themeIcon?.replaceChildren(darkOnIcon.content.cloneNode(true));
		}
		else {
			if(visible) {
				menuIcon?.replaceChildren(lightCloseIcon.content.cloneNode(true));
				console.log("open light");
			}
			else {
				menuIcon?.replaceChildren(lightBurguerIcon.content.cloneNode(true));
				console.log("close light");
			}

			themeIcon?.replaceChildren(lightOnIcon.content.cloneNode(true));
		}

		themeIcon?.classList.toggle("dark-mode", darkTheme);
		header?.classList.toggle("dark-font", darkTheme);
		navbar?.classList.toggle("menu-dark-bg", darkTheme);
	}

	setExternalThemes(darkTheme: boolean) {
		const body = document.querySelector("body");
		/*
		const hero = document.querySelector("hero-section");
		const projects = document.querySelector("projects-section");
		const about = document.querySelector("about-section");
		const cta = document.querySelector("cta-section");

		future theme setters for other components
		*/

		body?.classList.toggle("dark-mode", darkTheme);
	}

}
