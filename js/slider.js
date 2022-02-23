
animateBanner = ()=>{
    const bannerSlide = document.getElementById("banner-img-list");const bannerSize = document.getElementById("banner-img-list").childElementCount;
    var bannerIndex = 1;var pauseTime = 3000;
    var xTouch;var xMove;
    bannerPosition = (numb)=>{return `${(numb)*-100}` + `%`;}
    ///////////////////// for action on dots ////////////////////////////
    // liveBanner = (index)=>{
    //     bannerIndex = index;
    //     bannerSlide.style.transform = `translatex(${bannerPosition(bannerIndex)})`;
    //     return bannerIndex;
    // }
    ////////////////////////////////////////////////////////////////////
    showPreviousBanner = ()=>{
    numb = bannerIndex-1;
        if(numb < 5 && numb != 0){
            liveDot = document.getElementById(`banner-slider-dot-${numb-1}`);
            offDot = document.getElementById(`banner-slider-dot-${numb}`);
            offDot.classList.remove("active-dot");
            liveDot.classList.add("active-dot");
        }
        else{
            liveDot = document.getElementById(`banner-slider-dot-${numb-1}`);
            offDot = document.getElementById(`banner-slider-dot-${numb-numb}`);
            offDot.classList.remove("active-dot");
            liveDot.classList.add("active-dot");
        }
        if(bannerIndex > 1){
            bannerIndex --;
            bannerSlide.style.transform = `translatex(${bannerPosition(bannerIndex-1)})`;
        }
        else{bannerIndex = 1;}}

    showNextBanner = (pushed)=>{
        numb = bannerIndex;
        if(numb < 5 && numb != 0){
            liveDot = document.getElementById(`banner-slider-dot-${numb}`);
            offDot = document.getElementById(`banner-slider-dot-${numb-1}`);
            offDot.classList.remove("active-dot");
            liveDot.classList.add("active-dot");
        }
        else{
            liveDot = document.getElementById(`banner-slider-dot-${numb-numb}`);
            offDot = document.getElementById(`banner-slider-dot-${bannerSize-2}`);
            offDot.classList.remove("active-dot");
            liveDot.classList.add("active-dot");
        }
        if(bannerIndex < bannerSize){
            bannerSlide.style.transform = `translatex(${bannerPosition(bannerIndex)})`;
            bannerSlide.style.transition = `ease 300ms`;
            bannerIndex++;
        }
        else{
            if(pushed){
            }
            else{
                bannerIndex = 0;
                showNextBanner();
                bannerSlide.style.transition = `none`;
                }
            }
    }
    setInterval(showNextBanner, pauseTime);
//////////// for touch devices ///////////////////////
    bannerSlide.addEventListener("touchstart", (e)=>{
        xTouch = e.touches[0].clientX;
    })
    bannerSlide.addEventListener("touchmove", (e)=>{
        xMove = e.touches[0].clientX;
    })
    bannerSlide.addEventListener("touchend",()=>{
        if(xTouch < xMove){
            showPreviousBanner();
        }
        else{
            if(xTouch > xMove){
                showNextBanner();
            }
        }
    })
}
// Main funtion for banner
animateBanner();
