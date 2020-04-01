function calc() {
    var calculation = { // object to store all values needed to perform desired calculation
        val1: '',
        val2: '',
        op: '',
        val1Stored: false,
    };
    var btnPressed = '';
    const display = document.getElementById("results");
    const keys = document.querySelector('#calc_container'); // add listener to everything in calc container

    /** Event that listens to buttons that are being clicked
     * stores button that was clicked into {target}
     * performs operation depending on class of button that was clicked
     * classname = 
     * number: append target button value onto current results value
     * pos-neg: toggles current value in results to positive of negative
     * clr: clears results window and all properties of calculation object
     * operator: stores current results value into val1 and stores selected operation into op
     * calculate: calls calculate function to return result of desired calculation
     */
    keys.addEventListener('click', (event) => 
    {
        const {target} = event; // stores target key that was clicked
        btnPressed = target.value;

        if (!target.matches('button'))
            return;
        else 
        {
            switch(target.className)
            {
                case 'number':
                {
                    if (calculation.val1Stored == true) // operation has been selected
                    {
                        display.innerHTML = '';
                        calculation.val1Stored = false;
                    } 
                    display.innerHTML = display.innerHTML + btnPressed; // append
                    break;                   
                }   
                case 'pos-neg':
                {
                    display.innerHTML = display.innerHTML * (-1);
                    break;
                }
                case 'clr': 
                {
                    display.innerHTML = '';
                    clear(calculation);
                    break;
                }
                case 'operator':
                {
                    calculation.val1 = display.innerHTML;
                    calculation.val1Stored = true;      
                    calculation.op = target.value;  
                    break;
                }
                case 'calculate':
                {
                    calculation.val2 = display.innerHTML;
                    display.innerHTML = calculate(calculation);
                    break;
                }
            }
        }
    });
}

/**
 * clear() takes the calculation object and clears all of it's values
 * @param  {object} calculation Calculation object with it's current values
 * @return {object} calculation Calculation object with it's values cleared
 */
function clear(calculation) {
    calculation.val1 = '';
    calculation.val2 = '';
    calculation.op = '';
    calculation.val1Stored = false;

    return calculation;
}

/**
 * calculation() takes the calculation object, performs the calculation between two values, and returns result
 * @param  {object} calculation object with it's current values
 * @return {number} Result of calcuation made depending on val1, val2, and op chosen
 */
function calculate(calculation)
{
    switch(calculation.op)
    {
        case '/': 
        {
            calculation.op = '';
            calculation.val1Stored = false;
            return parseInt(calculation.val1, 10) / parseInt(calculation.val2, 10);
        }
        case 'x': 
        {
            calculation.op = '';
            calculation.val1Stored = false;
            return parseInt(calculation.val1, 10) * parseInt(calculation.val2, 10);
        }
        case '-': 
        {
            calculation.op = '';
            calculation.val1Stored = false;
            return parseInt(calculation.val1, 10) - parseInt(calculation.val2, 10);
        }
        case '+': 
        {
            calculation.op = '';
            calculation.val1Stored = false;
            return parseInt(calculation.val1, 10) + parseInt(calculation.val2, 10);
        }
    }
}

calc();

