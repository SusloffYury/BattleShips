
import { setCellvalue } from '../setCellValue.js'
import { getCell } from '../compShooting/getCell.js'

export const shootPlayer = ({ toElement: { dataset: { X, Y } } }) => {
    const elem = getCell(X, Y, '#computer')
    setCellvalue(elem.getAttribute('data-ship'), elem)


}