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

function onMouseDown()
{
    var passWord = document.getElementById("password");
    var text = document.getElementById("text");

    var valuePass = passWord.value;
    text.value = valuePass;
    passWord.style.display = "none";
    text.style.display = "inline";

    document.getElementById("b0").innerHTML = "隠す";
}

function onMouseUp()
{
    var passWord = document.getElementById("password");
    var text = document.getElementById("text");

    var valueText = text.value;
    passWord.value = valueText;
    text.style.display = "none";
    passWord.style.display = "inline";

    document.getElementById("b0").innerHTML = "示す";
}