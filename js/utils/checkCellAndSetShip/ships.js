import { generateRandom } from '../random.js'


export const ships = [
    {
        'decksShip': 4,
        'directionX': 1,
        'directionY': 0,
        'coordinateX': generateRandom(4),
        'coordinateY': 0,
    },
    {
        'decksShip': 3,
        'directionX': 1,
        'directionY': 0,
        'coordinateX': 0,
        'coordinateY': 2,
    },
    {
        'decksShip': 3,
        'directionX': 1,
        'directionY': 0,
        'coordinateX': 4 + generateRandom(3),
        'coordinateY': 2,
    },
    {
        'decksShip': 2,
        'directionX': 1,
        'directionY': 0,
        'coordinateX': 0 + generateRandom(1),
        'coordinateY': 4,
    },
    {
        'decksShip': 2,
        'directionX': 0,
        'directionY': 1,
        'coordinateX': 4,
        'coordinateY': 4 + generateRandom(2),
    },
    {
        'decksShip': 2,
        'directionX': 0,
        'directionY': 1,
        'coordinateX': 6 + generateRandom(2),
        'coordinateY': 4,
    },
    {
        'decksShip': 1,
        'directionX': 0,
        'directionY': 1,
        'coordinateX': generateRandom(1),
        'coordinateY': 7 + generateRandom(2),
       },
        {
            'decksShip': 1,
            'directionX': 0,
            'directionY': 1,
            'coordinateX': 3 + generateRandom(1),
            'coordinateY': 8 + generateRandom(1),
        },
        {
            'decksShip':  1,
            'directionX': 1,
            'directionY': 0,
            'coordinateX': 6 + generateRandom(1),
            'coordinateY': 8 + generateRandom(2),
        },
        {
            'decksShip': 1,
            'directionX': 0,
            'directionY': 1,
            'coordinateX': 9,
            'coordinateY': 7 + generateRandom(2),
        },
]