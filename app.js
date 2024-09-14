const toggleBtn = document.querySelector('.toggle-btn')
const toggleBtnIcon = document.querySelector('.toggle-btn i')
const dropdownMenu = document.querySelector('.dropdown-menu')

toggleBtn.onclick = function () {
    dropdownMenu.classList.toggle('open')
    const isOpen = dropdownMenu.classList.contains('open')

    toggleBtnIcon.classList = isOpen
        ? 'fa-solid fa-xmark'
        : 'fa-solid fa-bars-staggered'
}

document.getElementById("year").innerHTML = new Date().getFullYear();

// window.addEventListener('scroll', function() {
//     const navbar = document.querySelector('.navbar');
//     const firstSection = document.querySelector('#');

//     const sectionTop = firstSection.getBoundingClientRect().top;

//     // If the top of the first section is out of view, hide the navbar items
//     if (sectionTop <= 0) {
//       navbar.classList.add('hide-nav');
//     } else {
//       navbar.classList.remove('hide-nav');
//     }
//   });

window.addEventListener('scroll', function () {
    const navbar = document.querySelector('.navbar');
    const firstSection = document.querySelector('#');

    const sectionTop = firstSection.offsetTop; // Get the top offset of the first section
    const scrollPosition = window.scrollY; // Current scroll position

    // If the user has scrolled past the first section, hide the navbar items
    if (scrollPosition >= sectionTop) {
        navbar.classList.add('hide-nav');
    } else {
        navbar.classList.remove('hide-nav');
    }
});
