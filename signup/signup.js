// script.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { getFirestore, doc, setDoc } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";
import { sendEmailVerification } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

// TODO: নিচের firebaseConfig টা তোমার Firebase Console → Project Settings → SDK থেকে copy করে বসাও
const firebaseConfig = {
  apiKey: "AIzaSyAKbOTdzFjILtll5ucz0_BrAtZAZW0IdkA",
  authDomain: "abirabdullah-radiance.firebaseapp.com",
  projectId: "abirabdullah-radiance",
  storageBucket: "abirabdullah-radiance.firebasestorage.app",
  messagingSenderId: "313224876859",
  appId: "1:313224876859:web:d002d884698337bd639d1e",
  measurementId: "G-TJP2B88Q63"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// Signup form submission
const form = document.getElementById('signupForm');

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const institute = document.getElementById('institute').value.trim();
  const batch = document.getElementById('batch').value;
  const contact = document.getElementById('contact').value.trim();
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirmPassword').value;

  if (password !== confirmPassword) {
    alert("Passwords do not match!");
    return;
  }

  try {
  const userCredential = await createUserWithEmailAndPassword(auth, email, password);
  const user = userCredential.user;

  await setDoc(doc(db, "users", user.uid), {
    name,
    institute,
    batch,
    contact,
    email,
    createdAt: new Date()
  });

  await sendEmailVerification(user);
  alert("Signup successful! A verification email has been sent. Please verify your email before logging in.");
  window.location.href = "../login/login.html"; // Only this redirect is needed

} catch (error) {
  console.error(error);
  alert("Signup failed: " + error.message);
}

});
