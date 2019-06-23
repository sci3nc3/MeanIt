var Subscription = require('../models/subscription');

module.exports = function (app, auth) {

    // get all subscriptions
    app.get('/api/subscriptions', auth , function (req, res) {

        Subscription.find(function (err, subscriptions) {

            if (err)
                res.send(err);

            res.json(subscriptions);
        });
    });

    // add email to subscriptions database
    app.post("/api/email", function (req, res) {

        var subscription = new Subscription({
            'email': req.body.email
        });
        subscription.save(function (err, fluffy) {
            if (err)
                res.status(500).end();
            console.log(req.body.email + " registered!");
            res.status(200).end();
        });
    });

};