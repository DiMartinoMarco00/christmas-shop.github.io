(function()
{
   "use strict";

   const header = document.querySelector(".header");
   const menu_btn = document.querySelector("#menu-btn");
   const home = document.querySelector(".home");
   const title = document.querySelector(".title");
   const subTitle = document.querySelector(".sub-title");
   const inputsNumber = document.querySelectorAll('input[type="number"]');


   menu_btn.addEventListener('click', function()
   {
       header.classList.toggle('active');
   });

   window.addEventListener('scroll', function()
   {
      header.classList.remove('active');
   });


   home.addEventListener('mousemove', function(event)
   {
       let x = (window.innerWidth / 2 - event.pageX) / 10;
       let y = (window.innerHeight / 2 - event.pageY) / 10;

       title.style.margin = `${y}px ${x}px`;
       subTitle.style.margin = `${y}px ${x}px`;
   });


   home.addEventListener('mouseleave', function()
   {
       title.style.margin = `0`;
       subTitle.style.margin = `0`;
   });

   /* --------------------------------------------------------------------------------------------------------- */

   inputsNumber.forEach(inputsNumber => 
   {
      inputsNumber.oninput = () =>
      {
        if(inputsNumber.value.length > inputsNumber.maxLength)
            inputsNumber.value = inputsNumber.value.slice(0, inputsNumber.maxLength);
      }
   });


   /* -------------------------------------------------------------------------------------------------------- */
}());