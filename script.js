


document.getElementById("calculateBtn").addEventListener("click", calculateAge);
document.getElementById("date").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        calculateAge();
    }
});

function calculateAge() {
    const dateInput = document.getElementById("date").value;
    if (!dateInput) {
        document.getElementById("result").innerText = "Please select a valid date.";
        return;
    }

    const birthDate = new Date(dateInput);
    const today = new Date();

    let years = today.getFullYear() - birthDate.getFullYear();
    let months = today.getMonth() - birthDate.getMonth();
    let days = today.getDate() - birthDate.getDate();

    if (days < 0) {
        months--;
        days += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    }

    if (months < 0) {
        years--;
        months += 12;
    }

    document.getElementById("result").innerText = `You are ${years} years, ${months} months, and ${days} days old.`;
}


