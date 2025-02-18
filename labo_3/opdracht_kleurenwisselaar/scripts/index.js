const setup = () => {
    let buttons = document.getElementsByClassName("toggle-btn");

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener("click", function() {
            buttons[i].classList.toggle("actief");
        });
    }
}
window.addEventListener("load", setup); 