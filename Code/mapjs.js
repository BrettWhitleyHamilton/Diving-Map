var map = L.map('map').setView([57, -3.9], 7);
bounds = map.getBounds();
L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18,
    id: 'bretthamilton.cif89mexm003zsplx1evj0ybj',
    accessToken: 'pk.eyJ1IjoiYnJldHRoYW1pbHRvbiIsImEiOiJjaWY4OW1mNHAwMDQwdGZseG42OGYzNDhhIn0.YAMnl9uLCej2Jljuov4Dng'
}).addTo(map);
var Custom = L.Icon.extend({
    options: {     
        iconSize: [51, 64], // size of the icon
        iconAnchor: [25, 63], // point of the icon which will correspond to marker's location
        popupAnchor: [0, -52] // point from which the popup should open relative to the iconAnchor
    }
});

var scenicIcon = new Custom({
    iconUrl: 'scenic.png'
});
var wreckIcon = new Custom({
    iconUrl: 'ps.png'
});
var driftIcon = new Custom({
    iconUrl: 'drift.png'
});
var wallIcon = new Custom({
    iconUrl: 'wall.png'
});
var slopeIcon = new Custom({
    iconUrl: 'slope.png'
});
var shoreIcon = new Custom({
    iconUrl: 'shore.png'
});
var quarryIcon = new Custom({
    iconUrl: 'quarry.png'
});
var shorewreckIcon = new Custom({
    iconUrl: 'shorewreck.png'
});
var scenicshoreIcon = new Custom({
    iconUrl: 'scenicshore.png'
});
var slopeshoreIcon = new Custom({
    iconUrl: 'slopeshore.png'
});
var wallscenicIcon = new Custom({
    iconUrl: 'wallscenic.png'
});
var wallshoreIcon = new Custom({
    iconUrl: 'wallshore.png'
});
var riverIcon = new Custom({
    iconUrl: 'river.png'
});
var reefIcon = new Custom({
    iconUrl: 'reef.png'
});
var reefwreckIcon = new Custom({
    iconUrl: 'reefwreck.png'
});
var selectIcon = new Custom({
    iconUrl: 'select.png'
});
var userIcon = new Custom({
    iconUrl: 'me.png'
});



var wave = liquidFillGaugeDefaultSettings();
wave.circleColor = "#005b99";
wave.textColor = "#FF4444";
wave.waveTextColor = "#FFFFFF";
wave.waveColor = "#0088cc";
wave.circleThickness = 0.2;
wave.textVertPosition = 0.2;
wave.waveAnimateTime = 1000;
wave.waveHeight = 0.1;
wave.waveCount = 2
wave.maxValue = 10;
var gauge1 = loadLiquidFillGauge("fillgauge1", 0, wave);

var global = [];
var allmarkers = [];
var wreckztf = true;
var shoretf = true;
var scenictf = true;
var quarrytf = true;
var slopetf = true;
var drifttf = true;
var walltf = true;
var rivertf = true;
var reeftf = true;

