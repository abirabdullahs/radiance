import { db, auth } from '../firebase.js';
import {
  collection, addDoc, query, orderBy, onSnapshot, where, serverTimestamp
} from "https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js";
import { onAuthStateChanged, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";

const TEACHER_EMAIL = 'abirabdullah3491@gmail.com';
const chatBox = document.getElementById('teacherChatBox');
const chatForm = document.getElementById('teacherChatForm');
const chatInput = document.getElementById('teacherChatInput');

// Get userName from localStorage or fallback
const userName = localStorage.getItem('userName') || 'Student';
const userEmail = localStorage.getItem('userEmail') || '';

function appendMsg(text, sender, time) {
  const msgDiv = document.createElement('div');
  msgDiv.className = 'teacher-msg ' + sender;
  const bubble = document.createElement('div');
  bubble.className = 'teacher-bubble';
  bubble.textContent = text;
  msgDiv.appendChild(bubble);
  if (time) {
    const timeDiv = document.createElement('div');
    timeDiv.className = 'msg-time';
    timeDiv.textContent = new Date(time.seconds * 1000).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
    msgDiv.appendChild(timeDiv);
  }
  chatBox.appendChild(msgDiv);
  chatBox.scrollTop = chatBox.scrollHeight;
}

function clearChatBox() {
  chatBox.innerHTML = '';
}

// Firestore: messages collection
const messagesRef = collection(db, 'teacher-messages');

// Auth: check if teacher
let isTeacher = false;
onAuthStateChanged(auth, (user) => {
  if (user && user.email === TEACHER_EMAIL) {
    isTeacher = true;
    listenForAllMessages();
  } else if (user) {
    isTeacher = false;
    listenForUserMessages(user.email);
  } else {
    // Not signed in, fallback to local user
    isTeacher = false;
    listenForUserMessages(userEmail);
  }
});

// Listen for all messages (teacher view)
function listenForAllMessages() {
  clearChatBox();
  const q = query(messagesRef, orderBy('createdAt'));
  onSnapshot(q, (snapshot) => {
    clearChatBox();
    snapshot.forEach(doc => {
      const msg = doc.data();
      appendMsg(msg.text, msg.sender === 'teacher' ? 'teacher' : 'user', msg.createdAt);
    });
  });
}

// Listen for only this user's messages (user view)
function listenForUserMessages(email) {
  clearChatBox();
  if (!email) return;
  const q = query(messagesRef, where('userEmail', '==', email), orderBy('createdAt'));
  onSnapshot(q, (snapshot) => {
    clearChatBox();
    snapshot.forEach(doc => {
      const msg = doc.data();
      appendMsg(msg.text, msg.sender === 'teacher' ? 'teacher' : 'user', msg.createdAt);
    });
  });
}

// Send message
chatForm.addEventListener('submit', async function(e) {
  e.preventDefault();
  const userMsg = chatInput.value.trim();
  if (!userMsg) return;
  chatInput.value = '';
  await addDoc(messagesRef, {
    text: userMsg,
    sender: isTeacher ? 'teacher' : 'user',
    userName: userName,
    userEmail: isTeacher ? null : userEmail,
    createdAt: serverTimestamp()
  });
});

// Teacher can reply to any user (UI for teacher to select user and reply can be added later)
// For now, teacher's reply goes to the currently open chat (all users see teacher's reply)
// For a more advanced system, implement per-user chat selection for teacher
