export const addEventListener = () => {
   const container = document.getElementById('human')
   container.addEventListener('click', fireClick);
}

const fireClick = ({ toElement: { dataset: { X, Y, ship } } }) => {
     const elem = document.querySelector(`#human [data--x = "${X}"][data--y = "${Y}"]`)
   if (ship == 0) {
      elem.dataset.ship = '3'
   }
   if (ship == 1) {
      elem.dataset.ship = '2'
   }

}
