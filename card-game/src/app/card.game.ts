import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { initBasicDeck } from './cards/cardInit';
import { Deck } from './cards/deck';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './card.game.html',
  styleUrl: './card.game.css'
})

export class AppComponent {
  title = 'card-game';
  deck: Deck;

  constructor() {
    this.deck = initBasicDeck();
    this.deck.shuffle();
  }
}
