const transactions = [];

document.getElementById('addTransaction').addEventListener('click', function () {
    const accountName = document.getElementById('accountName').value;
    const amount = document.getElementById('amount').value;

    if (accountName && amount) {
        const transaction = {
            accountName: accountName,
            amount: parseFloat(amount),
            date: new Date().toLocaleString()
        };

        transactions.push(transaction);

        updateTransactionList();
        calculateBalances();
        clearInputFields();
    } else {
        alert('Please enter both account name and amount.');
    }
});

function updateTransactionList() {
    const transactionList = document.getElementById('transactionList');
    transactionList.innerHTML = '';

    transactions.forEach(transaction => {
        const listItem = document.createElement('li');
        listItem.textContent = `${transaction.accountName} - $${transaction.amount} - ${transaction.date}`;
        transactionList.appendChild(listItem);
    });
}

function calculateBalances() {
    const balances = {};

    transactions.forEach(transaction => {
        if (!balances[transaction.accountName]) {
            balances[transaction.accountName] = {
                totalAmount: 0,
                pendingAmount: 0
            };
        }

        balances[transaction.accountName].totalAmount += transaction.amount;
        balances[transaction.accountName].pendingAmount = balances[transaction.accountName].totalAmount;
    });

    // Display balances
    const balanceList = document.getElementById('balanceList');
    balanceList.innerHTML = '<h2>Balances</h2>';

    for (const accountName in balances) {
        const listItem = document.createElement('li');
        listItem.textContent = `${accountName} - Total: $${balances[accountName].totalAmount.toFixed(2)} - Pending: $${balances[accountName].pendingAmount.toFixed(2)}`;
        balanceList.appendChild(listItem);
    }
}

function clearInputFields() {
    document.getElementById('accountName').value = '';
    document.getElementById('amount').value = '';
}
