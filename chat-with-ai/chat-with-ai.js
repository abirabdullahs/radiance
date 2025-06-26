// Simple Chat With AI UI Logic
const chatBox = document.getElementById('aiChatBox');
const chatForm = document.getElementById('aiChatForm');
const chatInput = document.getElementById('aiChatInput');
let chatHistory = [];

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

function showTyping() {
  const typingDiv = document.createElement('div');
  typingDiv.className = 'ai-msg ai typing';
  const bubble = document.createElement('div');
  bubble.className = 'ai-bubble';
  bubble.textContent = 'Typing...';
  typingDiv.appendChild(bubble);
  typingDiv.id = 'ai-typing-indicator';
  chatBox.appendChild(typingDiv);
  chatBox.scrollTop = chatBox.scrollHeight;
}

function removeTyping() {
  const typingDiv = document.getElementById('ai-typing-indicator');
  if (typingDiv) typingDiv.remove();
}

function getAIReply(userMsg) {
  // Simple context-aware logic
  const msg = userMsg.toLowerCase();
  if (msg.includes('hello') || msg.includes('hi') || msg.includes('হ্যালো')) {
    return 'হ্যালো! কিভাবে সাহায্য করতে পারি?';
  } else if (msg.includes('tumake ke') || msg.includes('তুমাকে কে') || msg.includes('who are you')) {
    return 'আমি Radiance AI চ্যাটবট, তোমার পড়াশোনার সহায়ক!';
  } else if (msg.includes('thanks') || msg.includes('ধন্যবাদ')) {
    return 'আপনাকেও ধন্যবাদ!';
  } else if (msg.includes('help') || msg.includes('help me') || msg.includes('সাহায্য')) {
    return 'তুমি যেকোনো প্রশ্ন করতে পারো—বিষয়, অধ্যায়, বা সাধারণ জ্ঞান!';
  } else if (msg.includes('bye') || msg.includes('goodbye') || msg.includes('বিদায়')) {
    return 'বিদায়! আবার দেখা হবে!';
  } else if (msg.includes('physics')) {
    return 'ফিজিক্স নিয়ে জানতে চাইলে নির্দিষ্ট অধ্যায় বা প্রশ্ন লিখো!';
  } else if (msg.includes('chemistry')) {
    return 'কেমিস্ট্রি বিষয়ক প্রশ্ন করো, আমি চেষ্টা করব উত্তর দিতে!';
  } else if (msg.includes('math')) {
    return 'গণিতের সমস্যা বা অধ্যায় লিখো, সাহায্য করব!';
  } else if (msg.includes('biology')) {
    return 'বায়োলজি নিয়ে জানতে চাইলে প্রশ্ন করো!';
  } else if (msg.includes('ict')) {
    return 'আইসিটি বিষয়ক প্রশ্ন লিখো!';
  } else if (msg.includes('clear')) {
    return '__clear__';
  } else if (msg.includes('history')) {
    return chatHistory.length > 1 ? chatHistory.slice(0, -1).map(h => h.sender+': '+h.text).join('\n') : 'কোনো ইতিহাস নেই।';
  } else {
    // Contextual fallback
    if (chatHistory.length > 2) {
      return 'তোমার আগের প্রশ্ন: "' + chatHistory[chatHistory.length-2].text + '"\nদুঃখিত, এই বিষয়ে আমার জানা নেই। অন্য কিছু জানতে চাও?';
    }
    return 'দুঃখিত, এই বিষয়ে আমার জানা নেই। অন্য কিছু জানতে চাও?';
  }
}

function clearChat() {
  chatBox.innerHTML = '';
  chatHistory = [];
  appendMsg('নতুন চ্যাট শুরু হয়েছে!', 'ai');
}

// Add clear chat button
if (!document.getElementById('aiClearBtn')) {
  const clearBtn = document.createElement('button');
  clearBtn.textContent = 'Clear Chat';
  clearBtn.className = 'ai-clear-btn';
  clearBtn.id = 'aiClearBtn';
  clearBtn.onclick = clearChat;
  chatForm.parentNode.insertBefore(clearBtn, chatForm);
}

// Greet on load
appendMsg('স্বাগতম! আমি Radiance AI চ্যাটবট। পড়াশোনা, প্রশ্ন, বা সাহায্য লাগলে লিখো!', 'ai');

chatForm.addEventListener('submit', function(e) {
  e.preventDefault();
  const userMsg = chatInput.value.trim();
  if (!userMsg) return;
  appendMsg(userMsg, 'user');
  chatHistory.push({ sender: 'user', text: userMsg });
  chatInput.value = '';
  showTyping();
  setTimeout(() => {
    removeTyping();
    const reply = getAIReply(userMsg);
    if (reply === '__clear__') {
      clearChat();
      return;
    }
    appendMsg(reply, 'ai');
    chatHistory.push({ sender: 'ai', text: reply });
  }, 900);
});
