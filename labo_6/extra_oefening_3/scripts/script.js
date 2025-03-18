const setup = () => {
         
    document.getElementById("Button").addEventListener("click", addParagraph);
}

const addParagraph = () => {
    const div = document.getElementById("myDIV");
    const newP = document.createElement("p");
    newP.textContent = "Dit is de nieuwe paragraaf";
    div.appendChild(newP);
};

window.addEventListener("load", setup); 