var express = require('express');
var router = express.Router();
var rand = Math.floor(Math.random()*100)
var rand2= Math.random()
var val1="Math.atan() applied to "+ rand + " is "+ Math.atan(rand,rand)
var val2="Math.exp()  applied to "+ rand2 + " is "+ Math.exp(rand2)
var val3= "Math.expm1() applied to "+ rand + " is "+ Math.expm1(rand);
console.log(val1)
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('computation', { title:'Tejavardhan Yadav Kallur Bonus',value1: val1, value2:val2, value3:val3 });
});

module.exports = router;
