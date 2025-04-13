import criszulPhoneImage from "/assets/images/criszul-mobile.png";
import criszulPcImage from "/assets/images/criszul-desktop.png";

import pdfGenPhoneImage from "/assets/images/pdf-generator-phone.png";
import pdfGenPcImage from "/assets/images/pdf-generator-pc.png";

import nutripiaPhoneImage from "/assets/images/nutripia-mobile.png";
import nutripiaPcImage from "/assets/images/nutripia-mockup.png";

const templateBody = `
<section>
    <div class="header-container">
	    <h2>Proyectos</h2>
    </div>
    <ul class="projects-container">
	<project-box 
	 stack="net tailwind sql angular"
	 phone-img="${nutripiaPhoneImage}"
	 pc-img="${nutripiaPcImage}"
	 view="https://nutripia.netlify.app/"
	 code="https://github.com/JooseMM/nutripia"
	>
	    <span slot="title">Nutripia</span>
	    <span slot="type">Website</span>
	    <span slot="description">Landing page y aplicacion de agendamiento de citas nutricionales</span>
	</project-box>

	<project-box 
	 dark="false"
	 stack="typescript html css express"
	 phone-img="${criszulPhoneImage}"
	 pc-img="${criszulPcImage}"
	 view="https://criszul.netlify.app"
	 code="https://github.com/JooseMM/criszul-frontend"
	>
	    <span slot="title">Criszul</span>
	    <span slot="type">Lading Page</span>
	    <span slot="description">Landing page elegante para empresa de envíos, con UI glassy-bento y formulario de contacto.</span>
	</project-box>

	<project-box 
	 long="true"
	 stack="react figma typescript css"
	 phone-img="${pdfGenPhoneImage}"
	 pc-img="${pdfGenPcImage}"
	 view="https://cuentas-pdf.netlify.app/"
	 code="https://github.com/JooseMM/cuentas-PDF"
		>
	    <span slot="title">Check</span>
	    <span slot="type">Generator</span>
	    <span slot="description">Genera cuentas de cobro en formato PDF disponibles para descargar utilizando la libreria <b>React-pdf</b>.</span>
	</project-box>

    </ul>
</section>
`;

export default templateBody;
