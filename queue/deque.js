// 双端队列（deque，或称 double-ended queue）是一种允许我们同时从前端和后端添加和移除
// 元素的特殊队列。

export default class Deque {
  // 下一个元素的索引
  count = 0
  // 第一个元素的索引
  lowestCount = 0
  // 元素集合
  items = {}

  // 向队列尾部添加一个（或多个）新的
  enqueue(element) {
    this.items[this.count] = element
    this.count++
  }

  // 移除队列的第一项（即排在队列最前面的项）并返回被移除的元素
  dequeue() {
    if (this.isEmpty()) return
    const item = this.items[this.lowestCount]
    delete this.items[this.lowestCount]
    this.lowestCount++
    return item
  }

  // 向双端队列的前端添加元素
  addFront(element) {
    // 如果是空的队列
    if (this.isEmpty()) {
      this.item[0] = element
      this.count++
      // 如果第一个元素的下标不是0
    } else if (this.lowestCount > 0) {
      this.items[this.lowestCount - 1] = element
      this.lowestCount--
      // 如果第一元素的下标是0
    } else {
      // 所有元素对应的下标都要加1，相当于整体后移一位，从前向后遍历会将后一位的元素覆盖，
      // 所以要从后往前遍历
      for (let i = this.count; i > 0; i--) {
        this.items[i] = this.items[i - 1]
      }
      this.count++
      this.lowestCount = 0
      this.item[0] = element
    }
  }

  // 双端队列前端移除第一个元素（实现方法和 Queue 类中的dequeue 方法相同）
  removeFront() {
    return this.dequeue()
  }

  // 法在双端队列后端添加新的元素（实现方法和 Queue 类中的enqueue 方法相同）
  addBack() {
    this.enqueue()
  }

  // 从双端队列后端移除第一个元素（实现方法和 Stack 类中的pop 方法一样）
  removeBack() {
    if (this.isEmpty()) return
    const item = this.items[this.count - 1]
    delete this.items[this.count - 1]
    this.count--
    return item
  }

  // 返回队列中第一个元素——最先被添加，也将是最先被移除的元素。队列不做
  // 任何变动（不移除元素，只返回元素信息——与 Stack 类的 peek 方法非常类似）。该方
  // 法在其他语言中也可以叫作 front 方法
  peek() {
    if (this.isEmpty()) return
    return this.items[this.lowestCount]
  }

  // 返回双端队列前端的第一个元素（实现方法和 Queue 类中的 peek方法一样）。
  peekFront() {
    return this.peek()
  }

  // 返回双端队列后端的第一个元素（实现方法和 Stack 类中的 peek方法一样）。
  peekBack() {
    if (this.isEmpty()) return
    return this.items[this.count - 1]
  }

  // 如果队列中不包含任何元素，返回 true，否则返回 false
  isEmpty() {
    // return this.count - this.lowestCount === 0
    return this.size() === 0
  }

  // 返回队列包含的元素个数，与数组的 length 属性类似
  size() {
    return this.count - this.lowestCount
  }

  // 移除队列里的所有元素
  clear() {
    this.items = {}
    this.count = 0
    this.lowestCount = 0
  }

  // 打印所有元素
  toString() {
    if (this.isEmpty()) return ""
    let objString = ""
    for (let i = this.lowestCount; i < this.count; i++) {
      objString = `${objString},${this.items[i]}`
    }
    return objString
  }
}
