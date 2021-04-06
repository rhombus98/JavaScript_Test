/*function weight()
{
	document.getElementById("p1").style.fontWeight="700";
}

function italic()
{
	document.getElementById("p1").style.fontStyle="italic";
}

function underline()
{
	document.getElementById("p1").style.textDecoration="underline";
}

function bodyColor()
{
	var color = document.getElementById("input2");
	document.getElementById("b1").style.backgroundColor=color.value;
	alert("修改背景颜色成功!");
}

function color()
{
	document.getElementById("p1").style.color = document.getElementById("input1").value;
	alert("修改字体颜色成功!");
}

function changeImage(btn)
{
	document.getElementById("img1").src = btn.src;
	alert("修改头像成功!");
}

function color1()
{
	document.getElementById("p1").className="p1";
}

function image1()
{
	document.getElementById("img333").className="img444";
}

function image2()
{
	document.getElementById("img123").className="img321";
}*/

/*window.onload = function()
{
	var btns = document.getElementsByTagName("button");
	btns[0].onclick = function()
	{
		alert("TEST!");
		btns[0].style.color = "red";
	}
}*/

window.onload = function()
{
	var btns = document.getElementsByTagName("button");
	btns[0].onmouseover = function()
	{
		document.getElementById("p").className="font1";
	}
	
	btns[1].onmouseover = function()
	{
		document.getElementById("p").className="font2";
	}
}