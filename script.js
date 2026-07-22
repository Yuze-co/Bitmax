// ==========================
// BITMAX 3.0
// ==========================


// Navbar al hacer scroll

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 60) {

        header.style.background = "rgba(5,8,22,.95)";
        header.style.boxShadow = "0 10px 30px rgba(0,0,0,.25)";

    } else {

        header.style.background = "rgba(5,8,22,.70)";
        header.style.boxShadow = "none";

    }

});


// ==========================
// Animación al aparecer
// ==========================

const sections = document.querySelectorAll(
".about,.services,.portfolio,.stats,.contact"
);

const observer = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},{
threshold:0.2
});

sections.forEach(section=>{

section.classList.add("hidden");

observer.observe(section);

});


// ==========================
// Botón volver arriba
// ==========================

const topButton = document.createElement("button");

topButton.innerHTML = "↑";

topButton.className = "top-button";

document.body.appendChild(topButton);

window.addEventListener("scroll",()=>{

if(window.scrollY>500){

topButton.classList.add("active");

}else{

topButton.classList.remove("active");

}

});

topButton.addEventListener("click",()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

});


// ==========================
// Animación botones
// ==========================

document.querySelectorAll(".btn-primary,.btn-secondary,.nav-button")
.forEach(button=>{

button.addEventListener("mouseenter",()=>{

button.style.transform="translateY(-4px) scale(1.03)";

});

button.addEventListener("mouseleave",()=>{

button.style.transform="translateY(0) scale(1)";

});

});


// ==========================
// Mensaje consola
// ==========================

console.log("%cBITMAX 3.0","color:#3B82F6;font-size:24px;font-weight:bold;");

console.log("Web desarrollada por Bitmax.");

