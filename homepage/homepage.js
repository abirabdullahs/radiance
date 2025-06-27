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
  const menu = document.getElementById('menuContainer');
  const overlay = document.getElementById('overlay');
  if (menu && overlay) {
    menu.classList.toggle('active');
    overlay.classList.toggle('active');
  }
}

// Sidebar menu item click handler
function handleMenuItemClick(el, url) {
  document.querySelectorAll('.menu li, .suggested li').forEach(li => li.classList.remove('active-menu-item'));
  el.classList.add('active-menu-item');
  window.location.href = url;
}

// Expose functions to window for inline HTML onclick
window.toggleMenu = toggleMenu;
window.handleMenuItemClick = handleMenuItemClick;
window.goToProfile = goToProfile;
window.goToProfileFromMenu = goToProfileFromMenu;

// Ensure all event listeners are set after DOM is loaded

document.addEventListener('DOMContentLoaded', () => {
  // Overlay click closes menu
  const overlay = document.getElementById('overlay');
  if (overlay) {
    overlay.onclick = () => {
      const menu = document.getElementById('menuContainer');
      if (menu) menu.classList.remove('active');
      overlay.classList.remove('active');
    };
  }

  // Set user name in sidebar if available
  const nameSpan = document.getElementById('user-name');
  if (nameSpan) {
    const userName = localStorage.getItem('userName') || 'Student';
    nameSpan.textContent = userName;
  }

  // Logout button
  const logoutBtn = document.getElementById('logoutBtn');
  if (logoutBtn) {
    logoutBtn.addEventListener('click', () => {
      firebase.auth().signOut().then(() => {
        window.location.href = '/login/login.html';
      }).catch(error => {
        console.error('Logout failed:', error);
        showModal('Logout failed!', 'error');
      });
    });
  }
});

// Add this at the end of homepage.js to handle sidebar/logout button
function logout() {
  localStorage.removeItem('loggedIn');
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

// PWA Install Button Logic for below-teacher button
let deferredPrompt;
const installBtnAlt = document.getElementById('pwaInstallBtnAlt');
const pwaModal = document.getElementById('pwaInstallModal');
const modalInstallBtn = document.getElementById('modalInstallBtn');
const closePwaModal = document.getElementById('closePwaModal');

window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault();
  deferredPrompt = e;
  if (installBtnAlt) installBtnAlt.style.display = 'flex';
});

if (installBtnAlt) {
  installBtnAlt.style.display = 'flex';
  installBtnAlt.addEventListener('click', () => {
    if (deferredPrompt) {
      if (pwaModal) pwaModal.style.display = 'flex';
    } else {
      alert('PWA install is not supported on your browser.');
    }
  });
}

if (modalInstallBtn) {
  modalInstallBtn.addEventListener('click', async () => {
    if (deferredPrompt) {
      pwaModal.style.display = 'none';
      deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      if (outcome === 'accepted') {
        installBtnAlt.textContent = 'App Installed!';
        setTimeout(() => installBtnAlt.innerHTML = '<i class="fas fa-download"></i> Install Radiance App', 2000);
      }
      deferredPrompt = null;
    }
  });
}
if (closePwaModal) {
  closePwaModal.onclick = () => { pwaModal.style.display = 'none'; };
}
window.addEventListener('appinstalled', () => {
  if (installBtnAlt) installBtnAlt.textContent = 'Installed!';
  if (pwaModal) pwaModal.style.display = 'none';
});