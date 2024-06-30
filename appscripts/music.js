
var url=[],counter=0,isactive=0,no=0;
var playname=[];
var prevtilepostiion=15;
function evente(){
const rect=document.querySelector(".addwindow").getBoundingClientRect();

document.querySelector(".addwindow").addEventListener("mousemove",function(e){
const cursor=document.querySelector(".cursortype1");
const x=e.clientX;
const y=e.clientY;
cursor.style.left=x+"px";
cursor.style.top=y+"px";

});

}
function createPlaylistWindow(){
   
}
document.querySelector("#add").addEventListener("click",()=>{
if(isactive===0){
    isactive=1;
    const Pwindow=document.createElement("div");
    Pwindow.className="addwindow";
    const input=document.createElement("input");
    input.type="text";
    input.className="name";
    input.placeholder="Playlist Name";
    const cursor=document.createElement("div");
    cursor.className="cursortype1";
    const next=document.createElement("button");
    next.className="next";
    next.innerHTML="Next";
     next.id="continue";
    const picdiv=document.createElement("div");
    picdiv.className="picdiv";
    const pic=document.createElement("input");
    pic.className="pic";
    pic.type="file";
    document.querySelector(".window").appendChild(Pwindow);
    document.querySelector(".addwindow").appendChild(input);
    document.querySelector(".addwindow").appendChild(cursor);
    document.querySelector(".addwindow").appendChild(next);
    evente();
    
    next.addEventListener("click",function(){
        if(counter===0&&input.value!=""){
     playname.push(input.value);
     document.querySelector(".addwindow").appendChild(picdiv);
     document.querySelector(".picdiv").appendChild(pic);
     input.style.left="-80%";
     next.style.left="60%";
     next.style.bottom="40%";
     pic.addEventListener("input",function(){
     const reader=new FileReader();
     const dispic=document.createElement("div");
     dispic.className="diss";
     picdiv.appendChild(dispic);
     var img=0;
         reader.addEventListener("load",function(){
         img=reader.result;
        dispic.style.background="url("+img+")";
        dispic.style.backgroundSize="cover";
        dispic.style.backgroundPosition="center";
        dispic.style.transition="all 400ms";
        url.push(img);
     });
     reader.readAsDataURL(this.files[0]);
    });
    counter=1;
}
 else if(input.value!=""){
counter=0;
document.querySelector(".window").removeChild(document.querySelector(".addwindow"));
isactive=0;
no++;
displayPlaylist();
}
});
}   

});
function displayPlaylist(){
const panel=document.querySelector(".musicdisplaypanel");
const playlisttile=document.createElement("div");
const tilepic=document.createElement("div");
tilepic.className="tilepic";
tilepic.style.background=`url('${url[url.length-1]}')`;
tilepic.style.backgroundSize="cover";
playlisttile.dataset.songs=[];
playlisttile.className="tile";
playlisttile.innerHTML=playname[playname.length-1];
if(no!=1){
    playlisttile.style.top=prevtilepostiion+"%";
}
prevtilepostiion=prevtilepostiion+15;

panel.appendChild(playlisttile);
playlisttile.appendChild(tilepic);
playlisttile.addEventListener("click",openpanel);
}
function openpanel(){
    alert("hello");
}