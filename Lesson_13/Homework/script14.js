'use strict';
function DomElement(selector, height, width, background, fontSize){
    this.selector = selector;
    this.height = height;
    this.width = width;
    this.bg = background;
    this.fontSize = fontSize;

};
DomElement.prototype.createElement = function (item) {
     const sign = item.substring(0,1);
    
    if (sign === '.'){
        const tempDiv = document.createElement('div');
        const body = document.querySelector('body');
        body.insertAdjacentElement('afterbegin', tempDiv);
        tempDiv.classList.add(item.substring(1,item.length));
    } else {
        if (sign === '#'){
            const tempPar = document.createElement('p');
            const body = document.querySelector('body');
            body.insertAdjacentElement('afterbegin', tempPar);
            tempPar.setAttribute('id',item.substring(1,item.length));
        }
    }
};
DomElement.prototype.createStyle = (item, color, height, background, fontSize) => {
    this.item = item;
    this.color = color;
    this.height = height;
    this.background = background;
    this.fontSize = fontSize;
};

document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM fully loaded and parsed");
  });
DomElement.prototype.createElement('.square');
const square = document.querySelector('div');
square.style.backgroundColor = 'blue';
square.style.height = '100px';
square.style.width = '100px';
square.style.position = 'absolute';

function moveKey (event){

    const blueSquare = document.querySelector('div');
    const csst = window.getComputedStyle(square);
     
    const left = parseInt(csst.marginLeft);
    const top = parseInt(csst.marginTop);

    switch(event.keyCode){
         
        case 37:  // если нажата клавиша влево
            if(left>0)
            blueSquare.style.marginLeft = left - 10 + "px";
            break;
        case 38:   // если нажата клавиша вверх
            if(top>0)
            blueSquare.style.marginTop = top - 10 + "px";
            break;
        case 39:   // если нажата клавиша вправо
            if(left < document.documentElement.clientWidth - 100)
            blueSquare.style.marginLeft = left + 10 + "px";
            break;
        case 40:   // если нажата клавиша вниз
            if(top < document.documentElement.clientHeight - 100)
            blueSquare.style.marginTop = top + 10 + "px";
            break;
    }
}
square.addEventListener('keydown', moveKey)