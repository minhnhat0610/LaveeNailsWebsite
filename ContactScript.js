let address = document.getElementById('address');
let contact = document.getElementById('contact');
let businessHour = document.getElementById('businessHour');

let contactTitle = contact.getElementsByClassName('title');
let addressTitle = address.getElementsByClassName('title');
let BHTitle = businessHour.getElementsByClassName('title');

let contactExpanded = true;
let addressExpanded = false;
let businessHourExpanded = false;



addressTitle[0].addEventListener('click', () => {
    if(!addressExpanded){
        address.style.height = '60%';
        contact.style.height = '20%';
        businessHour.style.height = '20%';
        expandLayout(address);
        if(contactExpanded){
            collapseLayout(contact);
            contactExpanded = false;
        }
            
        else if(businessHourExpanded){
            collapseLayout(businessHour);
            businessHourExpanded = false;
        }
           addressExpanded = true; 
    }
     
})

contactTitle[0].addEventListener('click', () => {
    if(!contactExpanded){
        contact.style.height = '60%';
        address.style.height = '20%';
        businessHour.style.height = '20%';
        expandLayout(contact);
        if(addressExpanded){
            collapseLayout(address);
            addressExpanded = false;
        }
            
        if(businessHourExpanded){
            collapseLayout(businessHour); 
            businessHourExpanded = false
        }
            contactExpanded = true;
    }
    
})

BHTitle[0].addEventListener('click', () =>{
    if(!businessHourExpanded){
        contact.style.height = '20%';
        address.style.height = '20%';
        businessHour.style.height = '60%';
        expandLayout(businessHour);
        if(addressExpanded){
            collapseLayout(address);
            addressExpanded = false;
        }
            
        if(contactExpanded){
            collapseLayout(contact); 
            contactExpanded = false
        }
            businessHourExpanded = true;
    }
})


let expandLayout = (component) => {
    let backgroundRunning = component.getElementsByClassName('backgroundRunning');
    let contentContainer = component.getElementsByClassName('contentContainer');
    let titleDiv = component.getElementsByClassName('title');
    let title = titleDiv[0].getElementsByTagName('p');
    let icon = title[0].getElementsByTagName('i');
    let titleDivWidth = window.getComputedStyle(titleDiv[0]).getPropertyValue('width');
    let titleWidth = window.getComputedStyle(title[0]).getPropertyValue('width');
    let distance = parseFloat(titleDivWidth)/2 - parseFloat(titleWidth)/2 - parseFloat(titleDivWidth)*0.02;
    
    console.log(titleWidth);
    console.log(titleDivWidth);
    backgroundRunning[0].style.width = '100%'
    
    title[0].style.color = 'white';
    title[0].style.transform = 'translateX(-'+distance+'px)';
    icon[0].style.color = 'white';
    icon[0].style.transform = 'rotate(720deg)';
    contentContainer[0].style.display = 'flex';
    titleDiv[0].style.height = '20%';
    let seperator = component.getElementsByClassName('seperator');
    seperator[0].style.width = '30%';
}


let collapseLayout = (component) => {
    let backgroundRunning = component.getElementsByClassName('backgroundRunning');
    let titleDiv = component.getElementsByClassName('title');
    let title = titleDiv[0].getElementsByTagName('p');
    let icon = title[0].getElementsByTagName('i');
    let titleDivWidth = window.getComputedStyle(titleDiv[0]).getPropertyValue('width');
    let titleWidth = window.getComputedStyle(title[0]).getPropertyValue('width');
    let distance = parseFloat(titleDivWidth)/2 - parseFloat(titleWidth)/2 - parseFloat(titleDivWidth)*0.02;
    let contentContainer = component.getElementsByClassName('contentContainer');

    backgroundRunning[0].style.width = '0%';

    title[0].style.color = 'rgb(165,95,193)';
    title[0].style.transform = 'translateX(0px)';
    icon[0].style.color = 'rgb(165,95,193)';
    icon[0].style.transform = 'rotate(0deg)';
    contentContainer[0].style.display = 'none';
    titleDiv[0].style.height = '100%';
    let seperator = component.getElementsByClassName('seperator');
    seperator[0].style.width = '0%';
}

let expandContact = () =>{
    contact.style.height = '60%';
    address.style.height = '20%';
    businessHour.style.height = '20%';
    expandLayout(contact);
}
setTimeout(expandContact,1000);
