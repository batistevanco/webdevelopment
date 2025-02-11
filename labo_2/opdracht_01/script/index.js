const setup = () => {
    window.alert("Dit is een mededeling");

    const confirmResult = window.confirm("Weet u het zeker?");
    console.log("Return value van confirm:", confirmResult);

    const promptResult = window.prompt("Wat is uw naam?", "onbekend");
    console.log("Return value van prompt:", promptResult);

}
window.addEventListener("load", setup); 