var experience = "Any";
$('#search').keyup(search);
var counter = 0;
var objarr = [];
var slope = L.layerGroup();
var shore = L.layerGroup();
var scenic = L.layerGroup();
var cave = L.layerGroup();
var drift = L.layerGroup();
var wall = L.layerGroup();
var quarry = L.layerGroup();
var wreckz = L.layerGroup();
var wall = L.layerGroup();
var river = L.layerGroup();
var reef = L.layerGroup();
var bad = getMarks();
$.getJSON("divesite.json", function(data) {

    $.each(data, function() {
        $.each(this, function(key) {
            var dtype = key; 
            $.each(this, function() {

                $.each(this, function(keys, value) {
                    var xp = keys;
                    if (value instanceof Array) {
                        $.each(this, function() {
                            
                            switch (key) {
                                case "Wreck":
                                    L.marker([this.Lat, this.Long], {
                                        icon: wreckIcon,
                                        dvsn: this.Divesite_Name,
                                        exp: xp,
                                        diveType: key,
                                        depth: this.Depth,
                                        lat: this.Lat,
                                        lon: this.Long,
                                        diveIcon: wreckIcon
                                    }).on('click', onClick).bindPopup("Divesite Name: " + this.Divesite_Name + " <br> Recommended Experience:" + xp + " <br> Lat/Lng: " + this.Lat + ", " + this.Long + "<br> Dive Type: " + key + "<br> Depth: " + this.Depth + " Metres").addTo(wreckz);
                                    break;
									case "Reef":
                                    L.marker([this.Lat, this.Long], {
                                        icon: reefIcon,
                                        dvsn: this.Divesite_Name,
                                        exp: xp,
                                        diveType: key,
                                        depth: this.Depth,
                                        lat: this.Lat,
                                        lon: this.Long,
                                        diveIcon: reefIcon
                                    }).on('click', onClick).bindPopup("Divesite Name: " + this.Divesite_Name + " <br> Recommended Experience:" + xp + " <br> Lat/Lng: " + this.Lat + ", " + this.Long + "<br> Dive Type: " + key + "<br> Depth: " + this.Depth + " Metres").addTo(reef);
                                    break;
										case "Reef/Wreck":
                                    L.marker([this.Lat, this.Long], {
                                        icon: reefwreckIcon,
                                        dvsn: this.Divesite_Name,
                                        exp: xp,
                                        diveType: key,
                                        depth: this.Depth,
                                        lat: this.Lat,
                                        lon: this.Long,
                                        diveIcon: reefwreckIcon
                                    }).on('click', onClick).bindPopup("Divesite Name: " + this.Divesite_Name + " <br> Recommended Experience:" + xp + " <br> Lat/Lng: " + this.Lat + ", " + this.Long + "<br> Dive Type: " + key + "<br> Depth: " + this.Depth + " Metres").addTo(reef).addTo(wreckz);
                                    break;
									
									 case "River":
                                    L.marker([this.Lat, this.Long], {
                                        icon: riverIcon,
                                        dvsn: this.Divesite_Name,
                                        exp: xp,
                                        diveType: key,
                                        depth: this.Depth,
                                        lat: this.Lat,
                                        lon: this.Long,
                                        diveIcon: riverIcon
                                    }).on('click', onClick).bindPopup("Divesite Name: " + this.Divesite_Name + " <br> Recommended Experience:" + xp + " <br> Lat/Lng: " + this.Lat + ", " + this.Long + "<br> Dive Type: " + key + "<br> Depth: " + this.Depth + " Metres").addTo(river);
                                    break;
                                case "Shore/Wreck":
                                    L.marker([this.Lat, this.Long], {
                                        icon: shorewreckIcon,
                                        dvsn: this.Divesite_Name,
                                        exp: xp,
                                        diveType: key,
                                        depth: this.Depth,
                                        lat: this.Lat,
                                        lon: this.Long,
                                        diveIcon: shorewreckIcon
                                    }).on('click', onClick).bindPopup("Divesite Name: " + this.Divesite_Name + " <br> Recommended Experience:" + xp + " <br> Lat/Lng: " + this.Lat + ", " + this.Long + "<br> Dive Type: " + key + "<br> Depth: " + this.Depth + " Metres").addTo(wreckz).addTo(shore);
                                    break;
									 case "Scenic/Shore":
                                    L.marker([this.Lat, this.Long], {
                                        icon: scenicshoreIcon,
                                        dvsn: this.Divesite_Name,
                                        exp: xp,
                                        diveType: key,
                                        depth: this.Depth,
                                        lat: this.Lat,
                                        lon: this.Long,
                                        diveIcon: scenicshoreIcon
                                    }).on('click', onClick).bindPopup("Divesite Name: " + this.Divesite_Name + " <br> Recommended Experience:" + xp + " <br> Lat/Lng: " + this.Lat + ", " + this.Long + "<br> Dive Type: " + key + "<br> Depth: " + this.Depth + " Metres").addTo(scenic).addTo(shore);
                                    break;
									 case "Shore/Wall":
                                    L.marker([this.Lat, this.Long], {
                                        icon: wallshoreIcon,
                                        dvsn: this.Divesite_Name,
                                        exp: xp,
                                        diveType: key,
                                        depth: this.Depth,
                                        lat: this.Lat,
                                        lon: this.Long,
                                        diveIcon: wallshoreIcon
                                    }).on('click', onClick).bindPopup("Divesite Name: " + this.Divesite_Name + " <br> Recommended Experience:" + xp + " <br> Lat/Lng: " + this.Lat + ", " + this.Long + "<br> Dive Type: " + key + "<br> Depth: " + this.Depth + " Metres").addTo(wall).addTo(shore);
                                    break;
									case "Shore/Slope":
                                    L.marker([this.Lat, this.Long], {
                                        icon: slopeshoreIcon,
                                        dvsn: this.Divesite_Name,
                                        exp: xp,
                                        diveType: key,
                                        depth: this.Depth,
                                        lat: this.Lat,
                                        lon: this.Long,
                                        diveIcon: slopeshoreIcon
                                    }).on('click', onClick).bindPopup("Divesite Name: " + this.Divesite_Name + " <br> Recommended Experience:" + xp + " <br> Lat/Lng: " + this.Lat + "<br> Dive Type: " + key + ", " + this.Long + "<br> Depth: " + this.Depth + " Metres").addTo(slope).addTo(shore);
                                    break;
									
									
									case "Wall/Scenic":
                                    L.marker([this.Lat, this.Long], {
                                        icon: wallscenicIcon,
                                        dvsn: this.Divesite_Name,
                                        exp: xp,
                                        diveType: key,
                                        depth: this.Depth,
                                        lat: this.Lat,
                                        lon: this.Long,
                                        diveIcon: wallscenicIcon
                                    }).on('click', onClick).bindPopup("Divesite Name: " + this.Divesite_Name + " <br> Recommended Experience:" + xp + " <br> Lat/Lng: " + this.Lat + "<br> Dive Type: " + key + ", " + this.Long + "<br> Dive Type: " + key + "<br> Depth: " + this.Depth + " Metres").addTo(wall).addTo(scenic);
                                    break;
                                case "Shore":
                                    L.marker([this.Lat, this.Long], {
                                        icon: shoreIcon,
                                        dvsn: this.Divesite_Name,
                                        exp: xp,
                                        diveType: key,
                                        depth: this.Depth,
                                        lat: this.Lat,
                                        lon: this.Long,
                                        diveIcon: shoreIcon
                                    }).on('click', onClick).bindPopup("Divesite Name: " + this.Divesite_Name + " <br> Recommended Experience:" + xp + " <br> Lat/Lng: " + this.Lat + ", " + this.Long + "<br> Dive Type: " + key + "<br> Depth: " + this.Depth + " Metres").addTo(shore);
                                    break;
                                case "Scenic":
                                    L.marker([this.Lat, this.Long], {
                                        icon: scenicIcon,
                                        dvsn: this.Divesite_Name,
                                        exp: xp,
                                        diveType: key,
                                        depth: this.Depth,
                                        lat: this.Lat,
                                        lon: this.Long,
                                        diveIcon: scenicIcon
                                    }).on('click', onClick).bindPopup("Divesite Name: " + this.Divesite_Name + " <br> Recommended Experience:" + xp + " <br> Lat/Lng: " + this.Lat + ", " + this.Long + "<br> Dive Type: " + key + "<br> Depth: " + this.Depth + " Metres").addTo(scenic);
                                    break;
                                case "Quarry":
                                    L.marker([this.Lat, this.Long], {
                                        icon: quarryIcon,
                                        dvsn: this.Divesite_Name,
                                        exp: xp,
                                        diveType: key,
                                        depth: this.Depth,
                                        lat: this.Lat,
                                        lon: this.Long,
                                        diveIcon: quarryIcon
                                    }).on('click', onClick).bindPopup("Divesite Name: " + this.Divesite_Name + " <br> Recommended Experience:" + xp + " <br> Lat/Lng: " + this.Lat + ", " + this.Long + "<br> Dive Type: " + key + "<br> Depth: " + this.Depth + " Metres").addTo(quarry);
                                    break;
                                case "Drift":
                                    L.marker([this.Lat, this.Long], {
                                        icon: driftIcon,
                                        dvsn: this.Divesite_Name,
                                        exp: xp,
                                        diveType: key,
                                        depth: this.Depth,
                                        lat: this.Lat,
                                        lon: this.Long,
                                        diveIcon: driftIcon
                                    }).on('click', onClick).bindPopup("Divesite Name: " + this.Divesite_Name + " <br> Recommended Experience:" + xp + " <br> Lat/Lng: " + this.Lat + ", " + this.Long + "<br> Dive Type: " + key + "<br> Depth: " + this.Depth + " Metres").addTo(drift);
                                    break;
                                case "Wall":
                                    L.marker([this.Lat, this.Long], {
                                        icon: wallIcon,
                                        dvsn: this.Divesite_Name,
                                        exp: xp,
                                        diveType: key,
                                        depth: this.Depth,
                                        lat: this.Lat,
                                        lon: this.Long,
                                        diveIcon: wallIcon
                                    }).on('click', onClick).bindPopup("Divesite Name: " + this.Divesite_Name + " <br> Recommended Experience:" + xp + " <br> Lat/Lng: " + this.Lat + ", " + this.Long + "<br> Dive Type: " + key + "<br> Depth: " + this.Depth + " Metres").addTo(wall);
                                    break;
                                case "Slope":
                                    L.marker([this.Lat, this.Long], {
                                        icon: slopeIcon,
                                        dvsn: this.Divesite_Name,
                                        exp: xp,
                                        diveType: key,
                                        depth: this.Depth,
                                        lat: this.Lat,
                                        lon: this.Long,
                                        diveIcon: slopeIcon
                                    }).on('click', onClick).bindPopup("Divesite Name: " + this.Divesite_Name + " <br> Recommended Experience:" + xp + " <br> Lat/Lng: " + this.Lat + ", " + this.Long + "<br> Dive Type: " + key + "<br> Depth: " + this.Depth + " Metres").addTo(slope);
                                    break;
                                 }
                        });
                    } else {

                        switch (key) {
                            case "Wreck":
                                L.marker([this.Lat, this.Long], {
                                    icon: wreckIcon,
                                    dvsn: this.Divesite_Name,
                                    exp: xp,
                                    diveType: key,
                                    depth: this.Depth,
                                    lat: this.Lat,
                                    lon: this.Long,
                                    diveIcon: wreckIcon
                                }).on('click', onClick).bindPopup("Divesite Name: " + this.Divesite_Name + " <br> Recommended Experience:" + xp + " <br> Lat/Lng: " + this.Lat + ", " + this.Long + "<br> Dive Type: " + key  + "<br> Depth: " + this.Depth + " Metres").addTo(wreckz);
                                break;
								
								case "River":
                                    L.marker([this.Lat, this.Long], {
                                        icon: riverIcon,
                                        dvsn: this.Divesite_Name,
                                        exp: xp,
                                        diveType: key,
                                        depth: this.Depth,
                                        lat: this.Lat,
                                        lon: this.Long,
                                        diveIcon: riverIcon
                                    }).on('click', onClick).bindPopup("Divesite Name: " + this.Divesite_Name + " <br> Recommended Experience:" + xp + " <br> Lat/Lng: " + this.Lat + ", " + this.Long + "<br> Dive Type: " + key + "<br> Depth: " + this.Depth + " Metres").addTo(river);
                                    break;
									case "Reef":
                                    L.marker([this.Lat, this.Long], {
                                        icon: reefIcon,
                                        dvsn: this.Divesite_Name,
                                        exp: xp,
                                        diveType: key,
                                        depth: this.Depth,
                                        lat: this.Lat,
                                        lon: this.Long,
                                        diveIcon: reefIcon
                                    }).on('click', onClick).bindPopup("Divesite Name: " + this.Divesite_Name + " <br> Recommended Experience:" + xp + " <br> Lat/Lng: " + this.Lat + ", " + this.Long + "<br> Dive Type: " + key + "<br> Depth: " + this.Depth + " Metres").addTo(reef);
                                    break;
									
                            case "Shore/Wreck":
                                L.marker([this.Lat, this.Long], {
                                    icon: wreckIcon,
                                    dvsn: this.Divesite_Name,
                                    exp: xp,
                                    diveType: key,
                                    depth: this.Depth,
                                    lat: this.Lat,
                                    lon: this.Long,
                                    diveIcon: shorewreckIcon
                                }).on('click', onClick).bindPopup("Divesite Name: " + this.Divesite_Name + " <br> Recommended Experience:" + xp + " <br> Lat/Lng: " + this.Lat + ", " + this.Long + "<br> Depth: " + this.Depth + " Metres").addTo(wreckz).addTo(shore);
                                break;
								 case "Scenic/Shore":
                                    L.marker([this.Lat, this.Long], {
                                        icon: scenicshoreIcon,
                                        dvsn: this.Divesite_Name,
                                        exp: xp,
                                        diveType: key,
                                        depth: this.Depth,
                                        lat: this.Lat,
                                        lon: this.Long,
                                        diveIcon: scenicshoreIcon
                                    }).on('click', onClick).bindPopup("Divesite Name: " + this.Divesite_Name + " <br> Recommended Experience:" + xp + " <br> Lat/Lng: " + this.Lat + ", " + this.Long + "<br> Depth: " + this.Depth + " Metres").addTo(scenic).addTo(shore);
                                    break;
									 case "Shore/Wall":
                                    L.marker([this.Lat, this.Long], {
                                        icon: wallshoreIcon,
                                        dvsn: this.Divesite_Name,
                                        exp: xp,
                                        diveType: key,
                                        depth: this.Depth,
                                        lat: this.Lat,
                                        lon: this.Long,
                                        diveIcon: wallshoreIcon
                                    }).on('click', onClick).bindPopup("Divesite Name: " + this.Divesite_Name + " <br> Recommended Experience:" + xp + " <br> Lat/Lng: " + this.Lat + ", " + this.Long + "<br> Depth: " + this.Depth + " Metres").addTo(wall).addTo(shore);
                                    break;
									case "Shore/Slope":
                                    L.marker([this.Lat, this.Long], {
                                        icon: slopeshoreIcon,
                                        dvsn: this.Divesite_Name,
                                        exp: xp,
                                        diveType: key,
                                        depth: this.Depth,
                                        lat: this.Lat,
                                        lon: this.Long,
                                        diveIcon: slopeshoreIcon
                                    }).on('click', onClick).bindPopup("Divesite Name: " + this.Divesite_Name + " <br> Recommended Experience:" + xp + " <br> Lat/Lng: " + this.Lat + ", " + this.Long + "<br> Depth: " + this.Depth + " Metres").addTo(slope).addTo(shore);
                                    break;
									case "Wall/Scenic":
                                    L.marker([this.Lat, this.Long], {
                                        icon: wallscenicIcon,
                                        dvsn: this.Divesite_Name,
                                        exp: xp,
                                        diveType: key,
                                        depth: this.Depth,
                                        lat: this.Lat,
                                        lon: this.Long,
                                        diveIcon: wallscenicIcon
                                    }).on('click', onClick).bindPopup("Divesite Name: " + this.Divesite_Name + " <br> Recommended Experience:" + xp + " <br> Lat/Lng: " + this.Lat + ", " + this.Long + "<br> Depth: " + this.Depth + " Metres").addTo(wall).addTo(scenic);
                                    break;
                            case "Quarry":
                                L.marker([this.Lat, this.Long], {
                                    icon: quarryIcon,
                                    dvsn: this.Divesite_Name,
                                    exp: xp,
                                    diveType: key,
                                    depth: this.Depth,
                                    lat: this.Lat,
                                    lon: this.Long,
                                    diveIcon: quarryIcon
                                }).on('click', onClick).bindPopup("Divesite Name: " + this.Divesite_Name + " <br> Recommended Experience:" + xp + " <br> Lat/Lng: " + this.Lat + ", " + this.Long + "<br> Depth: " + this.Depth + " Metres").addTo(quarry);
                                break;
                            case "Shore":
                                L.marker([this.Lat, this.Long], {
                                    icon: shoreIcon,
                                    dvsn: this.Divesite_Name,
                                    exp: xp,
                                    diveType: key,
                                    depth: this.Depth,
                                    lat: this.Lat,
                                    lon: this.Long,
                                    diveIcon: shoreIcon
                                }).on('click', onClick).bindPopup("Divesite Name: " + this.Divesite_Name + " <br> Recommended Experience:" + xp + " <br> Lat/Lng: " + this.Lat + ", " + this.Long + "<br> Dive Type: " + key + "<br> Depth: " + this.Depth + " Metres").addTo(shore);
                                break;
                            case "Scenic":
                                L.marker([this.Lat, this.Long], {
                                    icon: scenicIcon,
                                    dvsn: this.Divesite_Name,
                                    exp: xp,
                                    diveType: key,
                                    depth: this.Depth,
                                    lat: this.Lat,
                                    lon: this.Long,
                                    diveIcon: scenicIcon
                                }).on('click', onClick).bindPopup("Divesite Name: " + this.Divesite_Name + " <br> Recommended Experience:" + xp + " <br> Lat/Lng: " + this.Lat + ", " + this.Long + "<br> Depth: " + this.Depth + " Metres").addTo(scenic);
                                break;
                            case "Drift":
                                L.marker([this.Lat, this.Long], {
                                    icon: driftIcon,
                                    dvsn: this.Divesite_Name,
                                    exp: xp,
                                    diveType: key,
                                    depth: this.Depth,
                                    lat: this.Lat,
                                    lon: this.Long,
                                    diveIcon: driftIcon
                                }).on('click', onClick).bindPopup("Divesite Name: " + this.Divesite_Name + " <br> Recommended Experience:" + xp + " <br> Lat/Lng: " + this.Lat + ", " + this.Long + "<br> Depth: " + this.Depth + " Metres").addTo(drift);
                                break;
                            case "Wall":
                                L.marker([this.Lat, this.Long], {
                                    icon: wallIcon,
                                    dvsn: this.Divesite_Name,
                                    exp: xp,
                                    diveType: key,
                                    depth: this.Depth,
                                    lat: this.Lat,
                                    lon: this.Long,
                                    diveIcon: wallIcon
                                }).on('click', onClick).bindPopup("Divesite Name: " + this.Divesite_Name + " <br> Recommended Experience:" + xp + " <br> Lat/Lng: " + this.Lat + ", " + this.Long + "<br> Depth: " + this.Depth + " Metres").addTo(wall);
                                break;
                            case "Slope":
                                L.marker([this.Lat, this.Long], {
                                    icon: slopeIcon,
                                    dvsn: this.Divesite_Name,
                                    exp: xp,
                                    diveType: key,
                                    depth: this.Depth,
                                    lat: this.Lat,
                                    lon: this.Long,
                                    diveIcon: slopeIcon
                                }).on('click', onClick).bindPopup("Divesite Name: " + this.Divesite_Name + " <br> Recommended Experience:" + xp + " <br> Lat/Lng: " + this.Lat + ", " + this.Long + "<br> Depth: " + this.Depth + " Metres").addTo(slope);
                                break;
								case "Reef/Wreck":
                                    L.marker([this.Lat, this.Long], {
                                        icon: reefwreckIcon,
                                        dvsn: this.Divesite_Name,
                                        exp: xp,
                                        diveType: key,
                                        depth: this.Depth,
                                        lat: this.Lat,
                                        lon: this.Long,
                                        diveIcon: wreckIcon
                                    }).on('click', onClick).bindPopup("Divesite Name: " + this.Divesite_Name + " <br> Recommended Experience:" + xp + " <br> Lat/Lng: " + this.Lat + ", " + this.Long + "<br> Dive Type: " + key + "<br> Depth: " + this.Depth + " Metres").addTo(reef).addTo(wreckz);
                                    break;
								
								
                            }
                        
                    }
                });
            });
        });
        wreckz.addTo(map);
        shore.addTo(map);
        quarry.addTo(map);
        drift.addTo(map);
        scenic.addTo(map);
        wall.addTo(map);
        slope.addTo(map);
		river.addTo(map);
		reef.addTo(map);
        wall.eachLayer(function(marker) {
            
            
        });
    });
    map.eachLayer(function(marker) {
        if (marker._latlng && !marker._animated) {
            marker.on('click', onClick);
            global.push(marker);
            allmarkers.push(marker);
            
        }
    });
});



