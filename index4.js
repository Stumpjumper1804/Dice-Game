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
