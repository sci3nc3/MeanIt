var passport = require('passport');

module.exports = function (app) {

    // auth routes
    // route to test if the user is logged in or not
    app.get('/is-admin-logged-in', function (req, res) {
        console.log("Access on admin page!")
        res.send(req.isAuthenticated() ? req.user : false);
    });

    // route to log in
    app.post('/admin-login', passport.authenticate('local'), function (req, res) {
        res.send(req.user);
    });

    // route to log out
    app.post('/logout', function (req, res) {
        req.logOut();
        res.send(200);
    });

};