# 今日刷题

leetcode 简单题 #58 最后一个单词的长度

>给你一个字符串 s，由若干单词组成，单词之间用空格隔开。返回字符串中最后一个单词的长度。如果不存在最后一个单词，请返回 0 。
>
>单词 是指仅由字母组成、不包含任何空格字符的最大子字符串。
>
>来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/length-of-last-word
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

思路还是有的，因为用到了 js 自带的 api，代码如下：

```js
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    s = s.trim()
    let result = 0
    const arr = s.split(' ')
    if (arr.length > 0) {
        result = arr[arr.length - 1].length
    }
    return result
};
```