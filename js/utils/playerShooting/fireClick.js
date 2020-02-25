
import { computerShooting } from '../compShooting/computerShooting.js'
import { shootPlayer } from './shootPlayer.js'
import { CELL_SHIP } from '../const/cellConditions.js'

export const fireClick = (event) => {
  if (shootPlayer(event) == CELL_SHIP) {
    fireClick(event)
  }
  if (computerShooting() == CELL_SHIP) {
    computerShooting();
  }


}














