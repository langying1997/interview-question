/**
 * 传入一个对象返回深拷贝后的新对象
 * */
function deepClone (obj) {
	// 判断是不是null或其他类型
	if (obj === null) return null
	if (typeof obj !== 'object') return obj
	
	// 判断是不是数组
	if (obj instanceof Array) {
		return new Array(obj)
	}
	
	// 判断是不是正则类型
	if (obj instanceof RegExp) {
		return new RegExp(obj)
	}
	
	// 创建一个新对象
	let newObj = new obj.constructor
	for (let key in obj) {
		if (obj.hasOwnProperty(key)) {
			newObj[key] = deepClone(obj[key])
		}
	}
	return newObj
}
