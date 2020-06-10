const inpBin = document.querySelector('[name=binary]');
const inpDec = document.querySelector('[name=decimal]');

inpBin.addEventListener('keypress', handleBinaryInput);

function handleBinaryInput(evt) {

    evt.preventDefault();

    if (evt.target.value.length <= 8 && /\b[10]+\b/.test(evt.key)) {

        evt.target.value += evt.key;
    }

    handleBinaryInputChange();
}

function handleBinaryInputChange(evt) {

    inpDec.value = parseInt(inpBin.value, 2);
    console.log(inpDec)
}