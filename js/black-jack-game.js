/* Image Tags: <img src="images/2H.jpg" alt="" class="image"> */

let buttons = document.querySelector('.buttons');
let messageBarPlay = document.querySelector('#player');
let messageBarDeal = document.querySelector('#dealer');
let body = document.body;
let dealCount = 0;
let scorePlay = 0;
let scoreDeal = 0;
let cardCount = 0;
let stand = 0;
let dealerHand = [];
let playerHand = [];
let changed = [];

let scoreBoardPlayer = document.querySelector("#player-points");
let scoreBoardDealer = document.querySelector("#dealer-points");
let table = document.querySelector("#table");
let messageBoard = document.createElement('div');

messageBoard.className = "column";
let messageTop = document.createElement('div')
messageBoard.append(messageTop);
let messageBottom = document.createElement('div')
messageBoard.append(messageBottom);
table.append(messageBoard);

function createImage(imageURl, classes){
    var newImage = document.createElement('img')
    newImage.setAttribute('src', imageURl);
    newImage.className = classes;
    return newImage
}

function endGameMessage(top, bottom){

    messageTop.className = "display-2 d-flex justify-content-center";
    messageTop.textContent = top;

    messageBottom.className = "display-4 d-flex justify-content-center";
    messageBottom.textContent = bottom;

}

function deal(cardCount){
    if(cardCount < 2){
        let newImage = createImage(cards[cardCount].image, "image");
        messageBarPlay.append(newImage);
        scorePlay += cards[cardCount].value;
        playerHand.push(cards[cardCount]);

    }
    else if (cardCount == 2)
    {
        let newImage = createImage(cards[cardCount].image, "image");
        messageBarDeal.append(newImage);
        scoreDeal += cards[cardCount].value;
        dealerHand.push(cards[cardCount]);
    }
    else
    {
        let backImage = createImage("images/blue_back.jpg", "image back-image");
        messageBarDeal.append(backImage);
    }
}


// console.log(buttons);

buttons.addEventListener('click', function(e){
    if (e.target.textContent == 'Deal')
    {    
        if(dealCount == 0)
        {
            for(cardCount; cardCount < 4; cardCount++)
            {
                deal(cardCount);
            }
            dealCount = 1;
            
        }
        else
        {
            let images = document.getElementsByClassName("image")
            let imgAry = Array.from(images)
            imgAry.forEach(function(element){
                element.remove();
            })
            shuffleArray(cards);
            cardCount = 0;
            dealCount = 0;
            console.log(images);
            scorePlay = 0;
            scoreDeal = 0;
            dealerHand = [];
            playerHand = [];
            messageTop.textContent = '';
            messageBottom.textContent = '';
            stand = 0;
            changed.forEach(function(element){
                element.value = 11;
            })
        }
        if (scorePlay == 21)
            {
                endGameMessage("You Won", "Blackjack");
            }

    }
    if (e.target.textContent == 'Hit')
    {
        if(scorePlay < 21 && dealCount == 1)
        {
            let newImage = createImage(cards[cardCount].image, "image");
            messageBarPlay.append(newImage);
            playerHand.push(cards[cardCount]);
            cardCount++;
            scorePlay = 0;
            playerHand.forEach(function(element){
                scorePlay += element.value;
            })
            if(scorePlay > 21)
            {
                playerHand.forEach(function(element){
                    if (element.value == 11)
                    {
                        element.value = 1
                        changed.push(element);
                    }
                })
            }
            scorePlay = 0;
            playerHand.forEach(function(element){
                scorePlay += element.value;
            })

            if (scorePlay > 21)
            {
                endGameMessage("You Lose", "You busted by going over 21")
                stand = 1;
            }
            else if (scorePlay == 21)
            {
                endGameMessage("You Win", "You hit 21");
                stand = 1;
            }

        }

    }
    if (e.target.textContent == 'Stand')
    {
        if (stand == 0)
        {
            let backImage = document.querySelector('.back-image');
            backImage.remove();
            let newImage = createImage(cards[3].image, 'image');
            scoreDeal += cards[3].value;
            messageBarDeal.append(newImage);
            stand++;
            dealerHand.push(cards[3]);

            while(scoreDeal < 17)
            {
                let newImage = createImage(cards[cardCount].image, "image");
                messageBarDeal.append(newImage);
                dealerHand.push(cards[cardCount]);
                cardCount++;
                scoreDeal = 0;
                dealerHand.forEach(function(element){
                    scoreDeal += element.value;
                    console.log(element);
                })
                if(scoreDeal > 21)
                {
                    dealerHand.forEach(function(element){
                        if (element.value == 11)
                        {
                            // element.value = 1
                            changed.push(element);
                        }
                    })
                }
                scoreDeal = 0;
                dealerHand.forEach(function(element){
                    scoreDeal += element.value;
                })


            }
            if (scoreDeal > 21)
            {
                endGameMessage("You Win", "Dealer busted by going over 21");
            }
            else if (scoreDeal == 21)
            {
                endGameMessage("You Lost", "Dealer hit 21");
            }
            else if (scoreDeal > scorePlay)
            {
                endGameMessage("You Lost", "Dealer is closer to 21");
            }
            else if (scoreDeal == scorePlay)
            {
                endGameMessage("You Tied", "You and the dealer got the same score")
            }
            else
            {
                endGameMessage("You Won", "You are closer to 21");
            }
        }



    }

    scoreBoardDealer.textContent = scoreDeal;
    scoreBoardPlayer.textContent = scorePlay;

})
