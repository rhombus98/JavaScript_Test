/**************************************双色球问题*******************************************/
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
    //blue
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
		else
		{
			btnsB[i].style.backgroundColor = "blue";
			btnsB[i].style.color = "white";
			btnsB[i].style.border = "none";
		}
	}


    //red
	var btnsR = document.getElementsByClassName("btn1");
	for(var n = 0; n < btnsR.length; n++)
	{
		btnsR[n].style.backgroundColor = "red";
		btnsR[n].style.color = "white";
		btnsR[n].style.border = "none";
	}

	var randomArr = new Array(-1, -1, -1, -1, -1, -1);
	label:for(var m = 0; m < randomArr.length; m++)
	{
		var random = parseInt(Math.random() * 33);
		for(var t = 0; t < randomArr.length; t++)
		{
			if(random === randomArr[t])
			{
				m--;
				continue label;
			}
		}

		randomArr[m] = random;
	}

	for(var g = 0; g < randomArr.length; g++)
	{
		for(var e = 0; e < btnsR.length; e++)
		{
			if(randomArr[g] === e)
			{
				btnsR[e].style.backgroundColor = "yellow";
				btnsR[e].style.color = "black";
				btnsR[e].style.border = "1px green solid";
			}
		}
	}
}
/************************************双色球问题**********************************************/
