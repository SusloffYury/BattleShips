import { generateRandom } from '../random.js'

//Функция генерирует и возвращает координаты начало корбля и его направлние


export const generateHeadCoordinateDecks = (decks) => {
   let decksShip = decks;
   let directX = generateRandom(1)
   let directY = (directX == 0) ? 1 : 0;

   let coordX = 0;
   let coordY = 0;

   if (directX == 0) {
      coordX = generateRandom(9)
      coordY = generateRandom(9 - decks)
   } else {
      coordY = generateRandom(9)
      coordY = generateRandom(9 - decks)
   }
   
   let shipHead = {                 //Создаем и возвращаем объект с начальными  координатами, и 
      //направлением палуб корабля 
      'coordinateX': coordX,
      'coordinateY': coordY,
      'directionX': directX,
      'directionY': directY,
      'decksShip': decksShip
   };
   return shipHead;
}