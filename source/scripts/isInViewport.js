/**
 * [isElementInView description]
 * @param  {[object]}  element [the element to determine if in view port]
 * @return {Boolean}           [is the element in the view port]
 */
function isElementInView(element) {
	//code written for readability
	var box = element.getBoundingClientRect();
	var doc = document.documentElement;
	var prerequisite1 = (box.top >= 0 && box.left >= 0);
	var prerequisite2 = ( box.bottom <= (window.innerHeight || doc.clientHeight) );
	var prerequisite3 = ( box.right <= (window.innerWidth || doc.clientWidth) );
	
	if( prerequisite1 === true && prerequisite2 === true && prerequisite3 === true ){
		return true;
	}else{
		return false;
	}
}