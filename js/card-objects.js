var cards = [];

function makeNewCard(value, suit, image){
        let card = {};
        card['value'] = value;
        card['suit'] = suit;
        card['image'] = image;

        cards.push(card);
}

// makeNewCard(1, 1, 'image');

for(let out = 0; out < 4; out++)
{
    for(let inner = 2; inner < 15; inner++)
    {
        let value = 0;
        let image1 = '';
        let image2 = '';
        let suit = '';
        if (inner == 14)
        {
            value = 11;
        } 
        else if (inner > 10)
        {
            value = 10;
        }
        else
        {
            value = inner;
        }

        switch (inner)
            {
                case 2:
                    image1 = '2';
                    break;
                case 3:
                    image1 = '3'
                    break;
                case 4:
                    image1 = '4'
                    break;
                case 5:
                    image1 = '5'
                    break;
                case 6:
                    image1 = '6'
                    break;
                case 7:
                    image1 = '7'
                    break;
                case 8:
                    image1 = '8'
                    break;
                case 9:
                    image1 = '9'
                    break;
                case 10:
                    image1 = '10'
                    break;
                case 11:
                    image1 = 'J'
                    break;
                case 12:
                    image1 = 'Q'
                    break;
                case 13:
                    image1 = 'K'
                    break;
                case 14:
                    image1 = 'A'
                    break;
            }
            
            switch(out)
            {
                case 0:
                    suit = 'Diamonds';
                    image2 = 'D';
                    break;
                case 1:
                    suit = 'Hearts';
                    image2 = 'H';
                    break;
                case 2:
                    suit = 'Spades';
                    image2 = 'S';
                    break;
                case 3:
                    suit = 'Clubs';
                    image2 = "C";
                    break;
            }
            let image = image1 + image2 + '.jpg';

            makeNewCard(value, suit, image);
    }
}

console.log(cards);