$("#Wrecks").click(function(event) {
    if (wreckztf) {
        wreckz.eachLayer(function(marker) {
            map.removeLayer(marker);
            allmarkers.splice($.inArray(marker, allmarkers), 1);
        });
var bob=document.getElementById("Wrecks");
$('#Wrecks').css({opacity:0.5});
        wreckztf = false;
    } else {
        wreckz.eachLayer(function(marker) {
            if (marker.options.exp == experience) {
                map.addLayer(marker);

            } else if (experience == "Any") {
                map.addLayer(marker);
            }
            allmarkers.push(marker);
        });
$('#Wrecks').css({opacity:1});
        wreckztf = true; 
    }
});

$("#River").click(function(event) {
    
    if (rivertf) {
        river.eachLayer(function(marker) {
            map.removeLayer(marker);
            allmarkers.splice($.inArray(marker, allmarkers), 1);
        });
$('#River').css({opacity:0.5});
        rivertf = false;
    } else {
        river.eachLayer(function(marker) {
            if (marker.options.exp == experience) {
                map.addLayer(marker);

            } else if (experience == "Any") {
                map.addLayer(marker);
            }
            allmarkers.push(marker);
        });
$('#River').css({opacity:1});
        rivertf = true;
    }
});



$("#Reef").click(function(event) {
    //  event.preventDefault();
    if (reeftf) {
        reef.eachLayer(function(marker) {
            map.removeLayer(marker);
            allmarkers.splice($.inArray(marker, allmarkers), 1);
        });
$('#Reef').css({opacity:0.5});
        reeftf = false;
    } else {
        reef.eachLayer(function(marker) {
            if (marker.options.exp == experience) {
                map.addLayer(marker);

            } else if (experience == "Any") {
                map.addLayer(marker);
            }
            allmarkers.push(marker);
        });
$('#Reef').css({opacity:1});
        reeftf = true; //   $(this).addClass('selected');
    }
});



