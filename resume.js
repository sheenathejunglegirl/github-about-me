(function() {
	'use strict';

	overlay.addEventListener('click', hideResume);

	resumeLink.addEventListener('click', showResume);
	document.querySelector('#resume.hidden').addEventListener('click', showResume);

	function showResume() {
		overlay.classList.remove('hidden');
		resume.classList.remove('hidden');
	}

	function hideResume() {
		overlay.classList.add('hidden');
		resume.classList.add('hidden');
	}
})();
