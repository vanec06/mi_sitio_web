
let idlupa = document.getElementById("idlupa");
let boxheader1 = document.getElementById("boxheader1");
let boxheader2 = document.getElementById("boxheader2");
let idexit  = document.getElementById("idexit");
idlupa.addEventListener("click", function() {
   boxheader1.classList.add("box-header1-hidden");
   boxheader1.classList.remove("box-header-1");
   boxheader2.classList.remove("box-header-2-hidden");
   boxheader2.classList.add("box-header-2");
});

idexit.addEventListener("click", function() {
   boxheader1.classList.remove("box-header1-hidden");
   boxheader1.classList.add("box-header-1");
   boxheader2.classList.add("box-header-2-hidden");
   boxheader2.classList.remove("box-header-2");
});

