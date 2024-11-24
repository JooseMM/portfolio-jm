const templateBody = `
<li>
    <div class="image-container">
	<img id="phone-img" width="80"/>
	<img id="pc-img" width="200"/>
    </div>
    <skill-bar id="verticalBar" vertical="true"></skill-bar>
    <div class="description">
	<div class="header-container">
	    <h3><slot name="title">Title</slot></h3>
	    &nbsp&nbsp
	    <span><slot name="type">Type</slot></span>
	</div>
	<p><slot name="description">App description</slot></p>
	<skill-bar id="horizontalBar" vertical="false" dark="false"></skill-bar>
	<div class="cta-container">
	    <a id="view" class="view">Visitar</a>
	    <a id="code" class="code"/>Codigo</a>
	</div>
    </div>
	
</li>
`;

export default templateBody;
