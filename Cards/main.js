// Learning to shuffle an array (To create a card game, for example)

let numbers = ['A', '2', '3', '4', '5', '6', '7',
               '8', '9', '10', 'J', 'Q', 'K'];
        
let suits = ['c', 'd', 'h', 's'];

let cards = [];

numbers.forEach((number) => {
    suits.forEach((suit) => {
        cards.push(number + suit);
    });
});
shuffle(cards);

let players = [];
deal(players, cards);

document.getElementById("p1").innerHTML += players[0].join(' ');
document.getElementById("p2").innerHTML += players[1].join(' ');
document.getElementById("p3").innerHTML += players[2].join(' ');
document.getElementById("p4").innerHTML += players[3].join(' ');


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
        switch (checkSuit(cards[i])){
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
    clubs.sort((x, y) => getVal(x) - getVal(y));
    diamonds.sort((x, y) => getVal(x) - getVal(y));
    hearts.sort((x, y) => getVal(x) - getVal(y));
    spades.sort((x, y) => getVal(x) - getVal(y));

    return [...clubs, ...diamonds, ...hearts, ...spades];
}

function checkSuit(card){
    if (card[1] != '0') return card[1];
    return card[2];
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