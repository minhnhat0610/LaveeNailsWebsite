// Navigation on Click to show up
let navButton = document.getElementById('navButton');
let linksContainer = document.getElementById('links').getElementsByTagName('li')
let isHidden = true;

let navigationContainer = document.getElementById('navigationContainer');
let bodyContainer = document.getElementById('bodyContainer');
let LaveeLogo = document.getElementById('LaveeLogo').getElementsByTagName('img');

navButton.addEventListener('click',()=>{
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

let NavigationMobile = () => {
    if(isHidden){
        expandNavigation();
        LinksShowUp();
      }
      else{
        hideNavigation();
        LinksHidden();
      }
      
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
    navigationContainer.style.width = '50%';
    bodyContainer.style.opacity = '0';
    bodyContainer.style.transition = '0.2s ease-in-out';
    bodyContainer.style.pointerEvents = 'none';
    LaveeLogo[0].style.opacity = 1;


}

let hideNavigation = () => {
    navigationContainer.style.width = '10%';
    bodyContainer.style.opacity = '1';
    bodyContainer.style.transition = '0.2s ease-in-out 0.2s';
    bodyContainer.style.pointerEvents = 'visible';
    LaveeLogo[0].style.opacity = 0;

}


//reload content when browser resize

window.addEventListener('resize',() => {
    
    location.reload()
})
