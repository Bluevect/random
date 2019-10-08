var oMover = document.getElementById("main_mover");
var speed = 10;

document.onkeypress = function (event)
{
    if (event.keyCode == 97)
    {
        oMover.style.left = (oMover.offsetLeft - speed) + "px";
    }
    else if (event.keyCode == 115)
    {
        oMover.style.top = (oMover.offsetTop + speed) + "px";
    }
    else if (event.keyCode == 100)
    {
        oMover.style.left = (oMover.offsetLeft + speed) + "px";
    }
    else if (event.keyCode == 119)
    {
        oMover.style.top = (oMover.offsetTop - speed) + "px";
    }

    console.log(event.keyCode);
};