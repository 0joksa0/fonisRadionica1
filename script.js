const urlParams = new URLSearchParams(window.location.search);
const myParam = urlParams.get('product');

console.log(myParam);

document.getElementById("Product").innerText = myParam.toUpperCase();

//add me js code to get all thing from form 

document.getElementById('myform').addEventListener('submit', function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const payment = document.getElementById("payment").value;
    const size = document.querySelector('input[name="size"]:checked').value;

    const purchase = {
        name,
        email,
        payment,
        size,
        product: myParam,
    };

    console.log(purchase);
    console.log(name, email, payment, size);
});