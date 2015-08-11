(function(){
	var allCircles = document.querySelectorAll('.circle-imgs');
	var section2   = document.querySelector('.section2');
	
	/**
	 * [checks if elements in array have the supplied anime class name]
	 * @param  {[array]}  elArr     [array of DOM elements]
	 * @param  {[string]} className [class name(s) to add to element]
	 * @return {Boolean}            [if all elements in the array have the supplied class name]
	 */
	function hasAnimeClassAll(elArr,className){
		var hasClassName = 0;
		for (var i = elArr.length - 1; i >= 0; i--) {
			if(elArr[i].className.match(className)){
				hasClassName += 1;
			}
		};
		if(hasClassName === elArr.length){
			//all elements in elArr array have the className
			return true;
		}else{
			return false;
		}
	}

	/**
	 * [adds the supplied class name to each element in array]
	 * @param {[array]} elArr     [array of DOM elements]
	 * @param {[type]} className  [class name(s) to add to element]
	 */
	function addAnimeClassAll(elArr,className){
		if(!hasAnimeClassAll(elArr,className)){
			//number of times recursiveCall fn is called
			//and creates an exit condition for recursiveCall
			var recursion = 0;

			//called each time an animation ends which creates an animation stagger
			(function recursiveCall(){
				console.log('recursiveCalled');
				elArr[recursion].className += ' '+className;
				elArr[recursion].addEventListener('animationend',function test(){
					if(recursion !== (elArr.length -1) ){
						console.log('elements: ',elArr[recursion],' class name: ',className,' recursion: ',recursion);
						recursion+=1;
						recursiveCall();
					}
					this.removeEventListener('animationend',test);
					console.log('trans event over');
				});
			})();
		}
	}

	window.addEventListener('scroll',function(){
		console.log('scroll is working!');
		if(isElementInView(section2)){
			addAnimeClassAll(allCircles,'inView');
		}
	});
})();