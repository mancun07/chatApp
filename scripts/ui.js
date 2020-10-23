
class ChatUI {
    constructor(list) {
        this.list = list
    }
    render(data) {
        // const when = dateFns.distanceInWordsToNow(
        //     data.timestamp.toDate(), 
        //        { addSuffix: true }
        // <div class="time">${when}</div>
        //     )
        const htmlToRender = `
            <div class="list-group-item">
                <span class="username">${data.username}</span>
                <span class="message">${data.message}</span>
               
            
            </div>
        `
        this.list.innerHTML += htmlToRender
    }
    clearData() {
        this.list.innerHTML = '';
    }
}