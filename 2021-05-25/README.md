# 五道面试题

题目1:

基于 window.requestAnimationFrame 写一个动画函数，将一个 DOM 元素 ele 在 duration 内，从当前位置向右线平移 moveLength 像素

题目2:

写一个节流函数 (限制一个函数在一定时间内只执行一次)

题目3:

有如下文本，请提取文本中的所有 URL 

```js
const text = "这是一段文本https://www.showmebug.com/pads/LKGVGT这是一段文本http://www.showmebug.com这是一段文本http://showmebug.comm这是一段文本"
```

题目4:

输入一个数组 nums，对于其中每个元素 nums[i]，请统计数组中比它小的所有数字的数目。

以数组形式返回答案，不能用 sort 和 filter。

示例 ：

输入：nums = [8,1,2,2,3]

输出：[4,0,1,1,3]

题目5:

实现 atoi，将字符串转为整数。

说明：
假设我们的环境只能存储 32 位有符号整数，其数值范围是 [−2 的 31 次方, 2 的 31次方 − 1]。如果数值超过可表示的范围，则返回 INT_MAX (2 的 31 次方 − 1) 或 INT_MIN (−2 的31次方) 。

不能使用 parseInt

示例 1:

输入: ""
输出: 0

示例 2:

输入: "+2"
输出: 2

示例 3:

输入: "+"
输出: 0

示例 4:

输入: "-223pasudasd"
输出: -223

示例 5:

输入: "-91283472332"
输出: -2147483648