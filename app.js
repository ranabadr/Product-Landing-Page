window.addEventListener("scroll", ()=> {
    var header = document.querySelector("header");
    header.classList.toggle("sticky",window.scrollY > 0);
});

const collapse = document.querySelector(".collapse-btn");
const close = document.querySelector(".closebtn");
const sidebar = document.querySelector("#mySidebar");

collapse.addEventListener('click', ()=> {
  sidebar.style.width = "50%"
});

close.addEventListener('click', ()=> {
  sidebar.style.width = "0"
});