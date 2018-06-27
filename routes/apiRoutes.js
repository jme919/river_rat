const axios = require("axios");
const router = require("express").Router();

router.get("/recipes", (req, res) => {
  axios
    .get("https://waterservices.usgs.gov/nwis/iv/?format=json&sites=02035000&period=P1D&parameterCd=00060,00065,00010,63680&siteStatus=all")
    .then((results) => console.log(results.data))
    .catch(err => res.status(422).json(err));
});


module.exports = router;