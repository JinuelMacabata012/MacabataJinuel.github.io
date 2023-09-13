let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
	menu.classList.toggle('bx-x');
	navbar.classList.toggle('open');
};

const sr = ScrollReveal ({
	distance: '65px',
	duration: 2600,
	delay: 450,
	reset: true
});

sr.reveal('.pic-text', {delay:200, origin:'top'});
sr.reveal('.pic-img', {delay:450, origin:'top'});
sr.reveal('.icons', {delay:500, origin:'left'});