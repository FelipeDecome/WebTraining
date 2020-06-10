const $ = document.querySelector.bind(document);

const inpRom = $('[name=roman]');
const inpDec = $('[name=decimal]');

const container = $('#errorContainer');

inpRom.addEventListener('keypress', handleRomanInput);

function handleRomanInput(evt) {

    evt.preventDefault();

    if (/\b[10]+\b/.test(evt.key)) {

        evt.target.value += evt.key;
        handleBinaryInputChange();
    } else {
        handleErrorMessage("Digite apenas '0' ou '1'");
    }
}

function handleBinaryInputChange(evt) {

    inpDec.value = parseInt(inpBin.value, 2);
}

function handleErrorMessage(errMsg) {

    if (errMsg != '') {

        container.innerText = errMsg;
        container.style.display = 'block';

        setTimeout(() => {
            container.innerText = '';
            container.style.display = 'none';
        }, 2000);
    }
}