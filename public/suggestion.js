
//This will be an array with the routes for the fonts. The index of the font will act as an id
var xhttp = new XMLHttpRequest();
var font1_id;
var font2_id;

var fonts = [
	"Anton-Regular.ttf",
	"CormorantUnicase-Regular.ttf",
	"IndieFlower.ttf",
	"JosefinSans-Regular.ttf",
	"NotoSans-Regular.ttf",
	"Pacifico-Regular.ttf"
];

var font1_id;
var font2_id;

newSuggestion();

function newSuggestion(){
	xhttp.open("GET", "localhost:8080/suggestion");
	xhttp.send();
	location.reload();
}

function trainNN(input1,input2,target){
	xhttp.open("GET", "http://b744a7c5.ngrok.io/train?font1=" + font1_id + "&font2=" + font2_id +"&target=" + target);
	xhttp.send();
	location.reload();
}

function like(){
	trainNN(font1_id,font2_id,1);
}

function noLike(){
	trainNN(font1_id,font2_id,0);
}

function newCombo(){
	document.getElementById("font1").innerHTML = "Font 1: " + fonts[font1_id];
	document.getElementById("font2").innerHTML = "Font 2: " + fonts[font2_id];
	document.write('<style id="dynamic_style">');
	document.write("@font-face { font-family: font1; src: url("+ fonts[font1_id] +");}");
	document.write("@font-face { font-family: font2; src: url("+ fonts[font2_id] +");}");
	document.write("#Title{font-family: font1;}");
	document.write("#Paragraph{font-family: font2;}");
	document.write("#font1{font-family:font1;}");
	document.write("#font2{font-family:font2;}");
	document.write("</style>");
}
