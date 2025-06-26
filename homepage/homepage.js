
function showSlide(index) { slides.forEach((slide, i) => { slide.classList.remove('active'); 
if (i === index) slide.classList.add('active'); }); }

function nextSlide() { currentSlide = (currentSlide + 1) % slides.length; 
showSlide(currentSlide); }

function goToProfile() {
  window.location.href = "../profile/profile.html";
}


setInterval(nextSlide, 3000);