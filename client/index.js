
const assetDarkMode = "assets/dark_mode.svg"
const assetLightMode = "assets/light_mode.svg"

const themeSwitchButton = document.getElementById("theme-switch");
const themeSwitchImage = themeSwitchButton.firstElementChild;

themeSwitchButton.onclick = () => {
    const bodyClass = document.body.classList;

    if (bodyClass.contains("dark")) {
        themeSwitchImage.src = assetDarkMode;
        bodyClass.remove("dark");
    } else {
        themeSwitchImage.src = assetLightMode;
        bodyClass.add("dark");
    }
};