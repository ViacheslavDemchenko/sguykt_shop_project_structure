/* Products filter in catalog */

(function (){

   let filterBtns = document.querySelectorAll('.filter-block__button');

   for (let i = 0; i < filterBtns.length; i++) {

   	    filterBtns[i].addEventListener('click', () => {
   	    	for (let k = 0; k < filterBtns.length; k++) {
                filterBtns[k].classList.remove('filter-block__button--active');
   	    	}
   	    	if (filterBtns[i].classList.contains('filter-block__button--active')) {
               filterBtns[i].classList.remove('filter-block__button--active');
            } else {
            	filterBtns[i].classList.add('filter-block__button--active');
            }
   	    });
   }

})();