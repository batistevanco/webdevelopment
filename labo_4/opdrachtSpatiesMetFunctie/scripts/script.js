const setup = () => {
    const button = document.getElementById('processButton');
    button.addEventListener('click', processText);
};

const maakMetSpaties = (inputText) => {
    let result = "";
    for (let i = 0; i < inputText.length; i++) {
        result += inputText[i] + " ";
    }
    return result.trim();
};

const processText = () => {
    let inputText = document.getElementById('inputField').value;
    let spacedText = maakMetSpaties(inputText);
    console.log(spacedText);
};

window.addEventListener("load", setup);
