/*
 * @Author: leyili
 * @Date: 2022-02-12 18:09:21
 * @LastEditTime: 2022-02-12 22:06:04
 * @LastEditors: leyili
 * @Description: 
 * @FilePath: /daily-practice/但是还有书籍/学习JavaScript数据结构与算法/doubly-linked-list.js
 */
import { Node, LinkedList, defaultEquals } from './linked-list.js'

class DoublyNode extends Node {
  constructor(element, next=null, prev=null) {
    super(element, next)
    this.prev = prev
  }
}

class DoublyLinkedList extends LinkedList {
  constructor(equalsFn = defaultEquals) {
    super(equalsFn)
    this.tail = undefined
  }
  insert(element, index) {
    // 检查临界值
    if (index < 0 || index >= this.count) { return false }
    const node = new DoublyNode(element)
    let current = this.head
    if (index === 0) {
      if (this.head === null) {// 说明此时链表内没有元素
        this.head = node
        this.tail = node
      } else { // 如果链表中已有元素那么此时this.head就指向第一个元素
        node.next = this.head
        current.prev = node
        this.head = node
      }
    } else if (index === this.count) {
      current = this.tail
      current.next = node
      node.prev = current
      this.tail = node
    } else {
      const previous = this.getElementAt(index - 1)
      current = previous.next
      current.prev = node
      node.prev = previous
      node.next = current
      previous.next = node
    }
    this.count++
    return true
  }
}

const list = new DoublyLinkedList()
console.log('list', list)

export default {}