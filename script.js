const transactions = [];

document.getElementById('addTransaction').addEventListener('click', function () {
    const restaurant = document.getElementById('restaurant').value;
    const amount = document.getElementById('amount').value;

    if (restaurant && amount) {
        const transaction = {
            restaurant: restaurant,
            amount: parseFloat(amount),
            date: new Date().toLocaleString()
        };

        transactions.push(transaction);

        updateTransactionList();
        calculateBalances();
        calculateTotalDue();
        clearInputFields();
    } else {
        alert('Please select a restaurant and enter the amount.');
    }
});

function updateTransactionList() {
    const transactionList = document.getElementById('transactionList');
    transactionList.innerHTML = '';

    transactions.forEach(transaction => {
        const listItem = document.createElement('li');
        listItem.textContent = `${transaction.restaurant} - $${transaction.amount} - ${transaction.date}`;
        transactionList.appendChild(listItem);
    });
}

function calculateBalances() {
    const balances = {};

    transactions.forEach(transaction => {
        if (!balances[transaction.restaurant]) {
            balances[transaction.restaurant] = 0;
        }

        balances[transaction.restaurant] += transaction.amount;
    });

    // Display balances
    const balancesDiv = document.getElementById('balances');
    balancesDiv.innerHTML = '<h2>Balances</h2>';

    for (const restaurant in balances) {
        const balanceText = document.createElement('div');
        balanceText.textContent = `${restaurant}: $${balances[restaurant].toFixed(2)}`;
        balancesDiv.appendChild(balanceText);
    }
}

function calculateTotalDue() {
    const totalDue = transactions.reduce((sum, transaction) => sum + transaction.amount, 0);

    // Display total due
    const totalDueDiv = document.getElementById('totalDue');
    totalDueDiv.textContent = `Total Due: $${totalDue.toFixed(2)}`;
}

function clearInputFields() {
    document.getElementById('restaurant').value = '';
    document.getElementById('amount').value = '';
}
