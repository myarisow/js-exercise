

function changeImage() {

    const image = document.querySelector('#image');

    const  url = prompt("please enter your image URL");
    const borderColor =prompt("please enter your border color"); 
    const width = prompt ("please enter the width of the image (in pixels):");
    const height = prompt ("please enter the height of the image (in pixels): ");
    const borderRadius = prompt ("please enter the border radius of the image (in pixels):");

    image.setAttribute('src', url);
    image.style.border = '5px solid ${borderColor}';

    image.style.width = '${width}px';
    image.style.height = '${height}px';
    image.style.borderRadius = '${borderRadius}px';
    image.style.padding = "20px";
    image.style.backgroundColor = '#cfc2dc'

};