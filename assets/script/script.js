let currentTheme = localStorage.getItem("theme");
var isSystemDarkTheme = window.matchMedia("(prefers-color-scheme: dark)").matches;
var themeCheckbox = document.getElementById("toggle-input");


function setDark() {
    themeCheckbox.checked = true;
    document.body.classList.add("dark-theme");
}
function setLight() {
    themeCheckbox.checked = false;
    document.body.classList.remove("dark-theme");
}
function savedTheme() {
    if(currentTheme === "dark") {
        setDark();
    } else if(currentTheme === "light") {
        setLight();
    } else {
        useSystemTheme();
        // CHANGING THEME ACCORDING TO SYSTEM THEME
        // IF USER NOT SELECTED ANY THEME PREVIOUSLY
    }
}
function useSystemTheme() {
    if(isSystemDarkTheme === true) {
        setDark();
    } else if(isSystemDarkTheme === false) {
        setLight();
    }
}


// SETTING SAVED THEME OR CHANGING 
// THEME ACCORDING TO SYSTEM THEME
savedTheme();


// REMOVING THE LOADING ANIMATION
window.addEventListener('load', function() {
    document.getElementById('loading').classList.add("hide");
    document.body.style.overflow = "auto";
})


// CHANGING THEME ACCORDING TO SYSTEM 
// THEME IF USER NOT SELECTED THEME
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function(event) {
    currentTheme = localStorage.getItem("theme");
    if (!currentTheme) {
      isSystemDarkTheme = event.matches;
      useSystemTheme();
    }
});


// SAVING SELECTED THEME
document.getElementById("toggle-input").addEventListener('change', function () {
    // SAVING THE SELECTED THEME
    if(themeCheckbox.checked === true){
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }
    currentTheme = localStorage.getItem("theme");
    // SETTING SAVED THEME
    savedTheme();
})