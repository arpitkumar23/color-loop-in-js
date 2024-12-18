const randomColor = function(){
    const hex = '0123456789ABCDEF';
    let Color = '#';
    for (let i = 0; i < 6; i++) {
         Color+= hex[Math.floor(Math.random()  * 16)]
        
    }
    return Color;
}
let intervalID;

const startChangingColor =function(){

    
   
    if (!intervalID) {
        intervalID= setInterval(changeBgcolor , 1000);
        
    }
    function changeBgcolor(){
        document.body.style.backgroundColor = randomColor();

    }
}
const stopChangingColor =function(){
    clearInterval(intervalID);
    intervalID = null;
}

document.querySelector("#start").addEventListener('click',startChangingColor);
document.querySelector("#stop").addEventListener('click',stopChangingColor);