const flipSound = document.getElementById("flipSound");
const unflipSound = document.getElementById("unflipSound");

let global = {
    AANTAL_GELIJKE_KAARTEN: 3, // Aantal gelijke kaarten die moeten worden gevonden
    isBusy: false,
    flippedCards: []
};

// Dit object bevat de geluiden die overeenkomen met de kaarten
const sounds = {
    sound1: new Audio('sounds/sound1.wav'),
    sound2: new Audio('sounds/sound2.wav'),
    sound3: new Audio('sounds/sound3.wav'),
};

const setup = () => {
    let cards = document.querySelectorAll(".card");
    shuffleCards(cards);  // Kaarten door elkaar schudden
    cards.forEach(card => card.addEventListener("click", () => flipCard(card)));
    setupGridLayout();  // Dynamische layout opstarten bij het laden
    window.addEventListener("resize", setupGridLayout);  // Layout opnieuw instellen bij het wijzigen van de grootte van het scherm
};

const flipCard = (card) => {
    if (global.isBusy || global.flippedCards.includes(card) || card.classList.contains("flip")) return;

    card.classList.add("flip");
    flipSound.play();  // Geluid afspelen bij het omdraaien van een kaart
    
    const sound = sounds[card.dataset.sound];
    sound.play();  // Geluid afspelen op basis van de geselecteerde kaart

    global.flippedCards.push(card);

    if (global.flippedCards.length === global.AANTAL_GELIJKE_KAARTEN) {
        global.isBusy = true;
        checkForMatch();
    }
};

const checkForMatch = () => {
    let isMatch = global.flippedCards.every(card => card.dataset.sound === global.flippedCards[0].dataset.sound);
    isMatch ? disableCards() : unflipCards();
};

const disableCards = () => {
    setTimeout(() => {
        global.flippedCards.forEach(card => card.style.visibility = "hidden");
        resetTurn();
    }, 500);
};

const unflipCards = () => {
    setTimeout(() => {
        global.flippedCards.forEach(card => card.classList.remove("flip"));
        unflipSound.play();  // Geluid afspelen bij terugdraaien
        resetTurn();
    }, 1000);
};

const resetTurn = () => {
    global.flippedCards = [];
    global.isBusy = false;
};

const shuffleCards = (cards) => {
    // Shuffle de kaarten met de Fisher-Yates shuffle
    for (let i = cards.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        cards[i].parentNode.insertBefore(cards[j], cards[i]);
    }
};

const setupGridLayout = () => {
    const gameBoard = document.getElementById('gameBoard');
    const cards = document.querySelectorAll('.card');
    const boardWidth = gameBoard.offsetWidth;  // Breedte van het beschikbare gebied
    const cardWidth = cards[0].offsetWidth + 10;  // Breedte van één kaart (inclusief gap)
    const cardHeight = cards[0].offsetHeight + 10;  // Hoogte van één kaart (inclusief gap)

    // Bereken het aantal kolommen op basis van de breedte van de gameboard en de kaarten
    const columns = Math.floor(boardWidth / cardWidth);
    const rows = Math.ceil(cards.length / columns);  // Zorg ervoor dat alle kaarten passen

    gameBoard.style.gridTemplateColumns = `repeat(${columns}, 1fr)`;
    gameBoard.style.gridTemplateRows = `repeat(${rows}, ${cardHeight}px)`;
};

window.addEventListener("load", setup);