const $ = document.querySelector.bind(document);

const inpBin = $('[name=binary]');
const inpDec = $('[name=decimal]');

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
    let container = $('.errorContainer');

    if (container) {
        let errorContainer = document.createElement('span');
        errorContainer.classList.add('errorContainer');

        inpBin.parentNode.insertAdjacentElement('beforeend', errorContainer);

        container = $('.errorContainer');
    } else {

        container.style.display = 'none';
    }

    if (errMsg != '') {

        container.innerText = errMsg;
        setTimeout(() => {
            container.innerText = '';
            container.style.display = 'none';
        }, 2000);
    }
}