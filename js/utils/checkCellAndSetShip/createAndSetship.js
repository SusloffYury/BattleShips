
import { setShipbyCoordinate } from './setShipbyCoordinate.js'
import { ships } from './ships.js'

export const createAndSetship = (id) => {
    ships.map((ship) => {
        setShipbyCoordinate(ship, id)

    });
}
