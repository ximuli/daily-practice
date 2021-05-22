# 今日刷题

leetcode 简单题 #69 x的平方根

>实现 int sqrt(int x) 函数。
>
>计算并返回 x 的平方根，其中 x 是非负整数。
>
>由于返回类型是整数，结果只保留整数的部分，小数部分将被舍去。
>
>示例 1:
>
>输入: 4
>输出: 2
>
>示例 2:
>
>输入: 8
>输出: 2
>说明: 8 的平方根是 2.82842..., 
     由于返回类型是整数，小数部分将被舍去。
>
>来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/sqrtx
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

我直接看题解，官方题解的三种方法里只有二分查找法我还知道些，但是自己写还是有些难度。

代码如下：

```js
/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    let left = 0, right = x, ans = -1
    while (left <= right) {
        const mid = left + (right - left) / 2
        if (mid * mid <= x) {
            ans = mid
            left = mid + 1
        } else {
            right = mid - 1
        }
    }
    return ans
};
```