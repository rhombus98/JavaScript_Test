	
	/*document.getElementsByTagName("img")[0].onclick = function()
	{
		if(0 === event.button)
		{
			alert("!!!!");
		}
	}

	/*document.getElementsByTagName("img")[0].onmousedown = function()
	{
		alert("押された");
	}*/

	/*document.getElementsByTagName("img")[0].onmouseup = function()
	{
		alert("飛んだ");
	}*/
	/*document.getElementsByTagName("div")[0].onmousemove = function()
	{
		var x = event.clientX;
		var y = event.clientY;

		var btn = document.getElementsByTagName("button")[0];
		btn.style.marginLeft = x + "px";
		btn.style.marginTop = y + "px";
	}*/
	//document.getElementsByTagName("input")[0].value = "aaaaaaaa";

/*function test0(t)
{
	t.style.border = "1px solid red";
	t.style.color = "blue";
}*/

/*function test1(t)
{
	t.style.border = "1px solid black";
	t.style.color = "#ccc";
}*/

/*function changeImg(t)
{
	document.getElementsByTagName("img")[0].src = t.value;
}*/

//var d = 0;
//var s = 0;

//function keyup(t)
/*{
	/*var len = t.value.length;

	if(len === 10)
	{
		t.disabled = true;
	}

	document.getElementsByTagName("span")[0].innerHTML = len;
	*/
	/*if(event.keyCode === 68)
	{
		d++;
		document.getElementsByTagName("span")[0].style.marginLeft = d + "px";
	}

	if(event.keyCode === 65)
	{
		d--;
		document.getElementsByTagName("span")[0].style.marginLeft = d + "px";
	}

	if(event.keyCode === 83)
	{
		s++;
		document.getElementsByTagName("span")[0].style.marginTop = s + "px";
	}

	if(event.keyCode === 87)
	{
		s--;
		document.getElementsByTagName("span")[0].style.marginTop = s + "px";
	}
}*/

/*
var sheng = new Array("四川", "云南", "贵州", "广西");
var sichuang = new Array("成都", "南充", "遂宁", "乐山");
var yunnan = new Array("丽江", "普洱");
var chengdu = new Array("成华区", "青羊区", "武侯区");

function city()
{
	var s0 = document.createElement("select");
	var city = document.createElement("select");
	var qu = document.createElement("select");
	

	for(var m = 0; m < sheng.length; m++)
	{
		opt = document.createElement("option");
		opt.innerHTML = sheng[m];
		s0.appendChild(opt);
	}
	

	s0.onchange = function()
	{
		city.innerHTML = "";

		if(this.value === "四川")
		{
			for(var k = 0; k < sichuang.length; k++)
			{
				var opts = document.createElement("option");
				opts.innerHTML = sichuang[k];
				city.appendChild(opts);
			}
		}
	}
	for(var k = 0; k < sichuang.length; k++)
			{
				var opts = document.createElement("option");
				opts.innerHTML = sichuang[k];
				city.appendChild(opts);
			}


	city.onchange = function()
	{
		qu.innerHTML = "";

		if(this.value === "成都")
		{
			for(var k = 0; k < chengdu.length; k++)
			{
				var opts1 = document.createElement("option");
				opts1.innerHTML = chengdu[k];
				qu.appendChild(opts1);
			}
		}
	}
	for(var k = 0; k < chengdu.length; k++)
			{
				var opts1 = document.createElement("option");
				opts1.innerHTML = chengdu[k];
				qu.appendChild(opts1);
			}
	
	
	document.getElementsByTagName("body")[0].appendChild(s0);
	document.getElementsByTagName("body")[0].appendChild(city);
	document.getElementsByTagName("body")[0].appendChild(qu);
}
*/

/*function change0(t)
{
	t.style.color = "blue";
	t.style.paddingLeft = "5px";
}

function change1(t)
{
	t.style.color = "#ccc";
	if(t.value.length >= 6 && t.value.length <=10)
	{
		document.getElementsByTagName("span")[0].style.color = "lime";
		document.getElementsByTagName("span")[0].innerHTML = "合格"
		
	}
	else
	{
		document.getElementsByTagName("span")[0].style.color = "red";
		document.getElementsByTagName("span")[0].innerHTML = "不合格"
	}
	
	document.getElementsByTagName("input")[0].style.paddingLeft = "0";
}
*/
var divs = document.getElementsByClassName("d1");

function hiddenDivs()
{
	for(var i = 0; i < divs.length; i++)
	{
		divs[i].style.visibility = "hidden";
	}
}

function vis()
{
	for(var i = 0; i < divs.length; i++)
	{
		divs[i].style.visibility = "visible";
	}
}