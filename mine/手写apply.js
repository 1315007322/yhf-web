Function.prototype.myApply = function (context,args) {
    //判断context 也就是 指定this是否存在
    if(context){
        context = Object.create(context)
    }else{
        context = window
    }
    //绑定this
    context.fn = this
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
let newName = getName.myApply(foo,["a","b"])
console.info(newName) //yhf
