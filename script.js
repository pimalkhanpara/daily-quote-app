let quotes = [];

let currentQuote = null;

const quoteElement = document.getElementById("quote");

const authorElement = document.getElementById("author");

const button = document.getElementById("newQuoteBtn");

async function loadQuotes() {

    try {

        const response = await fetch("quotes.json");

        quotes = await response.json();

        showRandomQuote();

    }

    catch(error){

        quoteElement.innerHTML = "Unable to load quotes.";

        console.error(error);

    }

}

function showRandomQuote(){

    const randomIndex = Math.floor(Math.random() * quotes.length);

    currentQuote = quotes[randomIndex];

    quoteElement.innerHTML = `"${currentQuote.quote}"`;

    authorElement.innerHTML = `— ${currentQuote.author}`;

}

button.addEventListener("click", showRandomQuote);

loadQuotes();