const toggle = document.getElementById("toggle");
const themetext = document.getElementById("themetext");
const theme = window.localStorage.getItem("theme");


if (theme === "dark") document.body.classList.add("dark");

// event listener para quando o botão de alterar o tema for clicado
toggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    if (theme === "dark") {
        window.localStorage.setItem("theme", "light");
        themetext.InnerHtml = "Theme: Light Mode";
    } else {
        window.localStorage.setItem("theme", "dark");
        themetext.InnerHtml = "Theme: Dark Mode";
    }

});
