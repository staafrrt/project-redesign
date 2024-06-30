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

document.addEventListener('DOMContentLoaded', function() {
    const burger = document.querySelector('.burger');
    const aside = document.querySelector('aside');
    const icon = burger.querySelector('.material-icons-round');

    burger.addEventListener('click', function() {
        aside.classList.toggle('aside-active'); // 切換顯示狀態
        // burger.classList.toggle('x'); 
        if (aside.classList.contains('aside-active')) {
            icon.textContent = 'cancel'; // 切換為cancel icon
        } else {
            icon.textContent = 'menu'; // 切換為menu icon
        }
    });
});