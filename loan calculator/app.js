//listen for submit 
document.getElementById('loan-form').addEventListener('submit', function (e) {
    //Hide Result
    document.getElementById('result').style.display = 'none';
    //Show loader
    document.getElementById('loading').style.display = 'block';

    setTimeout(calculateResults, 2000);

    e.preventDefault();
});

// calculate Resulte
function calculateResults(e) {
    console.log("calculating ....");
    //UI vars
    const amount = document.getElementById('amount');
    const interest = document.getElementById('interest');
    const years = document.getElementById('years');
    const monthlyPayment = document.getElementById("monthly-payment");
    const totalPayment = document.getElementById('total-payment');
    const totalInterest = document.getElementById('total-interest');

    const principal = parseFloat(amount.value);
    const calculatedInterest = parseFloat(interest.value) / 100 / 12;
    const calculatedPayment = parseFloat(years.value) * 12;

    //compute montly payment
    const x = Math.pow(1 + calculatedInterest, calculatedPayment);
    const monthly = (principal * x * calculatedInterest) / (x - 1);

    if (isFinite(monthly)) {
        monthlyPayment.value = monthly.toFixed(2);
        totalPayment.value = (monthly * calculatedPayment).toFixed(2);
        totalInterest.value = ((monthly * calculatedPayment) - principal).toFixed();

        //Show result
        document.getElementById('result').style.display = 'block';

        //hide result
        document.getElementById('loading').style.display = 'none';


    } else {
        showError("Please check yout numbers");
    }


}

//show error
function showError(error) {

    //hide  result
    document.getElementById('result').style.display = 'none';

    //hide result
    document.getElementById('loading').style.display = 'none';
    //create div
    const errorDiv = document.createElement('div');

    //Get element
    const card = document.querySelector('.card');
    const heading = document.querySelector('.heading');

    //Add class
    errorDiv.className = 'alert alert-danger';

    //create txt node and append to div
    errorDiv.appendChild(document.createTextNode(error));

    //Insert Error aboveheading
    card.insertBefore(errorDiv, heading);

    //Clear Error after 3s
    setTimeout(clearError, 3000);
}

//Clear Error
function clearError() {
    document.querySelector('.alert').remove();
}