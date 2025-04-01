const flipSound = document.getElementById("flipSound");
const unflipSound = document.getElementById("unflipSound");

let global = {
    AANTAL_GELIJKE_KAARTEN: 3,
    isBusy: false,
    flippedCards: []
};

const sounds = {
    sound1: new Audio('sounds/sound1.wav'),
    sound2: new Audio('sounds/sound2.wav'),
    sound3: new Audio('sounds/sound3.wav'),
};

const setup = () => {
    let cards = document.querySelectorAll(".card");
    shuffleCards(cards);
    cards.forEach(card => card.addEventListener("click", () => flipCard(card)));
    setupGridLayout();
    window.addEventListener("resize", setupGridLayout);
};

const flipCard = (card) => {
    if (global.isBusy || global.flippedCards.includes(card) || card.classList.contains("flip")) return;

    card.classList.add("flip");
    flipSound.play();
    
    const sound = sounds[card.dataset.sound];
    sound.play();
    
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
        unflipSound.play();
        resetTurn();
    }, 1000);
};

const resetTurn = () => {
    global.flippedCards = [];
    global.isBusy = false;
};

const shuffleCards = (cards) => {
    for (let i = cards.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        cards[i].parentNode.insertBefore(cards[j], cards[i]);
    }
};

const setupGridLayout = () => {
    const gameBoard = document.getElementById('gameBoard');
    const cards = document.querySelectorAll('.card');
    const columns = 3;
    const rows = Math.ceil(cards.length / columns);
    gameBoard.style.gridTemplateColumns = `repeat(${columns}, 1fr)`;
    gameBoard.style.gridTemplateRows = `repeat(${rows}, auto)`;
};

window.addEventListener("load", setup);