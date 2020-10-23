

class Chatroom {
    constructor(room, username) {
        this.room = room;
        this.username = username;
        this.unsub;
      
    }

    async addChat(message) {
        const now = new Date();
        const dbObj = {
            room: this.room,
            username: this.username,
            message: message,
            timestamp: firebase.firestore.Timestamp.fromDate(now)
        }
        const response = await db.collection('chats').add(dbObj)
            return response;
    }
    getChats(callback) {
        this.unsub = db.collection('chats')
            .where('room', '==', this.room)
            .onSnapshot(snapshot => {
                snapshot.docChanges().forEach(change => {
                    if (change.type === 'added') {
                        //update UI
                      callback(change.doc.data())  
                    }
                })
            })
    }
    updateName(name) {
        this.username = name
        localStorage.setItem('username', name)
    }
    updateRoom(room) {
        this.room = room
        if (this.unsub) {
            this.unsub()
        }
    }
}





