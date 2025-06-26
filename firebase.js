// Firebase App (the core Firebase SDK) is always required and must be listed first
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-analytics.js";

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
const db = getFirestore(app);
const auth = getAuth(app);
const analytics = getAnalytics(app);

export { app, db, auth, analytics };
