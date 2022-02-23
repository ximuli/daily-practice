/*
 * @Author: leyili
 * @Date: 2022-02-13 19:37:52
 * @LastEditTime: 2022-02-13 20:13:48
 * @LastEditors: leyili
 * @Description: 第六章 链表 6.3 循环链表
 * @FilePath: /daily-practice/但是还有书籍/学习JavaScript数据结构与算法/circular-linked-list.js
 */

import { defaultEquals, LinkedList, Node } from './linked-list.js'

class CircularLinkedList extends LinkedList {
  constructor(equalsFn = defaultEquals) {
    super(equalsFn)
  }
  insert(element, index) {
    if (index < 0 || index > this.count) { return false }
    const node = new Node(element)
    let current = this.head
    if (index === 0) {
      if (this.head === null) {
        this.head = node
        node.next = this.head
      } else {
        node.next = current
        current = this.getElementAt(this.count - 1) // 获取到最后一个元素
        this.head = node // 将节点插入第一个位置，更新head
        current.next = this.head // 将尾和最新的head相连
      }
    } else {
      const previous = this.getElementAt(index - 1)
      node.next = previous.next
      previous.next = node
    }
    this.count++
    return true
  }
  removeAt(index) {
    if (index < 0 || index > this.count) { return false }
    let current = this.head
    if (index === 0) {
      if (this.count === 1) {
        this.head = null
      } else {
        const removed = this.head
        current = this.getElementAt(this.count - 1)
        this.head = this.head.next
        current.next = this.head
        current = removed
      }
    } else {
      const previous = this.getElementAt(index - 1)
      current = previous.next
      previous.next = current.next
    }
    this.count--
    return current.element
  }
}

const list = new CircularLinkedList()
list.insert(1, 0)
list.insert(2, 0)
list.insert(3, 0)
list.removeAt(0)
list.removeAt(0)
list.removeAt(0)
console.log(list)