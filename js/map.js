let lat = 35.03671735340955;
let lon = 138.37646325717154;
let zoom = 15;

let map = L.map("map");
map.setView([lat, lon], zoom);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

let coordinates = [
  [
    [35.03958, 138.40313],
    [35.04167, 138.40313],
    [35.04167, 138.40625],
    [35.03958, 138.40625],
    [35.03958, 138.40313]
  ],
  [
    [35.03958, 138.37313],
    [35.04167, 138.37313],
    [35.04167, 138.37625],
    [35.03958, 138.37625],
    [35.03958, 138.37313]
  ],
  [
    [35.03749, 138.37313],
    [35.03958, 138.37313],
    [35.03958, 138.37625],
    [35.03749, 138.37625],
    [35.03749, 138.37313]
  ]
]
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
}

var personIcon = L.icon({
  iconUrl: './img/person.png',
  iconSize: [45, 45],
});
L.marker([35.038336291468596, 138.39326479938154], {
  icon: personIcon
}).addTo(map);

var startIcon = L.icon({
  iconUrl: './img/start.png',
  iconSize: [45, 45],
});
L.marker([35.04139240697257, 138.39120132321514], {
  icon: startIcon
}).addTo(map);

var goalIcon = L.icon({
  iconUrl: './img/goal.png',
  iconSize: [45, 45],
});
L.marker([35.033391567505085, 138.39426625761087], {
  icon: goalIcon
}).addTo(map);

var latlngs = [
  [35.04139240697257, 138.39120132321514],
  [35.038336291468596, 138.39326479938154],
  [35.033391567505085, 138.39426625761087]
];
L.polyline(latlngs, {
  color: 'red'
}).addTo(map);