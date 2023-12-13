import { Stack } from "./stack"

// 例子

/**
 * @description 十进制转二进制
 * @param {number} decNumber 十进制数
 * @returns {string}
 */
function decimalToBinary(decNumber) {
  // 余数栈
  const remStack = new Stack()
  // 商
  let number = decNumber
  // 余数
  let rem
  // 二进制字符串
  let binaryString = ""
  while (number > 0) {
    rem = Math.floor(number % 2)
    remStack.push(rem)
    number = Math.floor(number / 2)
  }
  while (!remStack.isEmpty()) {
    binaryString += remStack.pop().toString()
  }
  return binaryString
}

/**
 * @description 进制转换算法
 * @param {number} decNumber 十进制数
 * @param {number} base 基数 2～36
 * @returns
 */
function baseConverter(decNumber, base) {
  // 余数栈
  const remStack = new Stack()
  const digits = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  // 商
  let number = decNumber
  // 余数
  let rem
  // 二进制字符串
  let baseString = ""
  if (!(base >= 2 && base <= 36)) {
    return ""
  }
  while (number > 0) {
    rem = Math.floor(number % base)
    remStack.push(rem)
    number = Math.floor(number / base)
  }
  while (!remStack.isEmpty()) {
    baseString += digits[remStack.pop()]
  }
  return baseString
}
