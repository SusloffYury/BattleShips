
import { computerShooting } from '../compShooting/computerShooting.js'
import { shootPlayer } from './shootPlayer.js'

export const fireClick = (event) => {


   shootPlayer(event);

   
 setTimeout( computerShooting,500 ); 

}


