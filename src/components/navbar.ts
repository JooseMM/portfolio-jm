import { baseStyle } from "../constants";

const template = document.createElement("template");
template.innerHTML = `
	<style>
		
		${baseStyle}

		section {
			display: flex;
			align-items: center;
			padding-inline: 10vw;
		}
		section > a:first-child {
			margin-right: 2.5rem;
			font-size: 1.2rem;
			font-weight: 500;
		}
		nav {
			display: flex;
			align-items: center;
			justify-content: space-between;
		}
	

	</style>

`;

export default class Navbar extends HTMLElement {
	constructor() {
		super();
	}
	static observedAttributes = ["dark"];
	
	connectedCallback() {
		this.attachShadow({ mode: "open" });
		this.shadowRoot?.appendChild(template.content.cloneNode(true));
	}

}
