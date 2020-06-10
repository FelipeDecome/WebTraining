const inpBin = document.querySelector('[name=binary]');

inpBin.addEventListener('keypress', handleBinaryInput);

function handleBinaryInput(evt) {

    if (evt.key > 0 && evt.key < 1) {

        return;
    }

    inpBin.value[inpBin.value.lenght - 1] = '';