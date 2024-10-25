const btnEl = document.querySelector(".btn");

function calculateLoan(event) {
  event.preventDefault();

  const loanAmount = parseFloat(document.getElementById("loan-amount").value);
  const interestRate = parseFloat(
    document.getElementById("interest-rate").value
  );
  const monthsToPay = parseInt(document.getElementById("month-to-pay").value);

  if (isNaN(loanAmount) || isNaN(interestRate) || isNaN(monthsToPay)) {
    document.getElementById("payments").textContent =
      "Please enter valid numbers.";
    return;
  }

  const monthlyInterestRate = interestRate / 100 / 12;
  const monthlyPayment =
    (loanAmount * monthlyInterestRate) /
    (1 - Math.pow(1 + monthlyInterestRate, -monthsToPay));

  document.getElementById(
    "payments"
  ).textContent = `Monthly Payment: $${monthlyPayment.toFixed(2)}`;
}

btnEl.addEventListener("click", calculateLoan);
