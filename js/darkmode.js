const toggle = document.getElementById("toggle");
const themetext = document.getElementById("themetext");
const theme = window.localStorage.getItem("theme");
const themetextvalue = "";
const darkmodelightmode = ["Theme: Dark Mode", "Theme: Light Mode"]

if (theme === "dark") document.body.classList.add("dark");

// event listener para quando o botão de alterar o tema for clicado
toggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    if (theme === "dark") {
        window.localStorage.setItem("theme", "light");
        themetext.innerText = "Theme: Light Mode";
    } else {
        window.localStorage.setItem("theme", "dark");
    themetext.innerText = "Theme: Dark Mode";
    }
});

 