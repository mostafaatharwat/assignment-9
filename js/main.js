quotes = [
    `“Be yourself; everyone else is already taken.”
     <br>― Oscar Wilde`,
     `“So many books, so little time.”
     <br>― Frank Zappa`,
     `“A room without books is like a body without a soul.”
     <br> ― Marcus Tullius Cicero`,
     `“You only live once, but if you do it right, once is enough.”
     <br> ― Mae West`,
     `“Be the change that you wish to see in the world.”
     <br> ― Mahatma Gandhi`,
     `“If you tell the truth, you don't have to remember anything.”
     <br> ― Mark Twain`,
     `“Always forgive your enemies; nothing annoys them so much.”
     <br> ― Oscar Wilde`,
     `“Life is what happens to us while we are making other plans.”
     <br>― Allen Saunders`,
     `“I have not failed. I've just found 10,000 ways that won't work.”
     <br> ― Thomas A. Edison`,
     `“If you don't stand for something you will fall for anything.”
     <br> ― Gordon A. Eadie`
    ];
var lengthOfQuotes = quotes.length;

function addQuote() {
// to get random number between 0 and length of array and switch num to integer
  var randomNum = Math.floor(Math.random() * lengthOfQuotes);
  document.getElementById("quote").innerHTML = quotes[randomNum];
}



