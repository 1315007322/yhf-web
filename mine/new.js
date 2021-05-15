function fn(name){
    this.name = name
}


function mynew(con,...args){
    let obj = {}
    obj.__proto__ = con.prototype 
    let result = con.apply(obj,args)
    return result instanceof Object? result : obj
}

let a = mynew(fn,'yhf')
console.log(a);