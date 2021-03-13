// 加载时自动请求数据
(function () {
	fetch('http://39.107.89.18:54320/')
	.then(res => res.json())
	.then(getData)
})()

// 接收数据的回调函数
function getData (datas) {
	const { data } = datas
	handleObj(data)
}

// 插入克隆节点函数
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

// 封装一个递归函数寻找数据
function getValue (sourceData, value) {
	for (let param in sourceData) {
		if (sourceData[param].code === value) {
			return sourceData[param].child
		}
		for (let i of sourceData[param].child) {
			getValue(i.child, value)
		}
	}
}

function handleObj (obj) {
	insertChild(provinces, obj)
	// 监听省份数据变化
	provinces.onchange =  function (ev) {
		city.options.length = 1
		region.options.length = 1
		let cityList = getValue(obj, ev.target.value)
		localStorage.setItem('citys', JSON.stringify(cityList))
		insertChild(city, cityList)
	}
	
	// 监听城市数据变化
	city.onchange =  function (ev) {
		region.options.length = 1
		let regionList = JSON.parse(localStorage.getItem('citys'))
		for (let regions of regionList) {
			if (regions.code === ev.target.value) {
				insertChild(region, regions.child)
			}
		}
	}
}
