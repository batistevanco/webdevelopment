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
    historyWaarden.push({...h});
    store();
    renderHistory();

    let zoekbalk = document.getElementById("zoekopdracht");
    zoekbalk.value = ""; // Zet inputveld leeg
}


const createCard = (data) => {
    let historyElement = document.getElementById("history");

    // bepaal kleur op basis van titel
    let bgColor = "";
    switch (data.title.toLowerCase()) {
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
                <h5 class="card-title">${data.title}</h5>
                <p class="card-text">${data.text}</p>
                <a href="${data.url}" target="_blank" class="btn btn-dark btn-sm">Go!</a>
            </div>
        </div>
    `;

    // Dynamisch verwijder-knop aanmaken
    let verwijderBtn = document.createElement("a");
    verwijderBtn.className = "btn btn-dark btn-sm";
    verwijderBtn.innerText = "Verwijder";
    verwijderBtn.href = "#";
    verwijderBtn.addEventListener("click", verwijderElement);
    verwijderBtn.dataset.title = data.title;
    verwijderBtn.dataset.text = data.text;
    verwijderBtn.dataset.url = data.url;

    card.querySelector(".card-body").appendChild(verwijderBtn);

    historyElement.appendChild(card);
}

const store = () => {
    localStorage.setItem('history', JSON.stringify(historyWaarden));
};

const inladen = () => {
    const saved = localStorage.getItem('history');
    if (saved) {
        historyWaarden = JSON.parse(saved);
    }
};

const renderHistory = () => {
    const historyElement = document.getElementById("history");
    historyElement.innerHTML = "";
    historyWaarden.sort((a, b) => {
        const titleA = a.title.toLowerCase();
        const titleB = b.title.toLowerCase();
        if (titleA < titleB) return -1;
        if (titleA > titleB) return 1;
        const textA = a.text.toLowerCase();
        const textB = b.text.toLowerCase();
        if (textA < textB) return -1;
        if (textA > textB) return 1;
        return 0;
    });
    historyWaarden.forEach(item => createCard(item));
};

const verwijderElement = (event) => {
    event.preventDefault();
    const title = event.target.dataset.title;
    const text = event.target.dataset.text;
    const url = event.target.dataset.url;
    const index = historyWaarden.findIndex(item =>
        item.title === title && item.text === text && item.url === url
    );
    if (index > -1) {
        historyWaarden.splice(index, 1);
        store();
        renderHistory();
    }
}



window.addEventListener("load", () => {
    inladen();
    renderHistory();
    setup();
});