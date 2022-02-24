<!--
 * @Author: leyili
 * @Date: 2022-02-25 07:27:35
 * @LastEditTime: 2022-02-25 07:33:57
 * @LastEditors: leyili
 * @Description: 
 * @FilePath: /daily-practice/leetcode/best-time-to-buy-and-sell-stock.md
-->
# 今日刷题
leetcode 简单题 #121 买卖股票的最佳时机

> 给定一个数组 prices ，它的第 i 个元素 prices[i] 表示一支给定股票第 i 天的价格。
>
> 你只能选择 某一天 买入这只股票，并选择在 未来的某一个不同的日子 卖出该股票。设计一个算法来计算你所能获取的最大利润。
> 
> 返回你可以从这笔交易中获取的最大利润。如果你不能获取任何利润，返回 0 。
> 示例 1：
>
> 输入：[7,1,5,3,6,4]
> 输出：5
> 解释：在第 2 天（股票价格 = 1）的时候买入，在第 5 天（股票价格 = 6）的时候卖出，最大利润 = 6-1 = 5 。
> 注意利润不能是 7-1 = 6, 因为卖出价格需要大于买入价格；同时，你不能在买入前卖出股票。
>
>示例 2：
>
> 输入：prices = [7,6,4,3,1]
> 输出：0
> 解释：在这种情况下, 没有交易完成, 所以最大利润为 0。
> 
> 来源：力扣（LeetCode）
> 链接：https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock
> 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

思路：

想到了假设第一天为买点，并且利润为0，但是搞不清楚下一步的逻辑是啥，看了下评论区，有个Java代码还是很简洁的😂。

```js
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    // 假设第一天买入，收益为0
    let min = prices[0], max = 0
    // 从第二天开始循环
    for(let i = 1; i < prices.length; i++) {
        // 有点解释不清楚
        max = Math.max(max, prices[i] - min)
        min = Math.min(min, prices[i])
    }
    return max
};
```