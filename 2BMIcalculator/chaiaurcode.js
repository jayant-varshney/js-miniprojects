const form = document.querySelector('form');


    //this usecase will give you empty values
    // const height = parseInt(document.querySelector('#height').value)

form.addEventListener('submit', function(e){
    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const results = document.querySelector('#results');

    if(height === '' || height < 0 || isNaN(height)){
        results.innerHTML = "please give a valid height";
    }
    else if(weight === '' || weight < 0 || isNaN(weight)){
        results.innerHTML = "please give a valid weight";
    }
    else{
        const BMI = (weight / ((height * height) / 10000)).toFixed(2);
        //show result
        results.innerHTML = `<span>${BMI}</span>`;
    }

    let message;

    if (BMI < 18.6) {
        message = "You are Underweight";
    } 
    else if (BMI >= 18.6 && BMI <= 24.9) {
        message = "You are in the Normal Range";
    } 
    else {
        message = "You are Overweight";
    }

    results.innerHTML = `<span>Your BMI is ${BMI}</span><br>${message}`;

});