const quotes =[
    "Stop wait a minutes just love me a second",
    "The mindset is importance to glow up",
    "The way you see me seem like we will mary in june",
    "Struct in the bond of love we is't love just together",
    "King of the basketball player is LBJ"
]

const quotesDisplay = document.getElementById('quote-display');
const newQuoteBtn = document.getElementById('new-quote-btn');

function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    quotesDisplay.textContent = quotes[randomIndex];
}

newQuoteBtn.addEventListener('click', getRandomQuote);

getRandomQuote();