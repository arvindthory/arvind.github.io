// Shichi — chat page interface preview
// Nothing here calls an AI model yet. It only manages the chat bubbles
// in the browser so the interface feels real while you build the backend.

const chatWindow = document.getElementById('chatWindow');
const chatForm = document.getElementById('chatForm');
const chatInput = document.getElementById('chatInput');

function addMessage(text, role) {
  const bubble = document.createElement('div');
  bubble.className = `msg ${role}`;
  bubble.textContent = text;
  chatWindow.appendChild(bubble);
  chatWindow.scrollTop = chatWindow.scrollHeight;
}

// If the person searched from the homepage hero, index.html sends them here
// as chat.html?q=their+search — pick that up and show it as their first message.
const params = new URLSearchParams(window.location.search);
const incomingQuery = params.get('q');
if (incomingQuery) {
  addMessage(incomingQuery, 'user');
  addMessage(placeholderReply(), 'assistant');
}

chatForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const text = chatInput.value.trim();
  if (!text) return;

  addMessage(text, 'user');
  chatInput.value = '';

  // ---- Where the real model call goes -----------------------------------
  // Once chat.py is wired to an actual model, swap the two lines below for
  // something like:
  //
  //   fetch('/api/chat', {
  //     method: 'POST',
  //     headers: { 'Content-Type': 'application/json' },
  //     body: JSON.stringify({ message: text })
  //   })
  //     .then(res => res.json())
  //     .then(data => addMessage(data.reply, 'assistant'));
  //
  // For now, it just shows a canned placeholder reply.
  setTimeout(() => addMessage(placeholderReply(), 'assistant'), 400);
});

function placeholderReply() {
  return "Shichi's reasoning engine isn't connected yet — this is a preview of the chat experience, not a real answer.";
}
