const dropDown = document.querySelector(".drop-icon");
const newLinks = document.querySelector(".news-links");

//create a function that houses the events 

dropDown.addEventListener("click", function (){
    if(newLinks.classList.contains("active")){
        newLinks.classList.remove("active");
    }else {
        newLinks.classList.add("active");
    }
})
window.addEventListener("scroll", function (){
    if(window.pageYOffset > 100){
        newLinks.classList.remove("active");
    }
})