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
            "<br>Total Amount Due: $" + totalWithPreviousBalance.toFixed(2) +
            "<br>Date and Time: " + getCurrentDateTime();

        document.getElementById('result').innerHTML = resultText;

        // Export as Image with date and time
        exportToImageWithDateTime(resultText);
    } else {
        // Show the input fields for other items
        document.getElementById('otherItems').style.display = 'block';

        // Logic for other restaurants (similar to the existing code)
