const billInput = document.getElementById("inbill");
const tipInput = document.getElementById("tipInput");
const numberOfPeopleViv = document.getElementById("numberofPeople");
const Total = document.getElementById("perPersonTotal");

let People = Number(numberOfPeopleViv.innerText);
const bill = Number(billInput.value);
const tip = Number(tipInput.value);

const calculateBill = () => {
  const bill = Number(billInput.value);
  const tip = Number(tipInput.value);
  const sum = tip + bill;
  const real = sum / People;
  Total.innerText = real.toFixed(2);
};

const increasePeople = () => {
  People += 1;
  numberOfPeopleViv.innerText = People;
  calculateBill();
};

const decreasePeople = () => {
  People -= 1;
  numberOfPeopleViv.innerText = People;
  calculateBill();
};

// Total.innerText = (calculateBill());
