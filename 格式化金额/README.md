通过构造函数实现的

> 使用方式

导入main.js 直接使用handlePrice()函数即可

接收三个参数

- 第一个参数是要处理的数(通过isNaN把关)
- 第二个参数是符号(cn是人民币, en是美元, 默认为无符号)
- 第三个参数是保留几位小数点, 默认是2位, 开启四舍五入

```
// 主函数
function handlePrice (price, symbol, dot) {
	dot = dot || 2
	const hPrice = new HandlePrice(price, dot)
	hPrice.handleThree()
	if (symbol === 'cn') return '¥' + hPrice.newStr
	if (symbol === 'en') return hPrice.newStr + '$'
	return hPrice.newStr
}
```

```
let price = 1245454.4564657;
let newPrice = handlePrice(price, null, 3)
console.log(newPrice)
```

输出结果

```
1,245,454.457
```

