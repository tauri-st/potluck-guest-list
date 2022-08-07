// invite button
const addGuestButton = document.querySelector(".invite");
// label for the invite button
const guestInputLabel = document.querySelector(".add-guest label");
// text input box
const guestInput = document.querySelector(".add-guest input");
// unordered list (not yet visible)
const guestList = document.querySelector(".guest-list");
// span class for number of guests attending
const guestCount = document.querySelector(".attendance");
// alert when guest list is full (not yet visible)
const guestFull = document.querySelector(".alert");

//Click button to add people to list and clear box afterwards
addGuestButton.addEventListener("click", function () {
const guest = guestInput.value;
//console.log(guest);

if (guest !== "") {
    addToList(guest);
    updateGuestCount();
    clearInput();
}
});

//Create a list element, populate it, add it to the unordered list, add to click event
const addToList = function (guest) {
    const listItem = document.createElement("li");
    listItem.innerText = guest;
    guestList.append(listItem);
};

//Limit the Guest List to 8 People
const updateGuestCount = function () {
    const guests = document.querySelectorAll(".guest-list li");
//set the innerText of the guestCount variable (the variable that selects the element with the attendance class) to the length of the guests variable then call in click event   
    guestCount.innerText = guests.length
    if (guests.length === 8) {
        addGuestButton.classList.add("hide");
        guestInput.classList.add("hide");
        guestInputLabel.classList.add("hide");
        guestFull.classList.remove("hide");
    }
}

//Clear after subbing input then call back function within click event
const clearInput = function () {
    guestInput.value = "";
};