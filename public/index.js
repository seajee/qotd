
const assetDarkMode = "assets/dark_mode.svg"
const assetLightMode = "assets/light_mode.svg"

const themeSwitchButton = document.getElementById("theme-switch");
const themeSwitchImage = themeSwitchButton.firstElementChild;

const quoteText = document.getElementById("quote");

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

const fetchqotd = () => {
    fetch("/api/quote/latest")
        .then((response) => response.json())
        .then((data) => {
            quoteText.innerText = '"' + data.quote + '"';
        })
        .catch((err) => {
            quoteText.innerText = "ERROR: Couldn't fetch latest quote of the day";
            console.error(err);
        });
}

fetchqotd();