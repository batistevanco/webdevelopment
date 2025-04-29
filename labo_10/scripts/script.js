let h = {
    title: "",
    text: "",
    url: ""
};

let historyWaarden = [];

const setup = () => {
    let btn = document.getElementById('zoekBtn');
    btn.addEventListener('click', zoekSite)

    let verwijderBtn = document.getElementById('verwijderBtn');
    verwijderBtn.addEventListener('click', verwijderElement)
}

const bepaalURL = () => {
    //zoekopdracht ophalen
    let zoekopdracht = document.getElementById("zoekopdracht").value;

    //site bepalen
    let teken = "/"
    let index = zoekopdracht.indexOf(teken);
    let site = zoekopdracht.substring(index + 1, index + 2);
    let urlString = "";
    let gezocht = zoekopdracht.substring(index + 3);

    if (site === "y"){
        //youtube
        urlString = "https://www.youtube.com/results?search_query=" + gezocht;
        title = "Youtube"
    } else if (site === "x"){
        //x.com
        urlString = "https://www.x.com/hashtag/" + gezocht;
        title = "X.COM"
    } else if (site === "g"){
        //google
        urlString = "https://www.google.com/search?q=" + gezocht;
        title = "Google"
    } else if (site === "i"){
        //instagram
        urlString = "https://www.instagram.com/explore/tags" + gezocht;
        title = "Instagram"
    } else if (index === -1){
        window.alert("Invalid command")
    } else {
        window.alert("Unknown command prefix");
    }

    h.title = title;
    h.text = gezocht;
    h.url = urlString;
}

const zoekSite = () => {
    bepaalURL();
    window.open(h.url, "_blank");
    createCard();

    let zoekbalk = document.getElementById("zoekopdracht");
    zoekbalk.value = ""; // Zet inputveld leeg

    store();
}


const createCard = () => {
    let historyElement = document.getElementById("history");

    // bepaal kleur op basis van titel
    let bgColor = "";
    switch (h.title.toLowerCase()) {
        case "youtube":
            bgColor = "bg-danger text-white";
            break;
        case "x.com":
            bgColor = "bg-info text-white";
            break;
        case "google":
            bgColor = "bg-primary text-white";
            break;
        case "instagram":
            bgColor = "bg-magenta text-white"; // voeg aangepaste kleur toe via CSS indien nodig
            break;
        default:
            bgColor = "bg-light";
    }

    let card = document.createElement("div");
    card.className = "col-md-3 mb-3";

    card.innerHTML = `
        <div class="card ${bgColor}">
            <div class="card-body">
                <h5 class="card-title">${h.title}</h5>
                <p class="card-text">${h.text}</p>
                <a href="${h.url}" target="_blank" class="btn btn-dark btn-sm">Go!</a>
            </div>
        </div>
    `;

    // Dynamisch verwijder-knop aanmaken
    let verwijderBtn = document.createElement("a");
    verwijderBtn.className = "btn btn-dark btn-sm";
    verwijderBtn.innerText = "Verwijder";
    verwijderBtn.href = "#";
    verwijderBtn.addEventListener("click", verwijderElement);
    verwijderBtn.dataset.title = h.title;
    verwijderBtn.dataset.text = h.text;
    verwijderBtn.dataset.url = h.url;

    card.querySelector(".card-body").appendChild(verwijderBtn);

    historyElement.appendChild(card);
}

const store = () => {
    historyWaarden.push({
        title: h.title,
        text: h.text,
        url: h.url
    });

    localStorage.setItem("HISTORY", JSON.stringify(historyWaarden));
};

const inladen = () => {
    const opgeslagenTekst = localStorage.getItem("HISTORY") || '[]';
    const opgeslagenHistory = JSON.parse(opgeslagenTekst);

    opgeslagenHistory.forEach((item) => {
        h.title = item.title;
        h.text = item.text;
        h.url = item.url;
        createCard();
        historyWaarden.push(item);
    });
};

const verwijderElement = (event) => {
    event.preventDefault();
    event.stopPropagation();

    let button = event.target;
    let card = button.closest(".col-md-3");
    if (card) {
        card.remove();
    }

    const title = button.dataset.title;
    const text = button.dataset.text;
    const url = button.dataset.url;

    // Verwijder het juiste item uit historyWaarden en update localStorage
    historyWaarden = historyWaarden.filter(item => !(item.title === title && item.text === text && item.url === url));
    localStorage.setItem("HISTORY", JSON.stringify(historyWaarden));
}



window.addEventListener("load", () => {
    setup();
    inladen();
});