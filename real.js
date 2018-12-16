//clock
function startTime() {
var today = new Date();
var h = today.getHours();
var m = today.getMinutes();
var s = today.getSeconds();
m = checkTime(m);
s = checkTime(s);
document.getElementById('txt').innerHTML =
h + ":" + m + ":" + s;
var t = setTimeout(startTime, 500);
}
function checkTime(i) {
if (i < 10) {i = "0" + i};
return i;
}

//pricecalculator
var total = 0;
var foodTotal = 0;

function foodPrice(){
  total =  foodTotal;
  $("#price").text(total.toFixed(2));
}

$(".setup-costs").click(function(){
  if($(this).is(".setup-costs:checked")){
    foodTotal += parseInt($(this).val(), 10);
  }
  else{
    foodTotal -= parseInt($(this).val(), 10);
  }
  foodPrice();
});

//promotionslide
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

//display MENU

filterSelection("all")
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("column");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
  }
}

function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}

var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function(){
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

//maps

function initMap() {
 var melawati = {lat: 3.210577, lng: 101.748695};
 var one = {lat: 3.150233, lng: 101.61669000000006};
 var angsana = {lat: 1.4959548, lng: 103.70629429999997};
 var paradigm = {lat: 1.515891, lng: 103.685471};
 var aman = {lat: 6.171640, lng: 100.516250};
 var sunway = {lat: 3.225590, lng: 101.556130};

 var map = new google.maps.Map(
 document.getElementById('map'), {zoom: 10, center: melawati});
 var marker = new google.maps.Marker({position: melawati, map: map, title :'Melawati Mall'});
 var marker = new google.maps.Marker({position: one, map: map, title :'One Utama Mall'});
 var marker = new google.maps.Marker({position: angsana, map: map, title : 'Angsana Mall'});
 var marker = new google.maps.Marker({position: paradigm, map: map, title : 'paradigm Mall'});
 var marker = new google.maps.Marker({position: aman, map: map, title : 'Aman Central Mall'});
 var marker = new google.maps.Marker({position: sunway, map: map, title : 'Sunway Putra Mall'});
}
