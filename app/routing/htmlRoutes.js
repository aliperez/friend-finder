// Your htmlRoutes.js file should include two routes:
// A GET Route to /survey which should display the survey page.
// A default, catch-all route that leads to home.html which displays the home page.

// Added this based on HotRestaurant htmlRoutes.js example
var path = require("path");

module.exports = function(app) {

// Do I need the / before the .. ???  Apparently not according to example from HotRestaurant
app.get("/survey", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/survey.html"));
});

// Got this from htmlRoutes.js from solution of HotRestaurant
// If no matching route is found default to home
app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
});

};
