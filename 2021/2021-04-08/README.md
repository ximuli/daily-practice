# 今日刷题
leetcode 简单题 #7 整数反转

> 给你一个 32 位的有符号整数 x ，返回将 x 中的数字部分反转后的结果。
> 
> 如果反转后整数超过 32 位的有符号整数的范围   [$−2^{31}$,  $2^{31}−1$] ，就返回 0。
> 
> 假设环境不允许存储 64 位整数（有符号或无符号）。
> 
> 来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/reverse-integer
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

思路：

首先想到的是把数字转换为字符串再切割为数组进行反转，然后合并为一个新的字符串转为数字，最后把边界值处理一下。代码如下：

```js
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    if (x === 0) { return 0 }
    if (x > 0) {
        x = x.toString().split('').reverse().join('')
    } else {
        x = -(Math.abs(x).toString().split('').reverse().join(''))
    }
    if (x > 2**31 -1 || x < -(2**31)) { return 0 }
    return x
};
```

看题解里有另外的解法，还不明白其中的逻辑，只能抽空再看了。（坑……

# 闲言碎语

今天又要加班了，不知道晚上几点能回来，早起做一道题。

目前刚两天，做了两道 leetcode 上的题，因为选的都是简单题，居然感觉自己还行。