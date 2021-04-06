window.onload = function()
{
    showTime();
    changeSpanColor();
    changeH2Color();
}

function showTime()
{
    var d = new Date();
    
    var year = d.getFullYear();
    
    var month = d.getMonth() + 1;
    if(month < 10)
    {
        month = "0" + month;
    }

    var day = d.getDate();
    if(day < 10)
    {
        day = "0" + day;
    }

    var hour = d.getHours();
    if(hour < 10)
    {
        hour = "0" + hour;
    }

    var min = d.getMinutes();
    if(min < 10)
    {
        min = "0" + min;
    }

    var second = d.getSeconds();
    if(second < 10)
    {
        second = "0" + second;
    }

    var span = document.getElementsByTagName("span")[0];
    span.innerHTML = "今の時間は " + year + "-" + month + "-" + day + " " + hour + ":" + min + ":" + second;

    setTimeout("showTime()", 1000 * 1);
}

var n = 0;
var colorsSpan = ["#F7DC6F", "lime", "#ccc", "white", "pink"];
function changeSpanColor()
{
    var span = document.getElementsByTagName("span")[0];

    if(n >= colorsSpan.length)
    {
        n = 0;
    }

    span.style.color = colorsSpan[n];
    n++;

    setTimeout("changeSpanColor()", 1000 * 0.5);
}

var i = 0;
var colorsH2 = ["#D98880", "#BB8FCE", "#76D7C4", "#F0B27A", "#B2BABB"];
function changeH2Color()
{
    var span = document.getElementsByTagName("h2")[0];

    if(i >= colorsH2.length)
    {
        i = 0;
    }

    span.style.color = colorsH2[i];
    i++;

    setTimeout("changeH2Color()", 1000 * 0.5);
}