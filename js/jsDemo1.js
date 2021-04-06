window.onload = function()
{
    var d0 = document.getElementById("d0");

    for(var i = 1; i <= 3; i++)
    {
        var btn = document.createElement("button");
        btn.innerHTML = 0;
        btn.className = "btn"
        d0.appendChild(btn);
    }
}

function select()
{
    for(var k = 0; k < document.getElementsByClassName("btn").length; k++)
    {
        document.getElementsByTagName("button")[k].innerHTML = parseInt(Math.random() * 10);;
    }
}

