//importing functions from other scripts starts//
//importing functions from other scripts ends//
//loading animation starts
setTimeout(()=>{
document.querySelector("#load").style.opacity="0";
document.querySelector("#load").style.zIndex="-1";
document.querySelector("#appbar").style.animationName="var(--appbaranimation) ";
document.querySelector("#appbar").style.zIndex="14";
document.querySelector("#blur2").style.opacity="1";
document.querySelector("#blur2").style.transform="scale(1)";
setTimeout(()=>{
document.querySelectorAll(".app").forEach((e)=>{
e.style.opacity="1";

});
},3600);
},4500);
//loading animation ends
//**************************************************************** */
//function window creations
function musicWindowCreation(win){
 const window=win;
 const mus=document.createElement("div");
 mus.className="musmainwrp";
 window.appendChild(mus);
var musbar=document.createElement("div");
 musbar.className="musicpanel";
 var musbar1=document.createElement("div");
 musbar1.className="musicdisplaypanel";
 var musbar2=document.createElement("div");
 musbar2.className="mainpanel";
mus.appendChild(musbar);
mus.appendChild(musbar1);
mus.appendChild(musbar2);

}



//function window creations ends
//**************************************************************** */
//time management starts
const months=["Jan","Feb","March","April","June","July","Aug","Sep","Oct","Nov","Dec"];
const days=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
setInterval(()=>{
var day=new Date();
var time=day.getHours();
var min=day.getMinutes();
var month=months[day.getMonth()];
var weekday=days[day.getDay()];
var monthday=day.getDate();
var year=day.getFullYear();
var meridian;
function call(){
if(min<10){
  min="0"+min;
}

  if(time>=12){
    meridian= "P.M.";
    if(time!=12){
    time=Math.abs(time-12);
    }
  }
  else{
    meridian= "A.M.";
  }
  };
  call();


document.querySelector("#t1").innerHTML=time+":"+min+` ${meridian}`;
document.querySelector("#t5").innerHTML=year;
document.querySelector("#t3").innerHTML=weekday+", "+monthday+" "+month;
},500);

//time management ends

//window popping event listeners on apps

document.querySelectorAll(".app").forEach((el)=>{
    el.addEventListener('click',function(e){
        console.log(el.dataset.tabs);
      var copy=0;
      var purpose=el.dataset.purpose;
     

        if(el.dataset.tabs==="0"){
            const win=document.createElement("div");
            win.dataset.left="0";
            win.dataset.right="0";
          win.id="win"+el.dataset.purpose+copy;
win.className="window";

switch(purpose){
  case "music":musicWindowCreation(win);
  break;
}

document.body.appendChild(win);
const mini=document.createElement('div');
mini.className="minimize";
mini.addEventListener('click',function(){
    win.style.transform="scale(0)";
    win.style.top="110%";
});
win.appendChild(mini);
const max=document.createElement('div');
max.className="maximize";
win.dataset.max="0";
max.addEventListener('click',function(){
  if(win.dataset.max==="0"){
    win.style.transform="scale(1)";
    win.style.width="100vw";
    win.style.height="100vh";
    win.style.top="0%";
    win.style.left="0%";
    win.dataset.max="1";
  }
  else{
    document.querySelector("#win"+el.dataset.purpose+copy).style.transform="scale(0.9)";
    document.querySelector("#win"+el.dataset.purpose+copy).style.top="0.5%";
    document.querySelector("#win"+el.dataset.purpose+copy).style.left="3.5%";
    win.dataset.max="0"; 
  }
});
win.appendChild(max);

const ico1=document.createElement('i');
ico1.className="fa-solid fa-window-maximize";
max.appendChild(ico1);

const close=document.createElement('div');
close.className="close";
close.addEventListener('click',function(){
document.body.removeChild(win);
el.dataset.tabs--;
bar.style.width="0%";
setTimeout(()=>{el.removeChild(bar)},700);
});
win.appendChild(close);



const ico2=document.createElement('i');
ico2.className="fa-solid fa-xmark";
close.appendChild(ico2);
el.dataset.tabs++;
 const bar=document.createElement("div");
 bar.className="bar";
el.appendChild(bar);
setTimeout(()=>{bar.style.width="60%";},500);
//window moving bar creation
const hang=document.createElement("div");
hang.className="hanger";
win.appendChild(hang);
//window moving bar creation ends
//****************** */
function ondrag({movementX,movementY}){
  let getStyle=window.getComputedStyle(win);
  win.style.transition="0s";
  let left=parseInt(getStyle.left);
  let top=parseInt(getStyle.top);
  if(top>0){
  win.style.left=`${left+movementX}px`;
   win.style.top=`${top+movementY}px`;
  }
  else{
    win.style.top="1px";
  }

}

//window moving event listeners
hang.addEventListener("mousedown",()=>{
  hang.addEventListener("mousemove",ondrag);
});
document.addEventListener("mouseup",function(){
  hang.removeEventListener("mousemove",ondrag);
  win.style.transition="0.8s";
});

//window moving event listemers end/
        }
        else{
            document.querySelector("#win"+el.dataset.purpose+copy).style.transform="scale(0.9)";
            document.querySelector("#win"+el.dataset.purpose+copy).style.top="0.5%";
            document.querySelector("#win"+el.dataset.purpose+copy).style.left="2.5%";
        }
       
});});

