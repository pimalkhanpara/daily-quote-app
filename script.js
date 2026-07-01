let quotes = [];

fetch("quotes.json")
.then(response => response.json())
.then(data => {
    quotes = data;
});

function generateQuote(){

    let random = Math.floor(Math.random()*quotes.length);

    document.getElementById("quote").innerHTML =
        quotes[random];

}
