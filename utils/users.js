"use-strict";
const elUserTitle = document.querySelector(".users__title");
const elUsersTopText = document.querySelector(".users__top-text");
const elUsersTopSpan = document.querySelector(".users__top-span");
const elUsersDes = document.querySelector(".users__des");
const elUsersItemsTopName = document.querySelectorAll(".users__items-top-name");
const elUsersName = document.querySelectorAll(".users-name");
const elUsersEmail = document.querySelectorAll(".users-email");
const elUsersPhone = document.querySelectorAll(".users-phone");
const elUsersRegister = document.querySelectorAll(".users-register");
const elUsersUsername = document.querySelectorAll(".users-username");
let elUsersCard = document.querySelector(".users__card");
const elUsersView = document.querySelectorAll(".users-view");
const elUsersDelete = document.querySelectorAll(".users-delete");
const elUsersLoad = document.querySelector(".users__loader");
const elUsersActionDot = document.querySelectorAll(".users__action-dot");
const elUsersArrow = document.querySelectorAll(".users-arrow");
const elUsersItemsBottom = document.querySelectorAll(".users__items-bottom");
const elDashboardSearchForm = document.querySelector(".dashboard__search-form");
let elUsersChangeSpanId = document.querySelector(".users__change-span-id");
const elSearch = elDashboardSearchForm["search"];
const elBody = document.querySelector("body");
var elUsersItems = document.querySelectorAll(".users__items");
let indexItems = 0;
var dataArray = [];

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

let elUsersChangeForm = document.querySelector(".users__change-form");
let elUsersChangeExit = document.querySelector(".users__change-exit");
form();
elSearch.addEventListener("input", (e) => {
  const searchValue = e.target.value.trim();
  let elUsersName = document.querySelectorAll(".users-name-span");
  let elUsersItemsTopName = document.querySelectorAll(".users-top-name-span");
  for (var i = 0; i < elUsersName.length; i++) {
    if (
      elUsersName[i].textContent
        .toLowerCase()
        .includes(searchValue.toLowerCase())
    ) {
      if (searchValue) {
        elUsersName[i].classList.add("search-text");
        elUsersItemsTopName[i].classList.add("search-text");
      } else {
        elUsersName[i].classList.remove("search-text");
        elUsersItemsTopName[i].classList.remove("search-text");
      }
    }
    const userItems = document.querySelectorAll(".users__items");

    if (
      elUsersName[i].textContent.trim().toLowerCase() ==
      `${searchValue.toLowerCase()}`
    ) {
      userItems[i].classList.add("order");
    } else {
      userItems[i].classList.remove("order");
    }
  }
});

function startSearch() {
  function innerData(users) {
    users.map(({email, name, phone, username, id, password}, index) => {
      dataArray.push({
        id,
        username,
        email,
        password,
        phone,
        name,
      });
      itemsStatus();
      elUsersTopSpan.textContent = `${id}`;
      function itemsStatus() {
        elUsersItems = document.querySelectorAll(".users__items");
        elUsersLoad.classList.add("none");
        elUsersCard.innerHTML += `
        <div class="users__items">
        <div class="users__items-top">
                <p class="users__items-top-name"><span class="users__id-second">${id}</span> <span class="users-top-name-span">${
          name.firstname
        } ${name.lastname}</span></p>
                <svg class="users-arrow users__arrow" width="25" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z"></path></svg>
              </div>
              <div class="users__items-bottom">
                <div class="users__items-bottom-left">
                  <p class="users__des users__des-top">Name</p>
                  <p class="users__des users__des-top">Email</p>
                  <p class="users__des users__des-top">Phone</p>
                  <p class="users__des users__des-top">Registration date</p>
                  <p class="users__des users__des-top">Username</p>
                </div>
                <div class="users__items-bottom-right">
                  <p class="users__des user-name"><span class="users__id">${id}</span> <span class="users-name-span"> ${
          name.firstname
        } ${name.lastname}</span></p>
                  <p class="users__des user-email">${email}</p>
                  <p class="users__des user-phone">${phone.replaceAll(
                    "-",
                    ""
                  )}</p>
                  <p class="users__des user-register">15.12.25 7:48</p>
                  <p class="users__des user-username">${username}</p>
                  <div class="users__action">
                    <svg class="users__action-dot" xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24"><path fill="none" stroke="gray" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 12a1 1 0 1 0 2 0a1 1 0 1 0-2 0m7 0a1 1 0 1 0 2 0a1 1 0 1 0-2 0m7 0a1 1 0 1 0 2 0a1 1 0 1 0-2 0"/></svg>
                    <div class="users__box hidden">
                      <button class="users__view users-view">view</button>
                      <button name="edit" class="users__view users-edit">edit</button>
                      <button class="users__view users-delete">delete</button>
                    </div>
                    
                  </div>
              
                </div>
              </div>
            </div>
        `;

        itemsAction(elUsersItems.length);
        for (var i = 0; i < elUsersItems.length; i++) {
          itemsAction(i);
        }
      }
    });
    form();
    eventForm();
    blackWhite(JSON.parse(localStorage.getItem("dayNight")).dayNight);
    elUsersChangeExit.addEventListener("click", () => {
      elUsersChangeForm.classList.add("none");
    });
  }
  if (!localStorage.getItem("users")) {
    axios
      .get("https://fakestoreapi.com/users")
      .then((response) => innerData(response.data));
  } else if (localStorage.getItem("users")) {
    let objectDataLocal = JSON.parse(localStorage.getItem("users"));
    innerData(objectDataLocal);
  }
}
let dataId = null;
let changeToast = false;

