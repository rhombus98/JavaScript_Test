/*window.onload = function()
{
	document.getElementsByTagName("button")[0].onclick = function()
	{
		if(document.getElementsByTagName("input")[0].value === "")
		{
			alert("アカウントは必ずある！");
		}
		else
		{
			if(document.getElementsByTagName("input")[1].value !== "")
			{
				if(document.getElementsByTagName("input")[2].value === document.getElementsByTagName("input")[1].value)
				{
					alert("ようこそ！");
				}
				else
				{
				alert("残念ながら、再提出！");
				}
			}
			
		}
		
		
	}
}*/

/*window.onlad = function(){
	var imgs = document.getElementsByTagName("img");
	
	for(var i = 0; i < imgs.length ; i++)
	{
		imgs[i].onclick = function(){
			this.style.borderRadius="100px";
		};
	}
}*/

/*window.onload = function()
{
	var btns = document.getElementsByTagName("button");

	for(var i = 0; i < btns.length; i++)
	{
		btns[i].innerHTML = "クリックする";
		btns[i].onclick = function()
		{
			document.getElementsByTagName("body")[0].style.backgroundColor = "#ccc";
		}
	}
	
}*/

/*window.onload = function()
{
	var btns = document.getElementsByTagName("button");

	for(var i = 0; i < btns.length; i++)
	{
		btns[i].onclick = function()
		{
			if(this.innerHTML === "红色")
			{
				document.getElementsByTagName("body")[0].style.backgroundColor = "red";
			}

			if(this.innerHTML === "黄色")
			{
				document.getElementsByTagName("body")[0].style.backgroundColor = "yellow";
			}

			if(this.innerHTML === "绿色")
			{
				document.getElementsByTagName("body")[0].style.backgroundColor = "green";
			}

			if(this.innerHTML === "翠绿")
			{
				document.getElementsByTagName("body")[0].style.backgroundColor = "lime";
			}
		}
	}
}*/

/*window.onload = function()
{
	var btns = document.getElementsByTagName("button");
	var inputs = document.getElementsByTagName("input");

	
	for(var i = 0; i < btns.length; i++)
	{
		btns[i].onclick = function()
		{
			if(this.innerHTML === "すべて")
			{
				for(var j = 0; j < inputs.length; j++)
				{
				inputs[j].checked = true;
				}
			}

			if(this.innerHTML === "逆する")
			{
				for(var j = 0; j < inputs.length; j++)
				{
				inputs[j].checked = !(inputs[j].checked);
				}
		}

			if(this.innerHTML === "キャンセル")
			{
				for(var j = 0; j < inputs.length; j++)
				{
				inputs[j].checked = false;
				}
		}
		}
		
	}
}*/

/*window.onload = function()
{
	var imgs = document.getElementsByTagName("img");

	for(var i = 1; i < imgs.length; i++)
	{
		imgs[i].onclick = function()
		{
			if(this.src === imgs[0].src)
			{
				alert("もう選ばれたんよ！");
			}
			else
			{
				document.getElementsByTagName("img")[0].src = this.src;
			}
		}
	}
}*/

/*window.onload = function()
{
	var btns = document.getElementsByTagName("button");

	for(var i = 0; i < btns.length; i++)
	{
		btns[i].onclick = function()
		{
			if(this.innerHTML === "边框")
			{
				document.getElementsByTagName("ul")[0].style.border = "2px red solid";
			}

			if(this.innerHTML === "取消边框")
			{
				document.getElementsByTagName("ul")[0].style.border = "none";
			}

			if(this.innerHTML === "文字颜色")
			{
				document.getElementsByTagName("ul")[0].style.color = "lime";
			}

			if(this.innerHTML === "背景颜色")
			{
				document.getElementsByTagName("ul")[0].style.backgroundColor = "#ccc";
			}
		}
	}
}*/

/*function d()
{
	var date = new Date();

	var year = date.getFullYear();

	var month = date.getMonth() + 1;
	if(month < 10)
	{
		month += "0";
	}

	var day = date.getDate();
	if(date < 10)
	{
		date += "o";
	}

	var hour = date.getHours();
	if(hour < 10)
	{
		hour += "0";
	}

	var min = date.getMinutes();
	if(min < 10)
	{
		min += "0";
	}

	var sec = date.getSeconds();
	if(sec < 10)
	{
		sec += "0";
	}

	document.getElementsByTagName("p")[0].innerHTML = year + "-" + month + "-" + day +"  " + hour + ":" + min + ":" + sec;

	setTimeout("d()", 1000 * 1);
}*/

/*window.onload = function()
{
	d();
}


function d()
{
	var sec = document.getElementsByTagName("p");

	if(sec[0].innerHTML > 0)
	{
		sec[0].innerHTML -= 1;
	}
	else
	{
		document.getElementsByTagName("body")[0].style.backgroundColor = "#ccc";
	}

	setTimeout("d()", 1000 * 1);
}
*/
/*var index = 0;

var imgArr = new Array("images/1.jpg", "images/2.jpg", "images/3.jpg", "images/4.jpg");

//var imgArr = new Array("red", "lime", "pink", "blue");

window.onload = function()
{	
	d();
}*/

