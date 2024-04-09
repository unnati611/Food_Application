const signUpdata = {};
const errorMessageSignup = {
  email: {
    message: "* Please fill your  Email address",
  },
  psw: {
    message: "* Please fill your Password  ",
  },
  "psw-repeat": {
    message: "* Please fill your Repeat Password",
  },
};
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
    `.signup input[name=${inputname}]`
  );
  const labelelment = document.querySelector(
    `.signup label[name=${inputname}]`
  );
  const paragraphelment = document.querySelector(
    `.signup p[name=${inputname}]`
  );

  return {
    inputelment,
    labelelment,
    paragraphelment,
  };
}
// password validation
function passwordValidation() {
  const { inputelment: inputelmentpsw } = getInput("psw");

  const { inputelment, labelelment, paragraphelment } = getInput("psw-repeat");
  if (inputelmentpsw.value !== inputelment.value) {
    paragraphelment.innerHTML = "Repeat password is not matching with password";
    paragraphelment.classList.add("error");
    inputelment.classList.add("error");
    labelelment.classList.add("error");
    return true;
  } else {
    labelelment.classList.remove("error");
    inputelment.classList.remove("error");
    paragraphelment.classList.remove("error");
    paragraphelment.innerHTML = "";
  }
}
//signup btn click
function AddNewdata() {
  const password = passwordValidation();
  console.log(password);
  if (password === true) {
    return;
  }
  var formData = new FormData(document.querySelector(".signup form"));
  for (var p of formData) {
    let name = p[0];
    let value = p[1];

    console.log(value);
    signUpdata[name] = value;

    var isError = loginValidation_Signup(name, value);
    if (isError === true) {
      return;
    }
  }
  if (isError === true) {
    return;
  }
  //   console.log(signUpdata);
  const getlocaldata = localStorage.getItem("userdata");

  if (getlocaldata === null) {
    localStorage.setItem("userdata", JSON.stringify([signUpdata]));
  } else {
    let Dataobj = JSON.parse(getlocaldata);
    const email_check = emailValidation(Dataobj, signUpdata);
    if (email_check === true) {
      return;
    }
    Dataobj.push(signUpdata);
    console.log(Dataobj);
    localStorage.setItem("userdata", JSON.stringify(Dataobj));
  }
  console.log(isError);

  alert("Your account created successfully please login");
  const modal_signin = document.querySelector("#modal-signin");
  modal_signin.style.display = "none";
  const modal_login = document.querySelector("#modal-login");
  modal_login.style.display = "flex";

  const { inputelment } = getInput("email");
  inputelment.value = "";
  const { inputelment: inputelmentpsw } = getInput("psw");
  inputelmentpsw.value = "";
  const { inputelment: inputelmentrptpsw } = getInput("psw-repeat");
  inputelmentrptpsw.value = "";
}

//check email
function emailValidation(localdata, emailvalue) {
  const { email } = emailvalue;
  const emailFilter = localdata.filter((name) => {
    if (name.email === email) {
      return true;
    } else {
      return false;
    }
  });
  console.log(emailFilter);
  const { inputelment, labelelment, paragraphelment } = getInput("email");
  if (emailFilter.length !== 0) {
    paragraphelment.classList.add("error");
    inputelment.classList.add("error");
    labelelment.classList.add("error");
    paragraphelment.innerHTML =
      "Account already present for this email id Please use different email-id";
    return true;
  } else {
    paragraphelment.classList.remove("error");
    inputelment.classList.remove("error");
    labelelment.classList.remove("error");
    paragraphelment.innerHTML = "";
  }
}
