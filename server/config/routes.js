var users = require('../controllers/users.js');
module.exports = function(app) { 

		app.get('/',users.home)
}