# 今日刷题

leetcode 简单题 #53 最大子序和

> 给定一个整数数组 nums ，找到一个具有最大和的连续子数组（子数组最少包含一个元素），**返回其最大和**。
>
>示例 1：
>
> 输入：`nums = [-2,1,-3,4,-1,2,1,-5,4]`
>
>输出：6
>
>解释：连续子数组 [4,-1,2,1] 的和最大，为 6 。
>
>示例 2：
>
>输入：`nums = [1]`
>
>输出：1
>
>来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/maximum-subarray
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

思路：没有看清楚题意，只需要返回最大和就行了，我还一直在找连续子数组。

看题解都看不明白，在评论区找到一个答案之后跟着一步一步写了一下，慢慢消化理解了。代码如下：

```js
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    // 先假设最大和为nums[0]
    let result = nums[0] //6
    // 累加值默认为0
    let sum = 0
    nums.map(num => {
        if (sum > 0) {
            // 累加值大于0则继续累加
            sum = sum + num
        } else {
            // 累加值小于0则重置
            sum = num
        }
        // 将假设的最大和与sum做比较
        result = Math.max(result, sum)
    })
    return result
};
```