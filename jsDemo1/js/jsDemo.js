/*function change()
{
	document.getElementById("d1").className="d1";
}

function img(btn)
{
	document.getElementById("img").src = btn.src;
	document.getElementById("d1").style.visibility="hidden";
}*/

/*function visible()
{
	document.getElementById("p1").style.visibility="visible";
}

function hidden()
{
	document.getElementById("p1").style.visibility="hidden";
}*/

/*function change(btn)
{
	if(btn.id === "d1")
	{
		document.getElementById(btn.id + "-1").style.visibility="visible";
		document.getElementById(btn.id).style.visibility="hidden";
	}
	
	if(btn.id === "d2")
	{
		document.getElementById(btn.id + "-1").style.visibility="visible";
		document.getElementById(btn.id).style.visibility="hidden";
	}
	
	if(btn.id === "d3")
	{
		document.getElementById(btn.id + "-1").style.visibility="visible";
		document.getElementById(btn.id).style.visibility="hidden";
	}
	
	if(btn.id === "d4")
	{
		document.getElementById(btn.id + "-1").style.visibility="visible";
		document.getElementById(btn.id).style.visibility="hidden";
	}
	
	if(btn.id === "d1-1")
	{
		document.getElementById("d1").style.visibility="visible";
		document.getElementById(btn.id).style.visibility="hidden";
	}
	
	if(btn.id === "d2-1")
	{
		document.getElementById("d2").style.visibility="visible";
		document.getElementById(btn.id).style.visibility="hidden";
	}
	
	if(btn.id === "d3-1")
	{
		document.getElementById("d3").style.visibility="visible";
		document.getElementById(btn.id).style.visibility="hidden";
	}
	
	if(btn.id === "d4-1")
	{
		document.getElementById("d4").style.visibility="visible";
		document.getElementById(btn.id).style.visibility="hidden";
	}
}*/

/*window.onload = function()
{
	var temp = true;
	
	var lis = document.getElementsByTagName("li");
	
	lis[0].onclick = function(){
		if(temp === true)
		{
			document.getElementById("li1").style.display = "block";
			temp = false;
		}
		else
		{
			document.getElementById("li1").style.display = "none";
			temp = true;
		}
	}
	
	lis[6].onclick = function(){
		if(temp === true)
		{
			document.getElementById("li2").style.display = "block";
			temp = false;
		}
		else
		{
			document.getElementById("li2").style.display = "none";
			temp = true;
		}
	}
	
	lis[12].onclick = function(){
		if(temp === true)
		{
			document.getElementById("li3").style.display = "block";
			temp = false;
		}
		else
		{
			document.getElementById("li3").style.display = "none";
			temp = true;
		}
	}
}
*/
/*window.onload = function()
{
	var btns = document.getElementsByTagName("button");
	
	btns[0].onclick = function(){
		document.getElementById("img1").style.border = "3px gray solid";
	}
	
	btns[1].onclick = function(){
		document.getElementById("img2").style.border = "20px red solid";
	}
	
	btns[2].onclick = function(){
		document.getElementById("img3").style.border = "5px lime solid";
	}
	
	btns[3].onclick = function(){
		document.getElementById("img4").style.border = "4px yellow solid";
	}
}*/

/*window.onload = function()
{
	var img = document.getElementsByTagName("img");
	
	var temp = 0;
	
	img[0].onclick = function()
	{
		if(temp === 0)
		{
			this.style.border = "10px red solid";
			temp = 1;
		}
		
		else if(temp === 1)
		{
			this.style.border = "5px yellow dashed";
			temp = 2;
		}
		
		else if(temp === 2)
		{
			this.style.border = "10px blue double";
			temp = 3;
		}
		
		else if(temp === 3)
		{
			this.style.border = "50px purple dashed";
			temp = 0;
		}
		
	}
}
*/

window.onload = function()
{
	var temp = true;
	
	document.getElementsByTagName("button")[0].onclick = function()
	{
		if(temp === true)
		{
			document.getElementsByTagName("div")[0].style.visibility = "hidden";
			this.innerHTML = "現す";
			temp = false;
		}
		else
		{
			document.getElementsByTagName("div")[0].style.visibility = "visible";
			this.innerHTML = "隠す";
			temp = true;
		}
	}	
	
		
}
