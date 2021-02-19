'use strict';
function DomElement(selector, height, width, bg, fontSize){
    this.selector = selector;
    this.height = height;
    this.width = width;
    this.bg = bg;
    this.fontSize = fontSize;
}

DomElement.prototype.createElement = function() {
    if(this.selector[0] === '.') {
        document.body.insertAdjacentHTML("beforeend", `<div class = '${this.selector.slice(1)}></div>'`);
    } else if(this.selector[0] === '#') {
        document.body.insertAdjacentHTML("beforeend", `<p id = '${this.selector.slice(1)}><p>'`);
    }
};

let elementDiv = new DomElement('.block', '20px', '100px', '#52FB52', '10px');
elementDiv.createElement('');

document.querySelector('.block').style.cssText = `
height: ${elementDiv.height};
width: ${elementDiv.width};
background-color: ${elementDiv.bg};
font-size: ${elementDiv.fontSize};
`;

let elementP = new DomElement('#best', 20, 30, '#363636', '17px');

elementP.createElement();