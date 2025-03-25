const setup = () => {
    const button = document.getElementById('processButton');
    button.addEventListener('click', splitText);
};

const splitText = () => {
    let inputText = document.getElementById('inputField').value;

    let noSpacesText = inputText.replace(' ', '');

    console.log(noSpacesText);
};

window.addEventListener("load", setup);
