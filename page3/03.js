// window.onload = function(){


//     const nav = document.getElementById('nav');
//     const scrollChange = 1; // 觸發背景色改變的滾動距離

//     document.addEventListener('scroll', function() {
//         console.log(window.scrollY);
//         if (window.scrollY >= scrollChange) {

//             nav.classList.add('nav-scrolled');
//         } else {

//             nav.classList.remove('nav-scrolled');
//         }
//     });





// }

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

