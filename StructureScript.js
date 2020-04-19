// Navigation on Click to show up
let navButton = document.getElementById('navButton');
let navButton2 = document.getElementById('navButton2');
let linksContainer = document.getElementById('links').getElementsByTagName('li');
let linksContainerMobile = document.getElementById('linksMobile').getElementsByTagName('li');
let LaveeLogo = document.getElementsByClassName('LaveeLogo')[0].getElementsByTagName('img');
let isHidden = true;

let navigationContainer = document.getElementById('navigationContainer');
let navigationMobile = document.getElementById('navigationMobile');
let bodyContainer = document.getElementById('bodyContainer');

let innerContainer = document.getElementById('innerContainer');
let innerContainerWidth = window.getComputedStyle(innerContainer).getPropertyValue('width');
let distance = parseFloat(innerContainerWidth)/2;

console.log(distance);


navigationMobile.style.transform = 'translateX(-'+distance+'px)';
navButton.addEventListener('click',function navButtonClickEvent(){
    let windowsWidth = window.innerWidth;
    if(windowsWidth <= 1024){
        NavigationMobile();
        
    }

    else{
        if(isHidden){
            LinksShowUp();
        }
        else{
            LinksHidden();
        }
    }

})

navButton2.addEventListener('click',()=>{
    hideNavigation();
    LinksHiddenMobile();
})

let NavigationMobile = () => {
    if(isHidden){
        expandNavigation();
        LinksShowUpMobile();
      }
      
}

let LinksShowUpMobile = () => {
    for(let i=0; i< linksContainerMobile.length; i++){
        let links = linksContainerMobile[i].getElementsByTagName('a');
        links[0].style.transition = '0.5s ease-in-out 0.3s';
        links[0].style.opacity = 1;
        links[0].style.pointerEvents = 'visible';
    }

    LaveeLogo[0].style.opacity = '1';

    isHidden = false;
}

let LinksHiddenMobile = () => {
    for(let i=0; i< linksContainerMobile.length; i++){
        let links = linksContainerMobile[i].getElementsByTagName('a');
        links[0].style.transition = 'none';
        links[0].style.opacity = 0;
        links[0].style.pointerEvents = 'none';
    }

    LaveeLogo[0].style.opacity = '0';
    isHidden = true;
}

let LinksShowUp = () => {
    for(let i=0; i< linksContainer.length; i++){
        let links = linksContainer[i].getElementsByTagName('a');
        links[0].style.transition = '0.5s ease-in-out 0.3s';
        links[0].style.opacity = 1;
        links[0].style.pointerEvents = 'visible';
    }

    isHidden = false;
}

let LinksHidden = () => {
    for(let i=0; i< linksContainer.length; i++){
        let links = linksContainer[i].getElementsByTagName('a');
        links[0].style.transition = 'none';
        links[0].style.opacity = 0;
        links[0].style.pointerEvents = 'none';
    }

    isHidden = true
}

let expandNavigation = () => {
    navigationMobile.style.transform = 'translateX(0px)';
    navigationMobile.style.opacity = '1';
    navigationContainer.style.display = 'none';
    bodyContainer.style.opacity = '0';
    bodyContainer.style.transition = '0.2s ease-in-out';
    bodyContainer.style.pointerEvents = 'none';


}

let hideNavigation = () => {
    navigationMobile.style.transform = 'translateX(-'+distance+'px)';
    navigationMobile.style.opacity = '0';
    navigationContainer.style.display = 'block';
    bodyContainer.style.opacity = '1';
    bodyContainer.style.transition = '0.2s ease-in-out 0.4s';
    bodyContainer.style.pointerEvents = 'visible';

}


