// login.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import {
  getAuth,
  setPersistence,
  browserLocalPersistence,
  signInWithEmailAndPassword,
  onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

// 🔹 Your Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyAKbOTdzFjILtll5ucz0_BrAtZAZW0IdkA",
  authDomain: "abirabdullah-radiance.firebaseapp.com",
  projectId: "abirabdullah-radiance",
  storageBucket: "abirabdullah-radiance.firebasestorage.app",
  messagingSenderId: "313224876859",
  appId: "1:313224876859:web:d002d884698337bd639d1e",
  measurementId: "G-TJP2B88Q63"
};

// 🔹 Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// 🔹 Redirect if already logged in
onAuthStateChanged(auth, (user) => {
  if (user) {
    window.location.href = "/homepage/homepage.html";
  }
});

// 🔹 Handle login form
const form = document.getElementById('loginForm');

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const email = document.getElementById('loginEmail').value.trim();
  const password = document.getElementById('loginPassword').value;

  try {
    // 🔹 Set session persistence
    await setPersistence(auth, browserLocalPersistence);

    const userCredential = await signInWithEmailAndPassword(auth, email, password);

    showModal("Login successful!", "success");
    window.location.replace("/homepage/homepage.html"); // Use replace to prevent back navigation

  } catch (error) {
    console.error("Login Error:", error);
    let msg = "Login failed. Please try again.";
    if (error.code === "auth/wrong-password") {
      msg = "Wrong password. Please try again!";
    } else if (error.code === "auth/user-not-found") {
      msg = "No account found with this email.";
    } else if (error.code === "auth/too-many-requests") {
      msg = "Too many failed attempts. Please try again later or reset your password.";
    } else if (error.code === "auth/invalid-email") {
      msg = "Invalid email address.";
    }
    showModal(msg, "error");
  }
});
