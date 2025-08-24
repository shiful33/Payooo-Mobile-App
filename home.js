// Add Money Features..........

document.getElementById('add-money-btn')
.addEventListener('click', function(e) {
   e.preventDefault();

   const validPin = 1234

   const bank = document.getElementById('bank').value;

   const accountNumber = document.getElementById('account-number').value;

   const addAmount = parseInt(document.getElementById('add-amount').value);

   const addPin = parseInt(document.getElementById('add-pin').value);

   const availableBalance = parseInt(document.getElementById('available-balance').innerText);

   if(accountNumber.length < 11) {
    alert('Please provide the valid account number.');
    return;
   }

   if(addPin !== validPin) {
    alert('Please provide the valid pin number');
    return;
   }

   const totalNewAvailableBalance = addAmount + availableBalance;
   document.getElementById('available-balance').innerText = totalNewAvailableBalance;
})

// Cashout Features..........

document.getElementById('cashout-button').addEventListener('click', function(e) {
    e.preventDefault;

    const amountNumber = parseInt(document.getElementById('amount-number').value);

    const availableBalance = parseInt(document.getElementById('available-balance').innerText);

    if(agentNumber.length < 11) {
    alert('Please provide the valid account number.');
    return;
   }

   if(pinNumber !== validPin) {
    alert('Please provide the valid pin number');
    return;
   }

    const totalCashoutAvailableBalance = availableBalance - amountNumber;

    document.getElementById('available-balance').innerText = totalCashoutAvailableBalance;
})


// Toggling Features..........
// Add Money Form

document.getElementById('add-money-button').addEventListener('click', function() {

    const forms = document.getElementsByClassName('form');
    for(const form of forms) {
        form.style.display = 'none';
    }
    document.getElementById('add-money-parent').style.display = 'block';
})

// Cashout Form

document.getElementById('cashout-button').addEventListener('click', function() {
    const forms = document.getElementsByClassName('form');
    for(const form of forms) {
        form.style.display = 'none';
    }
    document.getElementById('cashout-parent').style.display = 'block';
})

// Transfer Money Form

document.getElementById('transfer-button').addEventListener('click', function() {
    
    const forms = document.getElementsByClassName('form');
    for(const form of forms) {
        form.style.display = 'none';
    }
    document.getElementById('transfer-parent').style.display = 'block';
})

// Get Bonus Form

document.getElementById('get-bonus-button').addEventListener('click', function() {
    
    const forms = document.getElementsByClassName('form');
    for(const form of forms) {
        form.style.display = 'none';
    }
    document.getElementById('get-bonus-parent').style.display = 'block';
})

// Pay Bill Form

document.getElementById('pay-bill-button').addEventListener('click', function() {
    
    const forms = document.getElementsByClassName('form');
    for(const form of forms) {
        form.style.display = 'none';
    }
    document.getElementById('pay-bill-parent').style.display = 'block';
})

// Transactions Form

document.getElementById('transactions-button').addEventListener('click', function() {
    
    const forms = document.getElementsByClassName('form');
    for(const form of forms) {
        form.style.display = 'none';
    }
    document.getElementById('transactions-parent').style.display = 'block';
})