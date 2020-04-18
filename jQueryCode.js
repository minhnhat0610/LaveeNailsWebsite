//Show Menu in Navigation
$(document).ready(function(){
    var links = $("#links li");
    var linksLength = $("#links li").length;
    var icon = $("#iconRow i");
    var time = 200;
    
    icon.click(function(){
        for(let i =1; i<=linksLength;i++){
          setTimeout(function(){
                $("li:nth-child("+i+")").fadeToggle(300);
            },time)
            time+=25;
            
            
        }
        time = 200;
    })
})