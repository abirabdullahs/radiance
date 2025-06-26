// Discuss page: frontend-only, messages not saved after refresh
const discussForm = document.getElementById('discussForm');
const discussInput = document.getElementById('discussInput');
const discussMessages = document.getElementById('discussMessages');

discussForm.addEventListener('submit', function(e) {
  e.preventDefault();
  const msg = discussInput.value.trim();
  if (!msg) return;
  const msgDiv = document.createElement('div');
  msgDiv.className = 'discuss-msg';
  msgDiv.textContent = msg;
  discussMessages.appendChild(msgDiv);
  discussInput.value = '';
  discussMessages.scrollTop = discussMessages.scrollHeight;
});
