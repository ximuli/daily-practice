# 今日刷题

leetcode 简单题 #66 加一

>给定一个由 整数 组成的 非空 数组所表示的非负整数，在该数的基础上加一。
>
>最高位数字存放在数组的首位， 数组中每个元素只存储单个数字。
>
>你可以假设除了整数 0 之外，这个整数不会以零开头。
>
>来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/plus-one
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
>
>示例 1：
>
>输入：digits = [1,2,3]
>
>输出：[1,2,4]
>
>解释：输入数组表示数字 123。
>提示：
>
> * 1 <= digits.length <= 100
> * 0 <= digits[i] <= 9


思路不够清晰，写了很多代码，最终还是错的。==

看过题解之后其实依然不太明白，照着写了一下，渐渐有些理解了。代码如下：

```js
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    for (let i = digits.length - 1; i >=0; i--) {
        // 先加1，再取模
        digits[i]++
        digits[i] %= 10
        // 若取模后不为0，说明已达到进位效果，直接返回
        if (digits[i] !== 0) {
            return digits
        }
    }
    // 若直至循环结束，则说明所有项均为0，进位需要增加数组长度，且第一位为1
    digits = [1, ...digits]
    return digits
};
```

回想起了以前上学做数学题的痛苦，思前想后不知道怎么做，看别人答案发现思路特别精妙。
