const h1 = document.querySelector(".hello:first-child h1");
const box = document.querySelector(".hello")

function handleTitleClick(){
    console.log(h1.style.color);
    h1.style.color = "blue";
    console.log(h1.style.color);
}

h1.addEventListener("click",handleTitleClick)
