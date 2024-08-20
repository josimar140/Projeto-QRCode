const container = document.querySelector('.container');
const qrCodeBtn = document.querySelector('#qr-form button');

const qrCodeInput = document.querySelector('#qr-form input');

const qrCodeImg = document.querySelector('#qr-code img');

// CRIAR O EVENTO

//GERAR QR CODE
function generateQrCode() {
    // console.log('teste');
    const qrCodeInputValue = qrCodeInput.value;
    // console.log(qrCodeInputValue);

    if (!qrCodeInputValue) return;

    qrCodeBtn.innerHTML = 'Gerando código...'

    qrCodeImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrCodeInputValue}`;

    // PARA MOSTAR O QR CODE
    container.classList.add('active');

    //ESPERAR O qrCodeImg CARREGAR
    qrCodeImg.addEventListener('load', () => {
        container.classList.add('active');
        qrCodeBtn.innerHTML = 'Código criado!';
    });
}

qrCodeBtn.addEventListener('click', () => {
    generateQrCode();
});

//QUANDO TECLAR ENTER=BUTTON PARA GERAR QR CODE
qrCodeInput.addEventListener('keydown', (e) => {
    if (e.code === 'Enter') {
        generateQrCode();
    }    
});

//LIMPAR ÁREA DO QR CODE
qrCodeInput.addEventListener('keyup', () => {
    if(!qrCodeInput.value) {
        container.classList.remove('active');
        qrCodeBtn.innerText = 'Gerar QR Code'
    }
})