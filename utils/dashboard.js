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
  for (var i = 0; i < elLeftBoxes.length; i++) {
    elLeftBoxes[i].classList.toggle("just-center");
    elLeftBoxes[i].classList.toggle("left-boxes");
    elLeftText[i].classList.toggle("none");
  }
}
elLeftArrow.addEventListener("click", () => {
  elLeftArrow.classList.toggle("rotate");
  arrowF();
});
const objectUserStatus = JSON.parse(localStorage.getItem("userStatus"));
if (objectUserStatus.userEntered) {
  for (var i = 0; i < localStorage.length; i++) {
    if (localStorage.key(i) === "dayNight") {
      const objectDayNight = JSON.parse(localStorage.getItem("dayNight"));
      blackWhite(objectDayNight.dayNight);
    }
  }
}

if (!localStorage.getItem("dayNight")) {
  const objectDayNight = {
    dayNight: false,
  };
  localStorage.setItem("dayNight", JSON.stringify(objectDayNight));
}

elLeftBottomBox.addEventListener("click", () => {
  elDashboard.classList.add("none");
  elDashLogin.classList.remove("none");
  const userStorage = JSON.parse(localStorage.getItem("userStatus"));
  userStorage.userEntered = false;
  localStorage.removeItem("userStatus");
  // elBody.classList.remove("body-black");
  blackWhite(false);
  localStorage.setItem("userStatus", JSON.stringify(userStorage));
  localStorage.removeItem("titleStatus");
  localStorage.setItem("titleStatus", "Login");
  elTitle.textContent = localStorage.getItem("titleStatus");
});

const elDay = document.querySelector(".day");
const elNight = document.querySelector(".night");
elDay.addEventListener("click", () => {
  blackWhite(false);
  const objectDayNight = {
    dayNight: false,
  };
  localStorage.removeItem("dayNight");
  localStorage.setItem("dayNight", JSON.stringify(objectDayNight));
});

elNight.addEventListener("click", () => {
  blackWhite(true);
  const objectDayNight = {
    dayNight: true,
  };
  localStorage.removeItem("dayNight");
  localStorage.setItem("dayNight", JSON.stringify(objectDayNight));
});

const elUsersLeftBoxes = document.querySelectorAll(".dashboard__left-boxes");
// const elUsersCard = document.querySelector(".users__card");
// const elUsersTopSpan = document.querySelector(".users__top-span");
// const elUsersLoad = document.querySelector(".users__loader");

let startStatus = true;
elUsersLeftBoxes[1].addEventListener("click", () => {
  // if(startStatus) {
  // startStatus = true;
  elUsersCard.innerHTML = `
      <div class="users__card-boxes users__card-boxes-first">
                <p class="users__des users__des-top">Name</p>
                <p class="users__des users__des-top">Email</p>
                <p class="users__des users__des-top">Phone</p>
                <p class="users__des users__des-top">Registration date</p>
                <p class="users__des users__des-top">Username</p>
              </div>
              <svg class="users__add" width="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M13.0001 10.9999L22.0002 10.9997L22.0002 12.9997L13.0001 12.9999L13.0001 21.9998L11.0001 21.9998L11.0001 12.9999L2.00004 13.0001L2 11.0001L11.0001 10.9999L11 2.00025L13 2.00024L13.0001 10.9999Z"></path></svg>
    `;
  elUsersTopSpan.textContent = "...";
  elUsersLoad.classList.remove("none");
  if (startStatus) {
    startStatus = false;
    setTimeout(() => {
      startSearch();
      startStatus = true;
    }, 1000);
    // }
  }
});
function navigatorF() {
  let offlineOnline = true;
  if (offlineOnline) {
    offlineOnline = false;
    setTimeout(() => {
      if (navigator.onLine) {
        showToast("green", "You are online!");
        startSearch();
      } else {
        showToast("red", "You are offline!");
      }
      offlineOnline = true;
    }, 5100);
  }
}

if(!navigator.onLine) {
  navigatorF();
} 

window.addEventListener("offline", navigatorF);
window.addEventListener("online", navigatorF);