$("#Shore").click(function(event) {
    //  event.preventDefault();
    if (shoretf) {
        shore.eachLayer(function(markerz) {
            map.removeLayer(markerz);
            allmarkers.splice($.inArray(markerz, allmarkers), 1);

        });
        //  $(this).removeClass('selected');
        //map.removeLayer(wreckz);
		$('#Shore').css({opacity:0.5});
        shoretf = false;
    } else {

        shore.eachLayer(function(markerz) {
            if (markerz.options.exp == experience) {
                map.addLayer(markerz);

            } else if (experience == "Any") {
                map.addLayer(markerz);
            }

            allmarkers.push(markerz);
        });
$('#Shore').css({opacity:1});
        shoretf = true; //   $(this).addClass('selected');
    }
});

$("#Drift").click(function(event) {
    //  event.preventDefault();
    if (drifttf) {
        drift.eachLayer(function(marker) {
            map.removeLayer(marker);
            allmarkers.splice($.inArray(marker, allmarkers), 1);
        });
        drifttf = false;
		$('#Drift').css({opacity:0.5});
    } else {

        drift.eachLayer(function(marker) {
            if (marker.options.exp == experience) {
                map.addLayer(marker);

            } else if (experience == "Any") {
                map.addLayer(marker);
            }
            allmarkers.push(marker);
        });
$('#Drift').css({opacity:1});
        drifttf = true; //   $(this).addClass('selected');
    }
});

