console.log('Loaded!');
var element= document.getElementById('main-text');

element.innerHTML='New Value by Yash';
var img = document.getElementById('yash');
var marginLeft = 0;
function moveRight (){
 marginLeft = marginLeft + 10;
 img.style.marginLeft = marginLeft + 'px';
}
img.onclick = function()
{
    var interval = setInterval(moveRight,100);
};