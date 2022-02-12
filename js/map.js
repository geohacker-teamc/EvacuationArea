/*-------------------------------------------------------------------------
 * onload ↓↓↓
 -------------------------------------------------------------------------*/
let lat = 34.7288939;
let lon = 137.8517803;
let zoom = 15;

var map = L.map("map");
map.setView([lat, lon], zoom);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);
34.73209990826764, 137.85874368862807
let coordinates = [
  [
    [34.73209, 137.85874],
    [34.73418, 137.85874],
    [34.73418, 137.86186],
    [34.73209, 137.86186],
    [34.73209, 137.85874]
  ],
  [
    [34.71791, 137.86448],
    [34.71582, 137.86448],
    [34.71582, 137.86760],
    [34.71791, 137.86760],
    [34.71791, 137.86448]
  ],
  [
    [34.72000, 137.86448],
    [34.71791, 137.86448],
    [34.71791, 137.86760],
    [34.72000, 137.86760],
    [34.72000, 137.86448]
  ]
]
let postCount = [{
    post: 18,
    anonymous: 9
  },
  {
    post: 5,
    anonymous: 1
  },
  {
    post: 2,
    anonymous: 2
  },
]
let iCount = 0;
for (let latlngs of coordinates) {
  let polygon = L.polygon(latlngs, {
    color: 'red'
  }).addTo(map);
  var warningIcon = L.icon({
    iconUrl: './img/ng.png',
    iconSize: [30, 30],
  });
  L.marker(polygon.getBounds().getCenter(), {
    icon: warningIcon
  }).addTo(map);

  let cnt1 = postCount[iCount].post;
  let warningBadgeIcon = L.divIcon({
    html: '<div class="badge-style"><span class="badge badge-info">投稿<span class="badge badge-light">' + cnt1 + '</span></span></div>',
    iconAnchor: [-30, 20],
  });
  L.marker(polygon.getBounds().getCenter(), {
    icon: warningBadgeIcon
  }).addTo(map);
  let cnt2 = postCount[iCount].anonymous;
  let warningAnonymousBadgeIcon = L.divIcon({
    html: '<div class="badge-style"><span class="badge badge-danger">匿名<span class="badge badge-light">' + cnt2 + '</span></span></div>',
    iconAnchor: [-30, 0],
  });
  L.marker(polygon.getBounds().getCenter(), {
    icon: warningAnonymousBadgeIcon
  }).addTo(map);

  iCount = iCount + 1;
}

var personIcon = L.icon({
  iconUrl: './img/person.png',
  iconSize: [45, 45],
});
L.marker([34.72795508673979, 137.8626618181374], {
  icon: personIcon
}).addTo(map);

var startIcon = L.icon({
  iconUrl: './img/start.png',
  iconSize: [45, 45],
});
L.marker([34.7288939, 137.8517803], {
  icon: startIcon
}).addTo(map);

var goalIcon = L.icon({
  iconUrl: './img/goal.png',
  iconSize: [45, 45],
});
L.marker([34.7326887, 137.8684854], {
  icon: goalIcon
}).addTo(map);

var latlngs = [
  [34.728317, 137.851896],
  [34.727876, 137.851274],
  [34.726941, 137.852025],
  [34.726200, 137.852926],
  [34.726059, 137.853076],
  [34.726482, 137.854686],
  [34.726765, 137.856724],
  [34.726888, 137.857733],
  [34.727047, 137.858613],
  [34.727047, 137.859750],
  [34.727047, 137.861145],
  [34.727153, 137.862089],
  [34.727082, 137.863247],
  [34.726959, 137.863677],
  [34.727470, 137.865350],
  [34.728070, 137.866659],
  [34.728616, 137.867603],
  [34.729216, 137.868569],
  [34.729428, 137.868955],
  [34.732320, 137.867839],
  [34.732390, 137.868204],
];

L.polyline(latlngs, {
  color: 'red'
}).addTo(map);


/*-------------------------------------------------------------------------
 * method ↓↓↓
 -------------------------------------------------------------------------*/
function login() {
  window.location.href = "./login.html"
}

function showWarningInput() {
  document.getElementById("warning_input").style.display = "block";

  map.on(L.Draw.Event.DRAWSTART, function (e) {
    console.log(e)
  });
}

function hideWarningInput() {
  document.getElementById("warning_input").style.display = "none";
}

function showWarningRegist() {
  document.getElementById("warning_input").style.display = "none";
  document.getElementById("warning_input_regist").style.display = "block";
}

function hideWarningRegist() {
  document.getElementById("warning_input_regist").style.display = "none";
}