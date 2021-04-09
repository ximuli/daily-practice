# 今日刷题

leetcode 简单题 #9 回文数

> 给你一个整数 x ，如果 x 是一个回文整数，返回 true ；否则，返回 false 。
>
> 回文数是指正序（从左向右）和倒序（从右向左）读都是一样的整数。例如，121 是回文，而 123 不是。
>
> 进阶：你能不将整数转为字符串来解决这个问题吗？
>
> 来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/palindrome-number
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

思路：像 2021-04-08 的题一样首先想到了转换成字符串然后切割反转这样的方法，只这样的话太简单了。

不使用字符串，我想了十来分钟确实没想起来怎么搞，就直接看题解了。

题解的思路是把数字 x 从中间（物理意义上）切分成两半，前半部分和反转的后半部分做比较，相等则说明是回文数。如果 x 包含奇数位的数字，则增加一部把正中间数字去掉之后再做比较的操作。

核心技巧是数字 x 在经过 `x % 10` 后得到的就是 x 的最后一位，而 `Math.floor(x / 10)` 后得到的是舍弃掉最后一位之后的数字。

这里我直接把题解的 ts 答案搬过来，代码如下：

```ts
var isPalindrome = function(x: number): boolean {
    // 特殊情况：
    // 如上所述，当 x < 0 时，x 不是回文数。
    // 同样地，如果数字的最后一位是 0，为了使该数字为回文，
    // 则其第一位数字也应该是 0
    // 只有 0 满足这一属性
    if (x < 0 || (x % 10 === 0 && x !== 0)) {
        return false;
    }

    let revertedNumber: number = 0;
    while (x > revertedNumber) {
        revertedNumber = revertedNumber * 10 + x % 10;
        x = Math.floor(x / 10);
    }

    // 当数字长度为奇数时，我们可以通过 revertedNumber/10 去除处于中位的数字。
    // 例如，当输入为 12321 时，在 while 循环的末尾我们可以得到 x = 12，revertedNumber = 123，
    // 由于处于中位的数字不影响回文（它总是与自己相等），所以我们可以简单地将其去除。
    return x === revertedNumber || x === Math.floor(revertedNumber / 10);
};

/*
作者：LeetCode-Solution
链接：https://leetcode-cn.com/problems/palindrome-number/solution/hui-wen-shu-by-leetcode-solution/
来源：力扣（LeetCode）
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
*/
```

# 闲言碎语

这种解法我就算想破脑袋也想不出来，因为我脑子里压根没有 `x % 10` 得到 x 最后一位数字这样的数学知识。