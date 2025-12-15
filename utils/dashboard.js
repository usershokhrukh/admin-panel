const elLeftArrow = document.querySelector(".dashboard__top-icon");
const elLeftSubText = document.querySelector(".dashboard__left-sub-text");
const elLeftCenter = document.querySelector(".dashboard__left-center");
const elLeftText = document.querySelectorAll(".dashboard__left-text");
const elTop = document.querySelector(".dashboard__top");
const elDashboardTitle = document.querySelector(".dashboard__title");
const elLeftBottomText = document.querySelector(".dashboard__left-bottom-text");
const elLeftBottomBox = document.querySelector(".dashboard__left-bottom-box");
const elLeftBottomExit = document.querySelector(".dashboard__left-bottom-exit");
const elLeftBoxes = document.querySelectorAll(".dashboard__left-boxes");
const elDashLogin = document.querySelector(".login-form");
function arrowF() {
  elLeftSubText.classList.toggle("none");
  elLeftCenter.classList.toggle("none");
  elLeftBottomText.classList.toggle("none");
  elLeftBottomExit.classList.toggle("just-center");
  elDashboardTitle.classList.toggle("title");
  elTop.classList.toggle("top");
  for(var i = 0; i < elLeftBoxes.length; i++) {
    elLeftBoxes[i].classList.toggle("just-center");
    elLeftBoxes[i].classList.toggle("left-boxes");
    elLeftText[i].classList.toggle("none");
  }
}
elLeftArrow.addEventListener("click", ()=> {
  elLeftArrow.classList.toggle("rotate");
  arrowF();
});
const objectUserStatus = JSON.parse(localStorage.getItem("userStatus"));
if(objectUserStatus.userEntered) {  
  for(var i = 0; i < localStorage.length; i++) {
    if(localStorage.key(i) === "dayNight") {
      const objectDayNight = JSON.parse(localStorage.getItem("dayNight"));
      blackWhite(objectDayNight.dayNight);
    }
  }
}

if(!localStorage.getItem("dayNight")) {
  const objectDayNight = {
    dayNight: false,
  }
  localStorage.setItem("dayNight", JSON.stringify(objectDayNight));
}

elLeftBottomBox.addEventListener("click", ()=> {
  elDashboard.classList.add("none");
  elDashLogin.classList.remove("none");
  const userStorage = JSON.parse(localStorage.getItem("userStatus"));
  userStorage.userEntered = false;
  localStorage.removeItem("userStatus");
  // elBody.classList.remove("body-black");
  blackWhite(false);
  localStorage.setItem("userStatus", JSON.stringify(userStorage));
  localStorage.removeItem("titleStatus")
  localStorage.setItem("titleStatus", "Login");
  elTitle.textContent = localStorage.getItem("titleStatus");
})

const elDay = document.querySelector(".day");
const elNight = document.querySelector(".night");
elDay.addEventListener("click", ()=> {
  blackWhite(false);
  const objectDayNight = {
    dayNight: false,
  }
  localStorage.removeItem("dayNight");
  localStorage.setItem("dayNight", JSON.stringify(objectDayNight));
});

elNight.addEventListener("click", ()=> {
  blackWhite(true);
  const objectDayNight = {
    dayNight: true,
  }
  localStorage.removeItem("dayNight");
  localStorage.setItem("dayNight", JSON.stringify(objectDayNight));
  
});