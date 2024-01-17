// Learning to shuffle an array (To create a card game, for example)


const numbers = ['2', '3', '4', '5', '6', '7',
               '8', '9', '10', 'J', 'Q', 'K', 'A'];
        
const suits = ['c', 'd', 'h', 's'];

// Generate card image URLs for a deck of cards
const img_suits = ["clubs", "diamonds", "hearts", "spades"];

let deck = [];
let cardImages = [];

// Creating the deck
numbers.forEach((number) => {
    suits.forEach((suit) => {
        deck.push(number + suit);
    });
});

// Creating the suits
numbers.forEach(number => {
    img_suits.forEach(suit => {
        const imageUrl = `Card Images/${number}_of_${suit}.png`;
        cardImages.push(imageUrl);
    });
});
const cards = deck.map((card, index) => [card, cardImages[index]]);

shuffle(cards);

let players = [];
deal(players, cards);
console.log(players);
for (let i = 1; i <= 4; i++){
    const player = players[i-1].map(cards => cards[0]);
    let hcp = countHCP(player);
    document.getElementById(`hcp${i}`).innerHTML += hcp;
    for (let j = 0; j < 13; j++){
        let card = players[i-1][j];
        document.getElementById(`p${i}`).innerHTML += card[0]+" ";
        // Add card images to Player 1
        addCardImagesToPlayer(`player${i}`, card[1]);
    }
}

function shuffle(cards){
    let index = cards.length;
    
    while (index != 0){
        let new_index = Math.floor(Math.random()*index);
        index--;
        // swap
        let temp = cards[index];
        cards[index] = cards[new_index];
        cards[new_index] = temp;
    }
}

function sort(cards){
    
    let clubs = [];
    let diamonds = [];
    let hearts = [];
    let spades = [];
    for (let i = 0; i < cards.length; i++){
        switch (checkSuit(cards[i][0])){
            case ('c'):
                clubs.push(cards[i]);
                break;
            case ('d'):
                diamonds.push(cards[i]);
                break;
            case ('h'):
                hearts.push(cards[i]);
                break;
            case ('s'):
                spades.push(cards[i]);
                break;
        }
    }

    // Now that it's sorted by suit, sort by number
    clubs.sort((x, y) => getVal(x[0]) - getVal(y[0]));
    diamonds.sort((x, y) => getVal(x[0]) - getVal(y[0]));
    hearts.sort((x, y) => getVal(x[0]) - getVal(y[0]));
    spades.sort((x, y) => getVal(x[0]) - getVal(y[0]));

    return [...clubs, ...diamonds, ...spades, ...hearts];
}

function checkSuit(card){
    if (card[1] != '0') return card[1];
    return card[2];
}

function checkSuit_img(card){
    if (card[1] != '0') return card[5];
    return card[6];
}

function getVal(card){
    if (card[0] == '1') return 10;
    else if (!isNaN(+card[0])){
        return Number(card[0]);
    }
    switch (card[0]){
        case ('A'):
            return 14;
        case ('J'):
            return 11;
        case ('Q'):
            return 12;
        case ('K'):
            return 13;
        default:
            return 0;
    }
}

function deal(players, cards){
    for (let i = 0; i < 4; i++){
        players.push(cards.slice(i*13, (i+1)*13));
    }
    
    for (let i = 0; i < 4; i++){
        players[i] = sort(players[i]);
    }
}

// Function to add card images to a player's area
function addCardImagesToPlayer(playerId, imageURL) {
    const playerElement = document.getElementById(playerId);

    // Create and add card images to the player's area
    const cardImage = document.createElement('img');
    cardImage.src = imageURL; 
    cardImage.alt = 'Card'; 
    playerElement.appendChild(cardImage);
    
}

function countHCP(cards){
    let sum = 0;
    for (let i = 0; i < 13; i++){
        let val = getVal(cards[i][0]) - 10
        if (val > 0) sum += val;
    }
    return sum;
}