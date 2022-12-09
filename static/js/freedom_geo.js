function success(pos) {
    //console.log('pos');  先ほど記述したコンソールはコメントアウト

    const lat = pos.coords.latitude;   //緯度を取得して定数latに代入
    const lng = pos.coords.longitude;  //経度を取得して定数lngに代入
    const accuracy = pos.coords.accuracy;  //同じく精度を定数accuracyに代入

    var loc = document.getElementById("loc")
    //緯度：${lat} 経度：${lng}
    loc.innerHTML = "緯度：" + lat + " 経度：" + lng;
    var accuracySpan = document.getElementById("accuracy")
    accuracySpan.innerHTML = "精度：" + accuracy;
}

function fail(error) {
    window.alert('位置情報の取得に失敗しました。エラーコード：' + error.code);
}

window.onload = (event) => {
    navigator.geolocation.getCurrentPosition(success, fail);
};

