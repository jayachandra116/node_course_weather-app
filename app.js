const geocode = require("./utils/geocode");
const forecast = require("./utils/forecast");

//console.log(process.argv);

const address = process.argv[2];

if (!address) {
  console.log("please provide a valid address");
} else {
  geocode(address, (error, { latitude, longitude, location } = {}) => {
    if (error) {
      return console.log(error);
    } else {
      forecast(latitude, longitude, (error, forecastData) => {
        if (error) {
          // console.log("Error code:-", +error.code);
          // console.log("Error type:- " + error.type);
          // console.log("Error info:- " + error.info);
          return console.log(error);
        }
        console.log(location);
        console.log(forecastData);
      });
    }
  });
}
