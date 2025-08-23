
document.getElementById('add-money-btn')
.addEventListener('click', function(e) {
   e.preventDefault();

   const validPin = 1234

   const bank = document.getElementById('bank').value

   const accountNumber = document.getElementById('account-number').value

   const addAmount = parseInt(document.getElementById('add-amount').value)

   const addPin = parseInt(document.getElementById('add-pin').value)

   const availableBalance = parseInt(document.getElementById('available-balance').innerText)

   if(accountNumber.length < 11) {
    alert('Please provide the valid account number.')
    return;
   }

   if(addPin !== validPin) {
    alert('Please provide the valid pin number')
    return;
   }

   const totalNewAvailableBalance = addAmount + availableBalance
   document.getElementById('available-balance').innerText = totalNewAvailableBalance
})