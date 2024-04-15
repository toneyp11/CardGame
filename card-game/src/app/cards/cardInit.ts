import { Card } from "./card";
import { Deck } from "./deck";

// Initializes all types of cards
export function initBasicDeck() {

    //wipes the deck
    let deck = new Deck();

    // configuration for a basic deck of cards
    let suits = ["Spades", "Hearts", "Clubs", "Diamonds"];
    let names = ["Ace", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Jack", "Queen", "King"];
    let shortNames = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

    for (let i = 0; i < names.length; i++) {
        for (let j = 0; j < suits.length; j++) {
            deck.add(new Card(i + 1, names[i], suits[j], shortNames[i]));
        }
    }
    
    return deck;

}