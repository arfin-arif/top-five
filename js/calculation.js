function playerExpenses() {
    const perPlayerCost = getInputFiledValueById('per-player-cost')
    const playerExpense = perPlayerCost * cartArray.length;
    const playerExpenseInitialValue = document.getElementById('player-expense');
    const playerTotalExpense = playerExpenseInitialValue.innerText = playerExpense;
    return playerTotalExpense;

}


document.getElementById('calculate').addEventListener('click', function () {
    const playerTotalCost = playerExpenses();

});
document.getElementById('calculate-total').addEventListener('click', function () {
    const managerCost = getInputFiledValueById('manager-cost');
    const coachCost = getInputFiledValueById('coach-cost');
    const playerTotalCost = playerExpenses();
    const totalCost = managerCost + coachCost + playerTotalCost;
    const totalExpenseInitial = document.getElementById('total-expense');
    totalExpenseInitial.innerText = totalCost;
    console.log(totalCost);
    console.log(managerCost);
})