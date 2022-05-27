// getting the element by class name using the query selector
// it stores the elements in an array
const loves = document.querySelectorAll('.love');

// loop thru the array and apply click events to all the items in the array NodeList
loves.forEach((love) => {
	// how to add click event to an element (eg. div, input, etc) in js
	love.addEventListener('click', function () {
		love.classList.toggle('loveactive');
		console.log('LOVE EMENT: ', love);
		// routing user to another link (either locale or another website)
		// window.location.href = 'https://google.com';
	});
});
