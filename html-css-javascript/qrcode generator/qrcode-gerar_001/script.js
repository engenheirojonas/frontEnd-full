var container = document.querySelector(".container");
var generateBtn = document.querySelector(".generate-btn");
var qrInput = document.querySelector(".qr-input");
var qrImg = document.querySelector(".qr-image");

generateBtn.onclick = function () {
    if (qrInput.value.length > 0) {
        generateBtn.innerHTML = "Generating QR Code..."
        qrImg.src = "qr code api" + qrInput.value;

            /**this is to make sure that the qr code has been loaded fully before displaying it */
         qrImg.onload = function () {
            container.classList.add("active");
            generateBtn.innerHTML = "Generate QR Code"
         }
    }
}