(function(){
	var tagInit = {
		name: document.getElementById("tag-name"),
		info: document.getElementById("tag-info"),
		link: document.getElementById("tag-link")
	};


	tagInit.newRandom = function(){
		var randomTag = tags.random();

		this.name.innerHTML = randomTag.tag;
		this.link.setAttribute("href", randomTag.link);
		this.info.innerHTML = randomTag.explanation;

		return 1;
	}


	tagInit.newRandom();

	window.tag = tagInit;

	return 1;
})();