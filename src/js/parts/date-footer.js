/* Current year in footer */

(function (){

    function getYear() {
		let date = new Date(),
		    currentYear = date.getFullYear(),
		    yearWrite = document.querySelector('.year');

		if (currentYear > 2019) {
			yearWrite.innerHTML = `2019 — ${currentYear}`;
		} else {
			yearWrite.innerHTML = currentYear;
		}
	};
	getYear();

})();