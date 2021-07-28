/*================== MOSTRAR MENU MOBILE ====================*/

const funcNavBurger = () => {
    const toggleButton = document.querySelector(".nav__toggle");
    const nav = document.getElementById("nav-menu");
    const navItems = document.querySelectorAll("#nav-list li");
    
    toggleButton.addEventListener("click", () => {
        
        /* Toggler button */
        nav.classList.toggle("active");

        
        /* Animar links */
        navItems.forEach((item, index) => {
            if (item.style.animation) {
                item.style.animation = "";
            } else {
                item.style.animation = `navItemFade 0.5s ease forwards ${index / 7 + 0.8}s`;
            }
        });

        /* Animar toggler */
        toggleButton.classList.toggle("active");  
    });
}

/*================= HEADER SCROLL =================*/

const headerScroll = () => {
    const header = document.getElementById("header");
    window.addEventListener("scroll", () => {
        const windowScroll = window.scrollY > 0;
        header.classList.toggle("active", windowScroll);
    });
}



/*==================== REMOVE MENU MOBILE ====================*/

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

const scrollActive = () => {
    const sections = document.querySelectorAll(".contenedor");
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

/*================= TODAS LAS FUNCIONES =================*/



const script = () => {
    funcNavBurger();
    headerScroll();
    linkMobileAction();
    scrollActive();
}

script();
