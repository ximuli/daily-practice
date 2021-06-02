# 今日刷题

leetcode 简单题 #67 二进制求和

>给你两个二进制字符串，返回它们的和（用二进制表示）。
>
>输入为 非空 字符串且只包含数字 1 和 0。
>
>示例 1:
>
>输入: a = "11", b = "1"
>
>输出: "100"
>
>示例 2:
>
>输入: a = "1010", b = "1011"
>
>输出: "10101"
>
>来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/add-binary
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

想了一个 JavaScript 语言独有的讨巧做法，但也仅限于一些简单的转换，官方的测试用例在字符串很长的时候会有不通过的错误，代码如下：

```js
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    // 将指定字符串以二进制解析并返回十进制
    let one = parseInt(a, 2)
    let two = parseInt(b, 2)
    // 将十进制转换为二进制
    return (one + two).toString(2)
};
```

参考了下题解，但还是不那么理解这个思路。

> 整体思路是将两个字符串较短的用 00 补齐，使得两个字符串长度一致，然后从末尾进行遍历计算，得到最终结果。
>
>本题解中大致思路与上述一致，但由于字符串操作原因，不确定最后的结果是否会多出一位进位，所以会有 2 种处理方式：
>
> * 第一种，在进行计算时直接拼接字符串，会得到一个反向字符，需要最后再进行翻转
> * 第二种，按照位置给结果字符赋值，最后如果有进位，则在前方进行字符串拼接添加进位
>
> 作者：guanpengchn
链接：https://leetcode-cn.com/problems/add-binary/solution/hua-jie-suan-fa-67-er-jin-zhi-qiu-he-by-guanpengch/
来源：力扣（LeetCode）
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。

```js
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    let ans = "";
    let ca = 0;
    for(let i = a.length - 1, j = b.length - 1;i >= 0 || j >= 0; i--, j--) {
        let sum = ca;
        sum += i >= 0 ? parseInt(a[i]) : 0;
        sum += j >= 0 ? parseInt(b[j]) : 0;
        ans += sum % 2;
        ca = Math.floor(sum / 2);
        console.log('sum', sum)
        console.log('ca', ca)
        console.log('ans', ans)
    }
    ans += ca == 1 ? ca : "";
    return ans.split('').reverse().join('');
};
```