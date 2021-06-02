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

2021-06-02更新：

看过专栏中关于「栈」的讲解之后，对这道题有了更加具体的认识。其实就是在考察「栈」。

> 后进者先出，先进者后出。

```js
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    // 奇数位长度肯定无效
    // if (s.length % 2 === 1) { return false }
    let result = []
    // 将对应的括号存起来方便取用
    const obj = { ')': '(', ']': '[', '}': '{' }
    // 切割并遍历整个字符串
    const tempArr = s.split('')
    for (let i =0; i < tempArr.length; i++) {
        // 遇到左括号则存到新数组中
        if (Object.values(obj).includes(tempArr[i])) {
            result.push(tempArr[i])
        } else {
            // 遇到右括号先看一下新数组中最后一位是否为对应的左括号
            // 对应则直接取出
            if (result[result.length -1] === obj[tempArr[i]]) {
                result.pop()
            } else {
                // 不对应则直接返回无效
                return false
                // break 不可以用 break，需直接退出函数
            }
        }
    }
    return result.length === 0
};
```

