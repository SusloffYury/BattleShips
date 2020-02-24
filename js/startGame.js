import { renderBattleField } from './renderBattleField.js';
import { addEventListener } from './utils/playerShooting/addEventListener.js';
import { SHIPS_DECKS } from './utils/const/ships_decks.js';
import { createAndSetship } from './utils/checkCellAndSetShip/createAndSetship.js';


export const startGame = () => {

  //Создаем поле боя
  renderBattleField();
  //Расставляем корабли
  SHIPS_DECKS.map((decks) => {
    createAndSetship(decks, '#computer');
    createAndSetship(decks, '#human');
  });
    // Добавляем EventListener
  addEventListener();
}










