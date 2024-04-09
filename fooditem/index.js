const url = "https://dev-j6u6vfrx1m6vp2x.api.raw-labs.com/mcdonalds-food-data";
const options = {
  method: "GET",
};

try {
  const response = fetch(url, options);
  response.then((data) => {
    const p1 = data.json();
    p1.then((productdata) => {
      console.log(productdata);
      showData(productdata);
    });
  });
} catch (error) {
  console.error(error);
}
let emailId = localStorage.getItem("loginuser");
const cartItemArry =
  JSON.parse(localStorage.getItem(`cartarray${emailId}`)) || [];

let nav = document.querySelector(".navigation-wrap");
window.onscroll = function () {
  if (document.documentElement.scrollTop > 20) {
    nav.classList.add("scroll-on");
  } else {
    nav.classList.add("scroll-on");
  }
};

let navbar = document.querySelectorAll(".nav-link");
let navcollapse = document.querySelector(".navbar-collapse.collapse");
navbar.forEach((element) => {
  element.addEventListener("click", function () {
    navcollapse.classList.remove("show");
  });
});

function showData(fooditems) {
  const foodArray = fooditems.mcdonalds_food_data;
  foodArray.forEach(function (element, index) {
    console.log(element);

    let cardappend = document.querySelector(".cardappend");
    let card = document.createElement("div");
    card.className = "col-lg-4 col-md-4 mb-lg-4 mb-5 cardshow";

    const cartitemFilter = cartItemArry.filter((item) => {
      if (item.item_id === element.item_id) {
        return true;
      } else {
        return false;
      }
    });
    console.log(
      "🚀 ~ file: index.js:52 ~ cartitemFilter ~  cartitemFilter:",
      cartitemFilter
    );

    card.innerHTML = `
              <div class="card">
                <img src="${element.image_url}" class="img-fluid " />
                <div class="pt3">
                  <h4>${element.item_name}</h4>
                  <p>${element.category}</p>
                  <span>$${element.price}</span>
                  <button class="main-btn ${
                    cartitemFilter.length > 0 ? "disableclass" : ""
                  }"  id="${element.item_id}">Order-now</button>
                  <button class="main-btn ${
                    cartitemFilter.length > 0 ? "disableclass" : ""
                  }" 
     id="cart-${element.item_id}">Add to cart</button>
                </div>
              </div>
            `;
    cardappend.appendChild(card);
    const addcartbtn = document.getElementById(`cart-${element.item_id}`);
    if (cartitemFilter.length > 0) {
      addcartbtn.disabled = true;
    }
    console.log(addcartbtn);
    addcartbtn.addEventListener("click", () => {
      console.log(element);
      debugger;
      cartItemArry.push(element);
      localStorage.setItem(`cartarray${emailId}`, JSON.stringify(cartItemArry));
      addcartbtn.style.backgroundColor = "red";
      addcartbtn.style.color = "black";
      addcartbtn.disabled = true;
      console.log(cartItemArry);
    });
  });
}

// show items in cart

function showitemInCart() {
  let fooditemadded = document.querySelector(".fooditemadded1");
  fooditemadded.innerHTML = "";
  let subTotal = 0;
  cartItemArry.forEach((element, i) => {
    let addeditem = document.createElement("div");
    addeditem.className = "d-flex justify-content-between addedfood";
    addeditem.innerHTML = `
    <h3>${element.item_name}</h3>
          <h3>$${element.price}</h3>
          <h3>Qty:${element.quantity + 1} </h3>
           <div class="btnofplusminus">
            <button class="sbtn ms-1" id="plusbtn${i}">+</button>
            <button class="sbtn ms-1" id="minusbtn${i}">-</button>
            <button class="sbtn-dlt ms-1 mt-1" id="dltbtn${i}">dlt</button>
            
          </div>
          <img src="${element.image_url}" alt="" class="cart-img" />
         `;
    fooditemadded.appendChild(addeditem);
    const plusbtn = document.getElementById(`plusbtn${i}`);
    plusbtn.addEventListener("click", function () {
      // let currentqty = element.quantity;
      // currentqty = currentqty + 1;
      // console.log(currentqty);
      element.quantity += 1;
      localStorage.setItem(`cartarray${emailId}`, JSON.stringify(cartItemArry));
      showitemInCart();
    });
    const minusbtn = document.getElementById(`minusbtn${i}`);
    minusbtn.addEventListener("click", function () {
      // let currentqty = element.quantity;
      // currentqty = currentqty + 1;
      if (element.quantity + 1 === 1) {
        cartItemArry.splice(i, 1);
        localStorage.setItem(
          `cartarray${emailId}`,
          JSON.stringify(cartItemArry)
        );
        showitemInCart();
        return;
      }
      element.quantity -= 1;
      showitemInCart();
    });
    const dltbtn = document.getElementById(`dltbtn${i}`);
    dltbtn.addEventListener("click", function () {
      cartItemArry.splice(i, 1);
      localStorage.setItem(`cartarray${emailId}`, JSON.stringify(cartItemArry));
      showitemInCart();
    });
    subtotal();
    function subtotal() {
      const subtotalp = document.getElementById("subtotalamount");
      console.log(subTotal);
      console.log(element.price);
      let elemnts = element.price * (element.quantity + 1);
      subTotal += elemnts;
      console.log(subTotal);
      let subtotalvalue = Math.trunc(subTotal);
      subtotalp.innerText = "$" + subtotalvalue;
    }
  });
}

function showCart() {
  showitemInCart();
  let fooditemadded = document.querySelector(".fooditemadded");
  fooditemadded.style.display = "block";
}
function closeCart() {
  let fooditemadded = document.querySelector(".fooditemadded");
  fooditemadded.style.display = "none";
}
function showOrderpage() {
  console.log("btn");
  window.location.href = "./orederplacedForm/index.html";
}
