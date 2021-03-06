<!--
 * @Author: leyili
 * @Date: 2021-04-07 14:15:12
 * @LastEditTime: 2022-02-23 07:18:44
 * @LastEditors: leyili
 * @Description: 
 * @FilePath: /daily-practice/2021/2021-04-07/README.md
-->
# 今日刷题
leetcode 简单题 #1 两数之和

> 给定一个整数数组 nums 和一个整数目标值 target，请你在该数组中找出 和为目标值 的那 两个 整数，并返回它们的数组下标。
>
> 你可以假设每种输入只会对应一个答案。但是，数组中同一个元素在答案里不能重复出现。
>
> 你可以按任意顺序返回答案。
>
> 来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/two-sum
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

思路：

一开始我想到估计是需要用到两层循环，于是先写了个 forEach ，突然不知道该怎么继续了，细想之后灵光一闪，可以假设 nums 的第一个元素就是其中一个答案，那么另一个元素就是 target - nums[0]，这样的话就循环看下数组里有没有这样的值就可以了，如果没有就继续假设 nums 的第二个元素就是其中一个答案，以此类推，于是有了下面的代码：

```js
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  var result = []
  nums.forEach((num, index) => {
      let num2 = target - num
      let index2 = nums.indexOf(num2)
      if (index2 !== -1) {
          result[0] = index
          result[1] = index2
      }
  })
  return result
};
```

# 闲言碎语
在好友的鼓励下我终于是开始学习算法和数据结构了，我深知自己的基础差劲，一直以来懒惰、逃避，但即便是这样的我也想有个更加光明的未来，希望自己开始以后可以坚持下去。

# 今日心得

今天终于了解到算法中时间复杂度 O(n) 这样的表述到底是什么意思了，因为在看的《大话数据结构》中有相关的讲解。

这个称为**大O记法**。

我大概的理解是 O(n) 这样的表述意思就是该算法的主要代码运行了 n 次。但我也是刚开始学，其实理解还不够透彻。

具体内容在《大话数据结构》的第二章--算法。

# 更新于2022-02-23

上述解法有点问题，就是 `if (index2 !== -1)` 判断这里并没有考虑到 **数组中同一个元素在答案里不能重复出现**。

思路方面，此次复习也首先想到了要假设一个值，但是没有明确想出来原来这个答案，反而是看到题目的进阶提示写的 *你可以想出一个时间复杂度小于 O(n2) 的算法吗？*之后我明白了可以用双层循环来做，所以直接上了双层循环，只需要判断循环内外层的枚举值相加等于 target 并且两个数的索引值不同即可。

代码如下：

```js
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    // 方法一 双层循环
    let result = []
    for(let i = 0; i < nums.length; i++) {
        for(let j = 0; j < nums.length; j++) {
            // 判断内外两层数字相加是否等于target并且index不相等
            if (nums[i] + nums[j] === target && i !== j) {
                result = [i, j]
            }
        
        }
    }
    return result

    // 方法二 假设
    // let result = []
    // nums.forEach((num, index) => {
    //     // 假设其中一个数字就是 num，那么另一个数字就是 num2
    //     let num2 = target - num
    //     // 获取 num2 的索引值
    //     let index2 = nums.indexOf(num2)
    //     // 判断索引是否有值并且两个数的索引不相等
    //     if (index2 !== -1 && index !== index2) {
    //         result[0] = index
    //         result[1] = index2
    //     }
    // })
    // return result
};
```