function showFormData(index) {
  const {id, username, email, password} = dataArray[index];
  elUsersChangeForm["users-change-username"].value = `${username}`;
  elUsersChangeForm["users-change-email"].value = `${email}`;
  dataId = id;
}

let errorStatusUsers = true;
let axiosStatus = true;
function eventForm() {
  elUsersChangeForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let checkEmail = false;
    let changeUsername =
      elUsersChangeForm["users-change-username"].value.trim();
    let changeEmail = elUsersChangeForm["users-change-email"].value.trim();
    for (var i = 0; i < dataArray.length; i++) {
      if (i != dataId - 1) {
        changeEmail = elUsersChangeForm["users-change-email"].value.trim();
        if (dataArray[i].email === changeEmail) {
          checkEmail = true;
        }
      }
    }
    const {username, email} = dataArray[dataId - 1];
    form();
    if (!changeToast) {
      if (email === changeEmail && username === changeUsername) {
        showToast("red", `Please send new Email & Username!`);
      } else if (!checkEmail) {
        if (changeUsername.length > 15) {
          showToast("red", "New username is so large!");
        } else {
          const regexp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

          if (regexp.test(changeEmail)) {
            let {putUsername, putEmail} = dataArray[dataId - 1];
            form();
            putUsername = changeUsername;
            putEmail = changeEmail;
            dataArray[dataId - 1].username = putUsername;
            dataArray[dataId - 1].email = putEmail;
            let putStatus = 200;

            if (errorStatusUsers && axiosStatus) {
              errorStatusUsers = false;
              axiosStatus = false;
              axios
                .put(
                  `https://fakestoreapi.com/users/${dataId}`,
                  JSON.stringify(dataArray[dataId - 1])
                )
                .then((response) => showPut(response))
                .catch((error) => {
                  axiosStatus = true;
                  errorStatusUsers = true;
                  showToast("red", `Something went wrong!`);
                });
              function showPut(response) {
                showToast("green", "Changed!");
                elUsersLoad.classList.remove("none");
                const objectPut = JSON.parse(response.config.data);
                const {id, email, username, password} = objectPut;
                for (var i = 0; i < dataArray.length; i++) {
                  if (dataArray[i].id === id) {
                    dataArray[i] = objectPut;
                    elUsersLoad.classList.add("none");
                    break;
                  }
                }
                localStorage.setItem("users", JSON.stringify(dataArray));
                changeItems(id - 1, username, email);
                elUsersChangeForm.classList.add("none");
                putStatus = response.status;
                axiosStatus = true;
                errorStatusUsers = true;
              }
            }
          } else {
            showToast("red", "Put right email! you@domain.abs");
          }
        }
      } else {
        for (var i = 0; i < dataArray.length; i++) {
          if (i != dataId - 1) {
            changeEmail = elUsersChangeForm["users-change-email"].value.trim();
            if (dataArray[i].email === changeEmail) {
              showToast(
                "red",
                `${changeEmail}, is already exist for users, ${i + 1}`
              );
              checkEmail = true;
            }
          }
        }
      }
      changeToast = true;
      setTimeout(() => {
        changeToast = false;
      }, 0);
    }
  });
}
eventForm();

function changeItems(index, username, email) {
  const userEmail = document.querySelectorAll(".user-email");
  const userUsername = document.querySelectorAll(".user-username");
  userEmail[index].textContent = `${email}`;
  userUsername[index].textContent = `${username}`;
}

function itemsAction(index) {
  const elUsersActionDot = document.querySelectorAll(".users__action-dot");
  const elUsersArrow = document.querySelectorAll(".users-arrow");
  const elUsersItemsBottom = document.querySelectorAll(".users__items-bottom");
  const elUserBox = document.querySelectorAll(".users__box");
  const elUsersEdit = document.querySelectorAll(".users-edit");
  elUsersActionDot[index].addEventListener("click", () => {
    elUserBox[index].classList.toggle("hidden");
    for (var i = 0; i < elUserBox.length; i++) {
      if (index != i) {
        elUserBox[i].classList.add("hidden");
      }
    }
  });
  elUsersArrow[index].addEventListener("click", () => {
    elUsersItemsBottom[index].classList.toggle("none");
    elUsersArrow[index].classList.toggle("arrow-rotate");
  });
  elUsersEdit[index].addEventListener("click", () => {
    form();
    const elUsersChangeSpanId = document.querySelector(
      ".users__change-span-id"
    );
    const idForSpan = `${dataArray[index].username}`;
    elUsersChangeSpanId.textContent = `for- ${idForSpan}`;
    elUsersChangeForm.classList.remove("none");
    showFormData(index);
  });
}

if (JSON.parse(localStorage.getItem("userStatus")).userEntered) {
  let userError = true;
  if (userError) {
    userError = false;
    setTimeout(() => {
      startSearch();
      userError = true;
    }, 1300);
  }
}

function checkInnerWidth() {
  const elUsersItemsBottom = document.querySelectorAll(".users__items-bottom");
  const elUsersArrow = document.querySelectorAll(".users-arrow");
  const elUserBox = document.querySelectorAll(".users__box");

  if (window.innerWidth > 1100) {
    for (var i = 0; i < elUsersItemsBottom.length; i++) {
      elUsersItemsBottom[i].classList.remove("none");
      elUsersArrow[i].classList.remove("arrow-rotate");
      elUserBox[i].classList.add("hidden");
    }
  }
}
window.addEventListener("resize", checkInnerWidth);
