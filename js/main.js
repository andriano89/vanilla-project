
const menuClick = document.querySelector(".nav-bar > div");
const menu = document.querySelector("#menu-a");
const div = document.querySelector("#lang-choose > div");
const displayMode = document.querySelector("nav-bar")

menuClick.addEventListener("click", () =>{
    if(menu.style.display === "block"){
        menu.style.display = "none";
    } else{
        menu.style.display = "block";
    }
});

const langChoose = document.querySelector("#lang-choose");

langChoose.addEventListener("click", () => {
    if(div.style.display === "block"){
        div.style.display = "none";
    }else{
        div.style.display = "block";
    }
})

const main = document.querySelector("main");

main.addEventListener("click", () => {
    menu.style.display = "none";  
    div.style.display = "none";
})


const menuList = menu.querySelectorAll("a > li");

let theme = 0;
const changePageTheme = () => {
    menu.style.display = "none";  
    div.style.display = "none";
    const logo = document.querySelector("header > .logo");
    if(theme === 0){
        logo.style = "background-color: var(--darkgray); color: var(--white)";
        for(elem of menuList){
        elem.style = "background-color: var(--darkgray); color: var(--white);"
        }
        theme = 1;
    } else{
        logo.style = "background-color: var(--white); color: var(--dark)";
        for(elem of menuList){
            elem.style = "background-color: var(--white); color: black;"
            }
        theme = 0;
    }

}
const fullScreen = document.querySelector("#full-screen");
const fullScreenImg = document.querySelector("#full-screen img");
const fsCancel = document.querySelector("#fs-cancel");



const imgs = document.querySelectorAll("#gallery img");
const fsLeft = document.querySelector("#fs-left");
const fsRight = document.querySelector("#fs-right");

let index;

imgs.forEach( elem => {
    elem.addEventListener("click", event => {
        for(let i = 0; i < imgs.length; i++){
            if(imgs[i] === elem){
                index = i;
            }
        }
        fullScreen.style.display = "block";
        fullScreenImg.src = elem.src;
        console.log(index);
    })
});

if(fsCancel !== null){
    fsCancel.addEventListener("click", event => {
     if(fsCancel === null) {
        console.log("Is null");
     } else {
        fullScreen.style.display = "none";
     }
    } ) 
} 

if(fsLeft !== null) {
    fsLeft.addEventListener("click", event => {
        index--;
        if(index>=0&&index<imgs.length){
            console.log(`Left ${index}`);
            fullScreenImg.src = imgs[index].src;
        } else {
            console.log(index);
            index = 0;
        }
        })   
}

if(fsRight !==null) {
    fsRight.addEventListener("click", event => {
        index++;
        if(index>=0&&index<imgs.length){
            console.log(`Right ${index}`);
            fullScreenImg.src = imgs[index].src;
        } else {
            console.log(index);
            index = imgs.length -1;
        }
        })} 
