/**
 * 传入一个字符串, 以空格分隔首字母转换为大写
 * */
function handleStr (str) {
	// 以空格分隔字符串
	let list = str.split(/\s/)
	// 遍历数组 slice0,1获取首字母, slice1获取余下内容  拼接
	list.forEach((value, index) => {
		list.push(value.slice(0, 1).toUpperCase() + value.slice(1))
	})
	// 删除数组长度的一半, 保留的是后追加进去的内容
	list.splice(0, (list.length / 2))
	// 将数组转换为字符串
	return list.join(' ')
}