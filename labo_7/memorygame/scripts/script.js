let global = {
    AANTAL_GELIJKE_KAARTEN: 2, // Aantal gelijke kaarten die moeten gevonden worden
    isBusy: false,
    flippedCards: []
};

const setup = () => {
    let cards = document.querySelectorAll(".card");

    // Schud de kaarten bij het laden van de pagina
    shuffleCards(cards);

    cards.forEach(card => card.addEventListener("click", () => flipCard(card)));
};

// Functie om de kaarten te schudden
const shuffleCards = (cards) => {
    let cardArray = Array.from(cards); // Zet de NodeList om naar een array
    for (let i = cardArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1)); // Kies een willekeurige index
        [cardArray[i], cardArray[j]] = [cardArray[j], cardArray[i]]; // Wissel de kaarten
    }

    // Plaats de kaarten opnieuw in de juiste volgorde
    cardArray.forEach(card => {
        card.parentNode.appendChild(card);
    });
};

const flipCard = (card) => {
    if (global.isBusy || global.flippedCards.includes(card) || card.classList.contains("flip")) return;

    card.classList.add("flip");
    global.flippedCards.push(card);

    if (global.flippedCards.length === global.AANTAL_GELIJKE_KAARTEN) {
        global.isBusy = true;
        checkForMatch();
    }
};

const checkForMatch = () => {
    let isMatch = global.flippedCards.every(card => card.dataset.kaart === global.flippedCards[0].dataset.kaart);

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
        resetTurn();
    }, 1000);
};

const resetTurn = () => {
    global.flippedCards = [];
    global.isBusy = false;
};

window.addEventListener("load", setup);