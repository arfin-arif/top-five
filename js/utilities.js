// to get the value of input filed
function getInputFiledValueById(inputID) {
    const inputFiled = document.getElementById(inputID);
    const getInputFiledValueString = inputFiled.value;
    const InputFiledValue = parseFloat(getInputFiledValueString);
    inputFiled.value = '';

    return InputFiledValue;
}