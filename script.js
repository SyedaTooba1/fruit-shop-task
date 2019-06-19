var value = 0;
var purchase = 0;
var appQty = 0;
var banQty = 0;
var orgQty = 0;
var totalPurchase = 0;

function values() {
    valueable = document.querySelector(".qty-2").value;
}
function finalResult() {
    document.querySelector("#totalbill").innerHTML = totalPurchase;
}

function addApple() {

    if (valueable >= 10) {
        appQty += 1;
        purchase += 10;
        valueable = valueable - purchase;
        totalPurchase = purchase + totalPurchase;
        purchase = 0;
        document.querySelector(".app-quantity").value = appQty;
        finalResult();

    }
    else {
        alert("Not Enough Money to buy Apple")
    }
}
function minusApple() {
    if (totalPurchase > 0 && appQty > 0) {
        appQty -= 1;
        purchase += 10;
        valueable = valueable + purchase;
        totalPurchase = totalPurchase - purchase;
        purchase = 0;
        document.querySelector(".app-quantity").value = appQty;
        finalResult();
    }

}

function addOrange() {

    if (valueable >= 15) {
        orgQty += 1;
        purchase += 15;
        valueable = valueable - purchase;
        totalPurchase = purchase + totalPurchase;
        purchase = 0;
        document.querySelector(".orng-quantity").value = orgQty;
        finalResult();

    }
    else {
        alert("Not Enough Money to buy Orange")
    }
}
function minusOrange() {
    if (totalPurchase > 0 && orgQty > 0) {
        orgQty -= 1;
        purchase += 15;
        valueable = valueable + purchase;
        totalPurchase = totalPurchase - purchase;
        purchase = 0;
        document.querySelector(".orng-quantity").value = orgQty;
        finalResult();
    }

}
function addBanana() {
    if (valueable >= 7) {
        banQty += 1;
        purchase += 7;
        valueable = valueable - purchase;
        totalPurchase = purchase + totalPurchase;
        purchase = 0;
        document.querySelector(".bana-quantity").value = banQty;
        finalResult();

    }
    else {
        alert("Not Enough Money to buy Banana")
    }
}
function minusBanana() {
    if (totalPurchase > 0 && banQty > 0) {
        banQty -= 1;
        purchase += 7;
        valueable = valueable + purchase;
        totalPurchase = totalPurchase - purchase;
        purchase = 0;
        document.querySelector(".bana-quantity").valueableue = banQty;
        finalResult();
    }
}