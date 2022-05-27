const loves = document.querySelectorAll('.love');

loves.forEach((love) => {
	love.addEventListener('click', function () {
		love.classList.toggle('loveactive');

		// routing user to another link (either locale or another website)
		window.location.href = 'https://google.com';
	});
});
