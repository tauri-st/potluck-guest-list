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
//Assign class which appears only when guest list is full
const assignButton = document.querySelector(".assign");
//Targets the list that will populate with the guest's name and assigned dish
const assignedItems = document.querySelector(".assigned-items");


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

//Clear after subbing input then call back function within click event
const clearInput = function () {
    guestInput.value = "";
};

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

const assignItems = function () {
    const potluckItems = [
        "pasta salad", 
        "fruit tart", 
        "cucumber salad", 
        "caprese", 
        "chicken wings", 
        "curry tofu", 
        "rice", 
        "potato salad", 
        "hummus", 
        "crudite", 
        "bean burgers", 
        "lentil salad"
    ];

    const allGuests = document.querySelectorAll(".guest-list li");
    
    for (let guest of allGuests) {
        let randomPotluckIndex = Math.floor(Math.random() * potluckItems.length);
    //Produce a random number and use that to choose an item from the potluckItems array
        let randomPotluckItem = potluckItems[randomPotluckIndex];
        
        let listItem = document.createElement("li");
        listItem.innerText = `${guest.innerText} is bringing ${randomPotluckItem}.`;
        assignedItems.append(listItem);
        potluckItems.splice(randomPotluckIndex, 1);
    }
};

assignButton.addEventListener("click", function () {
    assignItems();
    assignButton.disabled = true;
});