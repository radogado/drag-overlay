(() => {
	const dragKeyboard = e => {
		console.log(e);
		const overlay = e.target.querySelector('textarea');
		if (e.key === 'ArrowRight') {
			overlay.style.width = overlay.offsetWidth + (e.shiftKey ? 10 : 1);
		}
		if (e.key === 'ArrowLeft') {
			overlay.style.width = overlay.offsetWidth - (e.shiftKey ? 10 : 1);
		}
		if (e.key === 'End') {
			overlay.style.width = '100%';
		}
		if (e.key === 'Home') {
			overlay.style.width = 0;
		}
	};
	document.querySelectorAll('.drag-overlay').forEach(el => {
		el.addEventListener('keydown', dragKeyboard);
	});
})();
