import { renderBattleField } from './renderBattleField.js';
import { addEventListener } from './utils/playerShooting/addEventListener.js';
import { SHIPS_DECKS } from './utils/const/ships_decks.js';
import { createAndSetship } from './utils/checkCellAndSetShip/createAndSetship.js';


export const startGame = () => {

  //Создаем поле боя
  renderBattleField();
  //Расставляем корабли
  let test = [3, 3]
  // SHIPS_DECKS
  //   .map((decks) => {
  //     createAndSetship(decks, '#computer');
  //     createAndSetship(decks, '#human');
  //   });
    createAndSetship('#human');
  // Добавляем EventListener
  addEventListener();
}










