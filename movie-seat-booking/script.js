const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row .seat:not(.occupied)');
const count = document.getElementById('count');
const total = document.getElementById('total');
const movieSelect = document.getElementById('movie');

let ticketPrice = +movieSelect.value;

// update total and count 
function updatedSelectedCount() {
    const selectedSeats = document.querySelectorAll('.row .seat.selected');
    const selectedSeatsCount = selectedSeats.length;

    count.innerText = selectedSeats.length;
    total.innerText = selectedSeatsCount * ticketPrice;
}

// Movie select event
movieSelect.addEventListener('change', event => {
    ticketPrice = +event.target.value;
    updatedSelectedCount();
})


// Seat click event
container.addEventListener('click', (event) => {

    if (event.target.classList.contains('seat') && !event.target.classList.contains('occupied')) {
        
        event.target.classList.toggle('selected');

        updatedSelectedCount();

    }
})