# 今日刷题

leetcode 简单题 #206 反转链表

给你单链表的头节点 head ，请你反转链表，并返回反转后的链表。

[题目地址](https://leetcode-cn.com/problems/reverse-linked-list/)

对我这个半路出家的人而且是写 JavaScript 的人来说，真的很难理解链表。最近在看极客时间《数据结构与算法之美》的专栏，刚看到链表这几节。

看着题目评论的 Java 版本写了一个 JS 版。

```js
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    let current = head, prev = null
    while (current) {
        // 暂存下一节点
        let temp = current.next
        // 将当前节点指向上一节点
        current.next = prev
        // 前指针后移
        prev = current
        // 当前指针后移
        current = temp
    }
    return prev
};
```

