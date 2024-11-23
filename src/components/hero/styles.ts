const templateStyle = `
<style>
    section {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	margin-inline: 10vw;
	padding-bottom: 4rem;
    }
    p {
	opacity: 0.85;
    }
    .image-container, .description-container {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	text-align: center;
    }
    .image-container {
	margin-top: 1rem;
    }
    .description-container {
	margin-top: 1rem;
	max-width: 300px;
    }
    .description-container h1 {
	font-size: 2.5rem;
	font-weight: 400;
    }
    .description-container p {
	margin-top: 0.5rem;
    }
    b {
	opacity: 1;
    }
    h1 b {
	opacity: 1;
	color: #006666;
    }
    h1 > .dark-highlight, p > .dark-highlight {
	color: #E09F29;
    }
    .cta-container {
	display: flex;
	justify-content: center;
	margin-top: 1.3rem;
	align-items: baseline;
	font-weight: 500;
	font-size: 1rem;
    }
    .cta-button {
	margin-right: 1.2rem;
	color: white;
	padding: 0.8rem 1.5rem;
	border-radius: 5px;
	letter-spacing: 1px;
	background-color: #006666;
    }
    .container-decorator {
	opacity: 0.9;
	position: relative;
    }
    .dark-button {
	background-color: #E0A029;
    }
    .skills {
	margin-top: 2rem;
	width: 290px;
    }
    span {
	position: absolute;
	right: 0;
	top: 100%;
    }
    .image-container img {
	width: 280px;
    }
    @media only screen and (min-width: 380px) {
	.image-container img {
	    width: 320px;
	}
	.skills {
	    width: 350px;
	}
    }
    @media only screen and (min-width: 700px) {
	.description-container {
	    font-size: 1.2rem;
	    width: 400px;
	}
	.description-container h1 {
	    font-size: 3rem;
	}
	.image-container img {
	    width: 350px;
	}	
	.cta-container {
	    font-size: 1.3rem;
	}
	span {
	    top: 80%;
	}
    }
    @media only screen and (min-width: 1000px) {
	section {
	    flex-direction: row-reverse;
	    margin-inline: 5vw;
	}
	.description-container {
	    margin-top: 0;
	    margin-right: 10vw;
	    align-items: start;
	    font-size: 1.2rem;
	    text-align: left;
	    width: 450px;
	}
	.description-container p {
	    width: 350px;
	}
	.description-container h1 {
	    font-size: 3.5rem;
	}
	.image-container img {
	    width: 480px;
	}
	span {
	    top: 70%;
	}
	.skills {
	    margin-top: 1.5rem;
	}
    }
    @media only screen and (min-width: 1440px) {
	.image-container img {
	    width: 550px;
	}
	.description-container {
	    margin-right: 5wv;
	}
    }

</style>
`
export default templateStyle;
