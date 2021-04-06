/*
var lis = document.getElementsByTagName("li");

window.onload = function()
{
	for(var i = 0; i < lis.length; i++)
	{
		lis[i].onmouseover = function()
		{
			this.style.backgroundColor = "lime";
		}
	}

	for(var i = 0; i < lis.length; i++)
	{
		lis[i].onmouseout = function()
		{
			this.style.backgroundColor = "bisque";
		}
	}
}
*/

window.onload = function()
{
	var pass = document.getElementById("pass");
	var text = document.getElementById("text");

	document.getElementsByTagName("button")[0].onmousedown = function()
	{
		var input = pass.value;
		text.value = input;

		pass.style.display = "none";
		text.style.display = "inline";

		document.getElementsByTagName("button")[0].innerHTML = "隠す"
	}

	document.getElementsByTagName("button")[0].onmouseup = function()
	{
		pass.style.display = "inline";
		text.style.display = "none";

		document.getElementsByTagName("button")[0].innerHTML = "示す";
	}


	
}

/*
function passCheck(t)
	{
		var span = document.getElementsByTagName("span")[0];
		if(t.value.length > 0 && t.value.length <= 6)
		{
			span.innerHTML = "弱い";
			span.style.color = "lime";
			var btns = document.getElementsByClassName("b0")
			for(var i = 0 ; i < 2; i++)
			{
				btns[i].style.backgroundColor = "lime";
			}
		}

		if(t.value.length > 6 && t.value.length <= 12)
		{
			span.innerHTML = "まあまあ";
			span.style.color = "yellow";
			var btns = document.getElementsByClassName("b0")
			for(var i = 0 ; i < 4; i++)
			{
				btns[i].style.backgroundColor = "yellow";
			}
		}

		if(t.value.length > 12)
		{
			span.innerHTML = "強い";
			span.style.color = "blue";
			var btns = document.getElementsByClassName("b0")
			for(var i = 0 ; i < 6; i++)
			{
				btns[i].style.backgroundColor = "blue";
			}
		}
	}
	*/
/*var time;

function down()
{
	var div = document.getElementById("d0");

	div.innerHTML =  "";

	var num = parseInt(Math.random() * 900 + 100);

	div.innerHTML = num;

	time = setTimeout("down()", 1000 * 0.5);
}

function clear()
{
		clearTimeout(time);
}
*/

function checkName(t)
{
	var span = document.getElementsByTagName("span")[0];

	span.innerHTML = "";

	if(t.value.length <= 6)
	{
		span.innerHTML = "長さがせめて７";
	}
	else if(t.value.length > 6)
	{
		span.innerHTML = "よくできました"
	}
	else if(t.value.length >= 12)
	{
		t.disabled = "true";
	}
}

function onFocus()
{
	var inputName = document.getElementById("name");

	inputName.style.border = "1px blue solid";
}

function onBlur()
{
	var inputName = document.getElementById("name");

	inputName.style.border = "none";
}