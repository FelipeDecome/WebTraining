const $ = document.querySelector.bind(document);

const inpRom = $('[name=roman]');
const inpDec = $('[name=decimal]');

const errContainer = $('.errorContainer');

const roman = ['IV', 'IX', 'XL', 'XC', 'CD', 'CM', 'I', 'V', 'X', 'L', 'C', 'D', 'M'];
const decimal = [4, 9, 40, 90, 400, 900, 1, 5, 10, 50, 100, 500, 1000];

inpRom.addEventListener('input', handleDecimalInput);
inpRom.addEventListener('keypress', handleRomanInput);

function parseRoman(string) {

    let parsedArray = [];
    let sum = 0;

    roman.forEach((r, i) => {

        let parsedRoman = string.match(new RegExp(r, 'g'));
        string = string.replace(new RegExp(r, 'g'), '');

        parsedArray[i] = parsedRoman;
    });

    parsedArray.forEach((n, i) => {

        if (n != null) {

            sum += n.length * decimal[i];
        }
    });

    return sum;
}

function handleRomanInput(evt) {

    evt.preventDefault();

    let newNumber = evt.key.toUpperCase();

    if (roman.includes(newNumber)) {

        evt.target.value += verifyRoman(newNumber);
    } else {

        handleErrorMessage("Digite apenas números romanos 'I, V, X, L, C, D e M'");
    }

    handleDecimalInput(evt.target.value);
}

function verifyRoman(value) {

    let string = inpRom.value;

    // ^M{0,3}(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})$
    if (!/^M{0,3}(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})$/.test(string + value)) {

        handleErrorMessage('Verifique se o formato está correto');
        return '';
    }

    return value;
}

function handleDecimalInput() {

    inpDec.value = parseRoman(inpRom.value);
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