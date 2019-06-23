var Gift = require('./models/subscription');
var auth = require('./auth/auth');

module.exports = function (app) {

    require('./api/adminLogin')(app);
    require('./api/subscriptions')(app,auth);

    // route to handle all angular requests
    app.get('*', function (req, res) {
        res.sendfile('./public/index.html'); // load our public/index.html file
    });

};