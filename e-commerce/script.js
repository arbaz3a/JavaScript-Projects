let addbtn = document.querySelectorAll(".btn"); // select btn class using DOM
const btncard = document.querySelector("#btncard"); // select btncard id using DOM
let cartItems = []; // array to store multiple cards
const sidebar = document.getElementById("sidebar"); // select sidebar id using DOM

btncard.addEventListener("click", function () {
  sidebar.style.visibility = "visible"; // sidebar show after single click on the card button

  btncard.addEventListener("dblclick", () => {
    sidebar.style.visibility = "hidden"; // sidebar hide after double click on the card button
  });
});

for (let btn of addbtn) {
  btn.addEventListener("click", () => {
    let product = btn.parentElement; // getting parent element
    let productID = product.id; // getting parent element id
    let productName = product.querySelector("h3").innerText; // selecting inner text of h3 tag like name
    let productPrice = product.querySelector(".price").innerText; // selecting inner text price
    cartItems.push({
      //if you want to store all three as one item (object) in the array
      // to keep them together as a single product entry,
      id: productID,
      name: productName,
      price: productPrice,
    });
    updateSidebar(); // sidebar data update
  });
}

function updateSidebar() {
  sidebar.innerText = ""; // empty inner text
  let title = document.createElement("h3"); // creating the h3 tag in html
  title.innerText = "Cart Items"; // add inner text
  sidebar.appendChild(title); // making child of sidebar div
  title.classList.add("cart-title"); // creating class dynamically in css

  cartItems.forEach((item) => {
    let itemElement = document.createElement("div"); // creating the div tag in html
    itemElement.classList.add("cart-item"); // creating class dynamically in css
    itemElement.innerHTML = `<p>${item.name} - ${item.price}</p>`;
    sidebar.appendChild(itemElement); // making child of sidebar div
  });
}

let search = document.getElementById("search"); // selecting the search id 
const searchbtn = document.getElementById("searchbtn"); // selecting the searchbtn id
let products = document.querySelectorAll(".category div"); // selecting category class all div's

searchbtn.addEventListener("click", () => {
  let value = search.value.toLowerCase(); // get the input value and convert to lowercase
  let matchedProducts = []; // array to keep track of matched products

  for (let product of products) {
    let productText = product.querySelector(".pro").innerText.toLowerCase(); // get the text of each product and convert to lowercase
    if (productText.includes(value)) {
      product.style.display = "flex"; // show the matched product
      matchedProducts.push(product); // always add one item at a time and also show one item
    } else {
      product.style.display = "none"; // hide the unmatched product
    }
  }
  // adjust the layout to center or align the matched products
  if (matchedProducts.length > 0) {
    let parent = matchedProducts[0].parentElement; // first index of array
    parent.style.display = "flex"; // parent is displayed as flex
    parent.style.justifyContent = "center"; // center the matched items
  }
});

// category select menu
let category1 = document.querySelector(".category1"); // selecting category1 class using DOM
const clothing = document.querySelector(".clothing"); // selecting clothing class using DOM
const electronics = document.querySelector(".electronics"); // selecting electronics class using DOM
const beauty = document.querySelector(".beauty"); // selecting beauty class using DOM

category1.addEventListener("change", () => {
  // change event for select options
  let select_category = category1.value; // getting value that particular selected category

  clothing.classList.add("hidden"); // hide display elements all
  electronics.classList.add("hidden"); // hide display elements all
  beauty.classList.add("hidden"); // hide display elements all

  if (select_category === "Clothes") {
    clothing.classList.remove("hidden"); // change the display hide to flex to show data
  } else if (select_category === "Electronics") {
    electronics.classList.remove("hidden"); // change the display hide to flex to show data
  } else if (select_category === "Beauty") {
    beauty.classList.remove("hidden"); // change the display hide to flex to show data
  } else if (select_category === "Select") {
    clothing.classList.remove("hidden"); // show display elements all
    electronics.classList.remove("hidden"); // show display elements all
    beauty.classList.remove("hidden"); // show display elements all
  }
});
