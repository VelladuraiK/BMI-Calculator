function calculateBMI() {
    let weightinput = prompt("Enter your weight");
    let heightinput = prompt("Enter your height");


    let weight = parseFloat(weightinput);
    let heightCm = parseFloat(heightinput);

    let height = heightCm / 100;

    let BMI = weight / (height * height);

   
    document.getElementById("result").innerHTML = "Your BMI is: " + BMI.toFixed(2);
}