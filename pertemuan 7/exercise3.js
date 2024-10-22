let dataDiri = {
    firstName: "Elshera Dahlan",
    berat: 65,
    tinggi: 163 / 100,
    calculateBMI: function () {
        bmi = this.berat / (this.tinggi * this.tinggi);
        console.log("Your BMI is " + bmi)

        if(bmi <= 16){
            console.log(this.firstName +" is Severly Underweight")
        }
        else if(bmi > 16 && bmi <= 18.5 ){
            console.log(this.firstName + " is Underweight")
        }
        else if(bmi > 18.5 && bmi <= 25){
            console.log(this.firstName + " is Normal")
        }
        else if(bmi > 25 && bmi <= 30 ){
            console.log(this.firstName + " is Overweight")
        }
        else if(bmi > 30 && bmi <= 35){
            console.log(this.firstName + " is Moderately Obese")
        }
        else if(bmi > 35 && bmi <= 40){
            console.log(this.firstName + " is Severly Obese")
        }
        else{
            console.log(this.firstName + " is Morbidly Obese")
        }
      }
};
dataDiri.calculateBMI();