
let messageContainer = document.querySelector('#message-container');

async function fetchMessages(messagesEndpoint) {
  const response = await fetch(messagesEndpoint);
  const data = await response.json();
  console.log(data);

  data.forEach(obj => {
    messageContainer.append(obj['id']);
    messageContainer.append(obj['text']);
  });
}

fetchMessages('http://localhost:3002/messages');