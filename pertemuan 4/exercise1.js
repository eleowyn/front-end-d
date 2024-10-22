let berat = 65;
let tinggi = 163;
let bmi = BMI(berat, tinggi);

function BMI(berat, tinggi) {
    tinggi = tinggi / 100;
    let bmi = berat / (tinggi * tinggi);
    return bmi;
  }
console.log("BMI anda adalah: "+ bmi);
