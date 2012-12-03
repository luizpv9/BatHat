var BatHat = require('BatHat');
var App = new BatHat();

// -----------------------------------------------------------------------------
// Models
// -----------------------------------------------------------------------------
require('./models')(App);

// -----------------------------------------------------------------------------
// Routes
// -----------------------------------------------------------------------------
App.RESTful(App.models.users);
App.listen(2222);