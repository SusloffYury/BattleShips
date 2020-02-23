import { generateHeadCoordinateDecks } from './generateHeadCoordinate.js'
import { checkShipsCoordinate } from './checkShipsCoordinate.js'
import { setShipbyCoordinate } from './setShipbyCoordinate.js'

export const createAndSetship = (decks, id) => {
    //Создаем первую палубу и направление корабля                                                   // и рекурсивно проверяем ее.
    let head = generateHeadCoordinateDecks(decks)

    if (checkShipsCoordinate(head, id)) {
        setShipbyCoordinate(head, id)

    } else {
        createAndSetship(decks, id);
    }


}