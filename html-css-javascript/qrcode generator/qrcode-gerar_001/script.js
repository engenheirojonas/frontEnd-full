var container = document.querySelector(".container");
var generateBtn = document.querySelector(".generate-btn");
var qrInput = document.querySelector(".qr-input");
var qrImg = document.querySelector(".qr-image");

generateBtn.onclick = function () {
    if (qrInput.value.length > 0) {
        generateBtn.innerHTML = "Generating QR Code..."

            /**https://goqr.me/api/ */
        qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=Example + ${qrInput.value}`;

            /**this is to make sure that the qr code has been loaded fully before displaying it */
         qrImg.onload = function () {
            container.classList.add("active");
            generateBtn.innerHTML = "Generate QR Code"
         }
    }
}