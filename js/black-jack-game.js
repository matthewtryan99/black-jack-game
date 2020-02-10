/* Image Tags: <img src="images/2H.jpg" alt="" class="image"> */

let buttons = document.querySelector('.buttons');
let messageBarPlay = document.querySelector('#player');
let messageBarDeal = document.querySelector('#dealer');

function createImage(imageURl, classes){
    var newImage = document.createElement('img')
    newImage.setAttribute('src', imageURl);
    newImage.className = classes;
    return newImage
}


// console.log(buttons);

buttons.addEventListener('click', function(e){
    if (e.target.textContent == 'Deal')
    {
        for(let i = 0; i < 4; i++)
        {
            if(i < 2){
                let newImage = createImage(cards[i].image, "image");
                messageBarPlay.append(newImage);
            }
            else if (i == 2)
            {
                let newImage = createImage(cards[i].image, "image");
                messageBarDeal.append(newImage);
            }
            else
            {
                let newImage = createImage("images/blue_back.jpg", "image");
                messageBarDeal.append(newImage);
            }
        }
    }
    if (e.target.textContent == 'Hit')
    {
        console.log("Hit is working");
    }
    if (e.target.textContent == 'Stand')
    {
        console.log("Stand is working");
    }
})



