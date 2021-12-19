window.addEventListener('resize', reportWindowSize);
var cart = JSON.parse(localStorage.getItem("cartItems")) || [];
document.querySelector("#cart").innerHTML=cart.length;
var comment = document.querySelectorAll(".comment");




const videoData=[
  {
    src:"https://cdn1.fireworktv.com/medias/2021/8/26/1629965988-bhkljcui/watermarked/540/130SEC_Firework_HAGelAd.mp4",
    poster:"https://cdn1.fireworktv.com/medias/2021/8/26/1629965992-nupdybkv/540_960/1HAHacks.jpg"
  },
  {
    src:"https://cdn1.fireworktv.com/medias/2021/8/26/1629965709-pxwmgced/watermarked/540/GTOFMInfluencerFirework.mp4",
    poster:"https://cdn1.fireworktv.com/medias/2021/8/26/1629965716-exlijhgw/540_960/2GTOFM.jpg"
  },
  {
    src:"https://cdn1.fireworktv.com/medias/2021/8/30/1630297499-tarsjcep/watermarked/540/BodyMists.mp4",
    poster:"https://cdn1.fireworktv.com/medias/2021/8/30/1630297561-qczsmanj/540_960/BodyMiststhumbnail.jpg"
  },
  {
    src:"https://cdn1.fireworktv.com/medias/2021/8/26/1629954283-lmhfxczr/watermarked/540/GlowingSkinRoutineFirework.mp4",
    poster:"https://cdn1.fireworktv.com/medias/2021/8/26/1629954337-laeztcbd/540_960/GT-skin-regime-cover.jpg"
  },
  {
    src:"https://cdn1.fireworktv.com/medias/2021/12/8/1638955495-wyjsuozq/watermarked/540/25sec_GSSB_VerticalFWTV1.mp4",
    poster:"https://cdn1.fireworktv.com/medias/2021/12/8/1638955495-wyjsuozq/transcoded/25sec_GSSB_VerticalFWTV1-540-0.jpg"
  }
];
const vidCon=document.querySelector("#video-grid");



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


var prodData= [
  {
    img:"https://cdn.shopify.com/s/files/1/0390/2985/products/01_WBG_RETINOL_SERUM_20ml_dede3213-fc9c-41c2-889b-3840973e5ff8_400x.jpg",
    title:"Tea Tree Dandruff Control Shampoo",
    price:300
  },
  {
    img:"https://cdn.shopify.com/s/files/1/0390/2985/products/Conditioner_Front_400x.jpg",
    title:"Tea Tree Dandruff Control Shampoo",
    price:350
  },
  {
    img:"https://cdn.shopify.com/s/files/1/0390/2985/products/ScalpSerum_Front_400x.jpg",
    title:"Tea Tree Dandruff Control Shampoo",
    price:600
  },
  {
    img:"https://cdn.shopify.com/s/files/1/0390/2985/products/WBG_Front_400x.jpg",
    title:"Tea Tree Dandruff Control Shampoo",
    price:750
  },
  {
    img:"https://cdn.shopify.com/s/files/1/0390/2985/products/01_NS_LISTING-15ML_b12244f6-28e7-4dcb-a0b4-ed542f538271_400x.jpg",
    title:"Tea Tree Dandruff Control Shampoo",
    price:399
  }
];
const bestSeller=document.querySelector("#best-seller");
const whatsnew=document.querySelector("#whatsnew");
showData(bestSeller,prodData);
showData(whatsnew,prodData);
function showData(el,data){
  el.innerHTML="";
  var size=Math.floor(screen.width/270);
  data=data.slice(0,size);
  data.map((pr)=>{
  var div=document.createElement("div");
  div.setAttribute("class","p-card");
  var img=document.createElement("img");
  img.setAttribute("src",pr.img);
  var h2=document.createElement("h2");
  h2.innerHTML=pr.title;
  var hr=document.createElement("hr");
  var p=document.createElement("p");
  p.innerHTML="₹ "+pr.price;
  var p2=document.createElement("p");
  p2.innerHTML='<span class="fa fa-star"></span><span class="fa fa-star"></span><span class="fa fa-star"></span><span class="fa fa-star"></span><span class="fa fa-star"></span>';
  var button=document.createElement("button");
  button.innerHTML="add to cart";
  button.addEventListener("click", function () {
    console.log(pr);
    addToCart(pr);
});
  div.append(img,h2,hr,p,p2,button);
  el.append(div);
  });
}

function reportWindowSize(){
  showData(bestSeller,prodData);
  showData(whatsnew,prodData);
  vidMap(videoData);
  showComment();
if(screen.width>767)
slide.style.backgroundImage=img_slide_bg[i];
else
slide.style.backgroundImage=img_slide[i];
}





function addToCart(elem) {        
  var cartObj={
      img: elem.img,
      title: elem.title,
      price: elem.price
  }
  console.log(cart);
  cart.push(cartObj);
  document.querySelector("#cart").innerHTML=cart.length;
  localStorage.setItem("cartItems", JSON.stringify(cart));
}

vidMap(videoData);
function vidMap(vData){
  vidCon.innerHTML="";
  var size=Math.floor(screen.width/230);
  vData=vData.slice(0,size);
  vData.map((vid)=>{
    var video=document.createElement("video");
    video.setAttribute("src",vid.src);    
    video.setAttribute("loop","loop");    
    video.setAttribute("poster",vid.poster);    
    video.setAttribute("type","video/mp4;codecs=h264"); 
    video.addEventListener("mouseover",()=>{
      video.play();
    });  
    video.addEventListener("mouseleave",()=>{
      video.pause();
    });  
    vidCon.append(video);
  });
}
showComment();

function showComment(){
  var size=(screen.width/350);
  for(var i =0;i<3;i++){
    if(i<size)
    comment[i].style.display="block";
    else
    comment[i].style.display="none";
  }
}
