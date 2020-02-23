import { fireClick } from './fireClick.js'

export const addEventListener = () => {
   const container = document.getElementById('computer')
   container.addEventListener('click', fireClick);
}


