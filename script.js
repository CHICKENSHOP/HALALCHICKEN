function calculateTotalBill() {
    // ... (previous code remains unchanged)

    // Display results
    var resultText = "Restaurant: " + restaurantName +
        "<br>Previous Balance: $" + previousBalance.toFixed(2) +
        "<br>Current Bill: $" + totalBill.toFixed(2) +
        "<br>Total Amount Due: $" + totalWithPreviousBalance.toFixed(2);

    document.getElementById('result').innerHTML = resultText;

    // Display restaurant name, item quantities, and total bill for PDF export
    var exportDetails = "Restaurant: " + restaurantName +
        "\nBoneless Quantity: " + bonelessQty +
        "\nBody Quantity: " + bodyQty +
        "\nLollipop Quantity: " + lollipopQty +
        "\nFry Quantity: " + fryQty +
        "\nJoint Quantity: " + jointQty +
        "\nKhawab Quantity: " + khawabQty +
        "\nWings Quantity: " + wingsQty +
        "\nDum Quantity: " + dumQty +
        "\nTotal Bill: $" + totalWithPreviousBalance.toFixed(2);

    document.getElementById('exportDetails').value = exportDetails;
}

function exportToPDF() {
    var element = document.getElementById('result');
    html2pdf(element);
}
