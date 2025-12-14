const elLogin = document.querySelector(".login-form");
const elHide = document.querySelector(".hide");
const elShow = document.querySelector(".show");
const elTitle = document.querySelector("title");
const elLoader = document.querySelector(".login__loader");
const elButtonSpan = document.querySelector(".login__button-span");
const elDashboard = document.querySelector(".dashboard");
let toast = false;
let userEnteredBool = false;
elTitle.textContent = "Login";
for(var i = 0; i < localStorage.length; i++) {
  if(localStorage.key(i) === "userStatus") {
    const userStorage = JSON.parse(localStorage.getItem("userStatus"));
    if(userStorage.userEntered) {
      elLogin.classList.add("none");
      elDashboard.classList.remove("none");
    } 
    userEnteredBool = true;
  }
}

if(!userEnteredBool) {
  const userStatus = {
    userEntered: false,
  }
  localStorage.setItem("userStatus" ,JSON.stringify(userStatus))
}

elHide.addEventListener("click", ()=> {
  elHide.classList.toggle("none");
  elShow.classList.toggle("none");
  elLogin["password"].type = "text";
})

elShow.addEventListener("click", ()=> {
  elHide.classList.toggle("none");
  elShow.classList.toggle("none");
  elLogin["password"].type = "password";
})


elLogin.addEventListener("submit" , (e) => {
  e.preventDefault();
  const elUsername = elLogin["username"].value.trim();
  const elPassword = elLogin["password"].value.trim();
  const api = 'https://fakestoreapi.com/auth/login';
  const dataUser = {
    username: elUsername,
    password: elPassword,
  }
  if(elUsername && elPassword) {
    elLoader.classList.toggle("none");
    elButtonSpan.classList.toggle("none");
    axios.post(api, dataUser).then(response => tokenGet(response)).catch(error => {
      if(!toast) {
        showToast("red", "Admin not found!");
        toast = true;
        setTimeout(() => {
          toast = false;
        }, 5000);
      }
      elLoader.classList.toggle("none");
      elButtonSpan.classList.toggle("none");
    });
  }else {
    if(!toast) {
        showToast("red", "Fill Username and Password!");
        toast = true;
        setTimeout(() => {
          toast = false;
        }, 5000);
      }
  }
  
  function tokenGet(response) {
    dataUser.userEntered = true;
    const jsonAdmin = JSON.stringify(dataUser);
    localStorage.setItem("jsonAdmin", jsonAdmin);  
    elLoader.classList.toggle("none");
    elButtonSpan.classList.toggle("none");

    setTimeout(() => {
      elLogin.classList.add("none");
      showToast("green", "Success!");
      elDashboard.classList.remove("none");
      const userStorage = JSON.parse(localStorage.getItem("userStatus"));
      userStorage.userEntered = true;
      localStorage.removeItem("userStatus");
      localStorage.setItem("userStatus", JSON.stringify(userStorage));
      const elBody = document.querySelector("body");
      const dayNightStatus = JSON.parse(localStorage.getItem("dayNight"));
      if(dayNightStatus.dayNight) {
        elBody.classList.add("body-black");
      }else {
        elBody.classList.remove("body-black");
      }
      localStorage.removeItem("titleStatus")
      localStorage.setItem("titleStatus", "Dashboard");
      elTitle.textContent = localStorage.getItem("titleStatus");
    }, 1000);
  }
});

const titleStatus = localStorage.getItem("titleStatus");
if(titleStatus) {
  elTitle.textContent = titleStatus;  
}else {
  localStorage.setItem("titleStatus", "Login");
}


function showToast(color, text) {
    Toastify({
      text: `${text}`, 
      duration: 5000, // 5 soniya
      gravity: "top", // Yuqori qism
      position: "right", // O'ng tomon
      close: false, 
      stopOnFocus: true, 
      style: {
          background: "white",
          color: "black", // Matn rangini qora qilamiz
          borderRadius: "5px", // Yumaloq burchaklar
          borderLeft: `5px solid ${color}`, // Chap tomonda ko'k rangli chiziq qo'shamiz (progress bar o'rniga)
          // boxShadow: "0 3px 10px rgba(0,0,0,0.1)", // Engil soya
          padding: "15px",
          fontFamily: "Open Sans",
          boxShadow: `2px 0px 10px -3px ${color}`,
          
      },
      
  }).showToast();
}

