
class ChatUI {
    constructor(list) {
        this.list = list
    }
    render(data) {
        const when = dateFns.distanceInWordsToNow(
            data.timestamp.toDate(), 
               { addSuffix: true }
            )
        const htmlToRender = `
            <div class="list-group-item">
                <span class="message">${data.username}</span>
                <span class="username">${data.message}</span>
                <div class="time">${when}</div>
            
            </div>
        `
        this.list.innerHTML += htmlToRender
    }
    clearData() {
        this.list.innerHTML = '';
    }
}