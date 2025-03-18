const setup = () => {
    let listItems = document.querySelectorAll("li");

    
    listItems.forEach(item => {
        item.classList.add("listitem");
    });

    
    let img = document.createElement("img");

    img.src = "images/download.jpeg"; 

    document.body.appendChild(img);
}
window.addEventListener("load", setup); 