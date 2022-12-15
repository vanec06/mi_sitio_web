let box3 = document.getElementById("box3");

box3.addEventListener("click",function(){
  
   if(box3.classList.contains("box3-old")){
        box3.classList.add("box3-new");
        box3.classList.remove("box3-old");
   }
   else{
    
        box3.classList.remove("box3-new");
        box3.classList.add("box3-old");
   }

})
let box4 = document.getElementById("box3");
let box4_1 = document.getElementById("box4_1")

box4.addEventListener("click",function(){
  
   if(box4_1.classList.contains("box-4-off")){
        box4_1.classList.add("box-4-on");
        box4_1.classList.remove("box-4-off");
        box4.classList.remove("box-4-green");
        box4.classList.remove("box-4-gray");
   }
   else{
        box4_1.classList.remove("box-4-on");
        box4_1.classList.add("box-4-off");
        box4.classList.remove("box-4-green");
        box4.classList.add("box-4-gray");
   }

})
