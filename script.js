const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');
const loader = document.getElementById('loader');

let apiQuotes = [];

// show loading
function loading() {
  loader.hidden = false;
  quoteContainer.hidden = true;
 
}

// Hide loading
function complete() {
  quoteContainer.hidden = false;
  loader.hidden =true;
}

// Show new quote
function newQuote() {
  loading();
  // Pick a random quote from apiQuotes array
  const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
  
  //check if author field is blank and replcae with "unknown"

  if (!quote.author) {
    authorText.textContent = 'Unknown';
  } else {
    authorText.textContent = quote.author;
  }

  // check quote length to determine styling

  if (quote.text.length > 120) {
    quoteText.classList.add('long-quote');
  } else {
    quoteText.classList.remove('long-quote');
  }

  // set quote, hide loader 
  quoteText.textContent = quote.text;
  complete();
}

// Get quotes from API
async function getQuotes() {
  loader();
   const apiUrl = 'https://jacintodesign.github.io/quotes-api/data/quotes.json';
   try {
     const response = await fetch(apiUrl);
     apiQuotes = await response.json();
     newQuote();
     console.log(apiQuotes);
   } catch (error) {
    
     // Catch Error Here
   }
 }

 //Tweet quote

 function tweetQuote() {
  const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
  window.open(twitterUrl, '_blank');
 }

 // Event Listener 
 newQuoteBtn.addEventListener('click', newQuote);
 twitterBtn.addEventListener('click', tweetQuote);

// On load
 getQuotes();
