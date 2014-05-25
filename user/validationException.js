module.exports = function(message) {
    return {
        name: "Validation error",
        message: message || "Your data isn't valid"
    };
};