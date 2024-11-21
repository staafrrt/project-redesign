document.addEventListener('DOMContentLoaded', () => {
    const menuIcon = document.querySelector('.menu-icon');
    
    menuIcon.addEventListener('click', () => {
        menuIcon.classList.toggle('active');
        menuIcon.querySelectorAll('div').forEach(div => {
            div.classList.remove('no-animation');
        });
    });
});