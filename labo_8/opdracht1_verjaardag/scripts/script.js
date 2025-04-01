const setup = () => {
    let datumVanVandaag = new Date();
    let VerjaardagDatum = new Date(2006, 5, 16);

    let aantaldagen = (datumVanVandaag - VerjaardagDatum)

    console.log(Math.floor(aantaldagen / (1000 * 60 * 60 * 24)))
}

window.addEventListener("load", setup); 