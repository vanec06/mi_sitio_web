
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
//ana
let iconarrowleft = document.getElementById("iconarrowleft");
let iconarrowright = document.getElementById("iconarrowright");
let idslider = document.getElementById("idslider");
let boxbtn1 = document.getElementById("boxbtn1");
let boxbtn2 = document.getElementById("boxbtn2");
let boxbtn3 = document.getElementById("boxbtn3");
let boxbtn4 = document.getElementById("boxbtn4");

iconarrowright.addEventListener("click",function(){
    alert('holis')
if(idslider.classList.contains('slider-view-1')){
    idslider.classList.add('slider-view-2');
    idslider.classList.remove('slider-view-1');
}
else if (idslider.classList.contains('slider-view-2')){
    idslider.classList.add('slider-view-3');
    idslider.classList.remove('slider-view-2');
}
else if (idslider.classList.contains('slider-view-3')){
    idslider.classList.add('slider-view-4');
    idslider.classList.remove('slider-view-3');
}
});

iconarrowleft.addEventListener("click",function(){
    alert('holis')
if(idslider.classList.contains('slider-view-1')){
    idslider.classList.add('slider-view-2');
    idslider.classList.remove('slider-view-1');
}
else if (idslider.classList.contains('slider-view-2')){
    idslider.classList.add('slider-view-3');
    idslider.classList.remove('slider-view-2');
}
else if (idslider.classList.contains('slider-view-3')){
    idslider.classList.add('slider-view-4');
    idslider.classList.remove('slider-view-3');
}
});