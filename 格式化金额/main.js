/**
 * 主函数 专门处理数字
 * 第一个参数是需要处理的数字
 * 第二个参数是符号, 默认没有, cn是人民币符号, en是美元符号
 * 第三个参数是需要保留几位小数 默认四舍五入
 * */
function handlePrice (price, symbol, dot) {
	dot = dot || 2
	const hPrice = new HandlePrice(price, dot)
	hPrice.handleThree()
	if (symbol === 'cn') return '¥' + hPrice.newStr
	if (symbol === 'en') return hPrice.newStr + '$'
	return hPrice.newStr
}

// 构造函数
function HandlePrice (price, dot) {
	// 判断类型
	this.isNumber = function () {
		dot = dot || 2
		if (!isNaN(price)) {
			this.price = String(price)
		}
		if (!isNaN(dot)) {
			this.dot = String(dot)
		}
	}
	// 根据是否有小数点进行切分
	this.handleFixed = function () {
		this.isNumber()
		if (this.price.indexOf('.') === -1) {
			this.remain = this.price
		} else {
			let fixed = this.price.split('.')
			this.remain = fixed[0]
			this.fixed = fixed[1]
			this.handleTwoFixed()
		}
	}
	// 通过正则给三位数加小数点
	this.handleReg = function () {
		if (this.headStr === '') {
			this.newRemain = this.lastStr.match(/\d{3}/g).join(',')
		} else {
			this.newRemain = this.headStr + ',' + this.lastStr.match(/\d{3}/g).join(',')
		}
	}
	// 处理保留两位小数点和四舍五入
	this.handleTwoFixed = function () {
		if (this.fixed.length > this.dot) {
			if (this.fixed.slice(this.dot, this.dot+1) < 5) {
				this.fixed = this.fixed.slice(0, this.dot)
			}
			if (this.fixed.slice(this.dot, this.dot+1) >= 5) {
				this.fixed = String(+this.fixed.slice(0, this.dot) + 1)
			}		
		}
	}
	// 拼接小数点
	this.joinFixed = function () {
		if (this.fixed !== undefined) {
			this.newStr = this.newRemain + '.' + this.fixed
		} else {
			this.newStr = this.newRemain
		}
	}
	// 判断长度是否是3的倍数
	this.handleThree = function () {
		this.handleFixed()
		// 判断长度是不是大于3
		if (this.remain.length <= 3) {
			this.newRemain = this.remain
		} else {
			let len = this.remain.length % 3
			this.headStr = this.remain.slice(0, len)
			this.lastStr = this.remain.slice(len)
			this.handleReg()
		}
		this.joinFixed()
	}
}


