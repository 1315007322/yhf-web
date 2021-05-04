Function.prototype.mycall = function (context) {
    //判断context 也就是 指定this是否存在
    if(context){
        context = Object.create(context)
    }else{
        context = window
    }
    //绑定this
    context.fn = this
    //区别于apply  就是参数 apply参数为数组，call则是按顺序读取，而我们要过滤掉第一个this的参数
    let args = Array.prototype.splice.call(arguments,1)
    //参数数组 添加到 绑定的this中
    var result = context.fn(...args)
    delete context.fn
    return result
}

function getName(a,b){
    return this.name
}

let foo = {
    name: "yhf"
}
let newName = getName.mycall(foo,"a","b")
console.info(newName) //yhf
