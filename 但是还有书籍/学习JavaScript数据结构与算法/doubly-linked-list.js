/*
 * @Author: leyili
 * @Date: 2022-02-12 18:09:21
 * @LastEditTime: 2022-02-13 19:38:44
 * @LastEditors: leyili
 * @Description: 第六章 链表 6.2 双向链表
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
    this.tail = null
  }
  insert(element, index) {
    // 检查临界值
    if (index < 0 || index > this.count) { return false }
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
  removeAt(index) {
    // 检查临界值
    if (index < 0 || index >= this.count) { return false }
    let current = this.head
    if (index === 0) {
      this.head = current.next
      if (this.count === 1) {
        this.tail = null
      } else {
        this.head.prev = null
      }
    } else if (index === this.count - 1) { //要删除的是最后一个元素
      current = this.tail
      this.tail = current.prev
      this.tail.next = null
    } else {
      current = this.getElementAt(index)
      const previous = current.prev
      previous.next = current.next
      current.next.prev = previous
    }
    this.count--
    return current.element
  }
}

// const list = new DoublyLinkedList()
// list.insert(1, 0)
// list.insert(3, 1)
// list.insert(5, 2)
// console.log('list', list)

// setTimeout(() => {
//   list.removeAt(2)
//   console.log('list', list)
// }, 2000)
