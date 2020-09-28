const input = document.querySelector(".search-bar");
const search = document.querySelector("#search");
const trackerData= document.querySelectorAll('h3')
console.log(search);
console.log(input);
const mapAccToken =
  "pk.eyJ1Ijoic2FtaXJhemFkIiwiYSI6ImNrZmppczRydTBzcmIyeHF0YXRnNzdzamQifQ.1F0QhTj-Ch57QJElFM6dpw";
const IP_Api_URl = "https://geo.ipify.org/api/v1";
const IP_API_KEY = "at_UUP1OPH13teA7EHwhjnn0ly48FSvA";
const ip = "8.8.8.8";
window.addEventListener("DOMContentLoaded", () => init());

//https://geo.ipify.org/api/v1?apiKey=at_UUP1OPH13teA7EHwhjnn0ly48FSvA&ipAddress=8.8.8.8

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

const IPDescription = (){
  const  [ip,location,isp] = data
  const CurrentLocation = `${location.city},{location.region},{location.postalCode}`
  trackerData[ip].innerText = ip;
  trackerData[location].innerText = currentLocation;
  trackerData[timezone].innerText = `UTC${location.timezone}`
  trackerData[isp].innerText = isp;
  newMap(location.lat,location.lng )

}
const newMap = (lat, lan) => {
mapboxgl.accessToken = mapAccToken;
var map = new mapboxgl.Map({
container: 'mapId', // container id
style: 'mapbox://styles/mapbox/streets-v11', // style URL
center: [lan , lat], // starting position [lng, lat]
zoom: 13 // starting zoom
});

let marker = new mapboxgl.Marker({
  element: createMarker(),
  anchor: 'bottom'
})
.setLngLat([lon, lat])
.addTo(map);
}
const createMarker = () => {
const marker = document.createElement('div')
marker.className = 'marker'
marker.style.backgroundImage = 'url(/images/icon-location.svg)'
marker.style.width = '46px';
marker.style.height ='55px';
return marker
}