$("#Wall").click(function(event) {
    //  event.preventDefault();
    if (walltf) {
        wall.eachLayer(function(marker) {
            map.removeLayer(marker);
            allmarkers.splice($.inArray(marker, allmarkers), 1);
        });
        //  $(this).removeClass('selected');
        //map.removeLayer(wreckz);
        walltf = false;
		$('#Wall').css({opacity:0.5});
    } else {

        wall.eachLayer(function(marker) {
            if (marker.options.exp == experience) {
                map.addLayer(marker);

            } else if (experience == "Any") {
                map.addLayer(marker);
            }
            allmarkers.push(marker);
        });
$('#Wall').css({opacity:1});
        walltf = true; //   $(this).addClass('selected');
    }
});

$("#Quarry").click(function(event) {
    //  event.preventDefault();
    if (quarrytf) {
        quarry.eachLayer(function(marker) {
            map.removeLayer(marker);
            allmarkers.splice($.inArray(marker, allmarkers), 1);
        });
        quarrytf = false;
		$('#Quarry').css({opacity:0.5});
    } else {

        quarry.eachLayer(function(marker) {
            if (marker.options.exp == experience) {
                map.addLayer(marker);

            } else if (experience == "Any") {
                map.addLayer(marker);
            }
            allmarkers.push(marker);
        });
$('#Quarry').css({opacity:1});
        quarrytf = true; //   $(this).addClass('selected');
    }
});

