
export const checkingShipZone = (coord, direct, decks) => {
  let tocoord;
  let fromCoord;

  fromCoord = (coord == 0) ? coord : coord - 1;

  if (coord + direct * decks == 9 && direct == 1) tocoord = coord + direct * decks - 1;

  else if (coord + direct * decks < 9 && direct == 1) tocoord = coord + direct * decks;

  else if (coord == 8 && direct == 0) tocoord = coord;

  else if (coord < 8 && direct == 0) tocoord = coord + 1;

  let ship = [tocoord, fromCoord]
  
  return ship;

}