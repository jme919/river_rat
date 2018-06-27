const axios = require("axios");
const router = require("express").Router();

router.get("/recipes", (req, res) => {
  axios
    .get("https://waterservices.usgs.gov/nwis/iv/?format=json&sites=02035000&period=P1D&parameterCd=00060,00065,00010,63680&siteStatus=all")
    //need to pass res.json(results.data<insert additional parmeters here>)
    .then((results) => console.log(results.data))
    .catch(err => res.status(422).json(err));
});

router.get("/parks", (req, res) => {
  axios
    .get("https://maps.googleapis.com/maps/api/js?key=AIzaSyAyesbQMyKVVbBgKVi2g6VX7mop2z96jBo&callback=initMap")
    .then((results) => console.log(results.data))
})

module.exports = router;