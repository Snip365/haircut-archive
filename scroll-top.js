(function () {
    function init() {
        if (document.getElementById("scrollTopBtn")) {
            return;
        }

        const button = document.createElement("button");
        button.id = "scrollTopBtn";
        button.type = "button";
        button.setAttribute("aria-label", "Back to top");
        button.innerHTML = "↑";

        document.body.appendChild(button);

        function toggleButton() {
            const shouldShow = window.scrollY > 300;
            button.classList.toggle("visible", shouldShow);
        }

        window.addEventListener("scroll", toggleButton, { passive: true });
        button.addEventListener("click", function (event) {
            event.preventDefault();

            const scrollTarget = document.scrollingElement || document.documentElement || document.body;

            if (typeof scrollTarget.scrollTo === "function") {
                scrollTarget.scrollTo({ top: 0, left: 0, behavior: "smooth" });
            } else {
                window.scrollTo(0, 0);
            }
        });

        toggleButton();
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", init, { once: true });
    } else {
        init();
    }
})();
