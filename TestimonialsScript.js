//Move the slider
let reviewSlider = document.getElementById('reviewSlider')
let reviewWidth = reviewSlider.clientWidth;
let controlButtonNext = document.getElementById('nxtButton');
let controlButtonPre = document.getElementById('preButton');

let count = 0;
let review = document.getElementsByClassName('review');
let numOfreview = review.length;



controlButtonNext.onclick = () => {
    count++;
    reviewSlider.style.transition = 'transform 1s ease-in-out 0s';
    reviewSlider.style.transform = 'translateX('+(-reviewWidth) *count +'px';
    checkControlButton();
    showUpReview();
}

controlButtonPre.onclick = () => {
    count--;
    reviewSlider.style.transition = 'transform 1s ease-in-out 0s';
    reviewSlider.style.transform = 'translateX('+(-reviewWidth) *count +'px)';
    checkControlButton();
}

// Function check Control Button 

let checkControlButton = () =>{
    if(count==numOfreview-1){
        controlButtonNext.style.display ='none';
        controlButtonPre.style.display = 'block';

    }
    else if (count == 0){
        controlButtonPre.style.display = 'none';
    }

    else{
        controlButtonNext.style.display = 'block';  
        controlButtonPre.style.display = 'block';
        
    }
}

//Show up review
let showUpReview = () => {
    let reviewTitle = review[count].getElementsByClassName('title');
    let title = reviewTitle[0].getElementsByTagName('p');

    //show up title
    title[0].style.transition = '1.5s ease-in-out';
    title[0].style.transform = 'translateY(0px)';
    title[0].style.opacity = 1;

    //show up seperator
    let seperator = review[count].getElementsByClassName('seperator');
    seperator[0].style.transition = '1.5s ease-in-out';
    seperator[0].style.width = '60%';

    //show detail
    let detail = review[count].getElementsByClassName('detail');
    detail[0].style.transition = '2s ease-in-out';
    detail[0].style.opacity = 1;

    //show source
    let source = review[count].getElementsByClassName('source');
    source[0].style.transition = '1s ease-in-out';
    source[0].style.opacity = 1;
}

showUpReview();


checkControlButton();