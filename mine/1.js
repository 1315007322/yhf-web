Function.prototype.mycall = function(context){
    if(context){
        context = Object(context)
    }else{
        context = window
    }


    context.fn = this

    let args = Array.prototype.splice.call(arguments,1)

    console.log(args)
}

function myname(){
    return this.name
}


let name1 = {
    name : 'yhf'
}


myname.mycall(name1,'a','b')
