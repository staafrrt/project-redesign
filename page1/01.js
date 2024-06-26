document.addEventListener('DOMContentLoaded', function(){
    const nav = document.getElementById('nav');
    const scrollChange = 1; 

    document.addEventListener('scroll', function() {
        console.log(window.scrollY);
        if (window.scrollY >= scrollChange) {

            nav.classList.add('nav-scrolled');
        } else {

            nav.classList.remove('nav-scrolled');
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const nav = document.getElementById('nav');
    const logo = document.getElementById('logo');
    const scrollChange = 1; 

    document.addEventListener('scroll', function() {
        if (window.scrollY >= scrollChange) {
            nav.classList.add('nav-scrolled');
        } else {
            nav.classList.remove('nav-scrolled');
        }
    });

    logo.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});

