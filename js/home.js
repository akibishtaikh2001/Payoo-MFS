// add money to the account

/**
 * S-1: add event handler
 * prevent page reload after form submit
 * S-2: get money to be added to the account balance
 */
// step-1: add an event handeler to add money button inside the form
document.getElementById('btn_add_money').addEventListener('click', function (event) {
    // prevent page reload after from submit
    event.preventDefault();
   
    // step-2: get money to be added to the account
    const addMoneyInput = document.getElementById('input_add_money').value;
    console.log(addMoneyInput);
    
    // get the pin number provided
    const pinNumberInput = document.getElementById('input_pin_number').value;
    console.log(pinNumberInput);
    
})
