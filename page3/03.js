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

document.addEventListener('DOMContentLoaded', function() {
    const filterItems = document.querySelectorAll('.filter li');
    filterItems.forEach(item => {
        item.addEventListener('click', function() {
            // 切換選中狀態
            this.classList.toggle('selected');

            // 如果有取消按鈕，點擊取消按鈕時移除選中狀態
            const cancelIcon = this.querySelector('.cancel-icon');
            if (cancelIcon) {
                cancelIcon.addEventListener('click', function(e) {
                    e.stopPropagation(); // 防止事件冒泡到li元素
                    item.classList.remove('selected');
                });
            }
        });
    });
});
