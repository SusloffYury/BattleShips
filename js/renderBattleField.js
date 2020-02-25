import { createElement } from './utils/createElement.js'
// Создаем игровые поля и вставляем его в 'root'

export let renderBattleField = () => {
  const root = document.querySelector('.root');
  const battleField = createElement('div', 'battleField');
  const humanCont = createElement('div', 'container');
  humanCont.id = 'human';
  const compCont = createElement('div', 'container');
  compCont.id = 'computer';
  const fieldSignHuman = createElement('div', 'fieldSignHuman');

  fieldSignHuman.innerHTML = 'ИГРОК';
  const fieldSignComp = createElement('div', 'fieldSignComp');
  fieldSignComp.innerHTML = 'ПРОТИВНИК';
  const headerSign = createElement('h1','header')
  headerSign.innerHTML = 'МОРСКОЙ БОЙ'
  renderContainer(humanCont);
  renderContainer(compCont);
  
  humanCont.appendChild(fieldSignHuman);
  compCont.appendChild(fieldSignComp);
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




