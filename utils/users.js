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
const elUsersCard = document.querySelector(".users__card");
const elUsersView = document.querySelectorAll(".users-view");
const elUsersEdit = document.querySelectorAll(".users-edit");
const elUsersDelete = document.querySelectorAll(".users-delete");
const elUsersLoad = document.querySelector(".users__loader");
const elUsersActionDot = document.querySelectorAll(".users__action-dot");
const elUsersArrow = document.querySelectorAll(".users-arrow");
const elUsersItemsBottom = document.querySelectorAll(".users__items-bottom");
var elUsersItems = document.querySelectorAll(".users__items");
let indexItems = 0;
function startSearch() {
  function innerData(users) {
    users.data.map(({email, name, phone, username, id}, index) => {
      itemsStatus();
      elUsersTopSpan.textContent = `${id}`;
      function itemsStatus() {
        elUsersItems = document.querySelectorAll(".users__items");
        elUsersLoad.classList.add("none");
        elUsersCard.innerHTML += `
        <div class="users__items">
        <div class="users__items-top">
                <p class="users__items-top-name">${name.firstname} ${
          name.lastname
        }</p>
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
                  <p class="users__des user-name">${name.firstname} ${
          name.lastname
        }</p>
                  <p class="users__des user-email">${email}</p>
                  <p class="users__des user-phone">${phone.replace("-", "")}</p>
                  <p class="users__des user-register">15.12.25 7:48</p>
                  <p class="users__des user-username">${username}</p>
                  <div class="users__action">
                    <svg class="users__action-dot" xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24"><path fill="none" stroke="gray" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 12a1 1 0 1 0 2 0a1 1 0 1 0-2 0m7 0a1 1 0 1 0 2 0a1 1 0 1 0-2 0m7 0a1 1 0 1 0 2 0a1 1 0 1 0-2 0"/></svg>
                    <div class="users__box hidden">
                      <button class="users__view users-view">view</button>
                      <button class="users__view users-edit">edit</button>
                      <button class="users__view users-delete">delete</button>
                    </div>
                    
                  </div>
              
                </div>
              </div>
            </div>
        `;
        itemsAction(elUsersItems.length);
        for(var i = 0; i < elUsersItems.length; i++) {
          itemsAction(i)
          
        }
      }
    });
    blackWhite((JSON.parse(localStorage.getItem("dayNight"))).dayNight) 
  }
  axios
    .get("https://fakestoreapi.com/users")
    .then((response) => innerData(response));
}

function itemsAction(index) {
          const elUsersActionDot = document.querySelectorAll(".users__action-dot");
          const elUsersArrow = document.querySelectorAll(".users-arrow");
          const elUsersItemsBottom = document.querySelectorAll(".users__items-bottom");  
          const elUserBox = document.querySelectorAll(".users__box");
          elUsersActionDot[index].addEventListener("click", () => {
            elUserBox[index].classList.toggle("hidden");
            for(var i = 0; i < elUserBox.length; i++) {
              if(index != i) {
                elUserBox[i].classList.add("hidden");
              }
            }
          });
          elUsersArrow[index].addEventListener("click", () => {
            elUsersItemsBottom[index].classList.toggle("none");
            elUsersArrow[index].classList.toggle("arrow-rotate");
          });
}

if (JSON.parse(localStorage.getItem("userStatus")).userEntered) {
  startSearch();
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
