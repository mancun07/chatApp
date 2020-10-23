// DOM queries
const chatList = document.querySelector('.chat-list')
const chatForm = document.querySelector('.new-chat');
const nameForm = document.querySelector('.new-name');
const updateInfo = document.querySelector('.update-message');
const buttonsArea = document.querySelector('.chat-rooms');

// new instances
const username = localStorage.username ? localStorage.username : 'Аноним'
const chatroom = new Chatroom('general', username);
const chatUI = new ChatUI(chatList); 
console.log(chatroom)


// functions (get chats and rendering)
chatroom.getChats(data => chatUI.render(data))


chatForm.addEventListener('submit', e => {
    e.preventDefault();
    const userMessage = e.target.message.value.trim();
    chatroom.addChat(userMessage)
        .then(() => chatForm.reset())
        .catch(err => console.log(err))
})

nameForm.addEventListener('submit', e => {
    e.preventDefault();
    const userName = e.target.name.value.trim();
    chatroom.updateName(userName)
    nameForm.reset();
    updateInfo.innerHTML = `Ваше имя изменено на ${userName}`
    setTimeout(() => {
        updateInfo.innerHTML = '';
    }, 3000)
})

buttonsArea.addEventListener('click', e => {
    if (e.target.tagName == 'BUTTON') {
        const attr = e.target.getAttribute('id');
        chatUI.clearData();
        chatroom.updateRoom(attr);
        chatroom.getChats(data => chatUI.render(data))
      
        console.log(chatroom)
    }
})











    
