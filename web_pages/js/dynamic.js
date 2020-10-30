let count=0;
function add(){
   let paragraph= document.createElement("p")
   count++;
   paragraph.innerText="User clicked the button "+count+" time"
   paragraph.id="p"+count
   document.getElementById("mydiv").appendChild(paragraph)
   let input=document.createElement("input")
   input.value=new Date()
   document.getElementById("mydiv1").appendChild(input)

}
function create(){
    //document.getElementById("mydiv").innerHTML="<p>"+"this is a sample paragraph"+"</p>"
    document.getElementById("mydiv").innerHTML=`<p>this is a sample paragraph</p>`

}