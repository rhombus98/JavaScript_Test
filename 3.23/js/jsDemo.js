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

window.onload = function()
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
}