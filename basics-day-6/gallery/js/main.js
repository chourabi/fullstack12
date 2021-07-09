var previous = document.getElementById("previous");
var next = document.getElementById("next");
var img = document.getElementById("img-p");



var galleryURLS = [
    'https://image.freepik.com/free-vector/colorful-palm-silhouettes-background_23-2148541792.jpg',
    'https://img.freepik.com/free-photo/cool-geometric-triangular-figure-neon-laser-light-great-backgrounds-wallpapers_181624-9331.jpg?size=626&ext=jpg',
    'https://www.shyamparivar.com/uploads/gallery/Hd-Wallpapers-For-PC.jpg'
]
var selectedIndex = 0;

next.addEventListener('click',()=>{
    if (selectedIndex == (galleryURLS.length -1 )) {
        selectedIndex = 0;
    }else{
        selectedIndex++;
    }

    

    document.getElementById("gallery").style.transition = "filter 1s ease-in-out";
    document.getElementById("gallery").style.filter = "blur(25px)";
    setTimeout(()=>{
        img.setAttribute('src',galleryURLS[selectedIndex])
        document.getElementById("gallery").style.transition = "unset";
        document.getElementById("gallery").style.filter = "blur(0px)";
    },1000)
    
    
});


function initGallery(){
    img.setAttribute('src',galleryURLS[selectedIndex])
}

initGallery();