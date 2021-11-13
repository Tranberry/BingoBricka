// pull 3 random elements from array and return them
function getThree(array) {
  const pulled = [];
  for (let i = 0; i < 3; i++) {
    pulled.push(array.splice(Math.floor(Math.random() * array.length), 1)[0]);
  }
  return pulled;
}

// generate an array of numbers from 1 to 10
function generateNumbers(plusTenth) {
  const numbers = [];
  for (let i = 1; i <= 10; i++) {
    numbers.push(i + (plusTenth * 10));
  }
  return getThree(numbers);
}

function generateBingoTicket() {
  const bingoTicket = [];
  for (let i = 0; i < 9; i++) {
    bingoTicket.push(...generateNumbers(i));
  }
  // as long as there are less than 12 'X' elements in the array, replace a random element with 'X'
  while (bingoTicket.filter(e => e === 'X').length < 12) {
    const randomIndex = Math.floor(Math.random() * bingoTicket.length);
    bingoTicket[randomIndex] = 'X';
  }
  
  return bingoTicket;
}

// fetch id of 'tickets' element
const tickets = document.getElementById('tickets');

// generate a new ticket and add it to the DOM
function generateTicket() {
  const ticket = document.createElement('div');
  ticket.classList.add('ticket');
  ticket.innerHTML = generateBingoTicket().map(e => e === 'X' ? '<div class="x">X</div>' : `<div class="number">${e}</div>`).join('');
  tickets.appendChild(ticket);
}

// remove all 'ticket' elements from the DOM
function clearTickets() {
  while (tickets.firstChild) {
    tickets.removeChild(tickets.firstChild);
  }
}

// regenerate all tickets
function regenerateTickets() {
  // store current number of tickets
  const numberOfTickets = tickets.childElementCount;
  // clear all tickets
  clearTickets();
  // for each .ticket element, generate a new ticket
  for (let i = 0; i < numberOfTickets; i++) {
    generateTicket();
  }
}


