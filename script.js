function calculateTotalBill() {
    var selectedRestaurant = document.getElementById('restaurantSelect').value;

    var weightOfChicken = parseFloat(document.getElementById('weightOfChicken').value);
    var quantityOfChicken = parseInt(document.getElementById('quantityOfChicken').value);
    var pricePerKg = parseFloat(document.getElementById('pricePerKg').value);

    var previousBalance = parseFloat(document.getElementById('previousBalance').value);

    // Calculate total for Kori restaurant
    if (selectedRestaurant === 'kori') {
        var totalWeightCost = weightOfChicken * pricePerKg;
        var totalQuantityCost = quantityOfChicken * 10;  // Assuming a fixed cost per chicken quantity

        var totalBill = totalWeightCost + totalQuantityCost;
        var totalWithPreviousBalance = totalBill + previousBalance;

        var resultText = "Restaurant: " + selectedRestaurant +
            "<br>Previous Balance: $" + previousBalance.toFixed(2) +
            "<br>Weight Cost: $" + totalWeightCost.toFixed(2) +
            "<br>Quantity Cost: $" + totalQuantityCost.toFixed(2) +
            "<br>Total Bill: $" + totalBill.toFixed(2) +
            "<br>Total Amount Due: $" + totalWithPreviousBalance.toFixed(2);

        document.getElementById('result').innerHTML = resultText;

        var exportDetails = "Restaurant: " + selectedRestaurant +
            "\nWeight of Chicken: " + weightOfChicken + " kg" +
            "\nQuantity of Chicken: " + quantityOfChicken +
            "\nPrice per Kg: $" + pricePerKg.toFixed(2) +
            "\nTotal Weight Cost: $" + totalWeightCost.toFixed(2) +
            "\nTotal Quantity Cost: $" + totalQuantityCost.toFixed(2) +
            "\nTotal Bill: $" + totalBill.toFixed(2);
    } else {
        // Logic for other restaurants (similar to the existing code)
        // ...
    }

    // Set exportDetails for PDF export
    document.getElementById('exportDetails').value = exportDetails;
}
