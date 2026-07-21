const dados_1 = document.querySelector("input");
const qrcode = document.querySelector("#qrcode");

document.addEventListener("keypress", (e) => {
    if(e.key === "Enter") {
        geraQrcode();
    }
})

function geraQrcode() {
    if(!dados_1.value) return;

    
            /**https://goqr.me/api/ */
    qrcode.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=Example +${dados_1.value}`;
}