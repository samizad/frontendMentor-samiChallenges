const dailyBtn = document.getElementById("daily-btn");
const weeklyBtn = document.getElementById("weekly-btn");
const monthlyBtn = document.getElementById("monthly-btn");

const hours = document.querySelectorAll(".hours");
const lastTime = document.querySelectorAll(".last-time");

function dailyData() {
  fetch("./data.json")
    .then((response) => response.json())
    .then((data) =>
      hours.forEach((e, i) => {
        hours[i].innerHTML = data[i].timeframes.daily.current + "hrs";
        lastTime[i].innerHTML =
          "Last Daily-" + data[i].timeframes.daily.previous + "hrs";
      })
    );
}
function weeklyData() {
  fetch("./data.json")
    .then((response) => response.json())
    .then((data) =>
      hours.forEach((e, i) => {
        hours[i].innerHTML = data[i].timeframes.weekly.current + "hrs";
        lastTime[i].innerHTML =
          "Last Weekly-" + data[i].timeframes.weekly.previous + "hrs";
      })
    );
}
function monthlyData() {
  fetch("./data.json")
    .then((response) => response.json())
    .then((data) =>
      hours.forEach((e, i) => {
        hours[i].innerHTML = data[i].timeframes.monthly.current + "hrs";
        lastTime[i].innerHTML =
          "Last Monthly-" + data[i].timeframes.monthly.previous + "hrs";
      })
    );
}
dailyBtn.addEventListener("click", () => {
  dailyData();
});
weeklyBtn.addEventListener("click", () => {
  weeklyData();
});
monthlyBtn.addEventListener("click", () => {
  monthlyData();
});
