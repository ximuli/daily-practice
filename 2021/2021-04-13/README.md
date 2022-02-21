<!--
 * @Author: leyili
 * @Date: 2021-04-13 22:27:44
 * @LastEditTime: 2022-02-22 07:45:03
 * @LastEditors: leyili
 * @Description: 
 * @FilePath: /daily-practice/2021/2021-04-13/README.md
-->
# 今日刷题

leetcode 简单题 #21 合并两个有序链表

> 将两个升序链表合并为一个新的 升序 链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。
> 
> ![示例](./images/merge_ex1.jpeg)

遇到链表我真是一脸懵逼，完全不知道如何下手，还以为是数组，结果实际上跟数组不一样。

官方事先给了一个链表结构的js实现，我也是没看明白。

参考题解后，最终代码如下：

```js
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    // 遍历法

    // 设置一个新的节点并设置current指针
    const node = new ListNode()
    let current = node
    // 开始遍历，假如两者任何一个为null就不需要遍历了
    while(l1 !== null && l2 !== null) {
        // 比大小，然后current连接
        if (l1.val <= l2.val) {
            current.next = l1
            // 指针后移
            l1 = l1.next
        } else {
            current.next = l2
            l2 = l2.next
        }
        // current.next已有新值，current指针也后移
        current = current.next
    }

    // 合并后 l1 和 l2 最多只有一个还未被合并完，我们直接将链表末尾指向未合并完的链表即可
    current.next = l1 === null ? l2 : l1
    // 返回 node 这个链，并且忽略其第一个节点
    return node.next
    
    // 递归法
    // if (!l1 || !l2) { return l1 || l2 }
    // if (l1.val < l2.val) {
    //     l1.next = mergeTwoLists(l1.next, l2)
    //     return l1
    // } else {
    //     l2.next = mergeTwoLists(l1, l2.next)
    //     return l2
    // }
};
```

可是依然不理解。

-----更新 2022.2.22 -----

重新复习，刷到评论都是说看不懂的，难道这就是常态吗？😂

此次在评论里翻到了一个相对好理解的遍历法答案，各个步骤已标注注释。

但递归法依然是理解不了。