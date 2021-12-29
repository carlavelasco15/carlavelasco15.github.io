const button1 = document.getElementById("btn-info1"),
    button2 = document.getElementById("btn-info2"),
     list1 = document.getElementById("experience-list1"),
     list2 = document.getElementById("experience-list2"),
     btnIcono1 = document.getElementById("btn-icon1"),
     btnIcono2 = document.getElementById("btn-icon2"),
     btnText1 = document.getElementById("btn-text1"),
     btnText2 = document.getElementById("btn-text2"), 
     navItems = document.querySelectorAll("#nav-list li"),
     toggleButton = document.querySelector(".nav__toggle");

/*================== MOSTRAR MENU MOBILE ====================*/

const funcMenu = (toggler) => {
    const nav = document.getElementById("nav-menu");
    const navItems = document.querySelectorAll("#nav-list li");
    const header = document.getElementById("header");
    
    toggler.addEventListener("click", () => {
        
        nav.classList.toggle("active");

        navItems.forEach((item, index) => {
            if (item.style.animation) {
                item.style.animation = "";
            } else {
                item.style.animation = `navItemFade 0.5s ease forwards ${index / 7 + 0.8}s`;
            }
        });

        toggleButton.classList.toggle("active"); 
        
        if (window.scrollY == 0) {
            header.classList.toggle("active");  
        }
    });
}

/*================= SCROLL =================*/

const scroll = () => {
    const header = document.getElementById("header");
    const scrollTop = document.getElementById("scroll-top");
    const toggleButton = document.querySelector(".nav__toggle");
    window.addEventListener("scroll", () => {
        const windowScrollHeader = window.scrollY > 0;
        const windowScrollButton = window.scrollY > 180;
        
        if(!toggleButton.classList.contains("active")) {
            header.classList.toggle("active", windowScrollHeader);
        }
        scrollTop.classList.toggle("active", windowScrollButton);

    });
}


/*==================== REMOVE MENU ONCLICK ====================*/

const linkMobileAction = () => {
    const navLink = document.querySelectorAll("#nav-list a");
    const nav = document.getElementById("nav-menu");
    const toggleButton = document.querySelector(".nav__toggle");
    const navItems = document.querySelectorAll("#nav-list li");

        navLink.forEach( link => link.addEventListener("click", () => {
            nav.classList.remove("active");

            toggleButton.classList.remove("active");
    
            navItems.forEach((item, index) => {
                if (item.style.animation) {
                    item.style.animation = "";
                } else {
                    item.style.animation = `navItemFade 0.3s ease forwards ${index / 7 + 0.8}s`;
                }
            });
        }));
    }


/*================= SCROLL NAV__ITEM ACTIVE =================*/

const scrollNavLinks = () => {
    const sections = document.querySelectorAll(".section");
    const navLink = document.querySelectorAll("#nav-list a");
    

        window.addEventListener("scroll", () => {
            let current = "";

            sections.forEach( section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;
                if(pageYOffset >= (sectionTop - sectionHeight / 3)) {
                    current = section.getAttribute("id");
                }
            })

            navLink.forEach( a => {
                a.classList.remove("active");
                if(a.classList.contains(current)) {
                    a.classList.add("active");
                }
            })
        })
}

/*================= FORM =================*/

const formFunction = () => {
    const form = document.querySelector("form");
    const statusTxt = form.querySelector(".button-area span");

    form.onsubmit = (e) => {
        e.preventDefault();
        statusTxt.style.color = "rgb(86,66,255)"
        statusTxt.style.display = "block";
        statusTxt.innerText = "Se está enviando el mensaje...";
        form.classList.add("disabled");

        let xhr = new XMLHttpRequest();
        xhr.open("POST", "message.php", true);
        xhr.onload = () => {
            if(xhr.readyState == 4 && xhr.status == 200){
                let response = xhr.response;
                if(response.indexOf("required") != -1 || response.indexOf("valid") != -1 || response.indexOf("failed") != -1) {
                    statusTxt.style.color = "red";
                } else {
                    form.reset();
                     setTimeout(()=>{
                        statusTxt.style.display = "none";
                        }, 3000);
                    }
                    statusTxt.innerText = response;
                    form.classList.remove("disabled");
                }
            }
            let formData = new FormData(form);
            xhr.send(formData);
        }
    }


let btnShowList = (btn, list, text, icon) => {
    const HTMLStringHidden = "Dejar de mostrar";
    const HTMLStringVisible = "Más información";
    const eyeOpen = "eye";
    const eyeClosed = "eye-off";
    

    btn.addEventListener("click", () => {
        list.classList.toggle("active");
        text.innerHTML == HTMLStringVisible ? text.innerHTML = HTMLStringHidden :  text.innerHTML = HTMLStringVisible;
        icon.name == eyeOpen ? icon.name = eyeClosed : icon.name = eyeOpen;
    });
}



/*================= TODAS LAS FUNCIONES =================*/



const script = () => {
    funcMenu(toggleButton);
    scroll();
    scrollNavLinks();
    linkMobileAction();
    formFunction();
    btnShowList(button1, list1, btnText1, btnIcono1);
    btnShowList(button2, list2, btnText2, btnIcono2);
}

script();
