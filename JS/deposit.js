// step-1: add addEventListener to the deposit button:-
document.getElementById('btn-deposit').addEventListener('click', function () {
    // step-2: get the deposit amount from the deposit input field by .value:-
    const depositField = document.getElementById('deposit-field');
    const newDepositAmountString = depositField.value;
    const newDepositAmount = parseFloat(newDepositAmountString);
    depositField.value = '';
    if (isNaN(newDepositAmount)) {
        alert('Please provide a valid number');
        return;
    }

    // step-3: get the current deposit by innerText($00/-):-
    const depositTotal = document.getElementById('deposit-total');
    const previousDepositString = depositTotal.innerText;
    const previousDeposit = parseFloat(previousDepositString);
    const currentDeposit = previousDeposit + newDepositAmount;
    depositTotal.innerText = currentDeposit;

    // step-4: get the current balance by innerText($1240/-):-
    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceString = balanceTotal.innerText;
    const previousBalance = parseFloat(previousBalanceString);

    const currentBalance = previousBalance + newDepositAmount;
    balanceTotal.innerText = currentBalance;
})