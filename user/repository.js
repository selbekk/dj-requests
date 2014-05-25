module.exports = {

    exists: function() {
        return false;
    },

    add: function(obj) {
        console.log('adding object: ', obj);
        return true;
    },

    login: function(obj) {
        return true;
    }
};
