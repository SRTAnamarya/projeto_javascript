const btnLogin = document.querySelector("#btn-login");
const btnRegister = document.querySelector("#btn-register");
const modallogin = document.querySelector("#modal-login");
const modalregister = document.querySelector("#modal-register");
const btncancelLogin = document.querySelector("#btn-cancel-login");
const btncancelregister = document.querySelector("#btn-cancel-register");

btnLogin.addEventListener("click", (e) => {
    modallogin.classList.remove("hide-modal");
    modallogin.classList.add("show-modal")
})

btnRegister.addEventListener("click", (e) => {
    modalregister.classList.remove("hide-modal");
    modalregister.classList.add("show-modal")
})

btncancelLogin.addEventListener("click", (e) =>{
    modallogin.classList.add("hide-modal");
    modallogin.classList.remove("show-modal")
})

btncancelregister.addEventListener("click", (e) =>{
    modalregister.classList.add("hide-modal");
    modalregister.classList.remove("show-modal")
})