const setup = () => {
    const button = document.getElementById("changeTextButton");
    const pElement = document.getElementById("txtOutput");

    if (button && pElement) {
        button.addEventListener("click", () => {
            pElement.innerHTML = "Welkom!";
        });
    }
};

window.addEventListener("load", setup);
