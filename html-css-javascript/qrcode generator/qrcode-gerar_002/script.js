const dados_1 = document.querySelector("input");
const qrcode = document.querySelector("#qrcode");

document.addEventListener("keypress", (e) => {
    if(e.key === "Enter") {
        geraQrcode();
    }
})

function geraQrcode() {
    if(!dados_1.value) return;
    
    qrcode.src = `api de code QR`;
}