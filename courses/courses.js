// courses.js
// You can add interactivity for course cards here

document.querySelectorAll('.enroll-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    showModal('Enrollment feature coming soon!', 'info');
  });
});
