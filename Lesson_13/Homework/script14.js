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


function move (e){
    if (e) {
        document.style.marginLeft = '300px';
    }
}
let left = 0,
    up = 0,
    right = 0,
    down = 0,
    axisX = 0,
    axisY = 0,
    distance = 10;

document.addEventListener('keydown', function (event){
    //console.log(event.keyCode);
    //console.log(square.style);
    left += 10;
    up += 10;
    right += 10;
    down += 10;
    

    let eCode = event.keyCode;
    
    if(eCode === 39) {
        axisX += distance;
        square.style.marginLeft = `${axisX}px`;
        console.log(axisX);
    }
    if(eCode === 37) {
        axisX -= distance;
        square.style.marginLeft = `${axisX}px`;
        console.log(axisX);
    }
    if(eCode === 38) {
        axisY -= distance;
        square.style.marginTop= `${axisY}px`;
        console.log(axisY);
    }
    if(eCode === 40) {
        axisY += distance;
        square.style.marginTop = `${axisY}px`;
        console.log(axisY);
    }

});
