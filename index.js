let next = document.querySelector('.next');
let prev = document.querySelector('.prev');
let slide = document.querySelector('.slide');

next.addEventListener('click', function() {
    let items = document.querySelectorAll('.item');
    slide.style.transition = "transform 0.5s ease";
    slide.style.transform = "translateX(-100%)";

    slide.addEventListener(
        'transitionend',
        function() {
            slide.style.transition = "none";
            slide.appendChild(items[0]);
            slide.style.transform = "translateX(0)";
        },
        { once: true }
    );
});

prev.addEventListener('click', function() {
    let items = document.querySelectorAll('.item');
    slide.style.transition = "none";
    slide.prepend(items[items.length - 1]);
    slide.style.transform = "translateX(-100%)";

    setTimeout(function() {
        slide.style.transition = "transform 0.5s ease";
    });
});

