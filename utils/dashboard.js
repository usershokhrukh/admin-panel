const elLeftArrow = document.querySelector(".dashboard__top-icon");
const elLeftSubText = document.querySelector(".dashboard__left-sub-text");
const elLeftCenter = document.querySelector(".dashboard__left-center");
const elLeftText = document.querySelectorAll(".dashboard__left-text");
// const elLeftText = document.querySelector(".dashboard__left-text");
const elTop = document.querySelector(".dashboard__top");
const elDashboardTitle = document.querySelector(".dashboard__title");
const elLeftBottomText = document.querySelector(".dashboard__left-bottom-text");
const elLeftBottomExit = document.querySelector(".dashboard__left-bottom-exit");
const elLeftBoxes = document.querySelectorAll(".dashboard__left-boxes");
const elBody = document.querySelector("body");
const elDay = document.querySelector(".day");
const elNight = document.querySelector(".night");
const elDashLogin = document.querySelector(".login-form");
const elNavbarName = document.querySelector(".dashboard__navbar-name");
function arrowF() {
  elLeftSubText.classList.toggle("none");
  elLeftCenter.classList.toggle("none");
  elLeftBottomText.classList.toggle("none");
  elLeftBottomExit.classList.toggle("just-center");
  elDashboardTitle.classList.toggle("none");
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
// let dayNightBool = false;

const objectUserStatus = JSON.parse(localStorage.getItem("userStatus"));
if(objectUserStatus.userEntered) {  
  for(var i = 0; i < localStorage.length; i++) {
    if(localStorage.key(i) === "dayNight") {
      // dayNightBool = true;
      const objectDayNight = JSON.parse(localStorage.getItem("dayNight"));
      if(objectDayNight.dayNight) {
        elDay.classList.remove("none");
        elNight.classList.add("none");
        elBody.classList.add("body-black");
        elNavbarName.classList.add("name-white");
      }else {
        elDay.classList.add("none");
        elNight.classList.remove("none");
        elBody.classList.remove("body-black");
        elNavbarName.classList.remove("name-white");
      }
    }
  }
}

if(!localStorage.getItem("dayNight")) {
  const objectDayNight = {
    dayNight: false,
  }
  localStorage.setItem("dayNight", JSON.stringify(objectDayNight));
}

elLeftBottomExit.addEventListener("click", ()=> {
  elDashboard.classList.add("none");
  elDashLogin.classList.remove("none");
  const userStorage = JSON.parse(localStorage.getItem("userStatus"));
  userStorage.userEntered = false;
  localStorage.removeItem("userStatus");
  elBody.classList.remove("body-black");
  localStorage.setItem("userStatus", JSON.stringify(userStorage));
  localStorage.removeItem("titleStatus")
  localStorage.setItem("titleStatus", "Login");
  elTitle.textContent = localStorage.getItem("titleStatus");
})

elDay.addEventListener("click", ()=> {
  elDay.classList.toggle("none");
  elNight.classList.toggle("none");
  elBody.classList.toggle("body-black");
  elNavbarName.classList.toggle("name-white");
  const objectDayNight = {
    dayNight: false,
  }
  localStorage.removeItem("dayNight");
  localStorage.setItem("dayNight", JSON.stringify(objectDayNight));
});

elNight.addEventListener("click", ()=> {
  elDay.classList.toggle("none");
  elNight.classList.toggle("none");
  elBody.classList.toggle("body-black");
  elNavbarName.classList.toggle("name-white");
  const objectDayNight = {
    dayNight: true,
  }
  localStorage.removeItem("dayNight");
  localStorage.setItem("dayNight", JSON.stringify(objectDayNight));
  
});