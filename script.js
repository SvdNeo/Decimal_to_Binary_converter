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

    function decimalToBinary(decimal) {
        if (decimal === 0) return '0';
        let binary = '';
        while (decimal > 0) {
            binary = (decimal % 2) + binary;
            decimal = Math.floor(decimal / 2);
        }
        return binary;
    }

    const animationData = [
        {
            inputVal: 5,
            marginTop: 300,
            addElDelay: 1000,
            msg: 'decimalToBinary(5) returns "10" + 1 (5 % 2). Then it pops off the stack.',
            showMsgDelay: 15000,
            removeElDelay: 20000,
        },
        {
            inputVal: 2,
            marginTop: -200,
            addElDelay: 1500,
            msg: 'decimalToBinary(2) returns "1" + 0 (2 % 2) and gives that value to the stack below. Then it pops off the stack.',
            showMsgDelay: 10000,
            removeElDelay: 15000,
        },
        {
            inputVal: 1,
            marginTop: -200,
            addElDelay: 2000,
            msg: 'decimalToBinary(1) returns "1" (base case) and gives that value to the stack below. Then it pops off the stack.',
            showMsgDelay: 5000,
            removeElDelay: 10000,
        }
    ];

    function showAnimation() {
        resultOutput.innerText = "Call Stack Animation";
    
        animationData.forEach((obj, index) => {
            setTimeout(() => {
                animationContainer.innerHTML += `
                    <p id="${obj.inputVal}" style="margin-top: ${obj.marginTop}px;" class="animation-frame">
                        decimalToBinary(${obj.inputVal})
                    </p>
                `;
            }, obj.addElDelay);
    
            setTimeout(() => {
                document.getElementById(obj.inputVal).textContent = obj.msg;
            }, obj.showMsgDelay);
    
            setTimeout(() => {
                document.getElementById(obj.inputVal).remove();
                if (index === animationData.length - 1) {
                    // If it's the last animation frame, display the binary conversion result
                    const inputInt = parseInt(numberInput.value);
                    setTimeout(() => {
                        resultOutput.textContent = decimalToBinary(inputInt);
                        numberInput.value = "";
                    },11000); // Add a slight delay after animation completes
                }
            }, obj.removeElDelay);
        });
    }
    
});
