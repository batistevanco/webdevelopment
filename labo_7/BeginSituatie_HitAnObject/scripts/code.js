const global = {
    IMAGE_COUNT: 5, // aantal figuren
    IMAGE_SIZE: 48, // grootte van de figuur
    IMAGE_PATH_PREFIX: "images/", // map van de figuren
    IMAGE_PATH_SUFFIX: ".png", // extensie van de figuren
    MOVE_DELAY: 1000, // aantal milliseconden voor een nieuwe afbeelding verschijnt
    score: 0, // aantal hits
    timeoutId: null // id van de interval timer
};

let playField, startBtn, scoreDisplay, target;

const setup = () => {
    playField = document.getElementById("playField");
    startBtn = document.getElementById("startBtn");
    scoreDisplay = document.getElementById("score");

    target = document.createElement("img");
    target.id = "target";
    
    startBtn.addEventListener("click", startGame);
};

const startGame = () => {
    global.score = 0;
    scoreDisplay.textContent = 0;

    target.src = global.IMAGE_PATH_PREFIX + "0" + global.IMAGE_PATH_SUFFIX;
    playField.appendChild(target);
    moveTarget();

    global.timeoutId = setInterval(moveTarget, global.MOVE_DELAY);
};

const moveTarget = () => {
    let x = Math.random() * (playField.clientWidth - global.IMAGE_SIZE);
    let y = Math.random() * (playField.clientHeight - global.IMAGE_SIZE);
    target.style.left = `${x}px`;
    target.style.top = `${y}px`;

    let randomImg = Math.floor(Math.random() * global.IMAGE_COUNT);
    target.src = global.IMAGE_PATH_PREFIX + randomImg + global.IMAGE_PATH_SUFFIX;

    if (randomImg === global.IMAGE_COUNT - 5) {
        // Bom verschijnt → Klikken betekent game over
        target.onclick = gameOver;
    } else {
        // Normale afbeelding → Score verhogen bij klik
        target.onclick = increaseScore;
    }
};

const increaseScore = () => {
    global.score++;
    scoreDisplay.textContent = global.score;
    moveTarget();
};

const gameOver = () => {
    alert(`💥 Game Over! Je score: ${global.score}`);
    clearInterval(global.timeoutId);
    playField.removeChild(target);
};

window.addEventListener("load", setup);
