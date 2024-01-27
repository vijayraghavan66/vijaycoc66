document.addEventListener('DOMContentLoaded', function() {
    let prevScrollPos = window.pageYOffset;
    const header = document.querySelector('.header');

    window.onscroll = function() {
        const currentScrollPos = window.pageYOffset;

        if (prevScrollPos > currentScrollPos) {
            header.classList.remove('hide');
        } else {
            header.classList.add('hide');
        }

        prevScrollPos = currentScrollPos;
    };
});
function toggleDarkMode() {
    const body = document.body;
    const moonIcon = document.querySelector('.fa-moon');
    const sunIcon = document.querySelector('.fa-sun');

    body.classList.toggle('dark-mode');
    moonIcon.classList.toggle('hide');
    sunIcon.classList.toggle('hide');
}
