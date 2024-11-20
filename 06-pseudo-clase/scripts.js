const quoteElement = document.getElementById('quote')
const authorElement = document.getElementById('author')
const requestButton = document.getElementById('request-button')

const requestQuote = async () => {
    const request = await fetch('https://api.breakingbadquotes.xyz/v1/quotes');
    const data = await request.json();

    quoteElement.textContent = data[0].quote;
    authorElement.textContent = data[0].author
};

requestButton.addEventListener('click', requestQuote)