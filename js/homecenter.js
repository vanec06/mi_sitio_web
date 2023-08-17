
let idLupa = document.getElementById("idLupa");
let boxheader1 = document.getElementById("boxheader1");
let boxheader2 = document.getElementById("boxheader2");
let idexit = document.getElementById("x-exit");
idLupa.addEventListener("click",function(){
    boxheader1.classList.add("box-header-1-hidden");
    boxheader1.classList.remove("box-header-1");
    boxheader2.classList.remove("box-header-2-hidden");
    boxheader2.classList.add("box-header-2");
    
});
idexit.addEventListener("click",function(){
    boxheader1.classList.remove("box-header-1-hidden");
    boxheader1.classList.add("box-header-1");
    boxheader2.classList.add("box-header-2-hidden");
    boxheader2.classList.remove("box-header-2");
    


});

