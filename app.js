let curNum = '';

function clearDisplay() {
    curNum = '';
    document.getElementById('display').value = '';
}

function addDisplay(value) {
    curNum += value;
    document.getElementById('display').value = curNum;
}

function calculateResult() {
    try {
        const result = eval(curNum);
        document.getElementById('display').value = result;
        curNum = result.toString();
    } catch (error) {
        document.getElementById('display').value = "Error";
        curNum = '';
    }
}