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
for (var i = 0; i < localStorage.length; i++) {
  if (localStorage.key(i) === "userStatus") {
    const userStorage = JSON.parse(localStorage.getItem("userStatus"));
    if (userStorage.userEntered) {
      elLogin.classList.add("none");
      elDashboard.classList.remove("none");
    }
    userEnteredBool = true;
  }
}

if (!userEnteredBool) {
  const userStatus = {
    userEntered: false,
  };
  localStorage.setItem("userStatus", JSON.stringify(userStatus));
}

elHide.addEventListener("click", () => {
  elHide.classList.toggle("none");
  elShow.classList.toggle("none");
  elLogin["password"].type = "text";
});

elShow.addEventListener("click", () => {
  elHide.classList.toggle("none");
  elShow.classList.toggle("none");
  elLogin["password"].type = "password";
});
elLogin.addEventListener("submit", (e) => {
  e.preventDefault();
  elLoader.classList.remove("none");
  elButtonSpan.classList.add("none");
  const elUsername = elLogin["username"].value.trim();
  const elPassword = elLogin["password"].value.trim();
  const api = "https://fakestoreapi.com/auth/login";
  const dataUser = {
    username: elUsername,
    password: elPassword,
  };
  if (elUsername && elPassword) {
    axios
      .post(api, dataUser)
      .then((response) => checkToken(response))
      .catch((error) => {
        if (!toast) {
          elLoader.classList.remove("none");
          elButtonSpan.classList.add("none");
          setTimeout(() => {
            elLoader.classList.add("none");
            elButtonSpan.classList.remove("none");
          }, 500);
          showToast("red", "Admin not found!");
          toast = true;
          setTimeout(() => {
            toast = false;
          }, 5000);
        }
      });
  } else {
    elLoader.classList.remove("none");
    elButtonSpan.classList.add("none");
    setTimeout(() => {
      elLoader.classList.add("none");
      elButtonSpan.classList.remove("none");
    }, 500);
    if (!toast) {
      showToast("red", "Fill Username and Password!");
      toast = true;
      setTimeout(() => {
        toast = false;
      }, 5000);
    }
  }

  function checkToken(response) {
    if (response) {
      tokenGet(response);
    } else {
      if (!toast) {
        showToast("red", "Admin not found!");
        toast = true;
        setTimeout(() => {
          toast = false;
        }, 5000);
      }
    }
  }

  function tokenGet(response) {
    elLoader.classList.remove("none");
    elButtonSpan.classList.add("none");
    setTimeout(() => {
      elLoader.classList.add("none");
      elButtonSpan.classList.remove("none");
    }, 500);
    elUsersCard = document.querySelector(".users__card");
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
    dataUser.userEntered = true;
    const jsonAdmin = JSON.stringify(dataUser);
    localStorage.setItem("jsonAdmin", jsonAdmin);
    setTimeout(() => {
      elLogin.classList.add("none");
      showToast("green", "Success!");
      elDashboard.classList.remove("none");
      const userStorage = JSON.parse(localStorage.getItem("userStatus"));
      userStorage.userEntered = true;
      localStorage.removeItem("userStatus");
      localStorage.setItem("userStatus", JSON.stringify(userStorage));
      const dayNightStatus = JSON.parse(localStorage.getItem("dayNight"));
      blackWhite(dayNightStatus.dayNight);
      localStorage.removeItem("titleStatus");
      localStorage.setItem("titleStatus", "Dashboard");
      elTitle.textContent = localStorage.getItem("titleStatus");
      startSearch();
    }, 1000);
  }
});
const elLoginBody = document.querySelector("body");
elLoginBody.classList.remove("body-black");
const titleStatus = localStorage.getItem("titleStatus");
if (titleStatus) {
  elTitle.textContent = titleStatus;
} else {
  localStorage.setItem("titleStatus", "Login");
}

function showToast(color, text) {
  Toastify({
    text: `${text}`,
    duration: 3000, // 5 soniya
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

function blackWhite(color) {
  const elBody = document.querySelector("body");
  const elDay = document.querySelector(".day");
  const elNight = document.querySelector(".night");
  const elNavbarName = document.querySelector(".dashboard__navbar-name");
  const elUserTitle = document.querySelector(".users__title");
  const elUsersTopText = document.querySelector(".users__top-text");
  const elUsersDes = document.querySelectorAll(".users__des");
  const elUsersItemsTopName = document.querySelectorAll(
    ".users__items-top-name"
  );
  const elUsersArrow = document.querySelectorAll(".users-arrow");
  const elUsersItems = document.querySelectorAll(".users__items");
  const elUsersChangeFormDark = document.querySelector(".users__change-form");
  const elUsersNewFormDark = document.querySelector(".users__new-form");
  const elUsersDeleteForm = document.querySelector(".users__delete-form");

  if (color) {
    elDay.classList.remove("none");
    elNight.classList.add("none");
    elBody.classList.add("body-black");
    elNavbarName.classList.add("name-white");
    elUserTitle.classList.add("name-white");
    elUsersTopText.classList.add("name-white");
    for (var i = 0; i < elUsersDes.length; i++) {
      elUsersDes[i].classList.add("name-white");
    }
    for (var i = 0; i < elUsersItemsTopName.length; i++) {
      elUsersItemsTopName[i].classList.add("name-white");
      elUsersItems[i].classList.add("items-black");
      elUsersArrow[i].classList.add("name-white");
    }
    if (elUsersChangeFormDark && elUsersNewFormDark) {
      elUsersChangeFormDark.classList.add("dark-form");
      elUsersNewFormDark.classList.add("dark-form");
    }
    elUsersDeleteForm.classList.add("dark-form");
  } else {
    elDay.classList.add("none");
    elNight.classList.remove("none");
    elBody.classList.remove("body-black");
    elNavbarName.classList.remove("name-white");
    elUserTitle.classList.remove("name-white");
    elUsersTopText.classList.remove("name-white");
    elUsersDeleteForm.classList.remove("dark-form");
    if (elUsersChangeFormDark && elUsersNewFormDark) {
      elUsersChangeFormDark.classList.remove("dark-form");
      elUsersNewFormDark.classList.remove("dark-form");
    }

    for (var i = 0; i < elUsersDes.length; i++) {
      elUsersDes[i].classList.remove("name-white");
    }

    for (var i = 0; i < elUsersItemsTopName.length; i++) {
      elUsersItemsTopName[i].classList.remove("name-white");
      elUsersItems[i].classList.remove("items-black");
      elUsersArrow[i].classList.remove("name-white");
    }

  }
}
