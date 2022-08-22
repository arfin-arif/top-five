
document.getElementById('calculate').addEventListener('click', function () {
    const perPlayerCost = getInputFiledValueById('per-player-cost')
    console.log(perPlayerCost)

});
document.getElementById('calculate-total').addEventListener('click', function () {
    const managerCost = getInputFiledValueById('manager-cost');
    const coachCost = getInputFiledValueById('coach-cost');
    console.log(coachCost);
    console.log(managerCost);
})