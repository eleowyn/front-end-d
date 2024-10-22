let phi = 3.14;
let power = 2;
let radius = 0;
const calculateArea = ({ radius, power }) => phi * Math.pow(radius, power);

radius = 21;
let area21 = calculateArea({ radius:radius, power: 2 });

radius = 7;
let area7 = calculateArea({ radius, power: 2 });

const output = () => {
    console.log(`area with 21 radius: ${area21}, and area with 7 radius: ${area7}`);
}
export {output};