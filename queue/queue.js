// 队列是遵循先进先出（FIFO，也称为先来先服务）原则的一组有序的项。队列在尾部添加新
// 元素，并从顶部移除元素。最新添加的元素必须排在队列的末尾。

export default class Queue {
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

  // 返回队列中第一个元素——最先被添加，也将是最先被移除的元素。队列不做
  // 任何变动（不移除元素，只返回元素信息——与 Stack 类的 peek 方法非常类似）。该方
  // 法在其他语言中也可以叫作 front 方法
  peek() {
    if (this.isEmpty()) return
    return this.items[this.lowestCount]
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
