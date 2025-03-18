const setup = () => {
         
    document.getElementById("Button").addEventListener("click", addParagraph);
}

const addParagraph = () => {
    const div = document.getElementById("myDIV");
    const newP = document.createElement("p");
    newP.textContent = "This is a new paragraph!";
    div.appendChild(newP);
};

window.addEventListener("load", setup); 