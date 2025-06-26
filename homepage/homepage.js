// ✅ Slider Logic
const slides = document.querySelectorAll(".slide");
let currentSlide = 0;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove('active');
    if (i === index) slide.classList.add('active');
  });
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

// Auto slide every 3 seconds
setInterval(nextSlide, 3000);

// ✅ Go to profile
function goToProfile() {
  window.location.href = "/profile/profile.html";
}
function goToProfileFromMenu() {
  window.location.href = "/profile/profile.html";
}

// ✅ Sidebar toggle
function toggleMenu() {
  const menu = document.getElementById("menuContainer");
  const overlay = document.getElementById("overlay");

  menu.classList.toggle("active");
  overlay.classList.toggle("active");
}

// Ensure menu toggle works even if called before DOMContentLoaded
window.toggleMenu = function() {
  const menu = document.getElementById("menuContainer");
  const overlay = document.getElementById("overlay");
  if (menu && overlay) {
    menu.classList.toggle("active");
    overlay.classList.toggle("active");
  }
};

// ✅ Click outside to close sidebar
document.addEventListener("DOMContentLoaded", () => {
  const overlay = document.getElementById("overlay");
  if (overlay) {
    overlay.addEventListener("click", () => {
      const menu = document.getElementById("menuContainer");
      menu && menu.classList.remove("active");
      overlay.classList.remove("active");
    });
  }
});

// ✅ Menu item click highlight
function handleMenuItemClick(el, link) {
  document.querySelectorAll(".menu li, .suggested li").forEach(item =>
    item.classList.remove("active-menu-item")
  );
  el.classList.add("active-menu-item");
  window.location.href = link;
}

// ✅ Wait for DOM to load
document.addEventListener("DOMContentLoaded", () => {

  // ✅ Logout functionality
  const logoutBtn = document.getElementById("logoutBtn");
  if (logoutBtn) {
    logoutBtn.addEventListener("click", () => {
      firebase.auth().signOut().then(() => {
        window.location.href = "/login/login.html";
      }).catch(error => {
        console.error("Logout failed:", error);
        showModal("Logout failed!", "error");
      });
    });
  }

  // Set user name in sidebar if available
  const nameSpan = document.getElementById("user-name");
  if (nameSpan) {
    // Example: Replace with actual user name logic
    const userName = localStorage.getItem('userName') || 'Student';
    nameSpan.textContent = userName;
  }

});

// Add this at the end of homepage.js to handle sidebar/logout button
function logout() {
  // Clear user session (example: localStorage, Firebase, etc.)
  localStorage.removeItem('userName');
  // If using Firebase Auth, add: firebase.auth().signOut();
  window.location.href = '/login/login.html';
}
window.logout = logout;

// Redirect to login if not logged in (use Firebase Auth, not just localStorage)
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

const firebaseConfig = {
  apiKey: "AIzaSyAKbOTdzFjILtll5ucz0_BrAtZAZW0IdkA",
  authDomain: "abirabdullah-radiance.firebaseapp.com",
  projectId: "abirabdullah-radiance",
  storageBucket: "abirabdullah-radiance.firebasestorage.app",
  messagingSenderId: "313224876859",
  appId: "1:313224876859:web:d002d884698337bd639d1e",
  measurementId: "G-TJP2B88Q63"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

onAuthStateChanged(auth, (user) => {
  if (!user) {
    window.location.replace('/login/login.html');
  }
});

// PWA Install Button Logic
let deferredPrompt;
const installBtn = document.getElementById('pwa-install-btn');

window.addEventListener('beforeinstallprompt', (e) => {
  // Prevent the mini-infobar from appearing on mobile
  e.preventDefault();
  deferredPrompt = e;
  if (installBtn) installBtn.style.display = 'block';
});

if (installBtn) {
  installBtn.addEventListener('click', async () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      if (outcome === 'accepted') {
        installBtn.textContent = 'App Installed!';
        setTimeout(() => installBtn.style.display = 'none', 2000);
      } else {
        installBtn.textContent = 'Install App';
      }
      deferredPrompt = null;
    }
  });
}

// Hide button if already installed
window.addEventListener('appinstalled', () => {
  if (installBtn) installBtn.style.display = 'none';
});