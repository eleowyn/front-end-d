// Ubahlah syntax ES5 berikut ke dalam ES6

// 1.
const calculateAge = birthYear => 2019 - birthYear;

const yearUntilRetirement = ({year, firstName}) => {
    let age = calculateAge(year);
    let retirement = 60 - age;

    if (retirement > 0){
        console.log(`${firstName} retires in ${retirement} year`)
    } else {
        console.log(`${firstName} is already retired`)
    }
};
export {yearUntilRetirement}

console.log(addNumber(1, 2, 3, 4, 5, 6, 7));


// 2.
const addNumber = ({...numbers}) => {
    let sum = 0;
    for (let num of numbers) {
      sum += num;
    }
    return sum;
  }
  console.log(addNumber(1, 2, 3, 4, 5, 6, 7));

// 3.
let phi = 3.14;
let calculateArea = ({ radius, power }) => phi * Math.pow(radius, power);
radius = 21;
let area21 = calculateArea({ radius, power: 2 });

radius = 7;
let area7 = calculateArea({ radius, power: 2 });

console.log(`area with 21 radius: ${area21}, and area with 7 radius: ${area7}`);


// 4.
const makeAjaxRequest = ({ url, method = 'GET' }) => {
    console.log(url, method);
  }
  makeAjaxRequest({ url: "google.com" });

