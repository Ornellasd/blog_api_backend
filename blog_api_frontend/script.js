const fetch = require('node-fetch');

function grabMessages(messagesEndpoint) {
  fetch(messagesEndpoint)
    .then(res => res.text())
    .then(text => console.log(text))
}

grabMessages('http://localhost:3002/messages');
