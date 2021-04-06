window.onload = function()
{
    var imgList = document.getElementById("imgList");
    
    var imgArr = document.getElementsByTagName("img");

    imgList.style.width = 200 * imgArr.length + "px";

    imgMove();
}

function imgMove()
{
    var imgList = document.getElementById("imgList");

    var oldValue = parseInt(imgList.offsetLeft);

    if(oldValue <= -200 * 4)
    {
        oldValue = 0;
    }

    var newValue = oldValue - 3;

    imgList.style.left = newValue + "px";

    setTimeout("imgMove()", 30);
}