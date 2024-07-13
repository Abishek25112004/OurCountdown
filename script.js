let days=document.getElementById("days")
let hours=document.getElementById("hours")
let minutes=document.getElementById("minutes")
let seconds=document.getElementById("seconds")


result=()=>{
var currentMonth=new Date().getMonth();
var currentYear=new Date().getFullYear();
let ourDate=new Date(`May 28 ${currentYear+1}  00:00:00`)
let currentDate=new Date();
let a=ourDate-currentDate
let d=Math.floor(a/1000/60/60/24);
let h=Math.floor(a/1000/60/60%24);
let m=Math.floor(a/1000/60%60);
let s=Math.floor(a/1000%60);
days.innerHTML=d<10?"0"+d:d;
hours.innerHTML=h<10?"0"+h:h;
minutes.innerHTML=m<10?"0"+m:m;
seconds.innerHTML=s<10?"0"+s:s;
}

setInterval(result,1000)





