const express = require("express");
const router = express.Router();
const db = require("../data/db");
const bodyParser = require("body-parser");
const config = require("../config");
const mysql = require("mysql2");

const con = mysql.createConnection(config.db);

router.use(bodyParser.json());

router.use(bodyParser.urlencoded({extended:true}));






router.use("/continents/avrupa/istanbul/galatakulesi", async function (req, res) {
    try {
        const [products,] = await db.execute("select * from turguide.guide");
        res.render("galatakulesi", {
            urunler: products
        });
    } catch {
        console.log(err);
    }

});

router.use("/continents/avrupa/istanbul/ayasofya", async function (req, res) {
    try {
        const [products,] = await db.execute("select * from turguide.guide");
        res.render("ayasofya", {
            urunler: products
        });
    } catch {
        console.log(err);
    }

});
router.use("/continents/avrupa/istanbul/sultanahmet", async function (req, res) {
    try {
        const [products,] = await db.execute("select * from turguide.guide");
        res.render("sultanahmet", {
            urunler: products
        });
    } catch {
        console.log(err);
    }

});

router.use("/continents/avrupa/istanbul/yerebatan", async function (req, res) {
    try {
        const [products,] = await db.execute("select * from turguide.guide");
        res.render("yerebatan", {
            urunler: products
        });
    } catch {
        console.log(err);
    }

});
router.use("/continents/avrupa/urfa/harranev", async function (req, res) {
    try {
        const [products,] = await db.execute("select * from turguide.guide");
        res.render("harranev", {
            urunler: products
        });
    } catch {
        console.log(err);
    }

});
router.use("/continents/avrupa/urfa/gobeklitepe", async function (req, res) {
    try {
        const [products,] = await db.execute("select * from turguide.guide");
        res.render("gobeklitepe", {
            urunler: products
        });
    } catch {
        console.log(err);
    }

});

router.use("/continents/avrupa/urfa/balikligol", async function (req, res) {
    try {
        const [products,] = await db.execute("select * from turguide.guide");
        res.render("balikligol", {
            urunler: products
        });
    } catch {
        console.log(err);
    }

});

router.use("/continents/avrupa/urfa/urfakale", async function (req, res) {
    try {
        const [products,] = await db.execute("select * from turguide.guide");
        res.render("urfakale", {
            urunler: products
        });
    } catch {
        console.log(err);
    }

});

router.use("/continents/avrupa/paris/louvre", async function (req, res) {
    try {
        const [products,] = await db.execute("select * from turguide.guide");
        res.render("louvre", {
            urunler: products
        });
    } catch {
        console.log(err);
    }

});

router.use("/continents/avrupa/paris/eyfel", async function (req, res) {
    try {
        const [products,] = await db.execute("select * from turguide.guide");
        res.render("eyfel", {
            urunler: products
        });
    } catch {
        console.log(err);
    }

});
router.use("/continents/avrupa/istanbul", async function (req, res) {
    try {
        const [products,] = await db.execute("select * from turguide.guide");
        res.render("Istanbul", {
            urunler: products
        });
    } catch {
        console.log(err);
    }

});



router.use("/continents/avrupa/paris", async function (req, res) {
    try {
        const [products,] = await db.execute("select * from turguide.guide");
        res.render("paris", {
            urunler: products
        });
    } catch {
        console.log(err);
    }

});


router.use("/continents/avrupa/urfa", async function (req, res) {
    try {
        const [products,] = await db.execute("select * from turguide.guide");
        res.render("urfa", {
            urunler: products
        });
    } catch {
        console.log(err);
    }

});

router.use("/continents/amerika", async function (req, res) {
    try {
        const [products,] = await db.execute("SELECT * FROM turguide.amerika");
        res.render("amerika", {
            sehirler: products
        });
    } catch {
        console.log(err);
    }

});

router.use("/continents/afrika", async function (req, res) {
    try {
        const [products,] = await db.execute("SELECT * FROM turguide.afrika");
        res.render("Afrika", {
            sehirler: products
        });
    } catch {
        console.log(err);
    }

});

router.use("/continents/asya", async function (req, res) {
    try {
        const [products,] = await db.execute("SELECT * FROM turguide.asya");
        res.render("Asya", {
            sehirler: products
        });
    } catch {
        console.log(err);
    }

});

router.use("/continents/avrupa", async function (req, res) {
    try {
        const [products,] = await db.execute("select * from turguide.guide");
        res.render("Avrupa", {
            sehirler: products
        });
    } catch {
        console.log(err);
    }

});
router.use("/continents", async function (req, res) {
    try {
        const [products,] = await db.execute("select * from turguide.guide");
        res.render("Kıtalar", {
            sehirler: products
        });
    } catch {
        console.log(err);
    }

});


router.get("/GeziturSign", async function (req, res) {
    try {
        
        res.render("GeziturSign-up");
    } catch {
        console.log(err);
    }
});


router.post("/GeziturSign", async function (req, res) {
    var name = req.body.name;
    var username = req.body.username;
    var mail = req.body.mail;
    var password = req.body.password;
    con.connect(function(error){
        console.log("hadi ya");
        if(error) throw error;
         var sql = "INSERT INTO turguide.user(name,username,mail,password) VALUES(?,?,?,?)" ;
        con.query(sql,[name,username,mail,password],function(error, result){
            if(error) throw error;
            res.redirect("/geziturLog");
        });
   });
  

  });
  


  router.get("/GeziturLog", async function (req, res) {
    try {
        
        res.render("GeziturLog-in");
    } catch {
        console.log(err);
    }
});






router.post("/GeziturLog", async function (req, res) {
    var username = req.body.username;
    var password = req.body.password;
    con.query("select * from turguide.user where username= ? and password= ?",[username,password],function(error,results,fields){
        if(results.length > 0)
        {
            res.redirect("/gezitur");
        }else{
            res.redirect("/geziturLog");
        }
        res.end();
    });


});






  
router.use("/gezitur", async function (req, res) {
    try {
        const [products,] = await db.execute("select * from turguide.guide");
        res.render("GeziTur", {
            urunler: products
        });
    } catch {
        console.log(err);
    }
});





router.use("/", async function (req, res) {
    try {
        const [products,] = await db.execute("select * from turguide.guide");
        res.render("GeziTurAnasayfa", {
            urunler: products
        });
    } catch {
        console.log(err);
    }
});




module.exports = router;

