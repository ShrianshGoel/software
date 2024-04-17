var Playlist_name=0;

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
     Playlist_name=input.value;
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
        
     });
     reader.readAsDataURL(this.files[0]);
    });
});
   

});
