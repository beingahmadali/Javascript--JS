

    onclick="displayWelcomeMessage()"
        let name = prompt("Enter your name:");


        document.write("<h3>Welcome Message</h3>");
        document.write("<p>Welcome " + name + "</p>");

    
        let firstNumber = Number(prompt("Enter the first number:"));
        let secondNumber = Number(prompt("Enter the second number:"));


        let sum = firstNumber + secondNumber;


        document.write("<h3>Numerical Calculation</h3>");
        document.write("<p>First Number: " + firstNumber + "</p>");
        document.write("<p>Second Number: " + secondNumber + "</p>");
        document.write("<p>Sum: " + sum + "</p>");
