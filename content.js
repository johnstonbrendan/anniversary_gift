// console.log("Hello world")
// console.log("memem")
// console.log('new')
card_in_hand_class = "css-ach1w2"

// follow this video to setup chrome extensions:
// https://www.youtube.com/watch?v=9Tl3OmwrSaM&list=PLRqwX-V7Uu6bL9VOMT65ahNEri9uqLWfS&index=3



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

// Regex for replacing the "M" with "H"
const M_to_H_regex =  /(\d+)M/g;

// Word to replace mask with
replaceMaskText = "Hug" // have to manually replace the first letter in the corner of cards in code below


// https://stackoverflow.com/questions/2157963/is-it-possible-to-listen-to-a-style-change-event
// Make an observer to see if the cards in the hand have change
var handObserver = new MutationObserver(function(mutations) {
  // console.log("Here maybe")
  mutations.forEach(function(mutationRecord) {
      console.log('hand changed!');


      handObserver.disconnect()


      editHand()
      editHandMoneyCorner()
      editHandMaskWord()

      // editAllMoneyCorner()
      startHandObserver()
  });    
});

var popUpObserver = new MutationObserver(function(mutations){
  mutations.forEach(function(mutationRecord){
    console.log("New Pop Up")

    popUpObserver.disconnect()
    
    editHand()
    editTable()
    editPopUpMoneyCorner()
    editMasksPopupRequestText()

    startPopUpObserver()
    
    
    // editAllMoneyCorner()
  })
})

var tableObserver = new MutationObserver(function(mutations) {
  mutations.forEach(function(mutationRecord) {
      console.log('table changed!');
      tableObserver.disconnect()
      editTable()
      editTableMoneyCorner()
      editMaskCountWord()
      startTableObserver()

      startTableObserver()
      // editAllMoneyCorner()
  });    
});

// https://stackoverflow.com/questions/5525071/how-to-wait-until-an-element-exists
waitForElementToDisplay("#your-hand",".css-1omjsz4",main,1000,1e7);
// Wait for game to load^^^ then run main

