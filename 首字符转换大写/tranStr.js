/**
 * 传入一个字符串, 以空格分隔首字母转换为大写
 * */
function handleStr (str) {
	// 以空格分隔字符串
	// 遍历数组 slice0,1获取首字母, slice1获取余下内容  拼接
	let newList = str.split(/\s/).map(value => {
		return value.slice(0, 1).toUpperCase() + value.slice(1)
	})
	// 将数组转换为字符串
	return newList.join(' ')
}