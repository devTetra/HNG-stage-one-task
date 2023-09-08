const currentday = document.querySelector(".day");
const currenttime = document.querySelector(".time");

function getDate() {
  const userDate = new Date();
  console.log(userDate);

  const days = [
    "",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  const day = userDate.getDay();
  currentday.innerText = days[day];

  currenttime.innerText = Date.now();
}

getDate();
setInterval(getDate, 1000);
