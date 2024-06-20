document.getElementById('mailbox').addEventListener('click', function() {
    document.getElementById('opening').style.display = 'none';
    document.getElementById('main').style.display = 'flex';
    document.getElementById('backgroundMusic').play();
});

const slides = document.querySelectorAll('.slide');
let currentIndex = 0;

function showSlide(index) {
    slides.forEach((slide, i) => {
        if (i === index) {
            slide.style.display = 'block';
        } else {
            slide.style.display = 'none';
        }
    });
}

document.getElementById('prev').addEventListener('click', function() {
    if (currentIndex > 0) {
        currentIndex--;
        showSlide(currentIndex);
    }
});

document.getElementById('next').addEventListener('click', function() {
    if (currentIndex < slides.length - 1) {
        currentIndex++;
        showSlide(currentIndex);
    }
});

showSlide(currentIndex);
