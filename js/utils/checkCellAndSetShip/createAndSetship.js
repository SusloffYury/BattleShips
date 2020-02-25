import { generateHeadCoordinateDecks } from './generateHeadCoordinate.js'
// import { checkShipsCoordinate } from './checkShipsCoordinate.js'
import { setShipbyCoordinate } from './setShipbyCoordinate.js'
import {ships} from './ships.js'

export const createAndSetship = (id) => {
   // generateHeadCoordinate()
        ships.map((ship) => {
            setShipbyCoordinate(ship, id)

        });












    //Создаем первую палубу и направление корабля                                                   // и рекурсивно проверяем ее.
    // let shipFourDecs = generateHeadCoordinateDecks(4)
    //  setShipbyCoordinate(shipFourDecs, id);

    // let shipThreeDecs = generateHeadCoordinateDecks(3);
    // if(checkShipsCoordinate(shipThreeDecs, id)){
    //  return  setShipbyCoordinate(shipThreeDecs, id);
    // }else{

    //     setShipbyCoordinate(generateHeadCoordinateDecks(3))

    // }

    // let shipTwoDecs = generateHeadCoordinateDecks(2);
    // if(checkShipsCoordinate(shipTwoDecs, id)){
    //     setShipbyCoordinate(shipTwoDecs, id);
    // }


    // let shipOneDecs = generateHeadCoordinateDecks(1);
    // if(checkShipsCoordinate(shipOneDecs, id))
    // setShipbyCoordinate(shipOneDecs, id);






    // if (checkShipsCoordinate(head, id)) {
    //     setShipbyCoordinate(head, id)
    // console.log(`checking ${checkShipsCoordinate(head,id)}`)
    // } else {
    //     createAndSetship(decks, id);
    //     console.log('checkingFalse')
    // }

}
