// Inicializa o mapa
fetch("places.json")
  .then(response => response.json())
  .then(data => {
    renderMap(data.restaurants, "map-restaurants", [51.5, -0.1]);
    renderMap(data.pubs, "map-pubs", [51.5, -0.1]);
    renderMap(data.churches, "map-churches", [51.5, -0.1]);
    renderMap(data.shops, "map-shops", [51.5, -0.1]);
    renderMap(data.beauty_salons, "map-salons", [51.5, -0.1]);
  });

function renderMap(places, mapId, centerCoords) {
  const map = L.map(mapId).setView(centerCoords, 10);
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "Map data © <a href='https://openstreetmap.org'>OpenStreetMap</a> contributors"
  }).addTo(map);

  places.forEach(place => {
    L.marker([place.lat, place.lng])
      .addTo(map)
      .bindPopup(`<strong>${place.name}</strong><br><a href="${place.url}" target="_blank">Visit</a>`);
  });
}

