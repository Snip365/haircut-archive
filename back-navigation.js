document.addEventListener("DOMContentLoaded", function () {
    const backButton = document.getElementById("back-button");

    if (!backButton) {
        return;
    }

    backButton.addEventListener("click", function (event) {
        event.preventDefault();

        if (window.history.length > 1 && document.referrer) {
            window.history.back();
        } else {
            const fallbackUrl = window.location.pathname.includes("anime")
                ? "anime.html"
                : window.location.pathname.includes("light-novel") || window.location.pathname.includes("ln")
                    ? "light-novel.html"
                    : window.location.pathname.includes("manga") || window.location.pathname.includes("obra")
                        ? "manga.html"
                        : "index.html";

            window.location.assign(fallbackUrl);
        }
    });
});
