function calculateTotalBill() {
    var restaurantName = document.getElementById('restaurantName').value;

    var bonelessPrice = parseFloat(document.getElementById('bonelessPrice').value);
    var bodyPrice = parseFloat(document.getElementById('bodyPrice').value);
    // ... (similar variables for other items)

    var bonelessQty = parseInt(document.getElementById('bonelessQty').value);
    var bodyQty = parseInt(document.getElementById('bodyQty').value);
    // ... (similar variables for other items)

    var previousBalance = parseFloat(document.getElementById('previousBalance').value);

    var bonelessTotal = bonelessPrice * bonelessQty;
    var bodyTotal = bodyPrice * bodyQty;
    // ... (similar calculations for other items)

    var totalBill = bonelessTotal + bodyTotal; // Add similar calculations for other items

    var totalWithPreviousBalance = totalBill + previousBalance;

    var resultText = "Restaurant: " + restaurantName +
        "<br>Previous Balance: $" + previousBalance.toFixed(2) +
        "<br>Current Bill: $" + totalBill.toFixed(2) +
        "<br>Total Amount Due: $" + totalWithPreviousBalance.toFixed(2);

    document.getElementById('result').innerHTML = resultText;

    var exportDetails = "Restaurant: " + restaurantName +
        "\nBoneless Quantity: " + bonelessQty +
        "\nBody Quantity: " + bodyQty +
        // ... (similar details for other items)
        "\nTotal Bill: $" + totalWithPreviousBalance.toFixed(2);

    document.getElementById('exportDetails').value = exportDetails;
}

function exportToPDF() {
    var element = document.getElementById('result');
    html2pdf(element);
}
