const setup = () => {
    let tekst = "Gisteren zat de jongen op de stoep en at de helft van de appel";
    let gewijzigdeTekst = "";
    let i = 0;

    while (i < tekst.length) {
        if (tekst[i].toLowerCase() === 'd' && tekst[i + 1] === 'e' && (i + 2 === tekst.length || tekst[i + 2] === ' ' || tekst[i + 2] === '.')) {
            gewijzigdeTekst += "het";
            i += 2;
        } else {
            gewijzigdeTekst += tekst[i];
            i++;
        }
    }
    
    console.log(gewijzigdeTekst);

}
window.addEventListener("load", setup); 