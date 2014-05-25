var crypto = require('crypto');

var UserExistsException = require('./userExistsException');
var ValidationException = require('./validationException');
var userRepository = require('./repository');

const MINIMUM_USERNAME_LENGTH = 5;
const MINIMUM_PASSWORD_LENGTH = 4;

module.exports = {
    register: function(username, password) {
        validate(username, password);

        var encryptedPassword = crypto.createHash('md5').update(password).digest('hex');

        var user = {
            username: username,
            password: encryptedPassword,
            createdAt: new Date()
        };

        if( userRepository.exists(user) ) {
            throw UserExistsException();
        }

        userRepository.add(user);
    },
    login: function(username, password) {

    },
    update: function(username, password) {

    }
};

var validate = function(username, password) {
    if( !username || !password  ) {
        throw ValidationException('Username and / or password is not set');
    }

    if( username.length < MINIMUM_USERNAME_LENGTH ) {
        throw ValidationException('Username is too short');
    }

    if( password.length < MINIMUM_PASSWORD_LENGTH ) {
        throw ValidationException("Password isn't secure enough");
    }

    // We're all good!
};