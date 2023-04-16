const icon = document.querySelector(".icon");
const nav = document.querySelector("ul");
const submenu = document.querySelector("ol");
const item = document.querySelector(".submenu");

icon.addEventListener("click", function () {
  nav.classList.toggle("nav-height");
});

item.addEventListener("click", function () {
  submenu.classList.toggle("sub-height");
});

function send() {
  var element = document.getElementById("input-first");
  var msg = document.getElementById("msg");
  msg.style.display = "block";
  var f = document.getElementById("section_send");
  console.log("aaaaaa");
  console.log(f);
  f.remove()};

 let myDiv=document.getElementById("test");
function toggelp(){
    myDiv.classList.toggle("hidden")
    
}

let button = document.getElementById("btn");
let colll = document.getElementById("colll");


 /*
btn.addEventListener("click", function () {
  colll.classList.toggle("custom-hite");
});*/

const hidBox = document.querySelector(".shide");
btn.addEventListener("click", function () {
  hidBox.classList.toggle("blockDis");
});