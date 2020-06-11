const $ = document.querySelector.bind(document);

const inpBin = $('[name=binary]');
const inpDec = $('[name=decimal]');

const errContainer = $('.errorContainer');

inpBin.addEventListener('input', handleBinaryInputChange);
inpBin.addEventListener('keypress', handleBinaryInput);

function handleBinaryInput(evt) {

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

        let msg = document.createElement('span');
        msg.classList.add('errorMsg');

        msg.innerText = errMsg;

        errContainer.append(msg);

        setTimeout(() => {
            msg.remove();
        }, 3000);
    }
}