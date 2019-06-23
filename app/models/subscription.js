// grab the mongoose module
var mongoose = require('mongoose');

// define our nerd model
// module.exports allows us to pass this to other files when it is called
module.exports = mongoose.model('Subscription', {
    email : {type : String, default: ''},
    type : {type : String, default: 'Beta Tester'}
});