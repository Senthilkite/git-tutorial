document.addEventListener("DOMContentLoaded", () => {
  //card options
  const cardArray = [
    {
      name: "fries",
      img: "../images/fries.png",
    },
    {
      name: "fries",
      img: "../images/fries.png",
    },
    {
      name: "cheeseburger",
      img: "../images/cheeseburger.png",
    },
    {
      name: "cheeseburger",
      img: "../images/cheeseburger.png",
    },
    {
      name: "hotdog",
      img: "../images/hotdog.png",
    },
    {
      name: "hotdog",
      img: "../images/hotdog.png",
    },
    {
      name: "iceccream",
      img: "../images/iceccream.png",
    },
    {
      name: "iceccream",
      img: "../images/iceccream.png",
    },
    {
      name: "milkshake",
      img: "../images/milkshake.png",
    },
    {
      name: "milkshake",
      img: "../images/milkshake.png",
    },
    {
      name: "pizza",
      img: "../images/pizza.png",
    },
    {
      name: "pizza",
      img: "../images/pizza.png",
    },
  ];
  cardArray.sort(() => 0.5 - Math.random());
  const grid = document.querySelector(".grid");
  const resultDisplay = document.querySelector("#result");
  var cardChosen = [];
  var cardChosenId = [];
  var cardsWon = [];
  //create your board
  function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
      var card = document.createElement("img");
      card.setAttribute("src", "../images/blank.png");
      card.setAttribute("data-id", i);
      card.addEventListener("click", flipcard);
      grid.appendChild(card);
    }
  }
  createBoard();
  //check for matches
  function checkForMatch() {
    var cards = document.querySelectorAll("img");
    const optionOneId = cardChosenId[0];
    const optionTwoId = cardChosenId[1];
    //  const optionThreeId=cardChosen[2];
    if (optionOneId === optionTwoId) {
      alert("you have found a match");
      cards[optionOneId].setAttribute("src", "./images/white.png");
      cards[optionTwoId].setAttribute("src", "./images/white.png");

      cardsWon.push(cardChosen);
    } else if (cardsChosen[0] === cardsChosen[1]) {
      alert("You found a match");
      cards[optionOneId].setAttribute("src", "images/white.png");
      cards[optionTwoId].setAttribute("src", "images/white.png");
      cards[optionOneId].removeEventListener("click", flipCard);
      cards[optionTwoId].removeEventListener("click", flipCard);
      cardsWon.push(cardsChosen);
    } else {
      cards[optionOneId].setAttribute("src", "./images/blank.png");
      cards[optionTwoId].setAttribute("src", "./images/blank.png");
      alert("Sorry Try again");
    }
    cardChosen = [];
    cardChosenId = [];
    resultDisplay.textContent == cardsWon.length;
    if (cardsWon.length === cardArray.length / 2) {
      resultDisplay.textContent = "Congratulation! You have found them all";
    }
  }

  //flip your card
  function flipcard() {
    var cardId = this.getAttribute("data-id");
    cardChosen.push(cardArray[cardId].name);
    cardChosenId.push(cardId);
    this.setAttribute("src", cardArray[cardId].img);
    if (cardChosen.length == 2) {
      setTimeout(checkForMatch, 500);
    }
  }
  createBoard();
});