$("#Slope").click(function(event) {
    //  event.preventDefault();
    if (slopetf) {
        slope.eachLayer(function(marker) {
            map.removeLayer(marker);
            allmarkers.splice($.inArray(marker, allmarkers), 1);
        });
        slopetf = false;
		$('#Slope').css({opacity:0.5});
    } else {

        slope.eachLayer(function(marker) {
            if (marker.options.exp == experience) {
                map.addLayer(marker);

            } else if (experience == "Any") {
                map.addLayer(marker);
            }
            allmarkers.push(marker);
        });
$('#Slope').css({opacity:1});
        slopetf = true; //   $(this).addClass('selected');
    }
});

$("#Scenic").click(function(event) {
    //  event.preventDefault();
    if (scenictf) {
        scenic.eachLayer(function(marker) {
            map.removeLayer(marker);
            allmarkers.splice($.inArray(marker, allmarkers), 1);
            //allmarkers.pop(marker);
        });
        for (a in allmarkers) {

        }
        scenictf = false;
		$('#Scenic').css({opacity:0.5});
    } else {

        scenic.eachLayer(function(marker) {
            if (marker.options.exp == experience) {
                map.addLayer(marker);

            } else if (experience == "Any") {
                map.addLayer(marker);
            }
            allmarkers.push(marker);
        });
$('#Scenic').css({opacity:1});
        scenictf = true; //   $(this).addClass('selected');
    }
});




function onClick(e) {
    var mark = this;
    this.openPopup();
    $.ajax({
        type: "GET",
        url: 'http://api.worldweatheronline.com/free/v2/marine.ashx?key=0fbc35e0628487e81910acbe88c6e&format=xml&tide=yes&q=' + mark.getLatLng().lat + ',' + mark.getLatLng().lng,
        dataType: "xml",
        success: xmlParser
    });

    function xmlParser(xml) {
        myXML = $(xml).find("hourly").filter(function() {
            return $(this).find('time').text() == 0;
        });
        myXML.find("swellHeight_m").each(function() {

            var self = $(this);

            gauge1.update(self.text());
        });
        myXML.find("winddirDegree").filter(function() {
            var self2 = $(this);
            $("#tri").css({
                    '-webkit-transform': 'rotate(' + self2.text() + 'deg)'
                })
                .css({
                    '-moz-transform': 'rotate(' + self2.text() + 'deg)'
                });

        });

        myXML.find("waterTemp_C").filter(function() {

            var dsplace = document.getElementById('dsplace');
            var wattemp = $(this).text();
            if (wattemp > 9 && wattemp < 26) {
                dsplace.src = "wetsuit.png";

            } else if (wattemp < 9) {
                dsplace.src = "drysuit.png";
            } else if (wattemp > 25) {
                dsplace.src = "swimwear.png";

            }

        });


    }


}


