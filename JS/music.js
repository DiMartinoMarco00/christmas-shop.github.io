(function()
{
    "use strict";
    
    const audio = document.getElementById('audio');
    let count = 0;

    document.addEventListener('keydown', function(event)
    {
        if(event.key === 'Enter')
        {
           audio.play();  
        }
        else if(event.key === 'Shift')
        {
            audio.pause();
        }
        else if(event.key === 'c' && count === 0)
        {
            count++;
            audio.style.display = "block";
        }
        else if(event.key === 'c' && count !== 0)
        {
            audio.style.display = "none";
            count = 0;
        }
    });
}());