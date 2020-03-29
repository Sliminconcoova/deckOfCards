// The purpose of this application is to create a shuffled deck of cards

// The shuffle function was already provided by the tutor
function shuffle(arr) {
  var j, x, i;
  for (i = arr.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      x = arr[i];
      arr[i] = arr[j];
      arr[j] = x;
  }
  return arr;
}

function createDeck() {
  var suites = ['♠︎','♣︎','♥︎','♦︎'];
  var ranks = ['Ace','King','Queen','Jack','10','9','8','7','6','5','4', '3','2'];
  var deck = [];
  // First objective is to create the 2D array
  for ( let i=0;i<suites.length;i++){
    for (let j=0;j<ranks.length;j++){
      let card = deck.push(ranks[j]+" "+suites[i]);
    }
  }
  // We need to then shuffle the top level array and return it to the script
  return shuffle(deck);
}

// We call the function and assign the returned array to a variable "myDeck"
var myDeck = createDeck();

// Show the shuffled deck of cards by looping through the array
for ( let i=0;i<myDeck.length;i++){
 console.log(myDeck[i]); 
}
