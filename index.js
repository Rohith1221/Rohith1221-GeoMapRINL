"use strict";
if (navigator.geolocation)
  navigator.geolocation.getCurrentPosition(
    function (position) {
      console.log(position);
      const { latitude } = position.coords;
      const { longitude } = position.coords;
      // const  latitude  = 40.3399;   //testing
      // const  longitude  = 117.321;
      console.log("Latitude: " + latitude, "Longitude: " + longitude);
      console.log(`https://www.google.com/maps/@${latitude},${longitude}`);
      const coord = [latitude, longitude];

      var map = L.map("map").setView(coord, 13);
      const demo = [coord[0], coord[1]];
      L.tileLayer("https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png", {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(map);

      var circle = L.circle([demo[0], demo[1]], {
        color: "#FF7F7F",
        fillColor: "#ffcccb",
        fillOpacity: 0.5,
        radius: 300,
      }).addTo(map);

      circle.bindPopup("Radius of 300m");

      L.marker(demo)
        .addTo(map)
        .bindPopup(
          L.popup({
            className: "organ",
            autoClose: false,
            closeOnClick: false,
          })
        )
        .setPopupContent("Photo Captured")
        .openPopup()
        .addTo(map);

      //jquery getting longitude and latitude coordinates and passing into input fields
      console.log("jquery");
      document.getElementById("long").value = `${coord[1]}`;
      document.getElementById("lat").value = `${coord[0]}`;
    },
    function () {
      alert("could not get your location");
    }
  );
