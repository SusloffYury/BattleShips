import { checkingShipZone } from './checkingShipZone.js'

export const checkShipsCoordinate =
  ({ coordinateX, coordinateY, directionX, directionY, decksShip }, id) => {
    let [toCoordX, fromCoordX] = checkingShipZone(coordinateX, directionX, decksShip);
    let [toCoordY, fromCoordY] = checkingShipZone(coordinateY, directionY, decksShip);
    for (let i = fromCoordX; i < toCoordX; i++) {
      for (let j = fromCoordY; j < toCoordY; j++) {
        let [{ dataset: { ship } }] = document.querySelectorAll(`${id} [data--x = "${i}"][data--y = "${j}"]`)
        return (ship == 0)

      }
    }

  }




