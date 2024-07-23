document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('calculatorForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission (to avoid page reload)

        // Your calculation logic here
        let num1 = parseFloat(document.getElementById('num1').value);
        let num2 = parseFloat(document.getElementById('num2').value);

        let sum = num1 + num2;
        let difference = num1 - num2;
        let product = num1 * num2;
        let quotient = num1 / num2;

        // Display results (for debugging purposes)
        console.log("Sum:", sum);
        console.log("Difference:", difference);
        console.log("Product:", product);
        console.log("Quotient:", quotient);

        // Optionally, update a visible element in the HTML with the results
        document.getElementById('results').innerHTML = `
            <h3>Results</h3>
            <p>Sum: ${sum}</p>
            <p>Difference: ${difference}</p>
            <p>Product: ${product}</p>
            <p>Quotient: ${quotient}</p>
        `;
    });
});
let num1 = 10;
let num2 = 5;

