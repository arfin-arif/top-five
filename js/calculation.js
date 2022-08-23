function playerExpenses() {
    const perPlayerCost = getInputFiledValueById('per-player-cost')
    const playerExpense = perPlayerCost * cartArray.length;
    const playerExpenseInitialValue = document.getElementById('player-expense');
    if (isNaN(playerExpense)) {
        alert('Please Insert Valid Input');
        return;
    }
    const playerTotalExpense = playerExpenseInitialValue.innerText = playerExpense;
    return playerTotalExpense;

}


document.getElementById('calculate').addEventListener('click', function () {
    const totalPlayerCost = playerExpenses();
});
document.getElementById('calculate-total').addEventListener('click', function () {
    const managerCost = getInputFiledValueById('manager-cost');
    const coachCost = getInputFiledValueById('coach-cost');
    const playerNewPriceString = document.getElementById('player-expense').innerText;
    const playerNewPrice = parseFloat(playerNewPriceString)
    const totalCost = managerCost + coachCost + playerNewPrice;
    if (isNaN(totalCost)) {
        alert('Please Insert Valid Input');
        return;
    }
    const totalExpenseInitial = document.getElementById('total-expense');
    totalExpenseInitial.innerText = totalCost;

})