(function(){

	var interationUser = {
		otherTag: document.getElementById("other-tag"),
	};


	interationUser.addListen = function(){
		this.otherTag.onclick = function(){
			return tag.newRandom();
		}
	};


	interationUser.addListen();

	return 1;

})();