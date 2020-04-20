// counter
var pizzaQuantity = 0;
var hotDogQuantity = 0;
var frenchFriesQuantity = 0;
var burgerQuantity = 0;
var cocaColaQuantity = 0;
var spriteQuantity = 0;
// prices
var pricePizza = 4500;
var priceHotDog = 6750;
var priceFrenchFries = 5400;
var priceBurger = 8000;
var priceCocaCola = 2600;
var priceSprite = 2600;

//hiding the table
document.getElementById("post-make-order").style.display = 'none'

// add funtions to buttons
// less
document.getElementById("less-burgers").onclick = function () {
    if (burgerQuantity > 0) {
        document.getElementById("number-burgers").innerText = --burgerQuantity;
    }
}
document.getElementById("less-pizza").onclick = function () {
    if (pizzaQuantity > 0) {
        document.getElementById("number-pizza").innerText = --pizzaQuantity;
    }
}
document.getElementById("less-french-fries").onclick = function () {
    if (frenchFriesQuantity > 0) {
        document.getElementById("number-french-fries").innerText = --frenchFriesQuantity;
    }
}
document.getElementById("less-coca-cola").onclick = function () {
    if (cocaColaQuantity > 0) {
        document.getElementById("number-coca-cola").innerText = --cocaColaQuantity;
    }
}
document.getElementById("less-hot-dog").onclick = function () {
    if (hotDogQuantity > 0) {
        document.getElementById("number-hot-dog").innerText = --hotDogQuantity;
    }
}
document.getElementById("less-sprite").onclick = function () {
    if (spriteQuantity > 0) {
        document.getElementById("number-sprite").innerText = --spriteQuantity;
    }
}

// more
document.getElementById("more-burgers").onclick = function () {
    document.getElementById("number-burgers").innerText = ++burgerQuantity;
}
document.getElementById("more-pizza").onclick = function () {
    document.getElementById("number-pizza").innerText = ++pizzaQuantity;
}
document.getElementById("more-french-fries").onclick = function () {
    document.getElementById("number-french-fries").innerText = ++frenchFriesQuantity;
}
document.getElementById("more-coca-cola").onclick = function () {
    document.getElementById("number-coca-cola").innerText = ++cocaColaQuantity;
}
document.getElementById("more-hot-dog").onclick = function () {
    document.getElementById("number-hot-dog").innerText = ++hotDogQuantity;
}
document.getElementById("more-sprite").onclick = function () {
    document.getElementById("number-sprite").innerText = ++spriteQuantity;
}

//other buttons
document.getElementById("makeOrder").onclick = function () {
    if (burgerQuantity > 0 || hotDogQuantity > 0 || pizzaQuantity > 0 || frenchFriesQuantity > 0 ||
        cocaColaQuantity > 0 || spriteQuantity > 0) {
        var total = 0;
        document.getElementById("post-make-order").style.display = 'block';
        var html = `
            <table class="table" style="margin-top: 50px;">
            <thead>
            <tr>
                <th scope="col">product name</th>
                <th scope="col">amount</th>
                <th scope="col">unit value</th>
                <th scope="col">Subtotal</th>
            </tr>
            </thead>
            <tbody>`;
        if (burgerQuantity > 0) {
            total += burgerQuantity * priceBurger;
            html += `
            <tr>
            <td>Hamburger</td>
            <td>${burgerQuantity}</td>
            <td>$${priceBurger}</td>
            <td>$${burgerQuantity*priceBurger}</td>
            </tr>`;
        }
        if (hotDogQuantity > 0) {
            total += hotDogQuantity * priceHotDog;
            html += `
            <tr>
            <td>Hot dog</td>
            <td>${hotDogQuantity}</td>
            <td>$${priceHotDog}</td>
            <td>$${hotDogQuantity*priceHotDog}</td>
            </tr>`;
        }
        if (pizzaQuantity > 0) {
            total += pizzaQuantity * pricePizza;
            html += `
            <tr>
            <td>pizza</td>
            <td>${pizzaQuantity}</td>
            <td>$${pricePizza}</td>
            <td>$${pizzaQuantity*pricePizza}</td>
            </tr>`;
        }
        if (frenchFriesQuantity > 0) {
            total += frenchFriesQuantity * priceFrenchFries;
            html += `
            <tr>
            <td>French fries</td>
            <td>${frenchFriesQuantity}</td>
            <td>$${priceFrenchFries}</td>
            <td>$${frenchFriesQuantity*priceFrenchFries}</td>
            </tr>`;
        }
        if (cocaColaQuantity > 0) {
            total += cocaColaQuantity * priceCocaCola;
            html += `
            <tr>
            <td>Coca cola</td>
            <td>${cocaColaQuantity}</td>
            <td>$${priceCocaCola}</td>
            <td>$${cocaColaQuantity*priceCocaCola}</td>
            </tr>`;
        }
        if (spriteQuantity > 0) {
            total += spriteQuantity * priceSprite;
            html += `
            <tr>
            <td>Srite soda</td>
            <td>${spriteQuantity}</td>
            <td>$${priceSprite}</td>
            <td>$${spriteQuantity*priceSprite}</td>
            </tr>`;
        }
        html += `
        <tr>
        <td scope="row">Total</td>
        <td>6</td>
        <td></td>
        <td>$${total}</td>
        </tr>
        </tbody>
        </table>`;
        document.getElementById("table").innerHTML = html;
    } else {
        alert("first select your product");
    }
}

document.getElementById("btnBuy").onclick = function () {
    alert("Thanks for your purchase");
}