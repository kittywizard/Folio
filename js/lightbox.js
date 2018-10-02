// important notes : use display:none to code lightbox in the html and then hide it

console.log("test");

//event listener for when someone clicks on a image

//event listener for when somsone clicks on one of the arrows
    //best way to handle.. everything is the same except if it's forward or backwards

const leftArrow = document.getElementById('left');
const rightArrow = document.getElementById('right');
const arrows = document.getElementsByClassName('arrow');

console.log(arrows);

//can I combine these two into one?
leftArrow.addEventListener("click", changeSlide);
rightArrow.addEventListener("click", changeSlide);


function changeSlide() {
    console.log("is this function running");
    
    return;
}

