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
const elUsersArrow = document.querySelectorAll(".users-arrow");
const elUsersItemsBottom = document.querySelectorAll(".users__items-bottom");
const elUsersCard = document.querySelector(".users__card");
const elUsersActionDot = document.querySelectorAll(".users__action-dot");
const elUserBox = document.querySelectorAll(".users__box");
const elUsersView = document.querySelectorAll(".users-view");
const elUsersEdit = document.querySelectorAll(".users-edit");
const elUsersDelete = document.querySelectorAll(".users-delete");


function innerData(users) {
  console.log(users);
  
} 

axios.get("https://fakestoreapi.com/users").then(response => innerData(response));