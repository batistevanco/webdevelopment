const setup = () => {

    let familieleden = ["Jan", "Emma", "Lucas", "Sophie", "Noah"];


    console.log("Aantal familieleden:", familieleden.length);

    console.log("Eerste familielid:", familieleden[0]);
    console.log("Derde familielid:", familieleden[2]);
    console.log("Vijfde familielid:", familieleden[4]);

    const voegNaamToe = (array) => {
        let nieuweNaam = prompt("Voer een extra familielid in:");
        if (nieuweNaam) array.push(nieuweNaam); // Array wordt direct aangepast
    };

    voegNaamToe(familieleden);

    console.log("Bijgewerkte lijst familieleden:", familieleden);

    console.log("Familieleden als string:", familieleden.join(", "));

}
window.addEventListener("load", setup); 