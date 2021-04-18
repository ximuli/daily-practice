# 今日刷题

leetcode 简单题 #35 搜索插入位置

>给定一个排序数组和一个目标值，在数组中找到目标值，并返回其索引。如果目标值不存在于数组中，返回它将会被按顺序插入的位置。
>
>你可以假设数组中无重复元素。

磕磕绊绊自己做出来了，就是有点拉垮，代码如下：

```js
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let result = null
    nums.map((num, index) => {
        // 如果存在与target相等的元素则返回索引值
        if (num === target) {
            result = index
        }
    })
    if (result === null) {
        // 将目标值加入nums中重新循环匹配
        nums.push(target)
        nums.sort((a, b) => a - b)
        nums.map((num, index) => {
            if (num === target) {
                result = index
            }
        })
    }
    return result
};
```

官方题解是使用二分查找法，其实二分查找的思路还算简单，但实际操作起来总是不知道该如何判断边界。

我看了几个题解以后磕磕绊绊写出以下代码：

```js
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    // 若target比nums[lenght-1]大则说明插入位置应为最后一个
    let leftIndex = 0, rightIndex = nums.length - 1
    if (target > nums[rightIndex]) { return nums.length }
    while (leftIndex < rightIndex) {
        // 取到中间位置的索引
        let midIndex = leftIndex + Math.floor((rightIndex - leftIndex)/2)
        // 若中间位置的值小于target，则缩小左侧范围
        if (nums[midIndex] < target) {
            leftIndex = midIndex + 1
        } else {
            // 否则缩小右侧范围
            rightIndex = midIndex
        }
    }
    return leftIndex
};
```

