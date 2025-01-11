const paypal = require("paypal-rest-sdk");

paypal.configure({
  mode: 'sandbox',
  client_id: "AYJfWly-zwnnnF9_FW-Jjc46qaK0G4cKCZyPBxLsLmu7JDhX2tCFo-q_ggiP1mvL4PqJUUHChnqdtet_",
  client_secret: "EHakTgC8mbfK2usN8D6wgnYlbMb3TG-TgAYyQI9NUj9ORNhbgnhUtjhNGw0RFjSuBDVb43LRArQcpSO4",
});

module.exports = paypal;