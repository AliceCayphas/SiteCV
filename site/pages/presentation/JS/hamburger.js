document.addEventListener("DOMContentLoaded", function(event) {

    var btn = document.querySelector('header button');
    var nav = document.querySelector('nav');
    var links = document.querySelectorAll('nav a');
    function toggleMenu(evt) {

            nav.classList.toggle('visible');
            btn.children[0].classList.toggle('fa-bars');
            btn.children[0].classList.toggle('fa-times');

    }


    btn.addEventListener('click', toggleMenu); 

    for (var i = 0; i < links.length; i++) {
        links[i].addEventListener('click', toggleMenu);
    }
})
    
