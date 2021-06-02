# 五道面试题

## 题目1

基于 window.requestAnimationFrame 写一个动画函数，将一个 DOM 元素 ele 在 duration 内，从当前位置向右线平移 moveLength 像素

```js
// <div id="box" class="box"></div>
// .box { width: 100px; height: 100px; background-color: red; }

function y(id, duration, moveLength) {
  const ele = document.getElementById(id)
  let start
  function step(timestamp) {
    if (start === undefined) { start = timestamp }
    const temp = timestamp - start
    ele.style.transform = `translateX(${Math.min(0.1 * temp, moveLength)}px)`
    if (temp < duration) {
      window.requestAnimationFrame(step)
    }
  }
  window.requestAnimationFrame(step)
}

y('box', 1000, 100)
```

参考链接：

[1. MDN-requestAnimationFrame](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/requestAnimationFrame)

[2. 掘金-requestAnimationFrame](https://juejin.cn/search?query=requestanimationframe)

[3. 张鑫旭-requestAnimationFrame](https://www.zhangxinxu.com/wordpress/2013/09/css3-animation-requestanimationframe-tween-%e5%8a%a8%e7%94%bb%e7%ae%97%e6%b3%95/)


## 题目2

写一个节流函数 (限制一个函数在一定时间内只执行一次)

```js
// 写法一
function throttle (fn, wait) {
  let canUse = true
  return function() {
    if (canUse) {
      fn.apply(this, arguments)
      canUse = false
      setTimeout(() => {
        canUse = true
      }, wait)
    }
  }
}

```

联想到另一个，防抖。（在事件被触发n秒后再执行回调，如果在这n秒内又被触发，则重新计时。）

```js
function debounce(fn, delay) {
  let timer = null
  return function() {
    let context = this
    let _args = arguments
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      fn.apply(context, _args)
    }, delay)
  }
}
```


参考链接：

[1. throttle 在 scroll 事件的应用-WangDoc](https://wangdoc.com/javascript/events/common.html#scroll-%E4%BA%8B%E4%BB%B6)

[2. debounce 函数-WangDoc](https://wangdoc.com/javascript/async/timer.html#%E5%AE%9E%E4%BE%8B%EF%BC%9Adebounce-%E5%87%BD%E6%95%B0)

[3. 7分钟理解JS的节流、防抖及使用场景](https://juejin.cn/post/6844903669389885453)



## 题目3

有如下文本，请提取文本中的所有 URL 

```js
const text = "这是一段文本https://www.showmebug.com/pads/LKGVGT这是一段文本http://www.showmebug.com这是一段文本http://showmebug.comm这是一段文本"
```

其实这道题超级简单，就是考察JavaScript中基本的正则表达式用法。

```js
function getUrls(text) {
  const reg = /http[a-zA-Z:\/.]+/g
  return text.match(reg)
}
getUrls(text) // 返回 null 则表示没有匹配的结果
```

参考链接：

[RegExp 对象-WangDoc](https://wangdoc.com/javascript/stdlib/regexp.html)

## 题目4

输入一个数组 nums，对于其中每个元素 nums[i]，请统计数组中比它小的所有数字的数目。

以数组形式返回答案，不能用 sort 和 filter。

示例 ：

输入：nums = [8,1,2,2,3]

输出：[4,0,1,1,3]

## 题目5

实现 atoi，将字符串转为整数。

说明：
假设我们的环境只能存储 32 位有符号整数，其数值范围是 [−2 的 31 次方, 2 的 31次方 − 1]。如果数值超过可表示的范围，则返回 INT_MAX (2 的 31 次方 − 1) 或 INT_MIN (−2 的31次方) 。

不能使用 parseInt

示例 1:

输入: ""
输出: 0

示例 2:

输入: "+2"
输出: 2

示例 3:

输入: "+"
输出: 0

示例 4:

输入: "-223pasudasd"
输出: -223

示例 5:

输入: "-91283472332"
输出: -2147483648