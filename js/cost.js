function myfun(){

var country = document.getElementById("countryname").value;
var pass = document.getElementById("person").value;

	
switch(country)
{
case "Kashmir": 
var Pak = 58000 * Number(pass);
document.getElementById("demo").innerHTML=  "Rs. <b> "+Pak+"/=";
break;

case "Isl": 
var Pak = 69000 * Number(pass);
document.getElementById("demo").innerHTML=  "Rs. <b> "+Pak+"/=";
break;

case "Muree": 
var Pak = 94000 * Number(pass);
document.getElementById("demo").innerHTML=  "Rs. <b> "+Pak+"/=";
break;

case "Lahore": 
var Pak = 49000 * Number(pass);
document.getElementById("demo").innerHTML=  "Rs. <b> "+Pak+"/=";
break;

case "Pesha": 
var Pak = 44000 * Number(pass);
document.getElementById("demo").innerHTML=  "Rs. <b> "+Pak+"/=";
break;


case "Quett": 
var Pak = 28000 * Number(pass);
document.getElementById("demo").innerHTML=  "Rs. <b> "+Pak+"/=";
break;

case "Multan": 
var Pak = 52000 * Number(pass);
document.getElementById("demo").innerHTML=  "Rs. <b> "+Pak+"/=";
break;

case "Gilg": 
var Pak = 65000 * Number(pass);
document.getElementById("demo").innerHTML=  "Rs. <b> "+Pak+"/=";
break;

case "Naran": 
var Pak = 38000 * Number(pass);
document.getElementById("demo").innerHTML=  "Rs. <b> "+Pak+"/=";
break;

case "Hydra": 
var Pak = 46000 * Number(pass);
document.getElementById("demo").innerHTML=  "Rs. <b> "+Pak+"/=";
break;

case "Skar": 
var Pak = 56000 * Number(pass);
document.getElementById("demo").innerHTML=  "Rs. <b> "+Pak+"/=";
break;

default:
document.getElementById("demo").innerHTML = "incorrect Operator";
}
}