var map = L.map('map').setView([51.505, -0.09], 13); //緯度経度の配列と、どれぐらいズームして表示するかのパラメータ

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

// ピンの描画 & ポップアップ
var marker = L.marker([51.5, -0.09]).addTo(map)
    .bindPopup('Test')
    .openPopup();

L.marker([0, 0]).addTo(map)
    .bindPopup('Test')
    .openPopup();

L.marker([0, 0]).addTo(map)
    .bindPopup('Test')
    .openPopup();
    
L.marker([35.86236715380478, 139.97084209608684]).addTo(map)
    .bindPopup('Test')
    .openPopup();

//丸を描画
var circle_elements = {
    radius: 10,           //半径
    fillColor: "#ff7800", //塗りつぶし色
    color: "#000000",        //外枠の線の色
    weight: 1,            //外枠の線の太さ
    opacity: 1,           //外枠の線の不透明度
    fillOpacity: 0.8      //塗りつぶしの不透明度
};

var obj_circle = L.circleMarker([51.5, -0.09], 
    gpsMarkerOptions
).addTo(map); 
