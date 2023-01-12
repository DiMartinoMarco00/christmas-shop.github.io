(function()
{
    "use strict";
    
    function createSnowfall()
    {
        let snowfall = document.querySelector('.snowfall');
        let span = document.createElement('span');
        let size = Math.random() * 10;

        span.style.left = Math.random() * window.innerWidth + "px";
        span.style.height = 3 * size + "px";
        span.style.width = 3 * size + "px";

        snowfall.appendChild(span);


        setTimeout(function()
        {
            span.remove()
        },5000);
    }


    if(window.innerWidth < 768)
    {
        setInterval(createSnowfall, 300);
    }
    else 
    {
        setInterval(createSnowfall, 100);
    }
}());