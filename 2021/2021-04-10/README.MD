# 今日刷题

leetcode 简单题 #13 罗马数字转整数

> 罗马数字包含以下七种字符: I， V， X， L，C，D 和 M。
>
| 字符 | 数值 |
| --- | --- |
|  I  |  1  |
|  V  |  5  |
|  X  |  10  |
|  L  |  50  |
|  C  |  100  |
|  D  |  500  |
|  M  |  1000  |
> 例如， 罗马数字 2 写做 II ，即为两个并列的 1。12 写做 XII ，即为 X + II 。 27 写做  XXVII, 即为 XX + V + II 。
>
> 通常情况下，罗马数字中小的数字在大的数字的右边。但也存在特例，例如 4 不写做 IIII，而是 IV。数字 1 在数字 5 的左边，所表示的数等于大数 5 减小数 1 得到的数值 4 。同样地，数字 9 表示为 IX。这个特殊的规则只适用于以下六种情况：
>
> I 可以放在 V (5) 和 X (10) 的左边，来表示 4 和 9。
>
> X 可以放在 L (50) 和 C (100) 的左边，来表示 40 和 90。
>
> C 可以放在 D (500) 和 M (1000) 的左边，来表示 400 和 900。
> 
> 给定一个罗马数字，将其转换成整数。输入确保在 1 到 3999 的范围内。
>
>来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/roman-to-integer
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

花费一个半小时，没有搞出来。

看了下题解，其实我思路还是有一点儿的，比如说使用 replace，但是没有想到把特殊的罗马数字替换成abc方便做循环累加，再比如说想到了要把罗马数字转换成阿拉伯数字做累加，但是后续的思路和整体实现上不够好，最终写出来的有bug。

以下是看过题解之后写出来的代码：

```js
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let result = 0
    // I V X  L  C   D   M    IV IX XL XC CD  CM
    // 1 5 10 50 100 500 1000 4  9  40 90 400 900
    s = s.replace(/IV/g, 'a')
         .replace(/IX/g, 'b')
         .replace(/XL/g, 'c')
         .replace(/XC/g, 'd')
         .replace(/CD/g, 'e')
         .replace(/CM/g, 'f')
    s.split('').forEach(item => {
        switch(item){
            case 'I': result += 1; break;
            case 'V': result += 5; break;
            case 'X': result += 10; break;
            case 'L': result += 50; break;
            case 'C': result += 100; break;
            case 'D': result += 500; break;
            case 'M': result += 1000; break;
            case 'a': result += 4; break;
            case 'b': result += 9; break;
            case 'c': result += 40; break;
            case 'd': result += 90; break;
            case 'e': result += 400; break;
            case 'f': result += 900; break;
        }    
    })
    return result
};
```

