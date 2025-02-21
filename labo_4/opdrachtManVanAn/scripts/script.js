let tekst = "De man van An geeft geen hand aan ambetante verwanten";
let zoektekst = "an";
let count = 0;
let positie = 0;

while ((positie = tekst.indexOf(zoektekst, positie)) !== -1) {
    count++;
    positie += zoektekst.length; 
}

console.log("Aantal keer 'an' met indexOf:", count);


let tekst2 = "De man van An geeft geen hand aan ambetante verwanten";
let zoektekst2 = "an";
let count2 = 0;
let positie2 = tekst2.length;

while ((positie2 = tekst2.lastIndexOf(zoektekst2, positie2 - 1)) !== -1) {
    count2++;
}

console.log("Aantal keer 'an' met lastIndexOf:", count2);

