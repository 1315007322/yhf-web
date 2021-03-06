

const s1 = Symbol("s1")

const target = {
    a: 1,
    b: "yhf",
    c: function (){   //函数消失
        console.log(c)
    },
    d: Date,   // 日期对象消失
    e: /^1/,   // 正则 变为空对象
    f: new Set(), // Set 变为空对象
    g: new Map(), // Map 变为空对象
    i: Symbol("s"),  //symbol消失
    j: ["1","2",3], 
    k: () => {console.log("k")}, //箭头函数 消失
    l: true,
    m: undefined, //undefined 消失
    n: null, 
    o: {
        name: "yhf",
        [s1]: "s1" //symbol 键值对 消失
    }
}
// target.h = target
// let a = JSON.parse(JSON.stringify(target));



function deepclone(Obj,cache = new WeakMap()){
    if(Obj === null ) return Obj
    if(Obj === undefined ) return Obj
    if( Obj instanceof Function) return Obj
    if(typeof Obj !== "object") return Obj

    let newObj = new Obj.constructor()

    for( key in Obj){
        if(Obj.hasOwnProperty(key)){
            newObj[key] = deepclone(Obj[key],cache)
        }
    }

    return newObj
}

let data = deepclone(target)

console.log(data)



// JSON.stringify()将值转换为相应的JSON格式：

// 转换值如果有 toJSON() 方法，该方法定义什么值将被序列化。
// 非数组对象的属性不能保证以特定的顺序出现在序列化后的字符串中。
// 布尔值、数字、字符串的包装对象在序列化过程中会自动转换成对应的原始值。
// undefined、任意的函数以及 symbol 值，在序列化过程中会被忽略（出现在非数组对象的属性值中时）或者被转换成 null（出现在数组中时）。函数、undefined 被单独转换时，会返回 undefined，如JSON.stringify(function(){}) or JSON.stringify(undefined).
// 对包含循环引用的对象（对象之间相互引用，形成无限循环）执行此方法，会抛出错误。
// 所有以 symbol 为属性键的属性都会被完全忽略掉，即便 replacer 参数中强制指定包含了它们。
// Date 日期调用了 toJSON() 将其转换为了 string 字符串（同Date.toISOString()），因此会被当做字符串处理。
// NaN 和 Infinity 格式的数值及 null 都会被当做 null。
// 其他类型的对象，包括 Map/Set/WeakMap/WeakSet，仅会序列化可枚举的属性。