"use strict";

const outputParagraph = document.getElementById("output");
//outputParagraph.innerHTML = "Test Successful ✅";

const kunal = {
  name: "Kunal Kumar",
  dob: new Date("2000-12-12 GMT-0500 (Eastern Standard Time)").getTime(),
  age: function () {
    const start = new Date().getTime();
    const ageDifference = new Date(start - this.dob);
    return Math.abs(ageDifference.getUTCFullYear() - 1970);
  },
  dateOfBirth: function () {
    return new Date(this.dob).toLocaleString();
  },
};

const sania = {
  name: "Sania Sehgal",
  dob: new Date("2000-12-12 GMT-0500 (Eastern Standard Time)").getTime(),
  age: function () {
    const start = new Date().getTime();
    const ageDifference = new Date(start - this.dob);
    return Math.abs(ageDifference.getUTCFullYear() - 1970);
  },
  dateOfBirth: function () {
    return new Date(this.dob).toLocaleString();
  },
};

// Arrays:
const weekdays = ["mon", "tue", "wed", "thu", "fri"];
const weekend = ["sat", "sun"].map((day) => day.toUpperCase());
//outputParagraph.innerHTML = weekend;
///////////////////////////////////////////////
const kunalOutput = `${kunal.name} is ${kunal.age()} years old. ${
  kunal.name
} was born on ${kunal.dateOfBirth()}`;
const saniaOutput = `${sania.name} is ${sania.age()} years old. ${
  sania.name
} was born on ${sania.dateOfBirth()}`;
const result = kunalOutput + "<br/><br/><br/>" + saniaOutput;

///////////////////////////////////////////////

outputParagraph.innerHTML = result;

///////////////////////////////////////////////

const date = document.getElementById("date");
const time = document.getElementById("time");

function displayDate() {
  const dateToDisplay = new Date().toDateString();
  date.innerHTML = dateToDisplay;
}

function displayTime() {
  const timeToDisplay = new Date().toLocaleTimeString();
  time.innerHTML = timeToDisplay;
  setTimeout(displayTime, 1000);
}

displayDate();
displayTime();
