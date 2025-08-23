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


// Toggling Features..........
// Add Money Form

document.getElementById('add-money-button').addEventListener('click', function() {

    document.getElementById('cashout-parent').style.display = 'none';

    document.getElementById('add-money-parent').style.display = 'block';
})

// Cashout Form

document.getElementById('cashout-button').addEventListener('click', function() {
    document.getElementById('cashout-parent').style.display = 'block';

    document.getElementById('add-money-parent').style.display = 'none';
})

// Transfer Money Form

document.getElementById('transfer-button').addEventListener('click', function() {
    document.getElementById('transfer-parent').style.display = 'block';

    document.getElementById('add-money-parent').style.display = 'none';

    document.getElementById('cashout-parent').style.display = 'none';
})

// Get Bonus Form

document.getElementById('get-bonus-button').addEventListener('click', function() {
    document.getElementById('get-bonus-parent').style.display = 'block';

    document.getElementById('add-money-parent').style.display = 'none';

    document.getElementById('cashout-parent').style.display = 'none';

    document.getElementById('transfer-parent').style.display = 'none';
})

// Pay Bill Form

document.getElementById('pay-bill-button').addEventListener('click', function() {
    document.getElementById('pay-bill-parent').style.display = 'block';

    document.getElementById('add-money-parent').style.display = 'none';

    document.getElementById('cashout-parent').style.display = 'none';

    document.getElementById('transfer-parent').style.display = 'none';

    document.getElementById('get-bonus-parent').style.display = 'none';
})

// Transactions Form

document.getElementById('transactions-button').addEventListener('click', function() {
    document.getElementById('transactions-parent').style.display = 'block';

    document.getElementById('add-money-parent').style.display = 'none';

    document.getElementById('cashout-parent').style.display = 'none';

    document.getElementById('transfer-parent').style.display = 'none';

    document.getElementById('get-bonus-parent').style.display = 'none';

    document.getElementById('pay-bill-parent').style.display = 'none';
})