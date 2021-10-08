const headerToggle = document.querySelector(".header__bars");
const headerList = document.querySelector(".header__list");
const headerItem= document.querySelectorAll(".header__item");
const headerLink=document.querySelectorAll(".header__link");


headerToggle.addEventListener("click", function(){
    headerList.classList.add("isExpand");
})

window.addEventListener("click" , function(e){
    if(!headerList.contains(e.target) && !e.target.matches(".header__bars"))
    headerList.classList.remove("isExpand");
  
})

const header=document.querySelector(".header");
const toTop= document.querySelector(".to-top");
// const headerLink = document.querySelector(".header .header__item .header__link");


window.addEventListener("scroll", function(){
    var y=window.scrollY;
    if(y> 100){
        header.style.background="#bd90cc"; 
        toTop.classList.add("show");
        toTop.addEventListener("click",function(){
            return document.body.scrollTop = 0;
        });

    }else{
        header.style.background="transparent";
        toTop.classList.remove("show");
    }
    
});




const askHeaders=document.querySelectorAll(".ask__header-top");
const askItems=document.querySelectorAll(".ask__acc-item");
const askIcon = document.querySelectorAll(".ask__header-top-icon");
// for (var i = 0 ; i < askIcon.length ; i++){
//     askIcon[i].addEventListener("click", function(){
//         this.setAttribute("class", "ask__header-top-icon fas fa-minus");
//     })
// }





const productImgs = document.querySelectorAll(".product__img-wrapper .product__img");
const preview = document.querySelector(".preview");
const close = document.querySelector(".preview__close");


productImgs.forEach((item) => item.addEventListener(("click"), handleZoomImage));
function handleZoomImage(event){
    const imgSrc = event.target.getAttribute("src");
    console.log(imgSrc);
   
    const template =`<div class="preview show">
    <div class="preview__box">
     
     <div class="preview__img-box">
         <div class="preview__slide preview__slide-prev">
             <i class="fas fa-angle-left"></i>
         </div>
         <div class="preview__slide preview__slide-next">
             <i class="fas fa-angle-right"></i>
         </div>
         <img class="preview__img" src="${imgSrc}" alt="">
     </div>
    </div>
    </div>`;
 document.body.insertAdjacentHTML("beforeend", template);
}

let index = 0;

document.body.addEventListener("click", function(e){
    const previewImg= document.querySelector(".preview__img");
    let previewSrc="";

    if(e.target.matches(".preview")){
    e.target.parentNode.removeChild(e.target);

    }   
    else if (e.target.matches(".fa-angle-right")){

        previewSrc = previewImg.getAttribute("src");
        
        index = [...productImgs].findIndex(item => item.getAttribute("src") === previewSrc);

        index += 1;
        if ( index > productImgs.length -1) {
            index = 0;
        };
        const newSrc = [...productImgs][index].getAttribute("src");
        
        previewImg.setAttribute("src", newSrc);
    }   
    
    else if (e.target.matches(".fa-angle-left")){
        previewSrc = previewImg.getAttribute("src");
        
        index = [...productImgs].findIndex(item => item.getAttribute("src") === previewSrc);

        index -= 1;
        if ( index < 0) {
            index = productImgs.length - 1;
        };
        const newSrc = [...productImgs][index].getAttribute("src");

        previewImg.setAttribute("src", newSrc);
    }
})




