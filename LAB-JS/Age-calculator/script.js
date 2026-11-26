function calculateAge() {
    let birthYear = Number(prompt("Enter your birth year:"));
    
    if (birthYear > 0 && birthYear <= 2026) {
        let age = 2026 - birthYear;
        document.getElementById("result").innerText = "Your age is: " + age;
    } else {
        document.getElementById("result").innerText = "Please enter a valid birth year.";
    }
}