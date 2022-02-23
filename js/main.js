// import bannerAnimate from "./slider";
const burgerBtn = document.getElementById("header-burger-menu-btn");
const burgerMenu = document.getElementById("burger-menu");

const mainHeader = document.getElementById("main-header");

const testBtn = document.getElementById("go-to-test-page");

burgerBtn.addEventListener("click",()=>{

    if(burgerBtn.classList.contains("header-burger-menu-btn-open")){
        burgerBtn.classList.remove("header-burger-menu-btn-open");
        burgerMenu.classList.remove("burger-menu-list-open");
        mainHeader.classList.remove("header-sticky");
        document.body.style.overflowY = "visible";
    }
    else{
        burgerBtn.classList.add("header-burger-menu-btn-open");
        burgerMenu.classList.add("burger-menu-list-open");;
        mainHeader.classList.add("header-sticky");
        document.body.style.overflowY = "hidden";
    }

})

if(innerWidth >= 1023){

        window.addEventListener("scroll",

        ()=>{

            let distanceFromTop = mainHeader.offsetTop;

            if(distanceFromTop >= window.innerHeight/20){
                mainHeader.classList.add("light-bg");
            }
            else{
                mainHeader.classList.remove("light-bg");
            }
        }
    );
}
