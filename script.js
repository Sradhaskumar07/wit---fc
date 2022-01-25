console.log("hi")

var a=10
var b=20
console.log(a+b)
console.log(a-b)
console.log(a%b)
//console.log("a+b="+(a+b))

function submit()
{
   let text= prompt("enter name","xxxx");
   if(text!=null){
       console.log("hello" + text)
   }
}

var inp=document.getElementById("demo").innerText
console.log(inp)
var inp=document.getElementById("demo").innerHTML="hello"
console.log(inp)

//function area(){
   // var r=2
    //console.log(3.14*r*r)
//}
 const pi=3.14
 function area(r){
     console.log("area of circle=" + pi*r*r)
 }

 function add(){
     let val=document.getElementById("num").innerHTML
     let num=Number(val)+1
     document.getElementById("num").innerHTML=num
 }

 function sub(){
     let val=document.getElementById("num").innerHTML
     let num=Number(val)-1
document.getElementById("num").innerHTML=num
 }