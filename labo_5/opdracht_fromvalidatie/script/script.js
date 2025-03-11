const setup = () => {
    document.getElementById("btnValideer").addEventListener("click", function() {
        let fout = false;
    
        function toonFout(id, boodschap) {
            document.getElementById(id).innerText = boodschap;
            document.getElementById(id.replace("error-", "")).classList.add("fout");
            fout = true;
        }
    
        function resetFout(id) {
            document.getElementById(id).innerText = "";
            document.getElementById(id.replace("error-", "")).classList.remove("fout");
        }
    
        let voornaam = document.getElementById("voornaam").value.trim();
        if (voornaam.length > 30) {
            toonFout("error-voornaam", "Max. 30 karakters");
        } else {
            resetFout("error-voornaam");
        }
    
        let familienaam = document.getElementById("familienaam").value.trim();
        if (familienaam.length === 0) {
            toonFout("error-familienaam", "Verplicht veld");
        } else if (familienaam.length > 50) {
            toonFout("error-familienaam", "Max. 50 karakters");
        } else {
            resetFout("error-familienaam");
        }
    
        let geboortedatum = document.getElementById("geboortedatum").value.trim();
        if (geboortedatum.length === 0) {
            toonFout("error-geboortedatum", "Verplicht veld");
        } else if (!/^\d{4}-\d{2}-\d{2}$/.test(geboortedatum)) {
            toonFout("error-geboortedatum", "Formaat is niet jjjj-mm-dd");
        } else {
            resetFout("error-geboortedatum");
        }
    
        let email = document.getElementById("email").value.trim();
        if (email.length === 0) {
            toonFout("error-email", "Verplicht veld");
        } else if (!email.includes("@") || email.startsWith("@") || email.endsWith("@")) {
            toonFout("error-email", "Geen geldig email adres");
        } else {
            resetFout("error-email");
        }
    
        let aantalKinderen = document.getElementById("aantalKinderen").value.trim();
        if (!/^\d+$/.test(aantalKinderen)) {
            toonFout("error-kinderen", "Is geen positief getal");
        } else if (parseInt(aantalKinderen) >= 99) {
            toonFout("error-kinderen", "Is te vruchtbaar");
        } else {
            resetFout("error-kinderen");
        }
    
        if (!fout) {
            alert("Proficiat!");
        }
    });    
};

window.addEventListener("load", setup);
