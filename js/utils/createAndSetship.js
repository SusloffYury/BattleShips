import { generateHeadCoordinateDecks } from './generateHeadCoordinate.js'
import { checkShipsCoordinate } from './checkShipsCoordinate.js'
import { setShipbyCoordinate } from './setShipbyCoordinate.js'

export const createAndSetship = (decks) => {
    //Создаем первую палубу и направление корабля                                                   // и рекурсивно проверяем ее.
    let head = generateHeadCoordinateDecks(decks)

    if (checkShipsCoordinate(head)) {
        setShipbyCoordinate(head)

    } else {
        createAndSetship(decks);
    }

}