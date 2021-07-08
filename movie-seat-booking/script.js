const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row .seat:not(.occupied)');
const count = document.getElementById('count');
const total = document.getElementById('total');
const movieSelect = document.getElementById('movie');

populateUI();

let ticketPrice = +movieSelect.value;

// Save selected movie index and price
function setMovieData(movieIndex, moviePrice) {
    localStorage.setItem('selectedMovieIndex', movieIndex);
    localStorage.setItem('selectedMoviePrice', moviePrice);
}


// update total and count 
function updatedSelectedCount() {
    // put the selected seats into local storage

    const selectedSeats = document.querySelectorAll('.row .seat.selected');
    console.log(selectedSeats)

    const seatsIndex = [...selectedSeats].map((seat) => [...seats].indexOf(seat));

    console.log(seatsIndex)

    localStorage.setItem('selectedSeats', JSON.stringify(seatsIndex));

    // update bottom sentence
    const selectedSeatsCount = selectedSeats.length;

    count.innerText = selectedSeats.length;
    total.innerText = selectedSeatsCount * ticketPrice;
}

// Get data from localstorage and populate UI
function populateUI() {
    const selectedSeats = JSON.parse(localStorage.getItem('selectedSeats'));

    console.log(selectedSeats);

    if (selectedSeats !== null && selectedSeats.length > 0) {
        seats.forEach((seat, index) => {
            if (selectedSeats.indexOf(index) > -1) {
                seat.classList.add('selected');
            }
        })
    }

    const selectedMovieIndex = localStorage.getItem('selectedMovieIndex');

    if (selectedMovieIndex !== null) {
        movieSelect.selectedIndex = selectedMovieIndex;
    }
}

// Movie select event
movieSelect.addEventListener('change', event => {
    ticketPrice = +event.target.value;
    setMovieData(event.target.selectedIndex, event.target.value);
    updatedSelectedCount();
})


// Seat click event
container.addEventListener('click', (event) => {

    if (event.target.classList.contains('seat') && !event.target.classList.contains('occupied')) {
        
        event.target.classList.toggle('selected');

        updatedSelectedCount();

    }
});

// Initial count and total set
updatedSelectedCount();