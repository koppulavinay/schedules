
/*--------------- Toggle Navbar----------------------*/ 
const navToggler = document.querySelector(".nav-toggler");
navToggler.addEventListener("click",() =>{
hideSection();
toggleNavbar();
document.body.classList.toggle("hide-scrolling");
});
function hideSection(){
    document.querySelector("section.active").classList.toggle("fade-out");
}

function toggleNavbar(){
    document.querySelector(".header").classList.toggle("active");
}

/*  --------------------------Active  section----------------*/
document.addEventListener("click",(e) =>{
    if(e.target.classList.contains("link-item") && e.target.hash !== ""){
       
       if(e.target.classList.contains("nav-item")){
          toggleNavbar();
       }else{
        hideSection();
        document.body.classList.add("hide-scrolling");
    }
    setTimeout(()=>{
document.querySelector("section.active").classList.remove("active","fade-out");

document.querySelector(e.target.hash).classList.add("active");
window.scrollTo(0,0);
document.body.classList.remove("hide-scrolling");
    },500);
}
});




/*------------------------portfolio popup---------------------------------*/

document.addEventListener("click", (e) =>{
    if(e.target.classList.contains("view-project")){
        togglePortfolioPopup();
    }
});
function togglePortfolioPopup(){
    document.querySelector(".portfolio-popup").classList.toggle("open");
    document.body.classList.toggle("hide-scrolling");
}
document.querySelector(".pp-close").addEventListener("click",togglePortfolioPopup);

function portfolioItemDetails(portfolioItem){
document.querySelector(".pp-thumbnail").innerHTML=portfolioItem.querySelector(".description").innerHTML;
document.querySelector(".section-title h2").innerHTML =
portfolioItm.querySelector(".portfolio-item-title").innerHTML;
}








