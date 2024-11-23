import heroImage from "/assets/images/hero-image.png";

const templateBody = `
<section>
    <div class="image-container">
	<img src="${heroImage}" width="350" alt="retrato de jose"/>
	</div>
	<div class="description-container">
	    <h1>Soy <b id="hHeader">Jose</b>, Frontend Dev.</h1>
	    <p>¡Hola! Mi nombre es <b id="hParagraph">Jose Moreno</b>, un desarrollador web autodidacta, con bases fuertes en diseño de UI UX.</p>
	<div class="cta-container">
	    <a class="cta-button " href="/contact.html" >Contratame</a>
	    <div class="container-decorator">
		<a href="#projectSection">Proyectos</a>
		<span id="decorator"></span>
	    </div>
	</div>
	<skill-bar 
	 class="skills"
	 typescript="true"
	 figma="true"
	 react="true"
	 express="true"
	 angular="true"
	 tailwind="true"
	 dark="false"
	 vertical="false"
	>
	</skill-bar>
    </div>
</section>
`;

export default templateBody;
