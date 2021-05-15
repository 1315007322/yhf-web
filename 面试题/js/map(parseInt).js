const arr = [1, 2, 3, 4]

arr.map(parseInt) // [1,NAN,NAN]


//parseInt(value,radix)  变量值   radix 进制基数  2-36


// let unary = fn => val => fn(val)
let unary = (fn) => {
    return (val) => {
        return fn(val)
    }
}
let parse = unary(parseInt)
// console.log(arr.map(item => unary(parseInt)(item)) )//[1,2,3,4]