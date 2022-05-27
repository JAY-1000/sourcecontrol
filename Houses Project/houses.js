const loves = document.querySelectorAll('.love');

loves.forEach((love) => {
	love.addEventListener('click', function () {
		love.classList.toggle('loveactive');
	});
});
