import { fireClick } from './fireClick.js'
import { CELL_MISS, CELL_SHOOT } from '../const/cellConditions.js'
export const addEventListener = () => {
   const container = document.getElementById('computer')
   container.addEventListener('click', listEner);
}

const listEner = (event) => {
   const { toElement: { dataset: { ship } } } = event;
   if (ship == CELL_MISS || ship == CELL_SHOOT) {
      return;
   } else {
      fireClick(event);
   }
}




