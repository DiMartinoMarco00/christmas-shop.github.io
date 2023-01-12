//c' è un problema con questo script

var swiper = new Swiper(".reviews-slider", 
{
    //slidesPerView: 1,
    spaceBetween: 20,// il valore originale era 10
    loop: true,
    grabCursor: true, //loop: true, grapCursor: true,  sono stati aggiunti

    pagination: 
    {
        el: ".swiper-pagination",
        clickable: true,
    },

    breakpoints: 
    {
        640: 
        {
            slidesPerView: 1, // il valore originale era 1
            //spaceBetween: 20,
        },

        768: 
        {
            slidesPerView: 2, //il valore originale era 4
            //spaceBetween: 40,
        },

        1200: //era 1024 il breakpoint
        {
            slidesPerView: 3, //il valore originale era 5
            //spaceBetween: 50,
        },
    },
});