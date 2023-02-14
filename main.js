let burger = document.querySelector(".burger")
let leftMenu = document.querySelector(".left-menu")


burger.addEventListener("click",function(){
    leftMenu.classList.toggle("showleftMenu")
})