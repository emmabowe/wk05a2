const express = require("express");
const app = express();
// ask for internal node module "path"
const path = require("path");

// middleware
// on every request please provide a static folder accessible to ejs
app.use(express.static(path.join(__dirname, "./public")))
app.set("view engine", "ejs");

const inventory = [
    { name: "sirloin", type: "beef", amount: 25 }, 
    { name: "ribs", type: "pork", amount: 0 },
    { name: "wings", type: "chicken", amount: 10 },
    { name: "breast", type: "chicken", amount: 5 },
    { name: "cod", type: "fish", amount: 22 },
    { name: "haddock", type: "fish", amount: 2 },
    { name: "chops", type: "pork", amount: 0 },
];

// route
app.get("/", (req, res)=> {
    // loads of code in here
    let username = "Emma";
                            // these will be pushed into landing.ejs
                            // 2d object    // 3d object
    res.render("landing", {data:username, stock:inventory});
});

// route
app.get("/playlist", (req, res)=> {
    res.send("my playlist");
});

// route
app.get("/playlist/:playId", (req, res)=>{
    let id = req.params.playId;
    res.send(`SELECT * FROM playlists where ID = ${id}`);
});

app.get("/products", (req, res)=>{
    let queryp = req.query.q;
    res.send(`SELECT * FROM products WHERE name LIKE (${queryp})`);
})

app.listen(3000, (err)=>{ 
    if (err) throw err;
    console.log(`listening on port 3000`);
})