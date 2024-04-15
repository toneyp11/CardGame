// Card Object

export class Card {
    value: number;
    name: string;
    shortName: string | undefined;
    suit: string | undefined;

    constructor(value: number, name: string, suit?: string, shortName?: string) {
        this.value = value;
        this.name = name;
        this.suit = suit;
        this.shortName = shortName;
    }
}