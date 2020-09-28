const input = document.querySelector(".search-bar");
const search = document.querySelector("#search");
const trackerData = document.querySelectorAll("h3");
const IP = 0;
const LOCATION = 1;
const TIMEZONE = 2;
const ISP = 3;
console.log(search);
console.log(input.value);
const mapAccToken =
  "pk.eyJ1Ijoic2FtaXJhemFkIiwiYSI6ImNrZmppczRydTBzcmIyeHF0YXRnNzdzamQifQ.1F0QhTj-Ch57QJElFM6dpw";
const IP_Api_URl = "https://geo.ipify.org/api/v1";
const IP_API_KEY = "at_UUP1OPH13teA7EHwhjnn0ly48FSvA";
const ip = "8.8.8.8";
const ipRegExp = new RegExp("^([0-9]{1,3}.){3}[0-9]{1,3}$", "i");
const domainRegExp = new RegExp(
  "(?:(?:(?<thld>[w-]*)(?:.))?(?<sld>[w-]*)).(?<tld>[w-]*)",
  "i"
);
window.addEventListener("DOMContentLoaded", () => init());
search.addEventListener("submit", (event) => SubmitBtn(event));
//https://geo.ipify.org/api/v1?apiKey=at_UUP1OPH13teA7EHwhjnn0ly48FSvA&ipAddress=8.8.8.8
//test:This method returns true if it finds a match, otherwise it returns false in regular expration
const SubmitBtn = (e) => {
  //prevent it from submitting a form: preventDefault
  e.preventDefault();
  const ipToFind = input.value;
  input.value = "";
  if (ipRegExp.test(ipToFind) || domainRegExp.test(ipToFind)) {
    findIP(ipToFind);
  } else {
    alert("Please, enter a valid IP Address or domain");
  }
};

const findIP = (ipToFind) => {
  if (ipRegExp.test(ipToFind)) {
    fetch(`${IP_Api_URl}?apiKey=${IP_API_KEY}&ipAddress=${ipToFind}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        IPDescription(data);
      });
  } else {
    fetch(`${IP_Api_URl}?apiKey=${IP_API_KEY}&domain=${ipToFind}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        IPDescription(data);
      });
  }
};
const init = () => {
  fetch(`${IP_Api_URl}?apiKey=${IP_API_KEY}&ipAddress=${ip}`)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      IPDescription(data);
      console.log(data);
    })

    .catch(function (error) {
      console.log(error);
    });
};

const IPDescription = (data) => {
  const { ip, location, isp } = data;
  const CurrentLocation = `${location.city},${location.region},${location.postalCode}`;
  trackerData[IP].innerText = ip;
  trackerData[LOCATION].innerText = CurrentLocation;
  trackerData[TIMEZONE].innerText = `UTC${location.timezone}`;
  trackerData[ISP].innerText = isp;
  newMap(location.lat, location.lng);
};

const newMap = (lat, lan) => {
  mapboxgl.accessToken = mapAccToken;
  var map = new mapboxgl.Map({
    container: "mapId", // container id
    style: "mapbox://styles/mapbox/streets-v11", // style URL
    center: [lan, lat], // starting position [lng, lat]
    zoom: 13, // starting zoom
  });

  let marker = new mapboxgl.Marker({
    element: createMarker(),
    anchor: "bottom",
  })
    .setLngLat([lan, lat])
    .addTo(map);
};
const createMarker = () => {
  const marker = document.createElement("div");
  marker.className = "marker";
  marker.style.backgroundImage =
    "url('/ip-address-tracker-master/images/icon-location.svg')";
  marker.style.width = "46px";
  marker.style.height = "55px";
  return marker;
};
