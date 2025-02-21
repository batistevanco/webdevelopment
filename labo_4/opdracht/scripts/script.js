const setup = () => {
    let leeftijd = 34;
    let intrest = 0.12;
    let isGevaarlijk = true;
    let vandaag = new Date();
    const print = (message) => {
        console.log(message);
    };

    document.getElementById("leeftijd").textContent = typeof leeftijd;
    document.getElementById("intrest").textContent = typeof intrest;
    document.getElementById("isGevaarlijk").textContent = typeof isGevaarlijk;
    document.getElementById("vandaag").textContent = typeof vandaag;
    document.getElementById("print").textContent = typeof print;
};

window.addEventListener("load", setup);