/*function imgChange()
{
	var imgSrc = document.getElementsByTagName("img")[0].src;

	var imgArr = ["images/1.jpg", "images/2.jpg", "images/3.jpg", "images/4.jpg"];

	if(index >= imgArr.length)
	{
		index = 0;
	}
	else{
		index++;
	}

	document.getElementsByTagName("img")[0].src = imgArr[index];

	setTimeout("imgChange()", 1000 * 1);
}*/

/*function d()
{
	if(index >= imgArr.length)
	{
		index = 0;
	}
	else
	{
		document.getElementsByTagName("body")[0].style.backgroundColor = imgArr[index];
		index++;
	}

	
	
	setTimeout("d()", 1000 * 0.5);
}*/

/*function d()
{
	if(index >= imgArr.length)
	{
		index = 0;
	}
		
	for(var j = 0; j < document.getElementsByTagName("button").length; j++)
	{
		if(j === index)
		{
			document.getElementsByTagName("img")[0].src = imgArr[index];
		
			document.getElementsByTagName("button")[j].style.color = "red";
		}
		else
		{
			document.getElementsByTagName("button")[j].style.color = "black";
		}
	}		

	index++;
	
	setTimeout("d()", 1000 * 1);
}*/

/*var arr0 = new Array("a", "b", "c", "d");

var arr1 = new Array(1, 2, 3, 4);

var arr2 = new Array(0.1, 0.2, 0.3, 0.4);*/

/*for(var i = 0; i < arr1.length; i++)
{
	alert(arr1[i]);
}*/

/*
index = parseInt((Math.random() * arr0.length));

alert(index);*/

//var imgs = new Array("images/1.jpg", "images/2.jpg", "images/3.jpg", "images/4.jpg");

//var imgs = new Array("images/1.jpg", "images/2.jpg", "images/3.jpg", "images/4.jpg");
//var titles = new Array("0", "1", "2", "3");
//var classNames = new Array("img0", "img1", "img2", "img3");

//window.onload = function()
//{
	/*var arr = new Array("john", "kim", "amy", "bobs");

	var len = arr.length;

	//alert(len);

	var index = parseInt(Math.random() * len);

	alert(arr[index] + "NMSL!");*/

	
	
	//var imgs = new Array("images/1.jpg", "images/2.jpg", "images/3.jpg", "images/4.jpg");

	//var i = parseInt(Math.random() * imgs.length);

	//document.getElementsByTagName("img")[0].src = imgs[i];

	//changeImg();

	/*var img0 = document.createElement("img");
	var img1 = document.createElement("img");

	img0.src = "images/1.jpg";
	img0.className = "img0";
	img0.title = "你再点！";

	img1.src = "images/2.jpg";
	img1.className = "img1";
	img1.title = "你再点！";

	var bd = document.getElementsByTagName("body")[0];

	bd.appendChild(img0);
	bd.appendChild(img1);
	*/

	/*var bd = document.getElementsByTagName("body")[0]
	
	for(var i = 0; i < 4; i++)
	{
		bd.appendChild(document.createElement("img"));
		document.getElementsByTagName("img")[i].src = imgs[i];
		document.getElementsByTagName("img")[i].title = titles[i];
		document.getElementsByTagName("img")[i].className = classNames[i];
		document.getElementsByTagName("img")[i].style.marginLeft = "10px";
	}*/
//}

/*function changeImg()
{
	var i = parseInt(Math.random() * imgs.length);

	document.getElementsByTagName("img")[0].src = imgs[i];

	setTimeout("changeImg()", 1000 * 1);
}*/

window.onload = function()
{
	var d1 = document.getElementById("div1");
	for(var i = 1; i <= 33; i++)
	{
		var btns1 = document.createElement("button");
		btns1.innerHTML = i;
		btns1.className = "btn1";

		d1.appendChild(btns1);
	}

	var d2 = document.getElementById("div2");
	for(var i = 1; i <= 16; i++)
	{
		var btns2 = document.createElement("button");
		btns2.innerHTML = i;
		btns2.className = "btn2";

		d2.appendChild(btns2);
	}
}

function select()
{
	var number1 = parseInt((Math.random() * 16));

	var btnsB = document.getElementsByClassName("btn2");

	for(var i = 0; i < btnsB.length; i++)
	{
		if(number1 === i)
		{
			btnsB[i].style.backgroundColor = "yellow";
			btnsB[i].style.color = "black";
			btnsB[i].style.border = "1px green solid";
		}
	}

	var btnsR = document.getElementsByClassName("btn1");
	for(var j = 0; j < 6; j++)
	{
		var number2 = parseInt(Math.random() * 33);
		for(var k = 0 ; k < btnsR.length; k++)
		{
			if(k === number2)
			{
				btnsR[k].style.backgroundColor = "yellow";
				btnsR[k].style.color = "black";
				btnsR[k].style.border = "1px green solid";
			}
		}
	}
}