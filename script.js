function calculateTotalBill() {
    var selectedRestaurant = document.getElementById('restaurantSelect').value;

    var bonelessPrice = parseFloat(document.getElementById('bonelessPrice').value);
    var bodyPrice = parseFloat(document.getElementById('bodyPrice').value);
    var lollipopPrice = parseFloat(document.getElementById('lollipopPrice').value);
    var fryPrice = parseFloat(document.getElementById('fryPrice').value);
    var jointPrice = parseFloat(document.getElementById('jointPrice').value);
    var khawabPrice = parseFloat(document.getElementById('khawabPrice').value);
    var wingsPrice = parseFloat(document.getElementById('wingsPrice').value);
    var dumPrice = parseFloat(document.getElementById('dumPrice').value);

    var bonelessQty = parseInt(document.getElementById('bonelessQty').value);
    var bodyQty = parseInt(document.getElementById('bodyQty').value);
    var lollipopQty = parseInt(document.getElementById('lollipopQty').value);
    var fryQty = parseInt(document.getElementById('fryQty').value);
    var jointQty = parseInt(document.getElementById('jointQty').value);
    var khawabQty = parseInt(document.getElementById('khawabQty').value);
    var wingsQty = parseInt(document.getElementById('wingsQty').value);
    var dumQty = parseInt(document.getElementById('dumQty').value);

    var previousBalance = parseFloat(document.getElementById('previousBalance').value);

    var bonelessTotal = bonelessPrice * bonelessQty;
    var bodyTotal = bodyPrice * bodyQty;
    var lollipopTotal = lollipopPrice * lollipopQty;
    var fryTotal = fryPrice * fryQty;
    var jointTotal = jointPrice * jointQty;
    var khawabTotal = khawabPrice * khawabQty;
    var wingsTotal = wingsPrice * wingsQty;
    var dumTotal = dumPrice * dumQty;

    var totalBill = bonelessTotal + bodyTotal + lollipopTotal + fryTotal +
                    jointTotal + khawabTotal + wingsTotal + dumTotal;

    var totalWithPreviousBalance = totalBill + previousBalance;

    var resultText = "Restaurant: " + selectedRestaurant +
        "<br>Previous Balance: $" + previousBalance.toFixed(2) +
        "<br>Current Bill: $" + totalBill.toFixed(2) +
        "<br>Total Amount Due: $" + totalWithPreviousBalance.toFixed(2);

    document.getElementById('result').innerHTML = resultText;

    var exportDetails = "Restaurant: " + selectedRestaurant +
        "\nBoneless Quantity: " + bonelessQty +
        "\nBody Quantity: " + bodyQty +
        "\nLollipop Quantity: " + lollipopQty +
        "\nFry Quantity: " + fryQty +
        "\nJoint Quantity: " +
