# 今日刷题

leetcode 简单题 #20 有效的括号

> 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效。
>
>有效字符串需满足：
>
>左括号必须用相同类型的右括号闭合。
左括号必须以正确的顺序闭合。
>
>来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/valid-parentheses
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

这题自己写半天写一堆 if else 判断但还是没通过，看了下题解结果官方题解中的js实现也是有问题的，官方题解中使用了 forEach 循环，这其中的 return 是不会直接跳出循环中止函数运行的。

最终代码如下：
```js
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    // 首先确保字符串长度为偶数位
    if (s.length % 2 === 1) { return false }
    const temp = new Map([
        [')', '('], ['}', '{'], [']', '[']
    ])
    let result = []
    let sArr = s.split('')
    for (let i = 0; i < sArr.length; i ++) {
        if (temp.has(sArr[i])) {
            if (!result.length || result[result.length - 1] !== temp.get(sArr[i])) {
                return false
            }
            result.pop()
        } else {
            result.push(sArr[i])
        }
    }
    return !result.length
};
```

