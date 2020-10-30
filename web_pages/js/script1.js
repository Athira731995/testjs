function changeContent(){
    document.getElementById("p1")
    .innerText="Hello all welcome...."
    document.getElementById("p1").style.color="blue";
    document.getElementById("p1").style.fontSize="20px";
    // document.getElementById("p1").style.display="none";


}
function getContent(){
let uname=document.getElementById("username").value
    alert(uname)
}
function getChosenData(){
alert(document.getElementById("colors").value)
let color=document.getElementById("colors").value;
document.getElementById("color").value=color;

}