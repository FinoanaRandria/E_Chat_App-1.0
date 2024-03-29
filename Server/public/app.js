const socket = io();
const msgText = document.querySelector('#msg')
const btnSend = document.querySelector('#btn-send')
const chatbox = document.querySelector('.chat-content')
const displayMsg = document.querySelector('.message')

let nameUsers;

do{
    nameUsers =prompt("Quel est votre Nom😁🌍")
}while(!nameUsers)

document.querySelector('#your-name').textContent = nameUsers



btnSend.addEventListener('click',(e)=>{
     e.preventDefault()
     sendMsg(msgText.value)
     msgText.value='';
     msgText.focus()
     chatbox.scrollTop = chatbox.scrollHeight;
     
})

const sendMsg = message =>{
    let msg = {
        user:nameUsers,
        message: message.trim()
    }

    display(msg,'you-message')
  

    socket.emit('sendMessage',msg)
}

socket.on('sendToAll',msg=>{
    display(msg,'other-message')
})

const display =(msg,type)=>{
 const msgDiv = document.createElement('div')
 let className= type
 msgDiv.classList.add(className, 'message-row')
let time = new Date().toLocaleDateString()

let innerText = `
<div class="message-title">
🙉<span>${msg.user}</span>
</div>
<div class="message-text">
  ${msg.message}
</div>
<div class="message-time">
    ${time}
</div>

`;
msgDiv.innerHTML = innerText
displayMsg.appendChild(msgDiv)
chatbox.scrollTop = chatbox.scrollHeight;
}