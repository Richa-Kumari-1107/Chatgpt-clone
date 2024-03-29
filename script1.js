function sendMessage() {
    const userMessage = document.getElementById('user-input').value.trim();
    if (userMessage === '') return;

    appendMessage('You', userMessage);
    document.getElementById('user-input').value = '';

    // Simulate ChatGPT response
    setTimeout(() => {
        const response = generateResponse(userMessage);
        appendMessage('ChatGPT', response);
    }, 500);
}

function appendMessage(sender, message) {
    const chatLog = document.getElementById('chat-log');
    const messageElement = document.createElement('div');
    messageElement.className = sender.toLowerCase();
    messageElement.innerText = `${sender}: ${message}`;
    chatLog.appendChild(messageElement);
    chatLog.scrollTop = chatLog.scrollHeight;
}

function generateResponse(userMessage) {
    // Replace this with actual ChatGPT response generation logic
    return "Sorry, I'm just a simple clone. I can't provide real responses.";
}