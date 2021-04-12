# 今日刷题

leetcode 简单题 #20 有效的括号

> 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效。
>
>有效字符串需满足：
>
>左括号必须用相同类型的右括号闭合。
>
>左括号必须以正确的顺序闭合。
>
>来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/valid-parentheses
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

这题自己写半天写一堆 if else 判断但还是没通过，看了下题解结果发现官方题解中的js实现也是有问题的，官方题解中使用了 forEach 循环，这其中的 return 是不会直接跳出循环中止函数运行的。

题解的思路没有问题，核心是利用栈的数据结构，先进后出。遍历给定字符串，如果是左括号则放入一个新的数组等待匹配，如果是右括号则判断新数组内的最后一位是否为对应的左括号，为是则删除该左括号，为否则说明为无效字符串。

这里我对 [js 中的 Map 结构](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Map)有了更深入的了解。

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

