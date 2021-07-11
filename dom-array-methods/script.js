const main = document.getElementById('main');
const addUserBtn = document.getElementById('add-user');
const doubleBtn = document.getElementById('double');
const showMillionairesBtn = document.getElementById('show-millionnaires');
const sortBtn = document.getElementById('sort');
const calculateWealthBtn = document.getElementById('calculate-wealth');

let data = [];
let apiObj = {};

getRandomUser();
getRandomUser();
getRandomUser();

// fetch random user and add money 

async function getRandomUser() {
    const response = await fetch('https://randomuser.me/api');
    const data = await response.json();
    console.log(data)

    const user = data.results[0];
    const newUser = {
        name: `${user.name.first} ${user.name.last}`,
        money: Math.floor(Math.random() * 1000000),
        email: `${user.email}`,
        city: `${user.location.city}`

    };

    addData(newUser);


}

console.log(apiObj);

// Double money 
function doubleMoney() {

    data = data.map((user) => {
        user.money = user.money * 2;
        return user;
    })

    updateDOM();
}

// sort users by highest money first

function sortByRichest() {
    data.sort((a, b) => {
        return b.money - a.money
    })

    updateDOM();
}


//Add new obj to data arr
function addData(obj) {
    data.push(obj);

    updateDOM();
}



// Update DOM
function updateDOM(providedData = data) {

    // Clear main div
    main.innerHTML = '<h2> <strong>Person</strong> Wealth</h2>';

    providedData.forEach((item) => {
        const element = document.createElement('div');
        element.classList.add('person');
        element.innerHTML = `<div class='customer' >${item.name}</div> ${formatMoney(item.money)}`;


        main.appendChild(element);

    });

    const customer = document.getElementsByClassName('customer');

}

// Format number as money - https://stackoverflow.com/questions/149055/how-to-format-numbers-as-currency-string
function formatMoney(number) {
    return '$' + number.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
}

// Event listeners
addUserBtn.addEventListener('click', getRandomUser);
doubleBtn.addEventListener('click', doubleMoney);
sortBtn.addEventListener('click', sortByRichest);



document.addEventListener("click", someListener);

function someListener(event) {
    var element = event.target;

    if (element.tagName === 'DIV' && element.classList.contains("customer")) {
        console.log(event);

        console.log(data, 104);
        console.log(data[0].name);
        console.log(element, 106);

        main.innerHTML = '<h2>Edit Customer details</h2>';

        const selectedCustomer = element.textContent;


        var newData = data.filter(function (entry) {
            return entry.name === selectedCustomer;
        });

        console.log(newData[0]);



        const form = document.createElement('form');
        form.setAttribute("action", "submit");
        main.appendChild(form)

        //Create a label element for Full Name
        const fullNameLabel = document.createElement("label");
        fullNameLabel.setAttribute("for", "name");
        fullNameLabel.innerHTML = `Full Name: ${newData[0].name} `;

        // Create an input element for Full Name
        const fullName = document.createElement("input");
        fullName.setAttribute("id", "name")
        fullName.setAttribute("type", "text");
        fullName.setAttribute("name", "FullName");
        fullName.setAttribute("required", "required");
        fullName.setAttribute("placeholder", `${selectedCustomer}`);

        //Create a label element for email
        const emailLabel = document.createElement("label");
        emailLabel.setAttribute("for", "email");
        emailLabel.innerHTML = `Email: ${newData[0].email} `;

        // Create an input element for email
        const emailInput = document.createElement("input");
        emailInput.setAttribute("type", "email");
        emailInput.setAttribute("id", "email");
        emailInput.setAttribute("required", "required");
        emailInput.setAttribute("placeholder", `${newData[0].email}`);

        //Create a label element for Full Name
        const cityLabel = document.createElement("label");
        cityLabel.setAttribute("for", "city");
        cityLabel.innerHTML = `City: ${newData[0].city} `;

        // Create an input element for city
        const cityInput = document.createElement("input");
        cityInput.setAttribute("type", "text");
        cityInput.setAttribute("id", "city");
        cityInput.setAttribute("required", "required");
        cityInput.setAttribute("placeholder", `${newData[0].city}`);

        // Create a label for the select
        const channelLabel = document.createElement("label");
        channelLabel.setAttribute("for", "channel");
        channelLabel.innerHTML = ("How did you hear about us?");

        //Create a select for channel
        const channelSelect = document.createElement("select");
        channelSelect.setAttribute("name", "channel");
        channelSelect.setAttribute("id", "channel");

        // Create options for channel
        const channelOption1 = document.createElement("option");
        channelOption1.setAttribute("value", "website");
        channelOption1.innerHTML = 'Website';

        const channelOption2 = document.createElement("option");
        channelOption2.setAttribute("value", "email");
        channelOption2.innerHTML = 'Email';

        const channelOption3 = document.createElement("option");
        channelOption3.setAttribute("value", "phone");
        channelOption3.innerHTML = 'Phone';

        const channelOption4 = document.createElement("option");
        channelOption4.setAttribute("value", "word of mouth");
        channelOption4.innerHTML = 'Word of mouth';

        // create a submit button
        const submitButton = document.createElement("input");
        submitButton.setAttribute("role", "button")
        submitButton.setAttribute("type", "submit");
        submitButton.setAttribute("value", "Submit");

        // Append the full name input and label to the form
        form.appendChild(fullNameLabel)
        form.appendChild(fullName);

        // Append the email input and label to the form
        form.append(emailLabel);
        form.append(emailInput);

        // Append the email input and label to the form
        form.append(cityLabel);
        form.append(cityInput);

        // Append the options to the select
        channelSelect.append(channelOption1);
        channelSelect.append(channelOption2);
        channelSelect.append(channelOption3);
        channelSelect.append(channelOption4);

        // Append the select and label to the form
        form.append(channelLabel);
        form.append(channelSelect);

        // Append the submit button to the form
        form.appendChild(submitButton);

        //


    };

}



const form = document.createElement('form');

const customer = document.getElementsByClassName('customer');




