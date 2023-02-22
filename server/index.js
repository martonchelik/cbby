var express = require('express');
var cors = require('cors')
var app = express();

app.use(cors())

app.get('/cars', function (req, res) {
    res.json(cars);
});

app.listen(4000, function () {
    console.log('Example app listening on port 4000!');
});



const cars = [
    {made: "KIA", model:"RIO", year:"2017", gen:"2",price: "9600", transmission:"FWD",
        gearbox:"mechanic", milage:"2281337 km", bodytpe:"sedan", enginetpe:"gasoline"},
    {made: "Hummer", model:"H1", year:"1983", gen:"1",price: "19400", transmission:"AWD",
        gearbox:"mechanic", milage:"14881337 km", bodytpe:"SUV", enginetpe:"electric"},
    {made: "Ford", model:"Raptor", year:"2017", gen:"3",price: "41200", transmission:"4WD",
        gearbox:"automatic", milage:"228777 km", bodytpe:"truck", enginetpe:"diesel"},
    {made: "Ford", model:"Raptor", year:"2017", gen:"3",price: "41200", transmission:"4WD",
        gearbox:"automatic", milage:"228777 km", bodytpe:"truck", enginetpe:"diesel"},
    {made: "Ford", model:"Interceptor", year:"2014", gen:"2",price: "11800", transmission:"RWD",
        gearbox:"automatic", milage:"239000 km", bodytpe:"sedan", enginetpe:"gasoline"}
]