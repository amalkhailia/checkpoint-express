const express = require('express')


const app = express()


function logger(req, res, next) {
    var d = new Date();
    const day = d.getDay();
    const hour = d.getHours();
    if (day >= 1 && day <= 5 && hour >= 9 && hour <= 20) {
      next();
    } else {
      res.send("We are available Monday to Friday, from 9 to 20");
    }
  }
app.use(express.static("Public"))
  app.get("/", logger, (req, res) => {
    res.sendFile(__dirname + "/Public/home.html");
  });
  
  app.get("/services", logger, (req, res) => {
    res.sendFile(__dirname + "/Public/services.html");
  });
  
  app.get("/contact", logger, (req, res) => {
    res.sendFile(__dirname + "/Public/aboutUs.html");
  });

const port = 3004
app.listen (port, error => { 
    error ? console.log(error)
    :
     console.log(`server is running on port ${port}`)
})