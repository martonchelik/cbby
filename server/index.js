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
    {made: "KIA", model:"Rio", year:"2017", price: "9600", transmission:"FWD",
        gearbox:"mechanic", milage:"2281337 km", bodytpe:"Sedan", enginetpe:"Gasoline"},
    {made: "Hummer", model:"H1", year:"1983",price: "19400", transmission:"AWD",
        gearbox:"mechanic", milage:"14881337 km", bodytpe:"SUV", enginetpe:"Gasoline"},
    {made: "Ford", model:"Raptor", year:"2017",price: "41200", transmission:"AWD",
        gearbox:"automatic", milage:"228777 km", bodytpe:"Truck", enginetpe:"Diesel"},
    {made: "Ford", model:"Interceptor", year:"2014",price: "11800", transmission:"RWD",
        gearbox:"automatic", milage:"239000 km", bodytpe:"Sedan", enginetpe:"Gasoline"},
    {made: "Audi", model: "RS6", year: "2011", price: "32000", transmission: "4WD",
        gearbox: "automatic", milage: "44000", bodytpe: "Wagon", enginetpe: "Gasoline"},
    {made: "Toyota", model: "Prius", year: "2007", price: "13000", transmission: "FWD",
        gearbox: "automatic", milage: "470000", bodytpe: "Hatchback", enginetpe: "Hybrid"},
    {made: "Audi", model: "E-tron", year: "2021", price: "142000", transmission: "4WD",
        gearbox: "automatic", milage: "41200", bodytpe: "SUV", enginetpe: "Electric"}
]