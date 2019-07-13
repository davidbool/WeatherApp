const express = require('express')
const router = express.Router()
const City = require('../modules/city')
const request = require(`request`)

router.get('/city/:cityname', function (req, response) {
    const city = req.params.cityname
    const url = "http://api.apixu.com/v1/current.json?key=257a9899d5134554979111522191007&q=" + city
    request(url, function (err, res) {
      const weather = JSON.parse(res.body)
      response.send(weather)
    })
  })

router.get(`/cities`,function(req,res){
    City.find({},function(err,doc){
        res.send(doc)
    })
})

router.post(`/city`,function(req,res){
let wheather = req.body
const c = new City(wheather)
c.save()
res.end()
})

//expects an object {city: "cityname"}
router.delete(`/city`, function(req,res) {
    let city = req.body.city
    City.remove({name:city},function(err,data){
        res.send(city + " is removed from the DB")
    })
})



module.exports = router