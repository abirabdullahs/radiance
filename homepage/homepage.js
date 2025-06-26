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

// ✅ Click outside to close sidebar
document.getElementById("overlay").addEventListener("click", () => {
  document.getElementById("menuContainer").classList.remove("active");
  document.getElementById("overlay").classList.remove("active");
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

  // ✅ Subject cards redirect
  const cards = document.querySelectorAll('.subject-card');
  cards.forEach(card => {
    card.addEventListener('click', () => {
      window.location.href = '/under construction.html';
    });
  });

  // ✅ Show logged-in user's name in sidebar
  const nameSpan = document.getElementById("user-name");
  if (nameSpan && window.firebase && firebase.auth) {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        // Try to show displayName, fallback to email, fallback to UID
        nameSpan.textContent = user.displayName || user.email || user.uid || "User";
      } else {
        nameSpan.textContent = "Guest";
      }
    });
  } else if (nameSpan) {
    nameSpan.textContent = "Guest";
  }

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

});

// Add this at the end of homepage.js to handle sidebar/logout button
function logout() {
  if (window.firebase && firebase.auth) {
    firebase.auth().signOut().then(() => {
      window.location.href = "/login/login.html";
    }).catch(error => {
      showModal("Logout failed!", "error");
    });
  } else {
    window.location.href = "/login/login.html";
  }
}
window.logout = logout;