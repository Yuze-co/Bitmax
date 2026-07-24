/*==================================================
                BITMAX 4.0
==================================================*/


/*==================================================
                SELECTORES
==================================================*/

const header = document.querySelector(".header");

const menuToggle = document.getElementById("menu-toggle");

const navLinks = document.querySelector(".nav-links");

const heroImage = document.querySelector(".hero-image");

const cursorGlow = document.querySelector(".cursor-glow");


/*==================================================
                HEADER SCROLL
==================================================*/

window.addEventListener("scroll",()=>{

    if(window.scrollY>50){

        header.classList.add("scrolled");

    }else{

        header.classList.remove("scrolled");

    }

});


/*==================================================
                MENÚ MÓVIL
==================================================*/

menuToggle.addEventListener("click",()=>{

    menuToggle.classList.toggle("active");

    navLinks.classList.toggle("active");

});


/*==================================================
            CERRAR MENÚ AL PULSAR
==================================================*/

document.querySelectorAll(".nav-links a").forEach(link=>{

    link.addEventListener("click",()=>{

        menuToggle.classList.remove("active");

        navLinks.classList.remove("active");

    });

});
/*==================================================
                PARTÍCULAS
==================================================*/

tsParticles.load("particles-js",{

    background:{
        color:"transparent"
    },

    fpsLimit:60,

    particles:{

        number:{
            value:45
        },

        color:{
            value:"#3B82F6"
        },

        links:{
            enable:true,
            color:"#2563EB",
            distance:170,
            opacity:.25
        },

        move:{
            enable:true,
            speed:1
        },

        opacity:{
            value:.4
        },

        size:{
            value:2
        }

    }

});


/*==================================================
            LUZ DEL RATÓN
==================================================*/

if (window.innerWidth > 768) {

    document.addEventListener("mousemove",(e)=>{

        cursorGlow.style.left = e.clientX + "px";
        cursorGlow.style.top = e.clientY + "px";

    });

    document.addEventListener("mousemove",(e)=>{

        const x = (window.innerWidth / 2 - e.clientX) / 40;
        const y = (window.innerHeight / 2 - e.clientY) / 40;

        heroImage.style.transform = `
            rotateY(${-x}deg)
            rotateX(${y}deg)
        `;

    });

}
/*==================================================
        ANIMACIONES AL HACER SCROLL
==================================================*/

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{
    threshold:.2
});

document.querySelectorAll(
".about,.services,.process,.contact"
).forEach(section=>{

    section.classList.add("hidden");

    observer.observe(section);

});


/*==================================================
            BOTÓN VOLVER ARRIBA
==================================================*/

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


/*==================================================
            EFECTO PREMIUM BOTONES
==================================================*/

document.querySelectorAll(
".btn-primary,.btn-secondary,.nav-button"
).forEach(button=>{

    button.addEventListener("mouseenter",()=>{

        button.style.transform="translateY(-4px) scale(1.03)";

    });

    button.addEventListener("mouseleave",()=>{

        button.style.transform="translateY(0) scale(1)";

    });

});


/*==================================================
                CONSOLA
==================================================*/

console.log(
"%cBITMAX 4.0",
"color:#3B82F6;font-size:24px;font-weight:bold;"
);

console.log("Diseñado y desarrollado por BitMax.");
/*==================================================
            ENVÍO DEL FORMULARIO
==================================================*/

const form = document.querySelector(".contact-form");
const message = document.getElementById("form-message");

form.addEventListener("submit", async (e) => {

    e.preventDefault();

    const data = new FormData(form);

    message.className = "form-message";
    message.textContent = "";

    try{

        const response = await fetch(form.action,{

            method:form.method,

            body:data,

            headers:{
                Accept:"application/json"
            }

        });

        if(response.ok){

            message.classList.add("show","success");

            message.innerHTML = `
                <strong>¡Solicitud enviada!</strong><br>
                Gracias por confiar en BitMax.<br>
                Me pondré en contacto contigo lo antes posible.
            `;

            form.reset();

        }else{

            message.classList.add("show","error");

            message.innerHTML = `
                <strong>No se ha podido enviar.</strong><br>
                Inténtalo de nuevo en unos minutos.
            `;

        }

    }catch{

        message.classList.add("show","error");

        message.innerHTML = `
            <strong>Error de conexión.</strong><br>
            Comprueba tu conexión a Internet.
        `;

    }

    setTimeout(()=>{

        message.classList.remove("show");

    },6000);

});
/*==================================================
            CUSTOM SELECTS
==================================================*/

document.querySelectorAll(".custom-select").forEach(select => {

    const button = select.querySelector(".select-btn");
    const text = select.querySelector(".selected-text");
    const hidden = select.querySelector("input");
    const options = select.querySelectorAll(".option");

    button.addEventListener("click", (e) => {

        e.stopPropagation();

        document.querySelectorAll(".custom-select").forEach(item => {

            if(item !== select){

                item.classList.remove("active");

            }

        });

        select.classList.toggle("active");

    });

    options.forEach(option => {

        option.addEventListener("click", () => {

            text.textContent = option.textContent;

            hidden.value = option.dataset.value;

            select.classList.remove("active");

        });

    });

});

document.addEventListener("click", () => {

    document.querySelectorAll(".custom-select").forEach(select => {

        select.classList.remove("active");

    });

});
