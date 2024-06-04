//Basic Ex1+Ex2

document.getElementById("submit").addEventListener("click", () => {
  let fn = document.getElementById("fn").value;
  let ln = document.getElementById("ln").value;
  let age = document.getElementById("age").value;
  let prof = document.getElementById("prof").value;

  //change color of first name
  let color = "green";

  if (fn.length < 5) {
    color = "red";
  }

  //change bg color of profession
  let bg_color = "";

  console.log(prof);
  if (prof == "IT") {
    bg_color = "blue";
  } else if (prof == "Doctor") {
    bg_color = "red";
  } else if (prof == "Teacher") {
    bg_color = "yellow";
  }

  console.log(bg_color);
  document.getElementById(
    "showOutput"
  ).innerHTML = `You are <span style="color:${color};">${fn}</span> ${ln}, you are ${age} years old and your profession is ${prof}.`;
  document.getElementById("showOutput").style.backgroundColor = bg_color;
});

/////////////////////////////////////////////////////////////////////////////////

//Inter Ex 1

const items = document.querySelectorAll("img");

items.forEach((element) => {
  element.addEventListener("click", function () {
    this.remove();
  });
});

/////////////////////////////////////////////////////////////////////////////77

//Inter Ex 2

const div = document.getElementById("color-change");
div.addEventListener("click", changeBackground);

function changeBackground() {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);

  let color = `rgb(${r},${g},${b})`;

  console.log(r, g, b);

  div.style.backgroundColor = color;
}

//////////////////////////////////////////////////////////////////////////7///

//Advanced Exercise 1 | Mouse Event Handling

const circle = document.getElementById("circle");
const message = document.getElementById("text-below");

// ● Hover: Display a message below the circle that reads "You are in the
// circle" when the mouse is over it.
circle.addEventListener("mouseover", (event) => {
  message.style.marginLeft = `500px`;
});

circle.addEventListener("mouseout", (event) => {
  message.style.marginLeft = `-500px`;
  circle.style.backgroundColor = "rgb(255,255,255)";
});
// ● Mouse Leave: Show a message that says "You are outside of the
// circle" when the mouse leaves the circle
circle.addEventListener("mouseout", (event) => {
  message.style.marginLeft = `-500px`;
  // alert("You are outside the circle.");
});
// ● Click: Change the webpage's background color to gray upon a single
// mouse click on the circle.
circle.addEventListener("click", (event) => {
  circle.style.backgroundColor = "lightgrey";
});
// ● Double-Click: Change the webpage's background color to blue when
// you double-click on the circle.
circle.addEventListener("dblclick", (event) => {
  circle.style.backgroundColor = "blue";
});
