const arr = [2,3,5,6,9,2,4,1,5]

// console.log(arr.includes(2,-1))
//方法一
// es6 set集合
// function unique(arr){
//     return [...new Set(arr)]
// }

//方法二 es5
// function unique(arr){
//     let len = arr.length
//     for(let i = 0;i< len;i++){
//         for(let j=i+1;j<len;j++){
//             if(arr[i] === arr[j]){
//                 arr.splice(j,1)
//                 len--
//             }
//         }
//     }
//     return arr
// }

//方法三
// function unique(arr){
//     let newArr = []
//     arr.map(item => {
//         newArr.indexOf(item) === -1? newArr.push(item) : null
//     })
//     return newArr
// }


//方法四
// function unique(arr){
//     const arr1 = arr.sort()
//     let newArr = []
//     // console.log(Object.prototype.toString.call(arr1))
//     arr1.map((item,index) => {
//         if(item !== arr[index+1]){
//             newArr.push(item)
//         }
//     })
//     return newArr
// }

//方法五 Array includes 检测是否含有

// function unique(arr){
//     let newArr = []
//     arr.map((item,index) => {
//         !newArr.includes(item)?newArr.push(item):null
//     })
//     return newArr
// }


//方法六 map
// function unique(){
//     let map = new Map()
//     let newArray = []

//     arr.map(item => {

//         if(map.has(item)){
//             console.log(map[item])
//             map.set(item,map[item])
//         }else{
//             newArray.push(item)
//             map.set(item,'0')

//         }
//     })
//     Object.keys(map).map(item => {
//         console.log(item,map[item])
//     })
//     return newArray
// }





// console.log(unique(arr));