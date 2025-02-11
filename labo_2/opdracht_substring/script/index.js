const setup = () => {
    document.getElementById("substringButton").addEventListener("click", () => {
        const text = document.getElementById("inputText").value;
        const start = parseInt(document.getElementById("startIndex").value);
        const end = parseInt(document.getElementById("endIndex").value);

        const result = start >= 0 && end > start && end <= text.length
            ? text.substring(start, end)
            : "(geen output)";

        document.getElementById("output").textContent = result;
    });
}
window.addEventListener("load", setup); 