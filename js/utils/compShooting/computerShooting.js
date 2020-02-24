//Данная функция генерирует координаты выстрела компьютера
//После генерации координат проверяется ячейка на то что по ней не было произведено
// выстрела, в обратном случае функция рекурсивно запускается.
import { CELL_SHOOT, CELL_MISS } from '../const/cellConditions.js'
import { generateCompShoot } from './generateCompShoot.js'
import { getCell } from './getCell.js'
import { setCellvalue } from '../setCellValue.js'

export const computerShooting = () => {

   
    let [X, Y] = generateCompShoot();
    let elem = getCell(X, Y, '#human');
    let attribute = elem.getAttribute('data-ship');
    if (attribute == CELL_SHOOT || attribute == CELL_MISS) {
        computerShooting();
    }
    else {
        setCellvalue(attribute, elem);
    }

}





