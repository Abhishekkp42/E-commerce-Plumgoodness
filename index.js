document.getElementById("msearch").addEventListener("click",stog);
function stog(el){
    var sr=document.querySelector(".hsc");
    if(sr.style.visibility == "hidden"||sr.style.visibility == ""){
        sr.style.visibility = "visible";
        sr.style.display = "block";
        document.querySelector("#clickSerach").style.height="auto"
    }
    else{sr.style.visibility = "hidden";
    document.querySelector("#clickSerach").style.height="0px"
}
}


// slider
var i=0;
var img_slide=["url(./image/1.webp)","url(./image/2.webp)","url(./image/3.webp)","url(./image/4.webp)"];
var img_slide_bg=["url(./image/1.jpg)","url(./image/2.jpg)","url(./image/3.jpg)","url(./image/4.jpg)"];
var slide=document.querySelector("#f1")
if(screen.width>767)
slide.style.backgroundImage=img_slide_bg[i];
else
slide.style.backgroundImage=img_slide[i];
document.querySelector(".left-button").addEventListener("click",slideleft);
document.querySelector(".right-button").addEventListener("click",slideright);
function slideleft(){
    if(screen.width>767){
        if(i==0)
    slide.style.backgroundImage=img_slide_bg[i=3];
    else
    slide.style.backgroundImage=img_slide_bg[--i];
    }else{
    if(i==0)
    slide.style.backgroundImage=img_slide[i=3];
    else
    slide.style.backgroundImage=img_slide[--i];
    }
}
function slideright(){
    if(screen.width>767){
        if(i==3)
    slide.style.backgroundImage=img_slide_bg[i=0];
    else
    slide.style.backgroundImage=img_slide_bg[++i];
    }else{
    if(i==3)
    slide.style.backgroundImage=img_slide[i=0];
    else
    slide.style.backgroundImage=img_slide[++i];
    }
}


// ather lider
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
  if(slideIndex-2<0)
  x[x.length-1].style.display = "block";
  else
  x[slideIndex-2].style.display = "block";
}