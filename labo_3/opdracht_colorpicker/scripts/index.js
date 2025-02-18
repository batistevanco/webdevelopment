const setup = () => {
    let sliders = document.getElementsByClassName("slider");

    for (let i = 0; i < sliders.length; i++) {
        sliders[i].addEventListener("input", update);
    }
}

const update = () => {
    let rood = document.getElementById('rood').value;
    let groen = document.getElementById('groen').value;
    let blauw = document.getElementById('blauw').value;

    let roodTekst = document.getElementById('roodTekst');
    let groenTekst = document.getElementById('groenTekst');
    let blauwTekst = document.getElementById('blauwTekst');


    roodTekst.textContent = `Rood: ${rood}`;
    groenTekst.textContent = `Groen: ${groen}`;
    blauwTekst.textContent = `Blauw: ${blauw}`;

    let colorDemo = document.getElementsByClassName("colorDemo")[0];
    colorDemo.style.backgroundColor = `rgb(${rood}, ${groen}, ${blauw})`;
}


window.addEventListener("load", setup);
