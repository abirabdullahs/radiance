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

// Firebase v8 CDN scripts for auth check
const firebaseAppScript = document.createElement('script');
firebaseAppScript.src = 'https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js';
document.head.appendChild(firebaseAppScript);
const firebaseAuthScript = document.createElement('script');
firebaseAuthScript.src = 'https://www.gstatic.com/firebasejs/8.10.0/firebase-auth.js';
document.head.appendChild(firebaseAuthScript);

// Wait for Firebase scripts to load, then initialize and add Start Now logic
function initStartNowButton() {
  // Firebase config for v8
  var firebaseConfig = {
    apiKey: "AIzaSyAKbOTdzFjILtll5ucz0_BrAtZAZW0IdkA",
    authDomain: "abirabdullah-radiance.firebaseapp.com",
    projectId: "abirabdullah-radiance",
    storageBucket: "abirabdullah-radiance.appspot.com",
    messagingSenderId: "313224876859",
    appId: "1:313224876859:web:d002d884698337bd639d1e",
    measurementId: "G-TJP2B88Q63"
  };
  if (!window.firebase?.apps?.length) {
    firebase.initializeApp(firebaseConfig);
  }
  const startButton = document.getElementById('startNowButton');
  if (startButton) {
    startButton.addEventListener('click', function() {
      firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
          window.location.href = '/homepage/homepage.html';
        } else {
          window.location.href = '/login/login.html';
        }
      });
      // Also trigger immediately in case already loaded
      if (firebase.auth().currentUser) {
        window.location.href = '/homepage/homepage.html';
      }
    });
  }
}

// Wait for both scripts to load
function waitForFirebase(cb) {
  if (window.firebase && window.firebase.auth) {
    cb();
  } else {
    setTimeout(() => waitForFirebase(cb), 50);
  }
}
waitForFirebase(initStartNowButton);
