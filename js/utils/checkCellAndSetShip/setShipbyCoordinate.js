//Функция получает координаты головы корабля, направление и количество палуб
//после чего записывает данные  на поле боя
export const setShipbyCoordinate =
    ({ coordinateX, coordinateY, directionX, directionY, decksShip }, id) => {
        let indI = 0;
        while (indI < decksShip) {
          let x = coordinateX + indI *directionX;
          let y = coordinateY + indI * directionY;
            document.querySelector(`${id} [data--x = "${x}"][data--y = "${y}"]`).dataset.ship = '1';
     
            indI++
        }

    }