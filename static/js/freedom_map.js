var map = L.map('map').setView([51.505, -0.09], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var marker = L.marker([51.5, -0.09]).addTo(map)
    .bindPopup('Test')
    .openPopup();

L.marker([0, 0]).addTo(map)
    .bindPopup('Test')
    .openPopup();

function draw_circle(){

    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    	maxZoom: 18,
    	attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, '
    	}).addTo(map);
 
      var circle = L.circle([35.7101, 139.8107], {
          radius: 500,
          color: 'blue',
          fillColor: '#399ade',
          fillOpacity: 0.5
      }).addTo(map);
};