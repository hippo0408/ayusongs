"use strict";

{
    const open=document.getElementById("open");
    const overlay=document.querySelector(".overlay");
    const close=document.getElementById("close");
    const icon=document.querySelector(".icon");
    const subsongs=document.querySelector(".sub-songs a");
    const subnav=document.querySelector(".subnav");

    open.addEventListener("click",()=>{
    overlay.classList.add("show");
    open.classList.add("hide");
    });

    close.addEventListener("click",()=>{
    overlay.classList.remove("show");
    open.classList.remove("hide");
    });


    subsongs.addEventListener("click",()=>{
    overlay.classList.remove("show");
    open.classList.remove("hide");
    });

    subnav.addEventListener("click",()=>{
    overlay.classList.remove("show");
    open.classList.remove("hide");
    });
    

  
    
   
                
    
}