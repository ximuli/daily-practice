<!--
 * @Author: leyili
 * @Date: 2022-03-01 21:01:45
 * @LastEditTime: 2022-03-01 21:03:23
 * @LastEditors: leyili
 * @Description: 
 * @FilePath: /daily-practice/leetcode/intersection-of-two-linked-lists.md
-->
# 今日刷题
leetcode 简单题 #160 相交链表

> 给你两个单链表的头节点 headA 和 headB ，请你找出并返回两个单链表相交的起始节点。如果两个链表不存在相交节点，返回 null 。
>
> 来源：力扣（LeetCode）
> 链接：https://leetcode-cn.com/problems/intersection-of-two-linked-lists/
> 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

思路：

直接看题解，然后发现哈希法好简单，自己咋就想不到呢。

```js
/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
  // 哈希法
  // 把链表A的每个节点都放入Set中
  let mySet = new Set()
  let temp = headA
  while(temp !== null) {
      mySet.add(temp)
      temp = temp.next
  }
  // 然后遍历链表B并一一和Set中已有的节点做对比
  temp = headB
  while(temp !== null) {
      if (mySet.has(temp)) {
          return temp
      }
      temp = temp.next
  }
  return null
  // 双指针
  // if (!current1 || !current2) { return null }
  // let current1 = headA, current2 = headB
  // 这种方法不太理解
  // while (current1 !== current2) {
  //     current1 = current1 ? current1.next : headB
  //     current2 = current2 ? current2.next : headA
  // }
  // return current2
};
```