document.getElementById('kitkat-buy-btn').addEventListener('click', function () {
    // const quantity = document.getElementById('rose-quantity').value;
    const quantity = getInputValue('kitkat-quantity');
    const kitkatCost = quantity * 200;
    // document.getElementById('chocolate').innerText = kitkatCost;
    setInnerText('chocolate', kitkatCost);
    total();
})
document.getElementById('rose-buy-btn').addEventListener('click', function () {
    // const quantity = document.getElementById('rose-quantity').value;
    const quantity = getInputValue('rose-quantity');
    const roseCost = quantity * 100;
    // document.getElementById('rose').innerText = kitkatCost;
    setInnerText('rose', roseCost)
    total();
})
document.getElementById('diary-buy-btn').addEventListener('click', function () {
    // const quantity = document.getElementById('diary-quantity').value;
    const quantity = getInputValue('diary-quantity');
    const diaryCost = quantity * 100;
    // document.getElementById('diary').innerText = kitkatCost;
    setInnerText('diary', diaryCost);
    total();
})

function setInnerText(id, value) {
    document.getElementById(id).innerText = value;
}

function getInputValue(id) {
    const value = document.getElementById(id).value;
    return parseFloat(value);
}

function total() {
    const chocolate = getInnerTextValue('chocolate')
    const rose = getInnerTextValue('rose');
    const diary = getInnerTextValue('diary')
    const total = chocolate + rose + diary;
    document.getElementById('total').innerText = total;
}
function getInnerTextValue(id) {
    const value = document.getElementById(id).innerText;
    return parseFloat(value)
}

// promo code
document.getElementById('promo-apply-btn').addEventListener('click', function () {
    const promoCode = getInputValue('promo-code');
    if (promoCode == 101) {
        const total = getInnerTextValue('total');
        const sum = total - parseInt(total) * 0.1;
        setInnerText('all-total', sum)

    }
    else {
        alert('wrong promoCode try with valid code');
    }
})