import { createElement } from './utils/createElement.js'
// Создаем игровые поля и вставляем его в 'root'

export let renderBattleField = () => {
  const root = document.querySelector('.root');
  const battleField = createElement('div', 'battleField');
  const humanCont = createElement('div', 'container');
  humanCont.id = 'human'
  const compCont = createElement('div', 'container');
  compCont.id = 'computer'

  renderContainer(humanCont);
  renderContainer(compCont)

  battleField.appendChild(humanCont);
  battleField.appendChild(compCont);
  root.appendChild(battleField);

}
const renderContainer = (elem) => {

  for (let i = 0; i <= 9; i++) {
    for (let j = 0; j <= 9; j++) {
      const cell = createElement('div', 'cell');
      cell.dataset.X = i;
      cell.dataset.Y = j;
      cell.dataset.ship = 0;
      elem.appendChild(cell);
    }

  }

}




