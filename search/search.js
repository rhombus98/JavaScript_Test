var year = [];
for(var i = 0; i < 122; i++)
{
    year.unshift(1900 + i + "年");
}

window.onload = function()
{
    document.getElementsByTagName("section")[0].style.backgroundColor = "#74F8E8";

    var select = document.getElementsByTagName("select")[0];

    for(var j = 0; j < year.length; j++)
    {
        var opt = document.createElement("option");
        opt.innerHTML = year[j];
        select.appendChild(opt);
    }
}

function onFocus()
{
    (document.getElementById("text")).style.border = "2px #D22E14 solid";
}

function onBlur()
{
    (document.getElementById("text")).style.border = "none";
}

function onMouseOver()
{
    (document.getElementById("button0")).style.backgroundColor = "palegreen";
    (document.getElementById("button0")).style.color = "purple";
    (document.getElementById("button0")).style.fontSize = "16px";
}

function onMouseOut()
{
    (document.getElementById("button0")).style.backgroundColor = "white";
    (document.getElementById("button0")).style.color = "black";
    (document.getElementById("button0")).style.fontSize = "13.3333px";
}