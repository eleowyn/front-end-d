// IIFE
let bb = (function (berat){
    return "Berat anda " + berat;
  })();
  
  let tb = (function (tinggi){
    return "Tinggi anda " + tinggi;
  })();
  
  let output = (function (berat, tinggi){
    tinggi = tinggi / 100;
    let BMI = berat / (tinggi * tinggi);
    return "BMI anda: " + BMI;
  })(65, 163);
  console.log(output);


  // Calback
  function BMI(berat, tinggi, callback) {
    tinggi = tinggi / 100;
    let bmi = berat / (tinggi * tinggi);
    callback(bmi);
  }
  let berat = 65;
  let tinggi = 163;
  
  BMI(berat, tinggi, function(bmi) {
    console.log("BMI anda: " + bmi);
});
