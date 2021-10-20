// function(e) {
//   e.preventDefault();
//   $('html,body').animate({
//     scrollTop: 0
//   }, 700);
// }











$(document).ready(function(){

    $('#itemslider').carousel({ interval: 3000 });

    $('.carousel-showmanymoveone .item').each(function(){
        var itemToClone = $(this);

        for (var i=1;i<6;i++) {
            itemToClone = itemToClone.next();

            if (!itemToClone.length) {
                itemToClone = $(this).siblings(':first');
            }

            itemToClone.children(':first-child').clone()
            .addClass("cloneditem-"+(i))
            .appendTo($(this));
        }
    });
});



const sliderShowImage = document.querySelectorAll('.slider_bg .slideshow_img_1');

const nextimageDelay = 3000;
let currentImageCounter = 0;

sliderShowImage[currentImageCounter].style.opacity = 1;
setInterval(nextImage, nextimageDelay);

function nextImage (){
    sliderShowImage[currentImageCounter].style.zIndex = -2;
    const tempcounter = currentImageCounter;

    setTimeout(()=> {
        sliderShowImage[tempcounter].style.opacity = 0;
    },1000);

    sliderShowImage[currentImageCounter].style.opacity = 0;
    currentImageCounter = (currentImageCounter + 1) % sliderShowImage.length;

    sliderShowImage[currentImageCounter].style.opacity = 1;
    sliderShowImage[currentImageCounter].style.zIndex = -1;
}



// load up

