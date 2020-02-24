import { CELL_EMPTY } from './const/cellConditions.js'
import { CELL_SHIP } from './const/cellConditions.js'
import { CELL_SHOOT } from './const/cellConditions.js'
import { CELL_MISS } from './const/cellConditions.js'


export const setCellvalue = (ship, elem) => {
    if (ship == CELL_EMPTY) {
        elem.dataset.ship = CELL_MISS;
    }
    if (ship == CELL_SHIP) {
        elem.dataset.ship = CELL_SHOOT;
    }

}