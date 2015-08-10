/**
 * [isElementInView description]
 * @param  {[object]}  element [the element to determine if in view port]
 * @return {Boolean}           [is the element in the view port]
 */
function isElementInView(element) {
  var box = element.getBoundingClientRect();
  var doc = document.documentElement;
  if(box.top >= 0 && box.left >= 0 && box.bottom <= (window.innerHeight || doc.clientHeight) && box.right <= (window.innerWidth || doc.clientWidth)){
  	return true;
  }else{
  	return false;
  }
}