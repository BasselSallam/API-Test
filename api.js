const express = require("express");
const cors = require("cors");
const app = express();
var corsOptions = {
  origin: "http://localhost:4200",
};

app.use(cors());

const cats = [
  {
    name: "loli",
    color: "orange",
    image:
      "https://images.pexels.com/photos/1170986/pexels-photo-1170986.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  },
  {
    name: "dodo",
    color: "black",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZXyTF9MKxMQgF2Hp9FQtDtSbC9-fxi67EfA&usqp=CAU",
  },
  {
    name: "bosy",
    color: "gray",
    image: "https://icatcare.org/app/uploads/2018/06/Layer-1704-1200x630.jpg",
  },
];

app
  .get("/cats", (req, res) => {
    res.send(cats);
  })
  .listen(3000,()=>{
    console.log('CORS-enabled');
  });
