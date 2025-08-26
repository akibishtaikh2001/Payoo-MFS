document.getElementById('btn_cash_out').addEventListener('click', function(event){
    event.preventDefault();
    console.log('cash out button click');
    const cashOut = document.getElementById('input_cash_out').value;
    const cashOutNumber = parseFloat(cashOut);
    const pinNumber = document.getElementById('cash_out_pin_number').value;

    console.log(cashOut, pinNumber);
    
    // wrong way to verify pin number
    if(pinNumber === '1234'){
        console.log('money is reducing');

        const balance = document.getElementById('account_balance').innerText;
        const balanceNumber = parseFloat(balance);
        
        // reduce the balance
        const newBalance = balanceNumber - cashOutNumber;

        // update the UI
        document.getElementById('account_balance').innerText = newBalance;

        
    }
    else{
        alert('Failed to cash out. please try again later.')
    }
})
