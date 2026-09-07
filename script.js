/* =====================================
   🌸 FLORES ETERNAS — SCRIPT PRINCIPAL
===================================== */


/* =====================================
   🌸 LLUVIA DE FLORES
===================================== */

function createFlower() {

    const flower = document.createElement("div");

    const flowers = [
        "🌸",
        "🌷",
        "🌺",
        "🌼",
        "✿"
    ];

    flower.className = "flower-rain";

    flower.textContent =
        flowers[Math.floor(Math.random() * flowers.length)];

    /* Posición horizontal */
    flower.style.left = Math.random() * 100 + "vw";

    /* Tamaño */
    flower.style.fontSize =
        (14 + Math.random() * 14) + "px";

    /* Duración */
    flower.style.animationDuration =
        (7 + Math.random() * 6) + "s";

    /* Pequeña variación */
    flower.style.animationDelay =
        Math.random() * 1.5 + "s";

    document.body.appendChild(flower);

    /* Eliminar cuando termina */
    setTimeout(() => {
        flower.remove();
    }, 15000);
}


/* Crear flores periódicamente */
setInterval(createFlower, 600);


/* Crear algunas al cargar */
for (let i = 0; i < 8; i++) {

    setTimeout(() => {
        createFlower();
    }, i * 400);

}


/* =====================================
   📸 LIGHTBOX
===================================== */

const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightbox-image");
const lightboxClose = document.querySelector(".lightbox-close");


/* Abrir imagen */

document.querySelectorAll(".gallery-item").forEach(item => {

    item.addEventListener("click", () => {

        const image = item.querySelector("img");

        if (!image || !lightbox || !lightboxImage) {
            return;
        }

        lightboxImage.src = image.src;
        lightboxImage.alt = image.alt;

        lightbox.classList.add("active");

        document.body.style.overflow = "hidden";

    });

});


/* Cerrar con X */

if (lightboxClose) {

    lightboxClose.addEventListener("click", () => {

        if (lightbox) {
            lightbox.classList.remove("active");
        }

        document.body.style.overflow = "";

    });

}


/* Cerrar haciendo click afuera */

if (lightbox) {

    lightbox.addEventListener("click", event => {

        if (event.target === lightbox) {

            lightbox.classList.remove("active");

            document.body.style.overflow = "";

        }

    });

}


/* Cerrar con ESC */

document.addEventListener("keydown", event => {

    if (event.key === "Escape" && lightbox) {

        lightbox.classList.remove("active");

        document.body.style.overflow = "";

    }

});


/* =====================================
   📱 MENÚ HAMBURGUESA
===================================== */

const menuButton =
    document.querySelector(".menu-toggle");

const navigation =
    document.querySelector(".nav-links");


if (menuButton && navigation) {

    menuButton.addEventListener("click", () => {

        navigation.classList.toggle("active");

        menuButton.classList.toggle("active");

    });


    /* Cerrar menú al tocar un enlace */

    navigation.querySelectorAll("a").forEach(link => {

        link.addEventListener("click", () => {

            navigation.classList.remove("active");

            menuButton.classList.remove("active");

        });

    });

}


/* =====================================
   ✨ APARICIÓN AL HACER SCROLL
===================================== */

const revealElements =
    document.querySelectorAll(
        ".section-header, .personalized-intro, .personalized-gallery, .themed-content, .clips-content, .combos-grid"
    );


const revealObserver = new IntersectionObserver(
    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

                revealObserver.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.12
    }
);


revealElements.forEach(element => {

    element.classList.add("reveal");

    revealObserver.observe(element);

});


/* =====================================
   🔝 VOLVER ARRIBA
===================================== */

const backToTop =
    document.querySelector(".back-to-top");


if (backToTop) {

    window.addEventListener("scroll", () => {

        if (window.scrollY > 500) {

            backToTop.classList.add("show");

        } else {

            backToTop.classList.remove("show");

        }

    });


    backToTop.addEventListener("click", () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

}


/* =====================================
   🌷 FIN DEL SCRIPT
===================================== */
