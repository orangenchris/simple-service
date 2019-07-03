var express = require('express');
var router = express.Router();

const daysOfTheWeekNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
function dayNumberToName(dayNumber) {
  return daysOfTheWeekNames[dayNumber];
}

/* GET home page. */
router.get('/', function(req, res, next) {
  res.json(dayNumberToName((new Date()).getDay()));
});

module.exports = router;
