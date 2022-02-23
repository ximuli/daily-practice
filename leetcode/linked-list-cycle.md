<!--
 * @Author: leyili
 * @Date: 2022-02-24 07:30:17
 * @LastEditTime: 2022-02-24 07:39:46
 * @LastEditors: leyili
 * @Description: 
 * @FilePath: /daily-practice/leetcode/linked-list-cycle.md
-->
# 今日刷题
leetcode 简单题 #141 环形链表

> 给你一个链表的头节点 head ，判断链表中是否有环。
>
> 如果链表中有某个节点，可以通过连续跟踪 next 指针再次到达，则链表中存在环。 为了表示给定链表中的环，评测系统内部使用整数 pos 来表示链表尾连接到链表中的位置（索引从 0 开始）。注意：pos 不作为参数进行传递 。仅仅是为了标识链表的实际情况。
> 
> 如果链表中存在环 ，则返回 true 。 否则，返回 false 。
>
> 来源：力扣（LeetCode）
> 链接：https://leetcode-cn.com/problems/linked-list-cycle
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

思路：

想了一会儿没想到怎么做直接看的评论和题解 😂，然后了解到两个思路，一个是快慢指针法，一个是哈希法，看完之后感觉其实这道题目还真是蛮简单的。

```js

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    // 哈希法
    let node = head
    let set = new Set()
    while(node !== null) {
        if (set.has(node)) { return true }
        set.add(node)
        node = node.next
    }
    return false
    // 快慢指针法
    // let fast = head
    // let slow = head
    // while(fast !== null && fast.next !== null) {
    //     fast = fast.next.next
    //     slow = slow.next
    //     if (slow === fast) { return true }
    // }
    // return false
};
```

# 闲言碎语

用 TS 写了一下，不过在这道算法题中好像普遍也没加几个类型，先不贴上来了。