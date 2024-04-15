import { Card } from "./card";

// Deck Object

export class Deck {
    cards: Array<Card>;

    constructor(cards?: Array<Card>) {
        if (cards != undefined) {
            this.cards = cards;
        } else {
            this.cards = new Array<Card>;
        }
        
    }

    // Adds a new card to the deck
    add(card: Card) {
        this.cards.push(card);
    }

    // Returns a string with containing each card's name
    print() {
        let printString = "";
        for (let i = 0; i < this.cards.length; i++) {
            printString += this.cards[i].name + "\n";
        }
        return printString;
    }

    // Shuffles the deck
    shuffle() { 
        for (let i = this.cards.length - 1; i > 0; i--) { 
          const j = Math.floor(Math.random() * (i + 1)); 
          [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]]; 
        }  
      }; 

}