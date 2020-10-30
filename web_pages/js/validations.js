function validate(){
var name=document.getElementById("name")
var number=document.getElementById("mobile")
if(name.value==""){
    alert("Name field can't be empty")
    name.focus()
    return false

}
if(number.value==""){
    alert("mobile number  field can't be empty")
    number.focus()
    return false

}
if(number.value.length!=10 || isNan(number.value)){
    alert("invalid mobile number")
    number.focus()
    return false

}





}