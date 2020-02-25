import { startGame } from './startGame.js'

import { createForm } from "./createForm.js";
import { addFormSubmitEvent } from "./addFormEvents.js";
import { cleanRoot } from './cleanRoot.js'

if (!localStorage.getItem("isValidationRequired")) {
  createForm();
  addFormSubmitEvent();
} else {
  console.log("СИСТЕМА ВАС ЗАПОМНИЛА, ВХОД УСПЕШЕН");
  
  startGame();
  cleanRoot();
}


