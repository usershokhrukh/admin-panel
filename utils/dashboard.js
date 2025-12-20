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

let startStatus = true;
elUsersLeftBoxes[1].addEventListener("click", () => {
  elUsersCard.innerHTML = `    
      <div class="users__card-boxes users__card-boxes-first">
              <p class="users__des users__des-top">Name</p>
              <p class="users__des users__des-top">Email</p>
              <p class="users__des users__des-top">Phone</p>
              <p class="users__des users__des-top">Registration date</p>
              <p class="users__des users__des-top">Username</p>
            </div>
            <div class="users__show-box">
              <div class="users__change">
                <form class="users__change-form show none">
                  <div class="users__change-top">
                    <h2 class="users__change-title">
                      New <span class="users__change-span-id"></span>
                    </h2>
                    <button class="users__change-button" type="submit">send</button>
                    <svg class="users__change-exit" width="14" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11.9997 10.5865L16.9495 5.63672L18.3637 7.05093L13.4139 12.0007L18.3637 16.9504L16.9495 18.3646L11.9997 13.4149L7.04996 18.3646L5.63574 16.9504L10.5855 12.0007L5.63574 7.05093L7.04996 5.63672L11.9997 10.5865Z"></path></svg>
                  </div>
                  
                  <div class="users__change-box">
                    <label class="users__change-label" for="users__change-username">Username</label>
                    <input id="users__change-username" class="users__change-input" name="users-change-username" type="text">
                  </div>
                  <div class="users__change-box">
                    <label class="users__change-label" for="users__change-email">Email</label>
                    <input id="users__change-email" class="users__change-input" name="users-change-email" type="email">
                  </div>
                </form>
              </div>
              <div class="users__new">
                <form class="users__new-form show none">
                  <div class="users__new-top">
                    <h2 class="users__change-title">
                      Add a new user
                    </h2>
                    <button type="submit" class="users__new-button">Add</button>
                    <svg width="25" class="users__new-close" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11.9997 10.5865L16.9495 5.63672L18.3637 7.05093L13.4139 12.0007L18.3637 16.9504L16.9495 18.3646L11.9997 13.4149L7.04996 18.3646L5.63574 16.9504L10.5855 12.0007L5.63574 7.05093L7.04996 5.63672L11.9997 10.5865Z"></path></svg>
                  </div>
                  <div class="users__new-box">
                    <label class="users__change-label" for="new-username">Username</label>
                    <input name="new-username" id="new-username" class="users__new-input" type="text">
                  </div>
                  <div class="users__new-box">
                    <label class="users__change-label" for="new-email">Email</label>
                    <input name="new-email" id="new-email" class="users__new-input" type="email">
                  </div>
                  <div class="users__new-box">
                    <label class="users__change-label" for="new-password">Password</label>
                    <input name="new-password" id="new-password" class="users__new-input" type="text">
                  </div>
                </form>
              </div>
            </div>
            <svg class="users__add" width="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M13.0001 10.9999L22.0002 10.9997L22.0002 12.9997L13.0001 12.9999L13.0001 21.9998L11.0001 21.9998L11.0001 12.9999L2.00004 13.0001L2 11.0001L11.0001 10.9999L11 2.00025L13 2.00024L13.0001 10.9999Z"></path></svg>
    `;
  form();
  
  
  elUsersTopSpan.textContent = "...";
  elUsersLoad.classList.remove("none");
  if (startStatus) {
    startStatus = false;
    setTimeout(() => {
      startSearch();
      startStatus = true;
    }, 1000);
  }
});
function form() {  
  elUsersChangeForm = document.querySelector(".users__change-form");  
  elUsersChangeExit = document.querySelector(".users__change-exit");
  changeUsername = elUsersChangeForm["users-change-username"].value.trim();
  changeEmail = elUsersChangeForm["users-change-email"].value.trim();
  elUsersChangeSpanId = document.querySelector(".users__change-span-id");
  elUsersNewForm = document.querySelector(".users__new-form");
  var elNewUsername = elUsersNewForm["new-username"];
  var elNewEmail = elUsersNewForm["new-email"];
  var elNewPassword = elUsersNewForm["new-password"];
  elUsersAdd = document.querySelector(".users__add");
  elUsersNewClose = document.querySelector(".users__new-close");
  elUsersNewClose.addEventListener("click", ()=> {
    elUsersNewForm.classList.add("none");
  })
  elUsersAdd.addEventListener("click", addF);
  newFormF();  
}
  
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
