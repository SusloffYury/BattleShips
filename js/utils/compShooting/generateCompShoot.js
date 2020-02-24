import { generateRandom } from '../random.js'
export const generateCompShoot = () => {
    let X = generateRandom(9);
    let Y = generateRandom(9);
    const result = [X, Y]
    return result;
}