
import { setCellvalue } from '../setCellValue.js'
import { getCell } from '../compShooting/getCell.js'

export const shootPlayer = ({ toElement: { dataset: { X, Y, ship } } }) => {
    const elem = getCell(X, Y, '#computer')
    setCellvalue(elem.getAttribute('data-ship'), elem)
  return ship;

}