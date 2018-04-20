// Your apiRoutes.js file should contain two routes:

// A GET route with the url /api/friends. This will be used to display a JSON of all possible friends.

// A POST routes /api/friends. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.

var friendArray = require("../data/friends");

module.exports = function (app) {

    app.get("/api/friends", function (req, res) {
        res.json(friendArray);
    });

    app.post("/api/friends", function (req, res) {
        var difArray = [];
        var sorted = [];
        for (var i = 0; i < friendArray.length; i++) {
            var runningScore = 0;
            for (var j = 0; j < 10; j++) {
                var dif = Math.abs(parseInt(friendArray[i].scores[j]) - parseInt(req.body.scores[j]));
                runningScore = parseInt(runningScore) + parseInt(dif);
            }
            difArray.push(runningScore);
            sorted.push(runningScore);
        }
        sorted.sort(function (a, b) { return a - b });
        var smallestDif = sorted[0];
        var indexSmallest = difArray.indexOf(smallestDif);
        res.json(friendArray[indexSmallest]);
        friendArray.push(req.body);
    });

};