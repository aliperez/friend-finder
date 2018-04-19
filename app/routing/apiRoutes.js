// Your apiRoutes.js file should contain two routes:

// A GET route with the url /api/friends. This will be used to display a JSON of all possible friends.

// A POST routes /api/friends. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.

// Got this from apiRoutes from Hot Restaurant
var friendArray = require("../data/friends");

// Got this from apiRoutes from HotRestaurant
module.exports = function (app) {

    // Got both of these from apiRoutes.js from HotRestaurant
    app.get("/api/friends", function (req, res) {
        res.json(friendArray);
    });

    app.post("/api/friends", function (req, res) {
        // Not 100% sure about req.body
        friendArray.push(req.body);
        // res.json(friendArray);
        // res.json(req.body);
    });

};