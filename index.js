var os = require('os');
var path = require('path');
var fs = require('fs');

var VsErrorListReporter = function () {

    this.writeCommonMsg = function (msg) {
        console.log(msg);
    };

    this.onSpecComplete = function (browser, result) {
        var specName = result.suite.join(' ') + ' ' + result.description;
        if (result.skipped) {
            console.log("SKIPPED: " + specName);
        } else if (result.success) {
            console.log("SUCCESS: " + specName);
        } else {
            console.log("ERROR: " + specName);
        }
    };

    this.onBrowserComplete = function () {
        //console.log("browserdone");
    };


    this.onRunStart = function (browsers) {
        //this._browsers = browsers;
        //this._isRendered = false;
    };

};

// PUBLISH DI MODULE
module.exports = {
    'reporter:vserrorlist': ['type', VsErrorListReporter]
};
