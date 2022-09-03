let apiQuotes = [];

// Get quotes from API
async function getQuotes () {
  const apiUrl = 'https://jacintodesign.github.io/quotes-api/data/quotes.json';
  try {
    const response = await Fetch(apiUrl);
    apiQuotes = await response.json();
    console.log(apiQuotes);
  } catch (error) {
    alert (error)
    // Catch Error Here
  }
}

// On load
getQuotes();