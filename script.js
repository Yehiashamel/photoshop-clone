let saturate = document.querySelector('#saturate');
let contrast = document.getElementById('contrast');
let brightness = document.getElementById('brightness');
let sepia = document.getElementById('sepia');
let grayscale = document.getElementById('grayscale');
let blur = document.getElementById('blur');
let hueRotate = document.getElementById('hue-rotate');

let download = document.getElementById('download');
let reset = document.getElementById('Reset');

let upload = document.getElementById('upload');
let imgBox = document.querySelector('.img-box');

window.onload = function(){
    download.style.display = 'none';
    reset.style.display = 'none';
    imgBox.style.display = 'none';
}
upload.onchange = function(){
    download.style.display = 'block';
    reset.style.display = 'block';
    imgBox.style.display = 'block';
    let file = new FileReader();
    file.readAsDataURL(upload.files[0]);
    file.onload = function(){
    img.src = file.result;
    }
}

let filters = document.querySelector('ul li input');
filters.forEach(filter =>{
    filter.addEventListener('input', function(){
        img.style.filter = `
        saturate(${saturate.value}%)       
        `
    })
})