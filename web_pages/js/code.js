let title="addition"
function add(x,y){
    console.log(title)
    var sum=x+y
    console.log("Sum =",sum)
    return sum;
}
let result=add(1,2)
console.log(result)
add(3,4)
add()
let i=100
function outer(){
i=10;
    console.log("inside outer function i=",i)
}

outer()
console.log("after  function call i=",i)
function greetings(msg){
    return "hey all "+msg
}
console.log(greetings(" Good Morning "))
let message=greetings(" Good evening ")
console.log(message)


