document.addEventListener("DOMContentLoaded", () => {
    const toggle = document.getElementById("theme-toggle");
    if (!toggle) return;

    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
        document.documentElement.classList.add("dark-mode");
    }

    const updateLabel = () => {
        toggle.textContent = document.documentElement.classList.contains("dark-mode") ? "Light Mode" : "Dark Mode";
    };

    updateLabel();

    toggle.addEventListener("click", () => {
        document.documentElement.classList.toggle("dark-mode");
        const isDark = document.documentElement.classList.contains("dark-mode");
        localStorage.setItem("theme", isDark ? "dark" : "light");
        updateLabel();
    });
});
