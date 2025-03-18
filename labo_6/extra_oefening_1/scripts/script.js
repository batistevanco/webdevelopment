const setup = () => {
    let paragraphs = document.querySelectorAll("p");

    paragraphs[0].textContent = "Good Job!";
}
window.addEventListener("load", setup); 