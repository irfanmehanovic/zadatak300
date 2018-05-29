var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "block";  
}


function results(event) 
{
	event.preventDefault();

var formm = document.getElementById('myForm').style.display = "none";
var divv = document.getElementById('results').style.display = "block";

	var name = document.getElementById("name").value;
	var last_name = document.getElementById("lastname").value;
	var results = document.getElementById("results");
	results.innerText = "\n\n\n\nDobrodošao:\n" + name + " " + last_name + "!";
}
