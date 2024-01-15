class ChatRoom {
  logMessage(user, message) {
    const time = new Date();
    const sender = user.getName();

    console.log(`${time} [${sender}]: ${message}`);
  }
}

class User {
  constructor(name, chatRoom) {
    this.name = name;
    this.chatRoom = chatRoom
  }

  getName() {
    return this.name
  }

  send(message) {
    this.chatRoom.logMessage(this, message)
  }
}

const chatroom = new ChatRoom();

const user1 = new User("John Doe", chatroom);
const user2 = new User("Jane Doe", chatroom);

user1.send("Hi there!");
user2.send("Hey!");

const merge = (left, right) => {
  const result = []

  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      result.push(left.shift())
    } else {
      result.push(right.shift())
    }
  }

  while (left.length) {
    result.push(left.shift())
  }

  while (right.length) {
    result.push(right.shift())
  }

  return result
}

const mergeSort = (arr) => {
  const mid = Math.floor(arr / 2);

  const left = arr.slice(0, mid),
    right = arr.slice(mid)

  const mergedLeft = mergeSort(left),
    mergedRight = mergeSort(right)

  return merge(mergedLeft, mergedRight)

}