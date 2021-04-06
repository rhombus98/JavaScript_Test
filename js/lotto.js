var hColor = 0;
var arrColor = new Array("blue", "cornflowerblue", "purple", "green", "red");

window.onload = function()
{
    h1Color();

    var d0 = document.getElementById("d0");
    for(var i = 1; i <= 35; i++)
    {
        var b35 = document.createElement("button");
        b35.innerHTML = i;
        b35.className = "b35";
        d0.appendChild(b35);
    }

    var d1 = document.getElementById("d1");
    for(var k = 1; k <= 12; k++)
    {
        var b12 = document.createElement("button");
        b12.innerHTML = k;
        b12.className = "b12";
        d1.appendChild(b12);
    }
}

function select()
{
/*******************************35*************************************/
    var arr35 = new Array(0, 0, 0, 0, 0);
    label: for(var m = 0; m < arr35.length; m++)
    {
        var ran35 = parseInt(Math.random() * 35);
        for(var n = 0; n < arr35.length; n++)
        {
            if(ran35 === arr35[n])
            {
                m--;
                continue label;
            }
        }

        arr35[m] = ran35;
    }

    for(var t = 0; t < document.getElementsByClassName("b35").length; t++)
    {
        document.getElementsByClassName("b35")[t].style.backgroundColor = "white";
    }

    for(var p = 0; p < arr35.length; p++)
    {
        for(var q = 0; q < document.getElementsByClassName("b35").length; q++)
        {
            if(arr35[p] === q)
            {
                document.getElementsByClassName("b35")[q].style.backgroundColor = "yellow";
            }
        }
    }
/*******************************35*************************************/


/*******************************12*************************************/
var arr12 = new Array(0, 0);

label0: for(var a = 0; a < arr12.length; a++)
{
    var ran12 = parseInt(Math.random() * 12)
    for(var b = 0; b < arr12.length; b++)
    {
        if(ran12 === arr12[b])
        {
            a--;
            continue label0;
        }
    }

    arr12[a] = ran12;
}

for(var e = 0; e < document.getElementsByClassName("b12").length; e++)
{
    document.getElementsByClassName("b12")[e].style.backgroundColor = "white";
}

for(var c = 0; c < arr12.length; c++)
{
    for(var d = 0; d < document.getElementsByClassName("b12").length; d++)
    {
        if(arr12[c] === d)
        {
            document.getElementsByClassName("b12")[d].style.backgroundColor = "yellow";
        }
    }
}
/*******************************12*************************************/
}

function h1Color()
{
    if(hColor >= arrColor.length)
    {
        hColor = 0;
    }

    document.getElementsByTagName("h1")[0].style.color = arrColor[hColor];
    hColor++;

    setTimeout("h1Color()", 1000 * 0.2);
}