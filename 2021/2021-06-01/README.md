<!--
 * @Author: leyili
 * @Date: 2021-06-01 21:30:19
 * @LastEditTime: 2022-02-20 21:39:33
 * @LastEditors: leyili
 * @Description: 
 * @FilePath: /daily-practice/2021/2021-06-01/README.md
-->
# 今日刷题

leetcode 简单题 #206 反转链表

给你单链表的头节点 head ，请你反转链表，并返回反转后的链表。

[题目地址](https://leetcode-cn.com/problems/reverse-linked-list/)

看着该 leetcode 题目评论的 Java 版本写了一个 JS 版。

> 思路：就是把每个节点的 next 指向它的前驱节点即可。

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
        // 将当前节点由指向下一个节点改为指向上一个节点
        current.next = prev
        // 前指针后移
        prev = current
        // 当前指针后移
        current = temp
    }
    return prev
};
```

# 参考链接

1. [反转吧，链表！](https://mp.weixin.qq.com/s/XJdixjh7gLsknBrgNxiJiA)
2. [JS中的算法与数据结构——链表(Linked-list)](https://juejin.cn/post/6844903498362912775)
3. 极客时间《数据结构与算法之美》的专栏 