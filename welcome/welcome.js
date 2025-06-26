
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');
    let index = 0;

    function showSlide(i) {
      slides.forEach((slide, idx) => {
        slide.classList.remove('active');
        dots[idx].classList.remove('active');
      });
      slides[i].classList.add('active');
      dots[i].classList.add('active');
    }

    function autoSlide() {
      index = (index + 1) % slides.length;
      showSlide(index);
    }

    setInterval(autoSlide, 4000); // Change slide every 4 seconds

    dots.forEach((dot, i) => {
      dot.addEventListener('click', () => {
        index = i;
        showSlide(i);
      });
    });

 document.addEventListener('DOMContentLoaded', function() {
    const startButton = document.getElementById('startNowButton');

    if (startButton) {
        startButton.addEventListener('click', function() {
            // Change 'your-other-file.html' to the actual name of your file
            window.location.href = '../login/login.html';
        });
    }
});