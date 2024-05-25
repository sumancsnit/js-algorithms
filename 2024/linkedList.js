class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    const newNode = new Node(value);
    this.head = newNode;
    this.tail = this.head;
    this.length = 1;
  }

  push(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = null;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    // for empty list
    if (!this.head) return;
    let current = this.head;
    let pre = this.head;
    while (current.next) {
      pre = current;
      current = current.next;
    }
    this.tail = pre;
    this.tail.next = null;
    this.length--;
    // if length is one
    if (!this.length) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }

  unshift(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  shift() {
    if (!this.head) return;
    let temp = this.head;
    this.head = temp.next;
    temp.next = null;
    this.length--;
    if (this.length === 0) {
      this.tail = 0;
    }
    return temp;
  }

  get(index) {
    if (index < 0 || index >= this.length) return;
    let temp = this.head;
    for (let i = 0; i < index; i++) {
      temp = temp.next;
    }
    return temp;
  }

  set(index, value) {
    let temp = this.get(index);
    if (temp) {
      temp.value = value;
      return true;
    }
    return false;
  }

  insert(index, value) {
    if (index < 0 || index > this.length) return false;
    if (index === this.length) return this.push(value);
    if (index === 0) return this.unshift(value);
    const newNode = new Node(value);
    const leftSideNode = this.get(index - 1);
    newNode.next = leftSideNode.next;
    leftSideNode.next = newNode;
    this.length++;
    return true;
  }

  remove(index) {
    if (index < 0 || index >= this.length) return undefined ;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();
    const leftSideNode = this.get(index - 1);
    const temp = leftSideNode.next;
    leftSideNode.next = temp.next;
    this.length--;
    return true;
  }
}

let myLinkedList = new LinkedList(1);
myLinkedList.push(2);
myLinkedList.push(3);
myLinkedList.push(4);
myLinkedList.push(5);

// console.log(myLinkedList.pop());
// myLinkedList.unshift(11);
// myLinkedList.unshift(22);
// myLinkedList.shift();
console.log('remove', myLinkedList.remove(1));
console.log('get', myLinkedList.get(3));
console.log('insert', myLinkedList.insert(1, 97));
console.log('get', myLinkedList.get(2));

console.log('myLinkedList >>>>>>>', myLinkedList);
