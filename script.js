let quotes = [];

let currentQuote = null;

const quoteElement = document.getElementById("quote");
const authorElement = document.getElementById("author");
const category = document.getElementById("category");
const button = document.getElementById("newQuoteBtn");

async function loadQuotes() {

    const response = await fetch("quotes.json");

    quotes = await response.json();

    showRandomQuote();

}

function showRandomQuote() {

    const selectedCategory = category.value;

    let filteredQuotes = quotes;

    if (selectedCategory !== "All") {

        filteredQuotes = quotes.filter(

            quote => quote.category === selectedCategory

        );

    }

    const randomIndex = Math.floor(Math.random() * filteredQuotes.length);

    currentQuote = filteredQuotes[randomIndex];

    quoteElement.innerHTML = `"${currentQuote.quote}"`;

    authorElement.innerHTML = `— ${currentQuote.author}`;

}

button.addEventListener("click", showRandomQuote);

category.addEventListener("change", showRandomQuote);

loadQuotes();