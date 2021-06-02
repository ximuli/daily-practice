# 今日刷题

leetcode 简单题 #27 删除有序数组中的重复项

>给你一个数组 nums 和一个值 val，你需要 原地 移除所有数值等于 val 的元素，并返回移除后数组的新长度。
>
>不要使用额外的数组空间，你必须仅使用 O(1) 额外空间并 原地 修改输入数组。
>
>元素的顺序可以改变。你不需要考虑数组中超出新长度后面的元素。
>
>来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/remove-element
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

和 [删除有序数组中的重复项](./../2021-04-14/README.md) 这题类似，也是使用双指针法。

```js
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let i = 0
    for (let j = 0; j < nums.length; j++) {
        if (nums[j] !== val) {
          // 不相等时赋值，相等时跳过
            nums[i] = nums[j]
            i++
        }
    }
    return i
};
```

不靠新增额外的空间，想做到改变数组元素，就可以用双指针法，两个指针因为某些条件不同步，以此来达成一些数组内的赋值操作。

>当 nums[j] 与给定的值相等时，递增 j 以跳过该元素。只要 nums[j] !== val，我们就复制 nums[j] 到 nums[i] 并同时递增两个索引。重复这一过程，直到 j 到达数组的末尾，该数组的新长度为 i。
