import Queue from "./queue.js"
import Deque from "./deque.js"

/**
 * @description 循环队列——击鼓传花游戏
 * @param {any[]} elementsList
 * @param {number} num
 */
function hotPotato(elementsList, num) {
  const queue = new Queue()
  const elimitatedList = []
  for (let i = 0; i < elementsList.length; i++) {
    queue.enqueue(elementsList[i])
  }
  while (queue.size() > 1) {
    for (let i = 0; i < num; i++) {
      queue.enqueue(queue.dequeue())
    }
    elimitatedList.push(queue.dequeue())
  }
  return {
    eliminated: elimitatedList,
    winner: queue.dequeue()
  }
}

/**
 * @description 改良版击鼓传花，可以每次随机传递次数淘汰
 * @param {any[]} elementsList
 * @returns
 */
function hotPotato(elementsList) {
  let queue = new Queue()
  elementsList.map((name) => queue.enqueue(name))
  return function (num) {
    if (queue.isEmpty()) {
      console.log("游戏已经结束")
      return
    }
    for (let i = 0; i < num; i++) {
      queue.enqueue(queue.dequeue())
    }
    let outer = queue.dequeue()
    console.log(outer + "出局了")
    if (queue.size() === 1) {
      let winner = queue.dequeue()
      queue = null // 让垃圾回收机制能自动清除弱引用内存
      console.log(winner + "获胜")
      return winner
    } else {
      return outer
    }
  }
}

// console.log(
//   hotPotato(
//     [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
//     5
//   )
// )

/**
 * @description 回文检查器
 * @param {string} str
 */
function palindromeChecker(str) {
  if (typeof str !== "string" || str === "") return false
  const deque = new Deque()
  // 小写、去除空格
  const lowerStr = str.toLocaleLowerCase().split(" ").join("")
  // 是否相同
  let isEqual = true
  // 第一个、最后一个
  let firstChar, lastChar
  // 加入双端队列
  for (let i = 0; i < lowerStr.length; i++) {
    // deque.addBack(lowerStr[i])
    deque.addBack(lowerStr.charAt(i))
  }
  // 队列长度为0或1并且有不相等
  while (deque.size() > 1 && isEqual) {
    firstChar = deque.removeFront()
    lastChar = deque.removeBack()
    if (firstChar !== lastChar) {
      isEqual = false
    }
  }
  return isEqual
}

// console.log(palindromeChecker("abccba"))

/**
 * @description 优先队列
 * @example 该例level越小等级越高：0 > 1 > 2
 * @returns 
 */
function PriorityQueue() {
  let items = new WeakMap()
  let QueueElement = function (value, level) {
    this.value = value
    this.level = level
  }
  class PriorityQueue {
    constructor() {
      items.set(this, [])
    }
    enqueue(value, level) {
      // 入列
      let queueElement = new QueueElement(value, level)
      let arr = items.get(this)
      let added = arr.some((item, index) => {
        if (level < item.level) {
          // 如果要添加的元素的level低于item的，就添加到该节点之前
          arr.splice(index, 0, queueElement)
          return true
        }
      })
      if (!added) arr.push(queueElement)
    }
    dequeue() {
      // 出列
      return items.get(this).shift()
    }
    front() {
      // 获取当前队列首位
      return items.get(this)[0]
    }
    size() {
      // 栈长度
      return items.get(this).length
    }
    isEmpty() {
      // 栈是否为空
      return items.get(this).length === 0
    }
    clear() {
      // 清空栈
      items.get(this).length = 0
    }
  }
  return Queue
}