function waitForElementToDisplay(selector1,selector2, callback, checkFrequencyInMs, timeoutInMs) {
    var startTimeInMs = Date.now();
    (function loopSearch() {

      if (document.querySelector(selector1) != null && document.querySelector(selector1).querySelector(selector2) != null) {
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



function waitForElementToDie(selector, callback, checkFrequencyInMs, timeoutInMs) {
  var startTimeInMs = Date.now();
  (function loopSearch() {
    if (document.querySelector(selector) == null) {
      console.log('death')
      setTimeout(() => {  callback(); }, 1000);
      
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
    // hand = document.getElementById("your-hand")
    // console.log(hand)

    // printAllMoneyCorner()
    
    editHand()
    editTable()
// editAllMoneyCorner()
    editHandMoneyCorner()
    editTableMoneyCorner()
    editHandMaskWord()
    editHandMDescrt()
    editMaskCountWord()

    // hand.style.bottom = "200px"
    

    
    startHandObserver()
    startTableObserver()
    startPopUpObserver()
    
    waitForElementToDie("#other-players",waitForElementToDisplay("#your-hand",".css-1omjsz4",main,1000,1e7),3000,1e7)
}
// Debug function
function printAllCards(){
  handCards = document.querySelectorAll('.css-12z5dl1')
  handCards.forEach(card => {
    console.log(card.innerHTML)
  })
}

// Debug function
function printAllMoneyCorner(){
  moneyCorners = document.querySelectorAll('.css-1omjsz4')
  moneyCorners.forEach(corner => {
    console.log(corner.innerHTML)
  })
}

function editHandMoneyCorner(){
  handMoneyCorners = document.querySelector('#your-hand').querySelectorAll('.css-1omjsz4')
  handMoneyCorners.forEach(corner => {
    console.log("Found corner")
    console.log(corner)
    curHandCornerTet = corner.innerHTML
    corner.innerHTML = curHandCornerTet.replace(M_to_H_regex, '$1H')
  })
}

function editPopUpMoneyCorner(){

  var window = document.querySelector('.css-vlqn3g')
  if (window != null){
    popUpMoneyCorners = window.querySelectorAll('.css-1omjsz4')
    
    popUpMoneyCorners.forEach(corner => {
      curPopUpCornerTet = corner.innerHTML
      corner.innerHTML = curPopUpCornerTet.replace(M_to_H_regex, '$1H')
    })
  }
}


function editTableMoneyCorner(){
  var playersTables =  document.querySelectorAll('.player-cards.css-opvb8');
  playersTables.forEach(table => {
    // console.log("267")
    tableMoneyCorners = table.querySelectorAll('.css-1omjsz4')
    tableMoneyCorners.forEach(corner => {
      curHandCornerTet = corner.innerHTML
      // console.log(curHandCornerTet)
      corner.innerHTML = curHandCornerTet.replace(M_to_H_regex, '$1H')
  })
  })
}

function editTableMaskWord(){
  // TODO: make this do the table as above but with mask word
}

function editPopupMaskWord(){
  // TODO: make this do the popup as above but with mask word
}

function editHandMaskWord(){
  var maskCards = document.querySelector('#your-hand').querySelectorAll('.css-1f7tksj')
  // console.log(maskCards)
  maskCards.forEach(card => {
    curMaskText = card.innerHTML
    // console.log(curMaskText)
    card.innerHTML = curMaskText.replace("Mask",replaceMaskText)
  })
}

function editHandMDescrt(){
  var maskCards = document.querySelector('#your-hand').querySelectorAll('.description.css-16s3zni')
  // console.log(maskCards)
  maskCards.forEach(card => {
    curMaskText = card.innerHTML
    // console.log(curMaskText)
    card.innerHTML = curMaskText.replace(M_to_H_regex, '$1H')
  })
}

function editPopUpMDescrt(){
// same as above for the description like charge 5M
}

function editMasksPopupRequestText(){ // Note this doesn't work for the rainbow rent cards. Would have to dig through a lot of layers
  var rentRectangles = document.querySelectorAll('.css-3t37o0')
  rentRectangles.forEach(rect => {
    var divs = rect.childNodes
    divs.forEach(div => {
      curText = div.innerHTML
      div.innerHTML = curText.replace("Mask",replaceMaskText)
    })
  })
}

function editPopupMasksText(){
  // When it gives a summary of the players masks and cards when choosing who to target
}

function editMaskCountWord(){
  var maskCounters = document.querySelectorAll('.css-rk7wlr')
  maskCounters.forEach(counter => {
    curCounterTxt = counter.innerHTML
    counter.innerHTML = curCounterTxt.replace("Mask",replaceMaskText)
  })

}

// Setup hand observers
function startHandObserver(){
  var userHand = document.getElementById('your-hand');
  handObserver.observe(userHand, { subtree : true , childList: true })//, characterData: true})//, subtree : true });
}

function startTableObserver(){
  var playersTables =  document.querySelectorAll('.player-cards.css-opvb8');
  playersTables.forEach(table => {
    tableObserver.observe(table, { subtree : true , childList: true })//, characterData: true});
    // console.log(table) // just to see how many there are
    // console.log("got a player table")
  })
}

function startPopUpObserver(){
  var popUpRoot = document.querySelector('.css-0')
  popUpObserver.observe(popUpRoot, { subtree : TreeWalker, childList : true} )
}
// function editAllMoneyCorner(){
//   moneyCorners = document.querySelectorAll('.css-1omjsz4')
//   moneyCorners.forEach(corner => {
//     // console.log("in edit ll money corner")
//     // console.log(corner)
//     curCornerText = corner.innerHTML
//     corner.innerHTML = curHandCornerTet.replace(M_to_H_regex, '$1H')
//     // console.log(replaceText)
//   })
// }
// When the player plays a card or a new card is drawn callback

// When the opposing player plays a card callback

// When a pop up window comes up callback

// Change the text of all the cards on the Table
function editTable(){
  console.log("editing table")
  tableCards = document.querySelectorAll('.css-10em6k6')
  tableCards.forEach(card => {
  //  console.log(card.innerHTML)
   curCardText = card.innerHTML
   if (curCardText in cardNameReplacements){
    card.innerHTML = cardNameReplacements[curCardText]
   }
  })
}

// Change the text of all the cards in your hand
function editHand(){
  console.log("editing hand")
  handCards = document.querySelectorAll('.css-12z5dl1')
  handCards.forEach(card => {
  //  console.log(card.innerHTML)
   curCardText = card.innerHTML
   if (curCardText in cardNameReplacements){
    card.innerHTML = cardNameReplacements[curCardText]
   }
  })
}

// Change all the property cards names

// Change all the words mask to be Hugs

// Change all the Ms to Hs

// Change the Masks total on the side to hugs

// change the M in the action card deccriptions to H





