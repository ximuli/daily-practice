/*
 * @Author: leyili
 * @Date: 2022-02-15 21:01:22
 * @LastEditTime: 2022-02-15 21:53:18
 * @LastEditors: leyili
 * @Description: 第六章 链表 6.4 有序链表
 * @FilePath: /daily-practice/但是还有书籍/学习JavaScript数据结构与算法/sorted-linked-list.js
 */

import { defaultEquals, LinkedList } from "./linked-list.js"

const Compare = {
  LESS_THAN: -1,
  BIGGER_THAN: 1
}

function defaultCompare(a, b) {
  if (a === b) { return 0 }
  return a < b ? Compare.LESS_THAN : Compare.BIGGER_THAN
}

class SortedLinkedList extends LinkedList {
  constructor(equalsFn = defaultEquals, compareFn = defaultCompare) {
    super(equalsFn)
    this.compareFn = compareFn
  }
  insert(element, index = 0) {
    if (this.isEmpty()) {
      // super这里这样调用是直接调用父类的方法，但是当前上下文还是在子类中
      // 可参考 https://es6.ruanyifeng.com/#docs/class-extends#super-%E5%85%B3%E9%94%AE%E5%AD%97
      return super.insert(element, 0)
    }
    const pos = this.getIndexNextSortedElement(element)
    return super.insert(element, pos)
  }
  // 把传入的元素和链表内的元素一一比较，获取可以到插入的位置
  getIndexNextSortedElement(element) {
    let current = this.head
    let i = 0
    for (; i < this.count; i++) {
      const comp = this.compareFn(element, current.element)
      if (comp === Compare.LESS_THAN) {
        return i
      }
      current = current.next
    }
    return i
  }
}

// let list = new SortedLinkedList()
// list.insert(0)
// list.insert(9)
// list.insert(6)
// list.insert(3)
// console.log(list)