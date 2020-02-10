/* Image Tags: <img src="images/2H.jpg" alt="" class="image"> */

let buttons = document.querySelector('.buttons');
let messageBarPlay = document.querySelector('#player');
let messageBarDeal = document.querySelector('#dealer');
let body = document.body;
let dealCount = 0;
let scorePlay = 0;
let scoreDeal = 0;
let cardCount = 0;

let scoreBoardPlayer = document.querySelector("#player-points");
let scoreBoardDealer = document.querySelector("#dealer-points");


// function createAlert(title, para)
// {
//     let alert = document.createElement('div');
//     alert.innerHTML = '<div class="modal" tabindex="-1" role="dialog">';
//     alert.innerHTML += '<div class="modal-dialog" role="document"><div class="modal-content"><div class="modal-header"><h5 class="modal-title">';
//     alert.innerHTML += title;
//     alert.innerHTML += '</h5><button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button></div><div class="modal-body"><p>';
//     alert.innerHTML += para;
//     alert.innerHTML += '</p></div><div class="modal-footer"><button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button></div></div></div></div>';

//     return alert;
// }



function createImage(imageURl, classes){
    var newImage = document.createElement('img')
    newImage.setAttribute('src', imageURl);
    newImage.className = classes;
    return newImage
}


// console.log(buttons);

buttons.addEventListener('click', function(e){
    if (e.target.textContent == 'Deal' && dealCount == 0)
    {
        for(cardCount; cardCount < 4; cardCount++){
            if(cardCount < 2){
                let newImage = createImage(cards[cardCount].image, "image");
                messageBarPlay.append(newImage);
                scorePlay += cards[cardCount].value;

            }
            else if (cardCount == 2)
            {
                let newImage = createImage(cards[cardCount].image, "image");
                messageBarDeal.append(newImage);
                scoreDeal += cards[cardCount].value;
            }
            else
            {
                let backImage = createImage("images/blue_back.jpg", "image back-image");
                messageBarDeal.append(backImage);
            }
        }
        dealCount = 1;
    }
    if (e.target.textContent == 'Hit')
    {
        let newImage = createImage(cards[cardCount].image, "image");
        messageBarPlay.append(newImage);
        scorePlay += cards[cardCount].value;
        cardCount++;

        if(scorePlay > 21)
        {
            // let alert = createAlert("BUST", "You went over 21.");
            // body.append(alert);
        }
    }
    if (e.target.textContent == 'Stand')
    {
        let newBack = document.querySelector(".back-image");
        newBack.setAttribute('src', card[3].image);
        scoreDeal += cards[3].value;
    }

    scoreBoardDealer.textContent = scoreDeal;
    scoreBoardPlayer.textContent = scorePlay;
})



