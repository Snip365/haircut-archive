document.addEventListener("DOMContentLoaded", function () {
    const button = document.createElement("button");
    button.id = "scrollTopBtn";
    button.type = "button";
    button.setAttribute("aria-label", "Voltar ao topo");
    button.innerHTML = "↑";

    document.body.appendChild(button);

    function toggleButton() {
        const shouldShow = window.scrollY > 300;
        button.classList.toggle("visible", shouldShow);
    }

    window.addEventListener("scroll", toggleButton);
    button.addEventListener("click", function () {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });

    toggleButton();
});
