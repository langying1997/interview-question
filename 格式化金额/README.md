通过构造函数实现的

> 使用方式

导入main.js 直接使用handlePrice()函数即可

接收三个参数

- 第一个参数是要处理的数(通过isNaN把关)
- 第二个参数是需要保留几位小数 默认四舍五入
- 第三个参数是符号, 默认没有, cn是人民币符号, en是美元符号

```
/**
 * 主函数 专门处理数字
 * 第一个参数是需要处理的数字
 * 第二个参数是需要保留几位小数 默认四舍五入
 * 第三个参数是符号, 默认没有, cn是人民币符号, en是美元符号
 * 
 * */
function handlePrice (price, dot, symbol) {
	dot = dot || 2
	const hPrice = new HandlePrice(price, dot)
	hPrice.handleThree()
	if (symbol === 'cn') return '¥' + hPrice.newStr
	if (symbol === 'en') return hPrice.newStr + '$'
	return hPrice.newStr
}
```

```
let price = 1245154.4564657;
let newPrice = handlePrice(price, 1, null)
console.log(newPrice)
```

输出结果

```
1,245,154.5
```