function onClick1() {
    var find = document.getElementById("find");
    var myLayer = L.LayerGroup();
    if (!navigator.geolocation) {
        find.innerHTML = 'Geolocation is not available';
    } else {
         map.locate();

    }

    map.on('locationfound', function(e) {
         L.marker([e.latlng.lat, e.latlng.lng], {
            icon: userIcon,user:true
        }).bindPopup("YOUR LOCATION").addTo(map);

        var allMarkersObjArray = []; //new Array();
        var allMarkersGeoJsonArray = []; //new Array();


        var closest = [];

        map.eachLayer(function(marker) {
            var latme = e.latlng.lat;
            var lngme = e.latlng.lng;

            if (marker._latlng && !marker.options.user) {
                var lat2, lng2;
                var lat2 = marker._latlng.lat;
                var lng2 = marker._latlng.lng;
                var lattotal, lngtotal;
                if ((lat2 == latme) && (lng2 == lngme)) {} else {
                    Math.radians = function(degrees) {
                        return degrees * Math.PI / 180;
                    };
                    var R = 6371000; // metres
                    var φ1 = Math.radians(lat2);
                    var φ2 = Math.radians(latme);
                    var Δφ = Math.radians((lat2 - latme));
                    var Δλ = Math.radians((lng2 - lngme));

                    var a = Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
                        Math.cos(φ1) * Math.cos(φ2) *
                        Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
                    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
                    //asin
                    var total2 = R * c;

                    if ((closest[0] == null) && (closest[1] == null)) {
                        closest[0] = lat2;
                        closest[1] = lng2;
                        closest[2] = total2;
                    } else
                    if (total2 < closest[2]) {
                        closest[0] = lat2;
                        closest[1] = lng2;
                        closest[2] = total2;

                    }
                }


              
            }
        });
        map.setView(new L.LatLng(closest[0], closest[1]), 11, {
            animate: true,
            duration: 1
        });
        
        map.on('locationerror', function() {
            find.innerHTML = 'Position could not be found';
        });
    });

}




function search() {
   var searchString = $('#search').val().toLowerCase();
  var alldn = [];
    for (var i = 0; i < allmarkers.length; i++) {



        alldn.push(allmarkers[i].options.dvsn);



        var look = allmarkers[i].options.dvsn.toLowerCase().indexOf(searchString) > -1;
        if (look == true) {
            map.addLayer(allmarkers[i]);
        }else if(searchString==allmarkers[i].options.dvsn){
			
			map.addLayer(allmarkers[i]);
			allmarkers[i].openPopup();
			
			
		} else {
            map.removeLayer(allmarkers[i]);
        }
    }

    $("#search").autocomplete({
        source: alldn,
        select: function(event, ui) {
            for (var i = 0; i < allmarkers.length; i++) {
                if (allmarkers[i].options.dvsn == ui.item.value) {
                    map.addLayer(allmarkers[i]);
					map.setView(allmarkers[i]._latlng, 11, {
            animate: true,
            duration: 1
        });
		global[i].openPopup();
                } else {
                    map.removeLayer(global[i]);
                }
            }
        }
    });
}




function compare() {
    sessionStorage.clear();
    if ($("#compare").text() != "Exit") {
        $("#compare").text("Exit");
		alert("Select 2 dive sites");
        var l = [];
        var getItem = function() {
             if (sessionStorage.getItem(this.options.dvsn) == null && sessionStorage.length<2) {
                if (sessionStorage.length < 2) {
                    sessionStorage[this.options.dvsn] = JSON.stringify(this.options);
                    var msa = sessionStorage[this.options.dvsn];
                    var msa2 = JSON.parse(msa);
                    l.push(this.options.dvsn);
                    this.setIcon(selectIcon);
                }
         


                if (sessionStorage.length == 2) {
                    $("#myModal").modal();
                    var dive0 = sessionStorage.key(0);
                    var dive1 = sessionStorage.key(1);
                    for (var k = 0; k < sessionStorage.length; k++) {
                        var te, te2;
                        var dive = sessionStorage.key(k);
                        var ob = JSON.parse(sessionStorage.getItem(dive));
                        $('#dc' + k).html(ob.lat + ", " + ob.lon);
                        $('#ds' + k).html(dive);
                        $('#dst' + k).html(ob.diveType);
                        $('#xp' + k).html(ob.exp);
                        $('#d' + k).html(ob.depth+" Metres");
                        (function(k) {
                            $.ajax({
                                type: "GET",
                                url: 'http://api.worldweatheronline.com/free/v2/marine.ashx?key=0fbc35e0628487e81910acbe88c6e&format=xml&tide=yes&q=' + ob.lat + ',' + ob.lon,
                                dataType: "xml",
                                success: function(data) {
                                    $(data).find('hourly').each(function() {
                                        if ($(this).find('time').text() == 0) {
                                            $('#tmp' + k).html($(this).find('tempC').text() + "°C");
                                            $('#ws' + k).html($(this).find('windspeedMiles').text() + " MPH");
						                      $('#st' + k).html($(this).find('waterTemp_C').text() + "°C");
                                        }
                                    });
                                }
                            });
                        })(k);


                    



                    }
                }
            } else {
               
                var dsicon = this.options.diveIcon;


              
                sessionStorage.removeItem(this.options.dvsn);
                this.setIcon(dsicon);
                this.closePopup();


            }
        }
        for (i = 0; i < allmarkers.length; i++) {
            var mars = allmarkers[i];
            mars.on('click', getItem);

        }
    } else {
        $("#compare").text("Compare");
        sessionStorage.clear();
        for (i = 0; i < allmarkers.length; i++) {
            var mars = allmarkers[i];
			mars.setIcon(mars.options.diveIcon);
            mars.off('click', getItem);
            mars.on('click', onClick);

        }
    }
}
//        $("#myModal").modal();

