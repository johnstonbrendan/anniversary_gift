// console.log("Hello world")
// console.log("memem")
// console.log('new')
card_in_hand_class = "css-ach1w2"


// printAllCards()

// Name replacement dictionary, Have this imported one day
var cardNameReplacements = {
  "Immunity Place" : "REPLACE ME",
  "Vaccine Valley" : "REPLACE ME",
  "Wuhan Market" : "REPLACE ME",
  "Lockdown Lane" : "REPLACE ME",
  "Tik Tok Terrace" : "REPLACE ME",
  "Zoom Alley" : "REPLACE ME",
  "Netflix Canyon" : "REPLACE ME",
  "G.W. Zoo" : "REPLACE ME",
  "Big Cat Rescue" : "REPLACE ME",
  "Myrtle Beach Safari" : "REPLACE ME",
  "Stock Market Valley" : "REPLACE ME",
  "SBA Loan Street" : "REPLACE ME",
  "Unemployment Road" : "REPLACE ME",
  "Ventilator View" : "REPLACE ME",
  "N-95 Avenue" : "REPLACE ME",
  "Emergency Room Road" : "REPLACE ME",
  "Coral Princess" : "REPLACE ME",
  "Grand Princess" : "REPLACE ME",
  "Diamond Princess" : "REPLACE ME",
  "Regal Princess" : "REPLACE ME",
  "New York Hospital" : "REPLACE ME",
  "Milan Hospital" : "REPLACE ME",
  "Madrid Hospital" : "REPLACE ME",
  "Federal Reserve" : "REPLACE ME",
  "CDC" : "REPLACE ME",
  "Cuomo Circle" : "REPLACE ME",
  "Fauci Fairway" : "REPLACE ME",
  "Trump Terrace" : "REPLACE ME",
};

// Share hand ids css-12z5dl1


// https://stackoverflow.com/questions/2157963/is-it-possible-to-listen-to-a-style-change-event
// Make an observer to see if the cards in the hand have change
var handObserver = new MutationObserver(function(mutations) {
  console.log("Here maybe")
  mutations.forEach(function(mutationRecord) {
      console.log('hand changed!');
      editHand()
  });    
});

var popUpObserver = new MutationObserver(function(mutations){
  mutations.forEach(function(mutationRecord){
    console.log("New Pop Up")
    editHand()
    editTable()
  })
})

var tableObserver = new MutationObserver(function(mutations) {
  console.log("Here maybe")
  mutations.forEach(function(mutationRecord) {
      console.log('table changed!');
      editTable()
  });    
});

// https://stackoverflow.com/questions/5525071/how-to-wait-until-an-element-exists
waitForElementToDisplay("#your-hand",main,1000,1e7);
// Wait for game to load^^^ then run main

function waitForElementToDisplay(selector, callback, checkFrequencyInMs, timeoutInMs) {
    var startTimeInMs = Date.now();
    (function loopSearch() {
      if (document.querySelector(selector) != null) {
        callback();
        return;
      }
      else {
        setTimeout(function () {
          if (timeoutInMs && Date.now() - startTimeInMs > timeoutInMs)
            return;
          loopSearch();
        }, checkFrequencyInMs);
      }
    })();
  }


// Main function setups the for when to do the edits
function main(hand_selector) {
    console.log("Loaded screen")
    hand = document.getElementById("your-hand")
    console.log(hand)
    
    editHand()
    editTable()
    // hand.style.bottom = "200px"
    
    var userHand = document.getElementById('your-hand');
    handObserver.observe(userHand, { subtree : true , childList: true , characterData: true})//, subtree : true });
    
    var playersTables =  document.querySelectorAll('.player-cards.css-opvb8');
    playersTables.forEach(table => {
      tableObserver.observe(table, { subtree : true , childList: true , characterData: true});
      // console.log(table) // just to see how many there are
      // console.log("got a player table")
    })
    
    var popUpRoot = document.querySelector('.css-0')
    popUpObserver.observe(popUpRoot, { subtree : TreeWalker, childList : true} )
    
   
}

function printAllCards(){
  handCards = document.querySelectorAll('.css-12z5dl1')
  handCards.forEach(card => {
    console.log(card.innerHTML)
  })
}

// When the player plays a card or a new card is drawn callback

// When the opposing player plays a card callback

// When a pop up window comes up callback

// Change the text of all the cards on the Table
function editTable(){
  handCards = document.querySelectorAll('.css-10em6k6')
  handCards.forEach(card => {
   console.log(card.innerHTML)
   curCardText = card.innerHTML
   if (curCardText in cardNameReplacements){
    card.innerHTML = cardNameReplacements[curCardText]
   }
  })
}

// Change the text of all the cards in your hand
function editHand(){
  handCards = document.querySelectorAll('.css-12z5dl1')
  handCards.forEach(card => {
   console.log(card.innerHTML)
   curCardText = card.innerHTML
   if (curCardText in cardNameReplacements){
    card.innerHTML = cardNameReplacements[curCardText]
   }
  })
}

// Change all the property cards names

// Change all the words mask to be Hugs

// Change all the Ms to Hs




