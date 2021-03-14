// 主函数
function main () {
	fetch('http://localhost:54320/api/getDatas')
	.then(res => res.json())
	.then(getData)
}

// 接收数据的回调函数
function getData (datas) {
	const { data } = datas
	console.log(data)
	handleObj(data)
}

// 遍历插入新节点函数
function insertChild (target, sourceList) {
	if (sourceList instanceof Object) {
		for (let key in sourceList) {
			let newChild = defaultOption.cloneNode()
			newChild.value = sourceList[key].code
			newChild.innerText = sourceList[key].name
			target.appendChild(newChild)
		}
	}
}

// 递归多层级嵌套时只有第一级return有效 用这个list接收地区数据
let list = []

// 封装一个递归函数寻找数据
function getValue (sourceData, value) {
	for (let param in sourceData) {
		if (sourceData[param].code === value) {
			list = sourceData[param].child
			return sourceData[param].child
		}
		getValue(sourceData[param].child, value)
	}
}

function handleObj (obj) {
	// 加载省份数据
	insertChild(provinces, obj)
	provinces.onchange =  function (ev) {
		// 城市和地区初始化
		city.options.length = 1
		region.options.length = 1
		let cityList = getValue(obj, ev.target.value)
		insertChild(city, cityList)
	}
	
	// 监听城市数据变化
	city.onchange =  function (ev) {
		region.options.length = 1
		getValue(obj, ev.target.value)
		insertChild(region, list)
	}
}
