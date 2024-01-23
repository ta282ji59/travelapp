function initMap() {
    var mapOptions = {
        center: new google.maps.LatLng(37.507866, 139.930326),
        zoom: 14,
        mapTypeId: google.maps.MapTypeId.TERRAIN, // 地形ビューを有効にする
        styles: [
            {
                featureType: "all",
                elementType: "labels",
                stylers: [{ visibility: "off" }]
            },
            {
                featureType: "transit",
                stylers: [{ visibility: "on" }]
            },
            {
                featureType: "administrative.locality",
                stylers: [{ visibility: "on" }]
            },
            {
                featureType: "poi.school",
                stylers: [{ visibility: "on" }]
            }
            
        ],
        gestureHandling: 'greedy',//スマホ操作時に１本指で地図操作が可能になる
        streetViewControl: false,// ストリートビューのコントロールを非表示
        mapTypeControl: false,// 地図のタイプを変更するコントロールを非表示
        zoomControl: false,//ズームボタンを非表示
        fullscreenControl: false//全画面表示ボタンを非表示
    };

    // 地図を表示
    var map = new google.maps.Map(document.getElementById('map'), mapOptions);


    const mapdata = [
        {id:'null', name: '会津大学', description:'null', latitude: 37.523842, longitude: 139.93744, category_id:'null', star:'null', genre:'null', image: 'image/pin.png' },
        {id:'null', name: '会津短大', description:'null', latitude: 37.507164, longitude: 139.945969, category_id:'null', star:'null', genre:'null', image: 'image/pin.png' },
        {id:'null', name: '会津若松駅', description:'null', latitude: 37.507866 , longitude: 139.930326, category_id:'null', star:'null', genre:'null', image: 'image/pin.png' },
           ];

    function adjustMarkerSize(zoomLevel, imageUrl) {//ピンのサイズを調整するクラス
        var size = new google.maps.Size(3 * zoomLevel, 3 * zoomLevel);
        return {
            url: imageUrl,
            size: size,
            scaledSize: size
        };
    }

    mapdata.forEach(function(data) {
        var marker = new google.maps.Marker({
            position: new google.maps.LatLng(data.latitude, data.longitude),
            map: map,
            icon: adjustMarkerSize(map.getZoom(), data.image)
        });

        map.addListener('zoom_changed', function() {
            marker.setIcon(adjustMarkerSize(map.getZoom(), data.image));
        });

        var infoWindowContent = '<div>'+
                                'id: ' + data.id +'<br>' +
                                'name: ' + data.name + '<br>' +
                                'description: ' + data.description + '<br>' +
                                '緯度: ' + data.latitude + '<br>' +
                                '経度: ' + data.longitude + '<br>' +
                                'category_id: ' + data.category_id + '<br>' +
                                'star: ' + data.star + '<br>' +
                                'genre: ' + data.genre + '<br>' +
                                'image: ' + data.image + '<br></div>'
                                

        var infoWindow = new google.maps.InfoWindow({
            content: infoWindowContent
        });

        marker.addListener('click', function() {
            infoWindow.open(map, marker);
        });
    });
}
