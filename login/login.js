// login.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

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

// 🔹 Handle login form
const form = document.getElementById('loginForm');

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const email = document.getElementById('loginEmail').value.trim();
  const password = document.getElementById('loginPassword').value;

  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);

    // 🔹 No email verification check needed
    alert("Login successful!");
    window.location.href = "../homepage/homepage.html"; // redirect to profile page

  } catch (error) {
    console.error("Login Error:", error);
    alert("Login failed: " + error.message);
  }
});
