const express = require("express");
const expressHandlebars = require("express-handlebars");

const app = express();
app.engine( "handlebars", expressHandlebars({
 //defaultLayout:"main",
})
);
app.set("view engine", "handlebars");

app.use(express.static(__dirname + "/public"));


app.get("/", (req, res) => {
    res.render("home", { layout: null });
  });
  app.get("/about", (req, res) => {
    res.type("text/plain");
   res.send("This is the about page");
});

app. listen (3000, () => {
    console.log("Express started on port 3000");
  }); 

