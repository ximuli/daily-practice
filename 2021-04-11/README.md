# 今日刷题

leetcode 简单题 #14 最长公共前缀

>编写一个函数来查找字符串数组中的最长公共前缀。
>
>如果不存在公共前缀，返回空字符串 ""。
>
>示例 1：
>
>输入：strs = ["flower","flow","flight"]
>
>输出："fl"
>
>示例 2：
>
>输入：strs = ["dog","racecar","car"]
>
>输出：""
>
>解释：输入不存在公共前缀。
>
>来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/longest-common-prefix
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

思路：肯定是要用循环，但具体怎么操作还是想了一会儿。
首先把给定字符串数组分为两个新的部分，第一项和其余项。其次，假设最长公共前缀就是第一项，然后循环对比，若其余项的相应索引对应的值与第一项的对应值不相等，则截取第一项的符合要求部分。

代码如下：

```js
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if (!strs.length) return ''
    let result =strs[0]
    let newStrs = strs.slice(1)
    result && result.split('').map((item, index) => {
        newStrs.map(str => {
          // 关键是理解这里
            if (str[index] !== item) {
                result = result.slice(0, index)
            }
        })
    })
    return result
};
```

# 闲言碎语
刚做了没几天，其实对自己的行为有点怀疑，这样默默刷简单题就能提高自己的能力吗？