var moongose = require('mongoose');
var uuidv4 = require('uuidv4');
var schema = moongose.Schema;

var userSchema = new schema({ 
		username       : { type: String, unique: true ,required :true },
		password       : { type: String, required :true },
		name           : { type: String, required :true },
        email          : { type: String, required :true },
        contanctNumber : { type: Number , required :true},
        userType       : { type: String}

});

module.exports = moongose.model('User', userSchema);