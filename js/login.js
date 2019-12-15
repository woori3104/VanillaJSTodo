const form = document.querySelector(".form"),
    input = form.querySelector("input");
const greeting = document.querySelector(".greetings");


const SHOWING_ON = "showing",
    USER_LS = "currentUSer";


function handleSubmit(event) {
    event.preventDefault();
    const currentValue = input.value;
    paintGreeting(currentValue);
    saveName(currentValue);
}

function askForName() {
    form.classList.add(SHOWING_ON);
    form.addEventListener("submit", handleSubmit);
}

function loadName() {

    const currentUser = localStorage.getItem(USER_LS);
    if (currentUser === null) {
        askForName();
    } else {
        paintGreeting(currentUser);
    }
}

function saveName(text) {
    localStorage.setItem(USER_LS, text);
}

function paintGreeting(text) {
    form.classList.remove(SHOWING_ON);
    greeting.classList.add(SHOWING_ON);
    greeting.innerText = getGreetings() + ` ${text}`;
    toDoForm.classList.add(TODO_SHOWING_ON);
}

function init() {
    loadName();
}

function getGreetings() {
    const date = new Date();
    const hours = date.getHours();
    if (hours > 4 && hours < 13) {
        return "GOOD MORNING";
    } else if (hours > 19) {
        return "GOOD AFTERNOON";
    } else
        return "GOOD NIGHT"
}

init();