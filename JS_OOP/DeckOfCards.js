class Card{
  constructor(suit, sval, ival ){
    this.suit = suit;
    this.sval = sval;
    this.ival = ival;
  }
  show(){
    console.log(sval +" of "+suit);
  }
}

class Deck{
  constructor(){
    this.deck = [];
  }
  shuffle(){
    var m = this.deck.length, t, i;

  // While there remain elements to shuffle…
  while (m) {

    // Pick a remaining element…
    i = Math.floor(Math.random() * m--);

    // And swap it with the current element.
    t = this.deck[m];
    this.deck[m] = this.deck[i];
    this.deck[i] = t;
  }
    return this;
  }

  reset(){
    this.deck=[];
    const suits = ['Clubs','Hearts','Diamonds','Spades'];
    const values = ['Ace', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King'];
    for (const suit of suits) {
                    for (const value of values) {
                        this.deck.push(`${ value } of ${ suit }`);
                    }
                }

                return this;
  }

  deal(){
    return this.deck.pop();
  }

}


class Player{
  constructor(name){
    this.name = name;
    this.hand =[];
  }
  draw(deck){
    this.hand.push(deck.deal());
    return this;
  }
  discard(){
    this.hand.pop();
    return this;
  }
}

//testing:

const deck1 = new Deck();
deck1.reset().shuffle();
console.log(deck1);

const player =  new Player("John");
player.draw(deck1).draw(deck1).draw(deck1);
console.log(player.hand);
console.log(deck1);
