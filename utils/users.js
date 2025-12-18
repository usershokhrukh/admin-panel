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
const elUsersChangeForm = document.querySelector(".users__change-form");
const elUsersChangeExit = document.querySelector(".users__change-exit");
const elDashboardSearchForm = document.querySelector(".dashboard__search-form");
const elSearch = elDashboardSearchForm["search"];
const elBody = document.querySelector("body");
let editCheck = [false];
var elUsersItems = document.querySelectorAll(".users__items");
let indexItems = 0;
var dataArray = [];

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
elBody.addEventListener("click", (event) => {
  const contains =
    !elUsersChangeForm.contains(event.target) && event != elUsersChangeForm;
  if (contains && !editCheck[0]) {
    elUsersChangeForm.classList.add("none");
  }
  if (editCheck[0]) {
    editCheck[0] = false;
  }
});
let changeToast = false;

function showFormData(index) {
  const {id, username, email, password} = dataArray[index];
  elUsersChangeForm["users-change-username"].value = `${username}`;
  elUsersChangeForm["users-change-email"].value = `${email}`;
  dataId = id;
}

let errorStatusUsers = true;
let axiosStatus = true;

elUsersChangeForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let checkEmail = false;
  let changeUsername = elUsersChangeForm["users-change-username"].value.trim();
  let changeEmail = elUsersChangeForm["users-change-email"].value.trim();
  for (var i = 0; i < dataArray.length; i++) {
    if (i != dataId - 1) {
      changeEmail = elUsersChangeForm["users-change-email"].value.trim();
      if (dataArray[i].email === changeEmail) {
        checkEmail = true;
      }
    }
  }
  changeUsername = elUsersChangeForm["users-change-username"].value.trim();
  changeEmail = elUsersChangeForm["users-change-email"].value.trim();
  const {username, email} = dataArray[dataId - 1];
  if (!changeToast) {
    if (email === changeEmail && username === changeUsername) {
      showToast("red", `Please send new Email & Username!`);
    } else if (!checkEmail) {
      const regexp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

      if (regexp.test(changeEmail)) {
        let {putUsername, putEmail} = dataArray[dataId - 1];
        let changeUsername =
          elUsersChangeForm["users-change-username"].value.trim();
        let changeEmail = elUsersChangeForm["users-change-email"].value.trim();
        putUsername = changeUsername;
        putEmail = changeEmail;
        dataArray[dataId - 1].username = putUsername;
        dataArray[dataId - 1].email = putEmail;
        const putStatus = 200;
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
              if (putStatus >= 200 && putStatus < 299) {
                showToast("green", "Changed!");
              } else {
                showToast("red", `Something went wrong!`);
              }
            });
          function showPut(response) {
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
          }
        }
      } else {
        showToast("red", "Put right email! you@domain.abs");
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
    }, 5000);
  }
});

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
    editCheck[0] = true;
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
