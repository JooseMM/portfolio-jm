const templateStyle = `
<style>
    li {
	background-color: #E6F7F7;
	border-radius: 5px;
	padding: 1rem;
	max-width: 450px;
	margin-inline: auto;
    }
    .image-container {
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 5px;
	overflow: hidden;
	background-color: #639999;
	height: 160px;
    }
    #phone-img {
	position: relative;
	bottom: -20px;
	right: 5px;
    }
    #pc-img {
	position: relative;
	right: -5px;

    }
    #verticalBar {
	display: none;
    }
    .header-container > span {
	opacity: 0.86;
    }
    .cta-container {
	display: flex;
	margin-top: 0.8rem;
	justify-content: space-between;
	width: 100%;
    }
    .cta-container > a {
	display: block;
	width: 48%;
	padding-block: 1.1rem;
	border-radius: 5px;
	font-size: 20px;
	font-weight: 500;
	letter-spacing: 1px;
    }
    .view {
	border: solid 1px #006666;
	background-color: #006666;
	color: white;
    }
    .code {
	border: solid 1px #8AAEAE;
	color: #596565;
    }
    .dark-code {
	color: inherit;
    }
    .header-container {
	margin-top: 0.8rem;
	display: flex;
	justify-content: center;
	align-items: center;
    }
    .header-container > * {
	font-size: 1.5rem;
	font-weight: 600;
    }
    h3 {
	color: #006666;
    }
    p {
	margin: 0;
	margin-top: 0.3rem;
	margin-bottom: 0.8rem;
	opacity: 0.85;
    }
    .dark-title {
	color: #E09F29;
    }
    .dark-li {
	background-color: #004040;
    }
    .dark-icontainer {
	background-color: inherit;
    }
    .dark-view {
	background-color: #E09F29;
    }
    #view[disable], #code[disable] {
	opacity: 0.5;
    }
    @media only screen and (min-width: 1200px) {
	li p {
	    line-height: 1.4rem;
	    letter-spacing: 0.32px;
	    font-size: 18px;
	}
	li:not(li[long="true"]) {
	    margin: 0;
	    max-width: none;
	    height: 280px;
	    display: flex;
	}
	li:not(li[long="true"]) .image-container {
	    position: relative;
	    height: 256px;
	    margin-right: 1rem;
	    width: 43%;
	}
	li:not(li[long="true"]) #verticalBar {
	    display: block;
	}
	li:not(li[long="true"]) #horizontalBar {
	    display: none;
	}
	li:not(li[long="true"]) > .description {
	    display: flex;
	    width: 42%;
	    margin-left: 1rem;
	    align-items: flex-start;
	    text-align: left;
	    justify-content: center;
	    flex-direction: column;
	}
	li:not(li[long="true"]) > .description a {
	    text-align: center;
	}
	li:not(li[long="true"]) .cta-container {
	    margin-top: 0;
	}
	.header-container h3, .header-container span {
	    font-size: 28px;
	}
	li:not([long="true"]) #phone-img {
	    position: absolute;
	    z-index: 10;
	    width: 110px;
	    top: 50%;
	    right: 10px;
	    transform: translateY(-50%);
	}
	li:not([long="true"]) #pc-img {
	    width: 260px;
	    right: auto;
	}
	li[long="true"] {
	    height: 100%;
	}
	li[long="true"] .image-container {
	    position: relative;
	    height: 17rem;
	}
	@-moz-document url-prefix() {
	    li[long="true"] .image-container {
		height: 14rem;
	    }
	}
	li[long="true"] #phone-img {
	    width: 105px;
	    position: absolute;
	    z-index: 10;
	    top: 50%;
	    transform: translateY(-50%);
	    left: 5%;
	}
	li[long="true"] #pc-img {
	    width: 260px;
	}
	li[long="true"] .description > .header-container {
	    margin-top: 1.5rem;
	}
	li[long="true"] .description > p {
	    margin-top: 0.5rem;
	    margin-bottom: 1rem;
	}
	li[long="true"] .description .cta-container {
	    margin-top: 1rem;
	}

    }
</style>
`;

export default templateStyle;
