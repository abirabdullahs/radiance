// profile.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { getFirestore, doc, getDoc, setDoc } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

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
const db = getFirestore(app);

onAuthStateChanged(auth, async (user) => {
  if (user) {
    const uid = user.uid;
    const docRef = doc(db, "users", uid);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      const data = docSnap.data();
      // Show user data
      document.getElementById('pName').textContent = data.name;
      document.getElementById('pInstitute').textContent = data.institute;
      document.getElementById('pBatch').textContent = data.batch;
      document.getElementById('pContact').textContent = data.contact;
      document.getElementById('pEmail').textContent = data.email;

      // Autofill edit form
      document.getElementById('editName').value = data.name;
      document.getElementById('editInstitute').value = data.institute;
      document.getElementById('editBatch').value = data.batch;
      document.getElementById('editContact').value = data.contact;

    } else {
      showModal("No profile data found.", "error");
    }
  } else {
    // Not logged in
    window.location.href = "/login/login.html";
  }
});

// Edit profile form submit handler
document.getElementById('editForm').addEventListener('submit', async (e) => {
  e.preventDefault();

  const updatedData = {
    name: document.getElementById('editName').value.trim(),
    institute: document.getElementById('editInstitute').value.trim(),
    batch: document.getElementById('editBatch').value,
    contact: document.getElementById('editContact').value.trim()
  };

  try {
    const user = auth.currentUser;
    if (!user) throw new Error("User not logged in");

    await setDoc(doc(db, "users", user.uid), updatedData, { merge: true });
    showModal("Profile updated!", "success");
    location.reload(); // reload page to see updated info
  } catch (err) {
    console.error("Update failed:", err);
    showModal("Failed to update profile: " + err.message, "error");
  }
});

// Add logout button dynamically if not present and attach handler
function ensureLogoutButton() {
  let logoutBtn = document.getElementById('logoutBtn');
  if (!logoutBtn) {
    logoutBtn = document.createElement('button');
    logoutBtn.id = 'logoutBtn';
    logoutBtn.textContent = 'Logout';
    document.querySelector('.profile-box').appendChild(logoutBtn);
  }
  logoutBtn.onclick = () => {
    signOut(auth).then(() => {
      window.location.href = "/login/login.html";
    });
  };
}

// Ensure logout button after DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', ensureLogoutButton);
} else {
  ensureLogoutButton();
}

// showModal function for beautiful alerts
function showModal(message, type) {
  const modal = document.createElement('div');
  modal.className = `modal ${type}`;
  modal.textContent = message;
  document.body.appendChild(modal);
  setTimeout(() => {
    modal.classList.add('show');
  }, 100);
  setTimeout(() => {
    modal.classList.remove('show');
    setTimeout(() => {
      document.body.removeChild(modal);
    }, 300);
  }, 3000);
}
