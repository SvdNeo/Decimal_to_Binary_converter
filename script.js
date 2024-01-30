document.addEventListener('DOMContentLoaded', function() {
    const numberInput = document.getElementById('number-input');
    const convertBtn = document.getElementById('convert-btn');
    const resultOutput = document.getElementById('result');
    const animationContainer = document.getElementById('animation-container');

    convertBtn.addEventListener('click', checkUserInput);

    function checkUserInput() {
        const inputInt = parseInt(numberInput.value);

        if (!numberInput.value || isNaN(inputInt)) {
            alert("Please provide a decimal number");
            return;
        }

        if (inputInt === 5) {
            showAnimation();
        } else {
            resultOutput.textContent = decimalToBinary(inputInt);
            numberInput.value = "";
        }
    }

    
});
