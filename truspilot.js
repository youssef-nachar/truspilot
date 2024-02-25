// let input = document.querySelector(".header_text");
// window.onscroll = function(){
//     // console.log(this.scrollY);
//     if(this.scrollY >=1000){
//         input.classList.add("show");
//     }
//     else {
//         input.classList.remove("show");
//     }
// }
document.getElementById("header_text").style.visibility = "hidden";
window.onscroll = function () {
    if (this.scrollY >= 380)
        document.getElementById("header_text").style.visibility = "visible";
    else
        document.getElementById("header_text").style.visibility = "hidden";

};
// document.getElementById("icon_search").style.visibility="hidden";

// window.onscroll = function (){
//     if (this.scrollY >= 380)
//     document.getElementById("icon_search").style.visibility="visible";
//     else
//     document.getElementById("icon_search").style.visibility="hidden";

// }


// let availableKeywords = [
//     'web-developper',
//     'full-stack-developper',
//     'front end',
//     'back end',
//     'html',
//     'css',
//     'hi',
//     'hello',
// ];
// const resultsbox = document.getElementsByClassName(".resultsbox");
// const inputbox =document.getElementById("input-box");
// inputbox.onkeyup = function(){
//     let result = [];
//     let input = inputbox.value;
//     if(input.length){
//         result = availableKeywords.filter((keyword)=>{
//           return keyword.toLowerCase.includes(input.toLowerCase);

//         });
//         console.log(result);
//     }
//     display(result);
// }
// function display(result){
//     const content = result.map((list)=>{
//         return "<li>" + list + "</li>";
//     })
// }
// resultsbox.innerHTML = "<ul>" +content + "</ul>";



//to left buttom
const tabsbox = document.querySelector(".container-icons"),
    arrawIcons = document.querySelectorAll(".container-icons svg");

let isDragging = false;

arrawIcons.forEach(icon => {
    icon.addEventListener("click", () => {
        console.log(Svg.id)
    })
});


const dragging = (e) => {
    if (!isDragging) return;
    // console.log("draging")
    tabsbox.scrollLeft -= e.mouvementX;
}

const dragStop = () => {
    isDragging = false;

}

tabsbox.addEventListener("mousedown", () => isDragging = true);
tabsbox.addEventListener("mousemove", dragging);
document.addEventListener("mouseup", dragStop);


const img = document.querySelector(".birthday");
const next = document.querySelector(".button-right");
const next = document.querySelector(".button-left");
const i = 0;
var images = ["https://consumersite-assets.trustpilot.net/consumersite-home/public/_rebrand/broken-phone-review.jpg", "https://consumersite-assets.trustpilot.net/consumersite-home/public/_rebrand/dog-gift-review.jpg", "https://consumersite-assets.trustpilot.net/consumersite-home/public/_rebrand/plant-shopping-review.jpg"];

next.onclick = function () {
    if (i == 0)
        img.src = "https://consumersite-assets.trustpilot.net/consumersite-home/public/_rebrand/broken-phone-review.jpg"
    else if (i == 1)
        img.src = "https://consumersite-assets.trustpilot.net/consumersite-home/public/_rebrand/dog-gift-review.jpg"
    // img.src = images[i++]
    // i = i == images.length ? 0 : i;

}

//change the image
//  function changimage(){
//      document.getElementById("go").src = "https://consumersite-assets.trustpilot.net/consumersite-home/public/_rebrand/broken-phone-review.jpg"
//      document.getElementById("text").innerHTML = "fixed my broke fone but i still can't get a date on tinder"

//     }

// function secondimage(){
//     document.getElementById("go").src="https://consumersite-assets.trustpilot.net/consumersite-home/public/_rebrand/dog-gift-review.jpg"
//     document.getElementById("text").innerHTML=" the first birthday giftmy wife didn't want to return."
// }


function toleft() {
    document.getElementById("to_left").style.transform = translateX('-1000px')
}