/*
 * @Author: leyili
 * @Date: 2022-02-11 20:16:17
 * @LastEditTime: 2022-02-12 14:41:06
 * @LastEditors: leyili
 * @Description: 第六章 链表 6.1 链表数据结构
 * @FilePath: /daily-practice/但是还有书籍/学习JavaScript数据结构与算法/array-list.js
 */
class linkedList {
  constructor(equalsFn = defaultEquals) {
    // 存储链表中的元素数量
    this.count = 0
    this.head = null
    this.equalsFn = equalsFn
  }
  // 向链表尾部添加一个新元素
  push(element) {
    const node = new Node(element)
    let current
    if (this.head === null) {
      this.head = node
    } else {
      current = this.head
      // 从头开始，遍历整个列表，找到最后一个元素
      while (current.next !== null) {
        current = current.next
      }
      // 给最后一个元素的next属性赋值，即在链表末尾添加了新元素
      current.next = node
    }
    this.count++
  }
  // 向链表的特定位置插入一个新元素
  insert(element, index) {
    // 检查临界值
    if (index < 0 || index >= this.count) { return false }
    const node = new Node(element)
    if (index === 0) {
      const current = this.head
      node.next = current
      this.head = node
    } else {
      const previous = this.getElementAt(index - 1)
      const current = previous.next
      node.next = current
      previous.next = node
    }
    this.count++
    return true
  }
  // 返回链表中特定位置的元素
  getElementAt(index) {
    // 检查临界值
    if (index < 0 || index >= this.count) { return undefined }
    let node = this.head
    for (let i = 0; i < index; i++) {
      node = node.next
    }
    return node
  }
  // 从链表中移除一个元素
  remove(element) {
    // 复用代码
    const index = this.indexOf(element)
    return this.removeAt(index)
  }
  // 返回元素在链表中的索引
  indexOf(element) {
    let current = this.head
    for (let i = 0; i < this.count; i++) {
      if (this.equalsFn(element, current.element)) {
        return i
      }
      current = current.next
    }
    return -1
  }
  // 从链表的特定位置移除一个元素
  removeAt(index) {
    // 检查临界值
    if (index < 0 || index >= this.count) { return undefined }
    let current = this.head
    // 如果移除第一个元素
    if (index === 0) {
      this.head = current.next
    } else {
      // 因为有了 getElementAt 方法所以我们重构这一部分代码
      // // 如果移除其他元素
      // let previous
      // for (let i = 0; i < index; i++) {
      //   previous = current
      //   current = current.next
      // }
      // // 将previous和current的下一项连起来，从而跳过current达到移除的目的
      // previous.next = current.next
      // --- 重构部分 ---
      let previous = this.getElementAt(index - 1)
      current = previous.next
      previous.next = current.next
      // --- 重构部分 ---
    }
    this.count--
    return current.element
  }
  isEmpty() {
    return this.size() === 0
  }
  size() {
    return this.count
  }
  getHead() {
    return this.head
  }
  toString() {
    if (this.head === null) { return '' }
    //初始字符串即为第一个元素的字符串表示
    let objString = `${this.head.element}`
    // 从第二个开始迭代
    let current = this.head.next
    for (let i = 1; i < this.count; i++) {
      objString = `${objString}, ${current.element}`
      current = current.next
    }
    return objString
  }
}

class Node {
  constructor(element) {
    this.element = element
    this.next = null
  }
}

function defaultEquals(a, b) {
  return a === b
}

const list = new linkedList()
console.log('list', list)