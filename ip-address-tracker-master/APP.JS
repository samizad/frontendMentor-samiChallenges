const input = document.querySelector(".search-bar");
console.log(search);
console.log(input);
const mapAccToken =
  "pk.eyJ1Ijoic2FtaXJhemFkIiwiYSI6ImNrZmppczRydTBzcmIyeHF0YXRnNzdzamQifQ.1F0QhTj-Ch57QJElFM6dpw";
const IP_Api_URl = "https://geo.ipify.org/api/v1";
const IP_API_KEY = "at_UUP1OPH13teA7EHwhjnn0ly48FSvA";
const ip = "8.8.8.8";
window.addEventListener("DOMContentLoaded", () => init());

const init = () => {
  fetch(`${IP_Api_URl}?apiKey=${IP_API_KEY}`)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      consumeAPI(data);
      console.log(data);
    });
};

