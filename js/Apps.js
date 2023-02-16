// card-1

let serial = 0;
document.getElementById("first-card").addEventListener("click", function () {
  serial += 1;
  const productName = document.getElementById("first-name").innerText;
  const productPrice = document.getElementById("first-price").innerText;
  const productQuantity = document.getElementById("first-quantity").innerText;

  const productTotal = parseInt(productPrice) * parseInt(productQuantity);

  displayProduct(productName, productPrice, productQuantity, productTotal);
  // document.getElementById("first-card").disabled = true;
  disabledButton("first-card");
});

// card-2

document.getElementById("second-card").addEventListener("click", function () {
  serial += 1;
  const productName = document.getElementById("second-name").innerText;
  const productPrice = document.getElementById("second-price").innerText;
  const productQuantity = document.getElementById("second-quantity").innerText;

  const productTotal = parseInt(productPrice) + parseInt(productQuantity);

  displayProduct(productName, productPrice, productQuantity, productTotal);
  disabledButton("second-card");
});

// card-3

document.getElementById("third-card").addEventListener("click", function () {
  serial += 1;
  const productName = document.getElementById("third-name").innerText;
  const productPrice = document.getElementById("third-price").innerText;
  const productQuantity = document.getElementById("third-quantity").innerText;

  const productTotal = parseInt(productPrice) - parseInt(productQuantity);

  displayProduct(productName, productPrice, productQuantity, productTotal);
  disabledButton("third-card");
});

//card-4

document.getElementById("four-card").addEventListener("click", function () {
  serial += 1;
  const productName = document.getElementById("four-name").innerText;
  const productPrice = document.getElementById("four-price").innerText;
  const productQuantity = document.getElementById("four-quantity").innerText;

  const productTotalFixed = parseInt(productPrice) / parseInt(productQuantity);
  const productTotal = productTotalFixed.toFixed(2);

  displayProduct(productName, productPrice, productQuantity, productTotal);
  disabledButton("four-card");
});

//card-5

document.getElementById("last-card").addEventListener("click", function () {
  serial += 1;

  const productName = document.getElementById("last-name").innerText;
  const productPrice = document.getElementById("first-input").value;
  const productQuantity = document.getElementById("second-input").value;

  if (
    productPrice == "" ||
    productQuantity == "" ||
    productPrice <= 0 ||
    productQuantity <= 0
  ) {
    return alert("Please Enter the Valid number");
  }
  document.getElementById("first-input").value = "";
  document.getElementById("second-input").value = "";

  const productTotal = parseInt(productPrice) % parseInt(productQuantity);
  // const productTotal = productTotalFixed.toFixed(2);

  displayProduct(productName, productPrice, productQuantity, productTotal);
  disabledButton("last-card");
});

function displayProduct(pName, pPrice, pQuantity, pTotal) {
  const tableContainer = document.getElementById("table-container");
  const tr = document.createElement("tr");
  tr.innerHTML = `
   <td>${serial}</td>
   <td>${pName}</td>
   <td>${pPrice}</td>
   <td>${pQuantity}</td>
   <td>${pTotal}</td>

   `;
  tableContainer.appendChild(tr);
}

function disabledButton(id) {
  document.getElementById(id).disabled = true;
}
