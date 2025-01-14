import {Player} from "../src/player.js"
import {Card} from "../src/card.js"

test('dummy test', () => {
  expect(1 + 2).toBe(3);
})

describe('Player class', () => {
  test('adding a card adds it to player hand', () => {
    const player = new Player();
    const card = new Card()
    // player.addCard(card)
    // expect(player.hand.size).toBe(1)
  });

  test('removing a card removes it from player hand', () => {
    // player = Player()
    // card = Card()
    // player.add_card(card)
    // player.remove_card(card)
    // expect(player.hand.size).toBe(1)
  });

  test('get_hand returns player hand', () => {
    // player = Player()
    // card1 = Card()
    // card2 = Card()
    // someHand = [card1, card2]
    // player.addCard(card1)
    // player.addCard(card2)
    // hand = player.get_hand()
    // expect(hand).toBe(someHand)
  });
})