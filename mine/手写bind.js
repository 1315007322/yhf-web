Function.prototype.mybind = function(context){
    //判断调用bind的 是不是函数，抛出异常
    if(typeof this !== "function"){
        throw new Error("function.prototype.bind - what is trying to be bound is not  callable")
    }

    //剔除第一个参数 this的指向
    let args = Array.prototype.splice.call(arguments,1)
    //绑定调用者的this
    let that = this

    //空的构造函数
    let Fn =function(){ }
    var res = function(...rest){
        // 然后同传入参数合并成一个参数数组，并作为 self.apply() 的第二个参数
        return that.apply(this instanceof Fn ? this : context,args.concat(rest))
    }

    Fn.prototype = this.prototype
    res.prototype = new Fn();
    return res
}

function getName(){
    return this.name
}

let foo = {
    name: "yhf"
}
let newName = getName.mybind(foo)
console.info(newName()) //yhf


function foo(){

}


