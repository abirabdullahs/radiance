// courses.js
// You can add interactivity for course cards here

document.querySelectorAll('.enroll-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    showModal('Enrollment feature coming soon!', 'info');
  });
});

document.querySelectorAll('.course-card.chemistry .enroll-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    window.location.href = '/chemistry-course-2027.html';
  });
});
document.querySelectorAll('.course-card.physics .enroll-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    window.location.href = '/physics/physics.html';
  });
});
document.querySelectorAll('.course-card.free .enroll-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    window.location.href = '/chemistry-course-2027.html';
  });
});
