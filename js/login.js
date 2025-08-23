// console.log('button clicking file added');

// document.getElementById('button_login').addEventListener('click', function (){

// })

// Search: from submit reloading the page

// step - 1 set event handler
// document.getElementById('button_login').addEventListener('click', function (event) {
//     // step-2: prevent default behavior (prevent reloading browser)
//     event.preventDefault();  // <-------- vejal to beginners

//     // step-3: get the phone number and pin number
//     const phoneNumber = document.getElementById('phone_number').value;
//     const pinNumber = document.getElementById('pin_number').value;
//     console.log(phoneNumber, pinNumber);

//     // step-4: validate phone and pin
//     // this is temporary. you should not do like this
//     if(phoneNumber === '5' && pinNumber === '1234'){
//         console.log('you are logged in');
//         // step -5: allow user to use the website
//     }
//     else{
//         alert('wrong phone number or pin');
//     }
// })


document.getElementById('button_login').addEventListener('click', function (event) {
    event.preventDefault();
    console.log('button clicked');

    // get phone number and pin
    const phoneNumber = document.getElementById('phone_number').value;
    const pinNumber = document.getElementById('pin_number').value;
    console.log(phoneNumber, pinNumber);
    
    // bad way to validate
    if(phoneNumber === '5' && pinNumber === '1234'){
        console.log('you are logged in');
        window.location.href = '/home.html';
        
    }
    else{
        console.log('wrong phone number or pin.');
        
    }
})