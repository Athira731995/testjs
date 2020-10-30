//arithmetics
//*
let a=10;let b=20;
let x1=a*b
let s=b%a;
let r=b/a;
//a=a+12
a+=12
console.log(a)
//relational operators
 s="hello" ;let s1="HELLO"
console.log(s==s1)
let i=123;let j="123";let k=100
console.log(i==j)
console.log(i===j)
console.log(i<k)
console.log(i<=k)
console.log(i>k)
console.log(i>=k)
console.log(i!=k)
//logical
//and or not
console.log(i==j && i>k)//and
console.log(i===j || i<k)//or
console.log(!(i===j))//not
let a1="123";let a2=100;let a3=500;
//control stmts
if(typeof a1=="string"){
    let result=a1+34
    console.log("Addition",result)
}
else if(typeof a1!="number"){
    console.log(a1,typeof a1)
}
else if(typeof a2=="number"){
console.log(a2**3)
}
else{
    let result=a3-100
    console.log(result)
}
console.log("after if-else block")
// console.log(result)
// let i_1=100;let i_2=50;let i_3=200
// if(i_1 >i_2 && i_1> i_3){
//     console.log(i_1,"is the largest element")

// }else if(i_2 >i_1 && i_2>i_3){
//     console.log(i_2,"is the largest element")
// }
// else{
//     console.log(i_3,"is the largest element")
// }
// let year=2004
// if(year%4==0){
//     console.log(year,"is a leap year")

// }else{
//     console.log(year,"is not a leap year")
// }

for(let v=1;v<20;v+=2){
    console.log(v)
    console.log("*****************")
}
let condition=true;
let count=0;
while(count<5){
 
    count++
    if(count==2){
        continue
    }
    console.log("hello",count)
}
let num=0
do{
    console.log("hello")
    if(num==1){
        break
    }
    num++;
}while(num<3);