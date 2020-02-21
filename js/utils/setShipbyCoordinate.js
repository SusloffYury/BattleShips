//Функция получает координаты головы корабля, направление и количество палуб
//после чего записывает данные  на поле боя
export const setShipbyCoordinate =
 ({ coordinateX, coordinateY, directionX, directionY, decksShip }, id ) => {
   
    for (let i = coordinateX; i <= coordinateX + decksShip * directionX; i++) {
        for (let j = coordinateY; j <= coordinateY + decksShip * directionY; j++) {
           console.log(`i =${i} j =${j} `)
         document.querySelector(`${id} [data--x = "${i}"][data--y = "${j}"]`)
         .dataset.ship = '1';
         

        }
    }

}