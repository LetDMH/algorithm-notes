// 链表存储有序的元素集合，但不同于数组，链表中的元素在内存中并不是连续放置的。
// 每个元素由一个存储元素本身的节点和一个指向下一个元素的引用（也称指针或链接）组成。

class LinkedList {
  // 链表中的元素数量
  count = 0
  // 根节点
  head = void 0
  constructor() {}

  // 向链表尾部添加一个新元素。
  push(element) {
    const node = new Node(element)
    if (this.head == null) {
      this.head = node
    } else {
      let current = this.head
      // 迭代直至找到最后一个节点
      while (current.next != null) {
        current = current.next
      }
      current.next = this.head
    }
    this.count++
  }

  // 从链表中移除一个元素。
  remove(element) {

  }

  // 向链表的特定位置插入一个新元素。
  insert(element, index) {
    if (index >= 0 && index <= this.count) {

        return true
    }
    return false
  }

  // 从链表的特定位置移除一个元素。
  removeAt(index) {
    // count为0代表没有元素，则不需要考虑
    if (index >= 0 && index < this.count) {
      let current = this.head
      if (index === 0) {
        this.head = current.next
      } else {
        // let previous
        // for (let i = 0; i < index; i++) {
        //   previous = current
        //   current = current.next
        // }
        // // 将 previous 与 current 的下一项链接起来：跳过 current，从而移除它
        // previous.next = current.next
        const previous = this.getElementAt(index - 1); 
        current = previous.next; 
        // 将 previous 与 current 的下一项链接起来：跳过 current，从而移除它
        previous.next = current.next
      }
      this.count--
      return current.element
    }
    return void 0
  }

  // 返回链表中特定位置的元素。如果链表中不存在这样的元素，则返回 undefined。
  getElementAt(index) {
    if (index >= 0 && index <= this.count) {
      let node = this.head
      for (let i = 0; i < index && node != null; i++) {
        node = node.next
      }
      return node
    }
    return void 0
  }

  // 返回元素在链表中的索引。如果链表中没有该元素则返回-1。
  indexOf(element) {}

  // 如果链表中不包含任何元素，返回 true，如果链表长度大于 0则返回 false。
  isEmpty() {}

  // 返回链表包含的元素个数，与数组的 length 属性类似。
  size() {}

  // 返回表示整个链表的字符串。由于列表项使用了 Node 类，就需要重写继承自 JavaScript 对象默认的 toString 方法，让其只输出元素的值。
  toString() {}
}

class Node {
  constructor(element) {
    this.element = element
    this.next = void 0
  }
}
