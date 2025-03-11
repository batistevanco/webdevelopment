const setup = () => {
    const woord = "plezier";

    // Loop door het woord en haal trigrams op
    for (let i = 0; i < woord.length - 2; i++) {
        let trigram = woord.substring(i, i + 3);
        console.log(trigram);
    }

}
window.addEventListener("load", setup); 