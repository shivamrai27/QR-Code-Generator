const qrFormEl = document.getElementById("qrForm");
const qrImageEl = document.getElementById("qrImage");
const qrContainerEl = document.getElementById("qrContainer");
const qrInputTextEl = document.getElementById("qrInputText");

const renderQRCode = (url) => {
    if (!url) return
    qrImageEl.src = url;
    qrContainerEl.classList.add("show");
};

qrFormEl.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(qrFormEl);
    const text = formData.get('qrText');
    const qrCodeUrl = ` https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${text}`
    renderQRCode(qrCodeUrl);
    console.log(text);
});

qrInputTextEl.addEventListener("keyup", () => {
    if (!qrContainerEl.ariaValueMax.trim());
    qrContainerEl.classList.remove("showing");

});