function close1() {
    $("#myModal").modal('hide');
    //sessionStorage.clear();
}




var list = ["Any", "Novice", "Ocean Diver", "Sport", "Master"];
var counter = 0;
var arr = [];

$(".xpf").click(function(event) {
      var divexp = document.getElementById('divexp');
    var exppng = $(this).text();
    switch (event.target.id) {
        case "plus":
            counter = counter + 1;
             break;
        case "minus":
            counter = counter - 1;
            break;
    }
    if (counter < 0) {
        counter = 4
    } else if (counter > 4) {
        counter = 0
    }
    experience = list[0];
    for (var i = 0; i < allmarkers.length; i++) {
        map.addLayer(allmarkers[i]);
    }


    switch (counter) {
        case 0:
            divexp.src = "all1.png";
            experience = list[0];
for (var i = 0; i < allmarkers.length; i++) {
map.addLayer(allmarkers[i]);}
            break;
        case 1:
            divexp.src = "novice.png";
            experience = list[1];
            for (var i = 0; i < allmarkers.length; i++) {
                if (allmarkers[i].options.exp == list[1]) {
                    map.addLayer(allmarkers[i]);

                } else {
                    map.removeLayer(allmarkers[i]);
                }
            }

            break;
        case 2:
            divexp.src = "ocean.png";
            experience = list[2];
            for (var i = 0; i < allmarkers.length; i++) {
                if (allmarkers[i].options.exp == list[2]) {
                    map.addLayer(allmarkers[i]);
                } else {
                    map.removeLayer(allmarkers[i]);
                }
            }

            break;

        case 3:
            divexp.src = "sport.png";
            experience = list[3];
            for (var i = 0; i < allmarkers.length; i++) {
                if (allmarkers[i].options.exp == list[3]) {
                    map.addLayer(allmarkers[i]);
                } else {
                    map.removeLayer(allmarkers[i]);
                }
            }
            break;

        case 4:
            divexp.src = "master.png";
            experience = list[4];
            for (var i = 0; i < allmarkers.length; i++) {
                if (allmarkers[i].options.exp == list[4]) {
                    map.addLayer(allmarkers[i]);
                } else {
                    map.removeLayer(allmarkers[i]);
                }
            }
            break;
           
    }

});


var mapzoom = map.getZoom();
map.on('zoomend', function(event) {
    
    var tot = [];
    var anch = [];
    var popup = [];
    var globa = [];
    var cnt = 0;
    map.eachLayer(function(marker) {
        if (marker._latlng) {
            if (!marker._animated) {

                globa.push(marker);
            }
        }
    });
    for (var b in globa) {
        var c = 0;
        var f = globa[b].options.icon;
        var ye = f.options.iconSize[0];
        var ya = f.options.iconSize[1];
        var be = f.options.iconAnchor[0];
        var ba = f.options.iconAnchor[1];
        var ad = f.options.popupAnchor[1];


        
        if (map.getZoom() > mapzoom) {

            tot[b] = [ye * 1.2, ya * 1.2];
            anch[b] = [be * 1.2, ba * 1.2];
            popup[b] = [0, ad * 1.2];
        }
        if (map.getZoom() < mapzoom) {
            ye = ye - (ye * 0.2);
            ya = ya - (ya * 0.2);
            be = be - (be * 0.2);
            ba = ba - (ba * 0.2);
            ad = ad - (ad * 0.2);
            tot[b] = [ye, ya];
            anch[b] = [be, ba];
            popup[b] = [0, ad];
        }


    }
    map.eachLayer(function(marker) {
        if (marker._latlng) {
            if (!marker._animated) {
                for (var d in globa) {
                    var icon = marker.options.icon;
                    icon.options.iconSize = tot[d];
                    icon.options.iconAnchor = anch[d];
                    icon.options.popupAnchor = popup[d];
                    
                }

                marker.setIcon(icon);
            }
        }
    });

    mapzoom = map.getZoom();

});

function getMarks() {
    var marks = [];
    map.eachLayer(function(marker) {
        if (marker._latlng && !marker._animated) {
            marks.push(marker);
        }
    });
    return marks;
}

var gf = [];
map.eachLayer(function(marker) {
    if (marker._latlng) {
        if (!marker._animated) {
            gf.push(marker);
        }
    }
});


