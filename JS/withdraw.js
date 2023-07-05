/* 
Steps:-
    01: addEventHandler with the withdraw button:-
    02: get the withdraw amount from the withdraw input field:-
    2.5: make sure to convert the input into a number by using parseFloat:-
    03: Get previous withdraw total:-
    04: Calculate total withdraw amount:-
    05: get the previous balance total:-
    06: Calculate new balance total after withdraw amount:-
*/
// Step-01:-
document.getElementById('btn-withdraw').addEventListener('click', function () {
    // Step-02:-
    const withdrawField = document.getElementById('withdraw-field');
    const newWithdrawAmountString = withdrawField.value;
    withdrawField.value = '';
    // Step-2.5:-
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);
    if (isNaN(newWithdrawAmount)) {
        alert('Please provide a valid number');
        return;
    }
    // Step-03:-
    const withdrawTotal = document.getElementById('withdraw-total');
    const previousWithdrawString = withdrawTotal.innerText;
    const previousWithdraw = parseFloat(previousWithdrawString);

    // Step-05:-
    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceString = balanceTotal.innerText;
    const previousBalance = parseFloat(previousBalanceString);

    if (newWithdrawAmount > previousBalance) {
        alert('Not enough balance')
        return;
    }

    // Step-04:-
    const currentWithdraw = previousWithdraw + newWithdrawAmount;
    withdrawTotal.innerText = currentWithdraw;

    // Step-06:-
    const newBalanceTotal = previousBalance - newWithdrawAmount;
    balanceTotal.innerText = newBalanceTotal;
})