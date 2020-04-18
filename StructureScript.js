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
        links[0].style.transition = '0.5s ease-in-out 0.4s';
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
    navigationContainer.style.transition = '0.5s ease-in-out';
    navigationContainer.classList.replace('col-1','col-6');
    bodyContainer.style.display = 'none';
    LaveeLogo[0].style.opacity = 1;


}

let hideNavigation = () => {
    navigationContainer.style.transition = '0.5s ease-in-out';
    navigationContainer.classList.replace('col-6','col-1');
    bodyContainer.style.display = 'block';
    LaveeLogo[0].style.opacity = 0;

}


//reload content when browser resize

window.addEventListener('resize',() => {
    
    location.reload()
})
