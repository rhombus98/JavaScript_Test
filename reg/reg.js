window.onload = function()
{
    for(var i = 0; i < 9; i++)
    {
        var btn = document.createElement("button");
        btn.style.marginLeft = "5px";
        btn.style.width = "15px";
        btn.style.height = "15px";
        btn.style.borderRadius = "15px";
        btn.style.border = "none";
        document.getElementsByTagName("p")[1].appendChild(btn);
    }
}

function onFocusMail()
{
   (document.getElementById("mail")).style.border = "1px blue solid";
}

function onBlurMail()
{
    (document.getElementById("mail")).style.border = "none";
}

function onFocusPass()
{
   (document.getElementById("password")).style.border = "1px blue solid";
}

function onBlurPass()
{
    (document.getElementById("password")).style.border = "none";
}

function onkeyupMail(t)
{
    document.getElementsByTagName("p")[0].innerHTML = "";

    if(t.value.length <= 3)
    {
        document.getElementsByTagName("p")[0].innerHTML = "長さはせめて３";
        document.getElementsByTagName("p")[0].style.color = "red";
    }
    else
    {
        document.getElementsByTagName("p")[0].innerHTML = "できた";
    }
}

function onkeyupPass(t)
{
    var btns = document.getElementsByTagName("button");

    for(var k = 0; k < btns.length; k++)
    {
        btns[k].style.backgroundColor = "";
    }

    if(t.value.length > 0 && t.value.length <=4)
    {
        for(var i = 0; i < 3; i++)
        {
            btns[i].style.backgroundColor = "purple";
        }
    }
    else if(t.value.length > 4 && t.value.length <= 8)
    {
        for(var j = 0; j < 6; j++)
        {
            btns[j].style.backgroundColor = "yellow";
        }
    }
    else if(t.value.length > 8)
    {
        for(var m = 0; m < 9; m++)
        {
            btns[m].style.backgroundColor = "red";
        }
    }
}

function checkPassWord()
{
    value0 = document.getElementById("password").value;
    value1 = document.getElementById("password1").value;

    if(value0 === value1)
    {
        alert("ようこそ、登録した！");
    }
    else
    {
        alert("パスワード誤った、ちゃんとして");
    }
}