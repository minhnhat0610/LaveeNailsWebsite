
//Change Background

let upButton = document.getElementById("upButton");
let downButton = document.getElementById("downButton");
let bigContainer = document.querySelector(".bigContainer");
let blurBackground = document.querySelector(".blurBackground");
let blurNavigation = document.getElementById("blurNavigation");
let imageSource = ["1.jpg","2.jpg","3.jpg","4.jpg","5.jpg"];


let ChangeBackgroundSlideDown = () => {
    let source = 'url('+imageSource[count] + ')';
    bigContainer.style.backgroundImage = source;
    blurBackground.style.backgroundImage = source;
    blurNavigation.style.backgroundImage = source;
}

let ChangeBackgroundSlideUp = () => {
    let source = 'url('+imageSource[count] + ')';
    bigContainer.style.backgroundImage = source;
    blurBackground.style.backgroundImage = source;
    blurNavigation.style.backgroundImage = source;
}


//Move up and down main navigation
let mainNavigation = document.querySelector("#mainNavigationLinks");
let MainNavigationLinks = document.querySelectorAll("#mainNavigationLinks li");
let NumberOfLinks = MainNavigationLinks.length-1;
let MainNavigationHeight = MainNavigationLinks[0].clientHeight;
let count = 0;
let isSlideUp = false;
let isSlideDown = false;
let fontSizeSmall = window.getComputedStyle(MainNavigationLinks[2]).getPropertyValue('font-size');
let fontSizeLarge = window.getComputedStyle(MainNavigationLinks[1]).getPropertyValue('font-size');

console.log(fontSizeSmall);
console.log(fontSizeLarge);


let ChangeApperance = () => {
    if(isSlideUp){
        MainNavigationLinks[count].style.fontSize = fontSizeSmall;
        MainNavigationLinks[count].style.opacity = "0.5";
        MainNavigationLinks[count].style.height = "25%";
        MainNavigationLinks[count].style.fontWeight = "normal";
        MainNavigationLinks[count].style.pointerEvents = 'none'
        MainNavigationLinks[count+1].style.fontSize = fontSizeLarge;
        MainNavigationLinks[count+1].style.opacity = "1";
        MainNavigationLinks[count+1].style.height = "50%";
        MainNavigationLinks[count+1].style.fontWeight = "bold";
        MainNavigationLinks[count+1].style.pointerEvents = 'visible'
    }

    if(isSlideDown){
        MainNavigationLinks[count+2].style.fontSize = fontSizeSmall;
        MainNavigationLinks[count+2].style.opacity = "0.5";
        MainNavigationLinks[count+2].style.height = "25%";
        MainNavigationLinks[count+2].style.fontWeight = "normal";
        MainNavigationLinks[count+2].style.pointerEvents = 'none'
        MainNavigationLinks[count+1].style.fontSize = fontSizeLarge;
        MainNavigationLinks[count+1].style.opacity = "1";
        MainNavigationLinks[count+1].style.height = "50%";
        MainNavigationLinks[count+1].style.fontWeight = "bold";
        MainNavigationLinks[count+1].style.pointerEvents = 'visible'
    }
    
}

let CheckCount = () => {
    if(count == 0){
        upButton.removeEventListener("click",SlideUp);
    }
    else if(count == NumberOfLinks-2){
        downButton.removeEventListener("click")
    }

    else{
        upButton.style.display = "block";
        downButton.style.display = "block";
    }

}

let SlideDown = () => {
    if(count < NumberOfLinks-1){
    isSlideUp = true;
    isSlideDown = false;
    
    //ChangeBackgroundSlideDown();
    
    //SetTransition();
    count++;
    mainNavigation.style.webkitTransform = "translateY(-"+MainNavigationHeight*count+"px)";
    ChangeApperance();
    
    TranslateText();
    
    //ChangeApperance();   
    //TranslateText();
    }
    

}

let SlideUp = () => {
    if(count!=0){
    isSlideUp = false;
    isSlideDown = true;
    

   //ChangeBackgroundSlideUp();

    //SetTransition();
    count--;
    mainNavigation.style.webkitTransform = "translateY(-"+MainNavigationHeight*count+"px)";
    ChangeApperance();
    TranslateText();
   
    }
    
}

downButton.addEventListener("click",SlideDown);
upButton.addEventListener("click",SlideUp)


// Translate description text
let descriptionContainer = document.querySelectorAll("#descriptions div");

let TranslateText = () => {
    let time = 0;
    descriptionContainer[count].style.display = "block";
    
    let descriptionText = descriptionContainer[count].querySelectorAll("p");
    for(let i = 0; i < descriptionText.length ;i++) {
        setTimeout(function(){
            descriptionText[i].style.webkitTransform = "translateX(0px)";
            descriptionText[i].style.opacity = "1";
        },time)
        time+=200
    }

    setTimeout(TranslateTextBack(),time);
    
}

let TranslateTextBack = () =>{
    if(count == 0){
        descriptionContainer[count+1].style.display = "none";
        let descriptionText = descriptionContainer[count+1].querySelectorAll("p");
        for(let i=0; i< descriptionText.length; i++){
            descriptionText[i].style.webkitTransform = "translateX(-30%)";
            descriptionText[i].style.opacity = "0";
        }
    }

    // else if(isSlideUp) {
    //     descriptionContainer[count-1].style.display = "none";
    //     let descriptionText1 = descriptionContainer[count-1].querySelectorAll("p");
    //     for(let i = 0; i<descriptionText1.length;i++){
    //         descriptionText1[i].style.transform = "translateX(-30%)";
    //         descriptionText1[i].style.opacity = "0";
    //     }
    // }

    // else if(isSlideDown){
    //     descriptionContainer[count+1].style.display = "none";
    //     let descriptionText2 = descriptionContainer[count+1].querySelectorAll("p");
    //     for(let i = 0; i<descriptionText2.length;i++){
    //         descriptionText2[i].style.transform = "translateX(-30%)";
    //         descriptionText2[i].style.opacity = "0";
    //     }
    // }

    else{
        descriptionContainer[count-1].style.display = "none";
        descriptionContainer[count+1].style.display = "none";

        let descriptionText1 = descriptionContainer[count-1].querySelectorAll("p");
        let descriptionText2 = descriptionContainer[count+1].querySelectorAll("p");
        for(let i = 0; i<descriptionText1.length;i++){
            descriptionText1[i].style.webkitTransform = "translateX(-30%)";
            descriptionText1[i].style.opacity = "0";
            descriptionText2[i].style.webkitTransform = "translateX(-30%)";
            descriptionText2[i].style.opacity = "0";
        }

        
    }
}

TranslateText();









