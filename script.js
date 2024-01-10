function calculateTotalBill() {
    var selectedRestaurant = document.getElementById('restaurantSelect').value;

    var weightOfChicken = parseFloat(document.getElementById('weightOfChicken').value);
    var quantityOfChicken = parseInt(document.getElementById('quantityOfChicken').value);
    var pricePerKg = parseFloat(document.getElementById('pricePerKg').value);

    var previousBalance = parseFloat(document.getElementById('previousBalance').value);

    // Variables for other items
    var item1Price, item1Qty;

    if (selectedRestaurant !== 'kori') {
        // Get input values for other items
        item1Price = parseFloat(document.getElementById('item1Price').value) || 0;
        item1Qty = parseInt(document.getElementById('item1Qty').value) || 0;
        // Repeat similar lines for other items if needed
    }

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
        // Calculate total for other restaurants
        var totalOtherItemsCost = item1Price * item1Qty;  // Add similar calculations for other items if needed

        var totalBillOtherItems = totalOtherItemsCost;
        var totalWithPreviousBalanceOtherItems = totalBillOtherItems + previousBalance;

        var resultTextOtherItems = "Restaurant: " + selectedRestaurant +
            "<br>Previous Balance: $" + previousBalance.toFixed(2) +
            "<br>Total Other Items Cost: $" + totalOtherItemsCost.toFixed(2) +
            "<br>Total Bill: $" + totalBillOtherItems.toFixed(2) +
            "<br>Total Amount Due: $" + totalWithPreviousBalanceOtherItems.toFixed(2) +
            "<br>Date and Time: " + getCurrentDateTime();

        document.getElementById('result').innerHTML = resultTextOtherItems;

        // Export as Image with date and time
        exportToImageWithDateTime(resultTextOtherItems);
    }
}

function exportToImageWithDateTime(resultText) {
    var element = document.getElementById('result');

    // Add date and time directly to the image
    var dateTimeElement = document.createElement('div');
    dateTimeElement.innerHTML = "<p>Date and Time: " + getCurrentDateTime() + "</p>";
    element.appendChild(dateTimeElement);

    domtoimage.toBlob(element)
        .then(function (blob) {
            var link = document.createElement('a');
            link.href = URL.createObjectURL(blob);
            link.download = selectedRestaurant + "_" + new Date().toLocaleDateString() + ".png";
            link.click();

            // Remove the added date and time element
            element.removeChild(dateTimeElement);
        });
}

function getCurrentDateTime() {
    var now = new Date();
    var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric', timeZoneName: 'short' };
    return now.toLocaleDateString('en-US', options);
}
