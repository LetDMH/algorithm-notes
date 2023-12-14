import Queue from "./queue.js"

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

console.log(
  hotPotato(
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
    5
  )
)
