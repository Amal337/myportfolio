document.addEventListener("DOMContentLoaded", function(event){
    document.documentElement.setAttribute("data-theme", "light");

var themeSwitcher = document.getElementById("theme-switcher");
themeSwitcher.onclick = function() {
    var currentTheme = document.documentElement.getAttribute("data-theme");
    var switchToTheme = currentTheme === "dark" ? "light" : "dark"
    document.documentElement.setAttribute("data-theme", switchToTheme);
    document.getElementById("blob").style.display = "none";
    document.getElementById("img1").innerHTML =  '<img src="assets/hero-img-dark.png" alt="hero image"></img>';
    document.getElementById("theme-switcher").innerHTML = '<img src="https://img.icons8.com/external-flatart-icons-lineal-color-flatarticons/64/000000/external-light-bulb-ux-and-ui-flatart-icons-lineal-color-flatarticons.png"/>'

    }
});

// opacity= 'opacity = 0.5';
