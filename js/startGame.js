import { renderBattleField } from './renderBattleField.js'
import { addEventListener } from './utils/addEventListener.js'
import { SHIPS_DECKS } from './utils/ships_decks.js'
import {createAndSetship} from './utils/createAndSetship.js'


export const startGame = () => {

  //Создаем поле боя
  renderBattleField();
// Добавляем EventListener
  addEventListener();      
 
  //Расставляем корабли
  SHIPS_DECKS.map((decks)=>{
   createAndSetship(decks, '#computer')
   createAndSetship(decks, '#human')
   })
  
}










