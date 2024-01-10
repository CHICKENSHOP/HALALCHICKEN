var exportDetails = "Restaurant: " + selectedRestaurant +
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
    var pdfName = document.getElementById('restaurantSelect').value + "_" + new Date().toLocaleDateString() + ".pdf";
    html2pdf(element, { filename: pdfName });
}

function exportToImage() {
    var element = document.getElementById('result');
    domtoimage.toBlob(element)
        .then(function (blob) {
            var link = document.createElement('a');
            link.href = URL.createObjectURL(blob);
            link.download = document.getElementById('restaurantSelect').value + "_" + new Date().toLocaleDateString() + ".png";
            link.click();
        });
}
