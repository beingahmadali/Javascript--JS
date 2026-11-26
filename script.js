function displayWelcomeMessage() {
    let name = prompt("Enter your name:");
    let firstNumber = Number(prompt("Enter the first number:"));
    let secondNumber = Number(prompt("Enter the second number:"));

    let sum = firstNumber + secondNumber;

    const outputDiv = document.getElementById("output");
    outputDiv.innerHTML = `
        <h3>Welcome Message</h3>
        <p>Welcome ${name}</p>
        <h3>Numerical Calculation</h3>
        <p>First Number: ${firstNumber}</p>
        <p>Second Number: ${secondNumber}</p>
        <p>Sum: ${sum}</p>
    `;




}