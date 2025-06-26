// Simple Chat With AI UI Logic
const chatBox = document.getElementById('aiChatBox');
const chatForm = document.getElementById('aiChatForm');
const chatInput = document.getElementById('aiChatInput');

function appendMsg(text, sender) {
  const msgDiv = document.createElement('div');
  msgDiv.className = 'ai-msg ' + sender;
  const bubble = document.createElement('div');
  bubble.className = 'ai-bubble';
  bubble.textContent = text;
  msgDiv.appendChild(bubble);
  chatBox.appendChild(msgDiv);
  chatBox.scrollTop = chatBox.scrollHeight;
}

chatForm.addEventListener('submit', function(e) {
  e.preventDefault();
  const userMsg = chatInput.value.trim();
  if (!userMsg) return;
  appendMsg(userMsg, 'user');
  chatInput.value = '';
  setTimeout(() => {
    appendMsg('ami ekhono create hoini; create hoile tomake reoly korbo', 'ai');
  }, 600);
});
