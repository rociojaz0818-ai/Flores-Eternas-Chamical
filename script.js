<script>
(function () {

    const flowers = ["🌸", "🌷", "🌺", "🌼", "✿"];

    function createFlower() {

        const flower = document.createElement("div");

        flower.textContent =
            flowers[Math.floor(Math.random() * flowers.length)];

        flower.style.position = "fixed";
        flower.style.top = "-40px";
        flower.style.left = Math.random() * 100 + "vw";
        flower.style.zIndex = "99999";
        flower.style.pointerEvents = "none";
        flower.style.fontSize =
            (16 + Math.random() * 14) + "px";

        const duration =
            7000 + Math.random() * 5000;

        flower.animate(
            [
                {
                    transform: "translateY(0) rotate(0deg)",
                    opacity: 0
                },
                {
                    transform: "translateY(30vh) rotate(180deg)",
                    opacity: 0.9
                },
                {
                    transform: "translateY(110vh) rotate(360deg)",
                    opacity: 0
                }
            ],
            {
                duration: duration,
                easing: "linear"
            }
        );

        document.body.appendChild(flower);

        setTimeout(function () {
            flower.remove();
        }, duration);

    }

    /* Primera tanda */
    for (let i = 0; i < 12; i++) {

        setTimeout(function () {
            createFlower();
        }, i * 300);

    }

    /* Lluvia continua */
    setInterval(createFlower, 500);

})();
</script>

</body>
</html>
