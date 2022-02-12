/*
 * @Author: leyili
 * @Date: 2022-02-12 18:09:21
 * @LastEditTime: 2022-02-12 18:26:17
 * @LastEditors: leyili
 * @Description: 
 * @FilePath: /daily-practice/但是还有书籍/学习JavaScript数据结构与算法/doubly-linked-list.js
 */
import { Node, LinkedList, defaultEquals } from './linked-list.js'

class DoublyNode extends Node {
  constructor(element, next, prev) {
    super(element, next)
    this.prev = prev
  }
}

class DoublyLinkedList extends LinkedList {
  constructor(equalsFn = defaultEquals) {
    super(equalsFn)
    this.tail = undefined
  }
}

const list = new DoublyLinkedList()
console.log('list', list)

export default {}