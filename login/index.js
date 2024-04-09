const logindata = {};
const errorMessage = {
  email: {
    message: "* Please fill your  Email address",
  },
  psw: {
    message: "* Please fill your Password  ",
  },
};
function loginValidation(inputname, inputvalue) {
  console.log(inputname, inputvalue);
  const inputelment = document.querySelector(`input[name=${inputname}]`);
  const labelelment = document.querySelector(`label[name=${inputname}]`);
  const paragraphelment = document.querySelector(`p[name=${inputname}]`);
  if (inputvalue === "") {
    inputelment.classList.add("error");
    labelelment.classList.add("error");
    paragraphelment.classList.add("error");
    paragraphelment.innerHTML = errorMessage[inputname].message;
  } else {
    inputelment.classList.remove("error");
    labelelment.classList.remove("error");
    paragraphelment.classList.remove("error");
    paragraphelment.innerHTML = "";
  }
}
function loginclick() {
  const formData = new FormData(document.querySelector("form"));
  for (let p of formData) {
    let name = p[0];
    let value = p[1];

    console.log(value);
    logindata[name] = value;
    loginValidation(name, value);
  }

  console.log(logindata);
  const currentdata = localStorage.getItem("userdata");
  console.log(currentdata);
  if (currentdata === null) {
    alert("your profile is not available please sign in your data");
    return;
  }
  const maindata = JSON.parse(currentdata);

  const filterans = maindata.filter((name) => {
    if (name.email === logindata.email && name.psw === logindata.psw) {
      return true;
    } else {
      return false;
    }
  });
  console.log(filterans);
  if (filterans.length === 1) {
    const modal_login = document.querySelector("#modal-login");
    modal_login.style.display = "none";
    alert("login successfully");
    profileshow();
    localStorage.setItem("loginuser", logindata.email);
  } else {
    const paragraphelment = document.querySelector("p[name=email]");
    paragraphelment.classList.add("error");
    paragraphelment.innerHTML = "Please Enter valid EmailId";
  }
}

function profileshow() {
  let loginbtn = document.getElementById("loginbtn");
  loginbtn.style.display = "none";
}
