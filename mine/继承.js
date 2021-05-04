//构造函数继承
function parent(){
    this.name = "yhf"
}

parent.prototype.getName = function(){
    return this.name
}

function child(){
    parent.call(this)
    this.type = "child"
}

const childFn = new child()

console.log(childFn.name)
// childFn.getName()



