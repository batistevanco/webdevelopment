const setup = () => {
    let student1 = {
        naam: "Batiste",
        leeftijd: 18,
        opleiding: "IT",
    };
    
    let jsonString = JSON.stringify(student1);
    console.log(jsonString);

    let objectStudent = JSON.parse(jsonString)

    console.log(objectStudent.naam)

}


window.addEventListener("load", setup); 