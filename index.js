var ncp = require('ncp').ncp;

module.exports = () => {
    ncp("./Example","/hello");
}