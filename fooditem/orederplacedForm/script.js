const Orderdata = [];
const errorMessageSignup = {
  fname: {
    message: "* Please fill your Full name",
  },
  address: {
    message: "* Please fill your Address  ",
  },
  Cnumber: {
    message: "* Please fill your Contactnumber",
  },
};
const emailId = localStorage.getItem("loginuser");
const cartitems = JSON.parse(localStorage.getItem(`cartarray${emailId}`));
console.log(cartitems);
// login input empty error
const loginValidation_Signup = function (inputname, inputvalue) {
  const { inputelment, labelelment, paragraphelment } = getInput(inputname);

  if (inputvalue === "") {
    inputelment.classList.add("error");
    labelelment.classList.add("error");
    paragraphelment.classList.add("error");
    paragraphelment.innerHTML = errorMessageSignup[inputname].message;
    return true;
  } else {
    inputelment.classList.remove("error");
    labelelment.classList.remove("error");
    paragraphelment.classList.remove("error");
    paragraphelment.innerHTML = "";

    return false;
  }
};

// geting elements
function getInput(inputname) {
  const inputelment = document.querySelector(
    `.formdata input[name=${inputname}]`
  );
  const labelelment = document.querySelector(
    `.formdata label[name=${inputname}]`
  );
  const paragraphelment = document.querySelector(
    `.formdata p[name=${inputname}]`
  );

  return {
    inputelment,
    labelelment,
    paragraphelment,
  };
}

//Orderplce btn click
function orderdataadd() {
  const nameinput = getInput("fname");
  console.log("🚀 ~ file: script.js:53 ~ orderdataadd ~ nameinput:", nameinput);
  console.log(nameinput.inputelment);
  if (nameinput.inputelment.value === "") {
    nameinput.paragraphelment.innerHTML = errorMessageSignup.fname.message;
    nameinput.paragraphelment.classList.add("error");
    nameinput.labelelment.classList.add("error");
  } else {
    nameinput.paragraphelment.classList.remove("error");
    nameinput.labelelment.classList.remove("error");
  }
  const addressinput = getInput("address");
  console.log(
    "🚀 ~ file: script.js:53 ~ orderdataadd ~ addressinput:",
    addressinput
  );
  console.log(addressinput.inputelment);
  if (addressinput.inputelment.value === "") {
    addressinput.paragraphelment.innerHTML = errorMessageSignup.address.message;
    addressinput.paragraphelment.classList.add("error");
    addressinput.labelelment.classList.add("error");
  } else {
    addressinput.paragraphelment.classList.remove("error");
    addressinput.labelelment.classList.remove("error");
  }
  const Cnumberinput = getInput("Cnumber");
  console.log(
    "🚀 ~ file: script.js:53 ~ orderdataadd ~ Cnumberinput:",
    Cnumberinput
  );
  console.log(Cnumberinput.inputelment);
  if (Cnumberinput.inputelment.value === "") {
    Cnumberinput.paragraphelment.innerHTML = errorMessageSignup.Cnumber.message;
    Cnumberinput.paragraphelment.classList.add("error");
    Cnumberinput.labelelment.classList.add("error");
    return;
  } else {
    Cnumberinput.paragraphelment.classList.remove("error");
    Cnumberinput.labelelment.classList.remove("error");
  }
  const newOrderdata = {
    name: nameinput.inputelment.value,
    adress: addressinput.inputelment.value,
    cnumber: Cnumberinput.inputelment.value,
  };

  Orderdata.push(newOrderdata);
  console.log(Orderdata);
  alert("order confomed!😋😋 your order will diliver in 30 minutes😊");
  window.location.href = "http://127.0.0.1:5501/Food_Application/index.html";
}
showorders();
function showorders() {
  const showdatadiv = document.querySelector(".showorderdata");
  let subtotal = 0;
  cartitems.forEach((element) => {
    let div = document.createElement("div");
    div.className = "d-flex justify-content-between";
    div.innerHTML = `<h3>${element.item_name}</h3>
                <img src="${element.image_url}" alt="" />
                <h3>$${element.price}</h3>`;
    showdatadiv.appendChild(div);
    subtotal += element.price;
  });
  let div2 = document.createElement("div");
  div2.className = "d-flex justify-content-between";
  div2.innerHTML = `<h2>Total Amount</h2>
                <h2>$${subtotal}</h2>`;
  showdatadiv.appendChild(div2);
}
