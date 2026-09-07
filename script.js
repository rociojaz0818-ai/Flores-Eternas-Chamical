/* =====================================
   🌸 LLUVIA DE FLORES
===================================== */

function createFlower() {

    const flower = document.createElement("div");

    flower.classList.add("flower-rain");

    const flowers = ["✿", "✿", "✿", "✿", "✿"];

    flower.innerHTML = flowers[
        Math.floor(Math.random() * flowers.length)
    ];

    flower.style.left = Math.random() * 100 + "vw";

    flower.style.fontSize =
        (14 + Math.random() * 12) + "px";

    flower.style.animationDuration =
        (6 + Math.random() * 6) + "s";

    flower.style.transform =
        `rotate(${Math.random() * 360}deg)`;

    document.body.appendChild(flower);

    setTimeout(() => {
        flower.remove();
    }, 13000);
}

setInterval(createFlower, 700);
