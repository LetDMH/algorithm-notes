// 栈是一种遵从后进先出（LIFO）原则的有序集合。新添加或待删除的元素都保存在栈的同
// 一端，称作栈顶，另一端就叫栈底。在栈里，新元素都靠近栈顶，旧元素都接近栈底。

/**
 * @description 使用对象存储栈元素
 */
export class Stack {
  // 下一个元素的索引
  count = 0
  // 元素集合
  items = {}

  // 添加一个（或几个）新元素到栈顶
  push(element) {
    this.items[this.count] = element
    this.count++
  }

  // 移除栈顶的元素，同时返回被移除的元素
  pop() {
    if (this.isEmpty()) return
    this.count--
    const item = this.items[this.count]
    delete this.items[this.count]
    return item
  }

  // 返回栈顶的元素，不对栈做任何修改（该方法不会移除栈顶的元素，仅仅返回它）
  peek() {
    if (this.isEmpty()) return
    return this.items[this.count - 1]
  }

  // 如果栈里没有任何元素就返回 true，否则返回 false
  isEmpty() {
    return this.count === 0
  }

  // 移除栈里的所有元素
  clear() {
    this.items = {}
    this.count = 0
  }

  // 返回栈里的元素个数。该方法和数组的 length 属性很类似
  size() {
    return this.count
  }

  // 打印所有元素
  toString() {
    if (this.isEmpty()) return ""
    let objString = ""
    for (let i = 0; i < this.count; i++) {
      objString = `${objString},${this.items[i]}`
    }
    return objString
  }
}

/**
 * @description 使用数组存储栈元素，数组是元素的一个有序集合，为了保证元素排列有序，
 * 它会占用更多的内存空间
 */
export class StackArray {
  // 元素集合
  items = []

  // 添加一个（或几个）新元素到栈顶
  push(element) {
    this.items.push(element)
  }

  // 移除栈顶的元素，同时返回被移除的元素
  pop() {
    return this.items.pop()
  }

  // 返回栈顶的元素，不对栈做任何修改（该方法不会移除栈顶的元素，仅仅返回它）
  peek() {
    return this.items[this.items.length - 1]
  }

  // 如果栈里没有任何元素就返回 true，否则返回 false
  isEmpty() {
    return this.items.length === 0
  }

  // 移除栈里的所有元素
  clear() {
    this.items = []
  }

  // 返回栈里的元素个数。该方法和数组的 length 属性很类似
  size() {
    return this.items.length
  }

  toString() {
    return this.items.toString()
  }
}
