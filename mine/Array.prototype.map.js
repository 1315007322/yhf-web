const arr = [1, 2, 3, 4]

//map 返回新的数组，没有返回值，则undefined

Array.prototype.map.call(arr,function callback(item,index,arr){
    console.log(item)
})







