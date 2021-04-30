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