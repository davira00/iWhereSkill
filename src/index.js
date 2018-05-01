'use strict';
var Alexa = require("alexa-sdk");

/ Load the SDK for JavaScript
var AWS = require('aws-sdk');
// Set the region 
AWS.config.update({region: 'us-east-1'});



//main entry point to start alexa skill
exports.handler = function(event, context, callback) {
    var alexa = Alexa.handler(event, context);
    alexa.registerHandlers(handlers);
    alexa.execute();
};


//function handlers for alexa skill calls "intents"
var handlers = {
	//function call when user launches function i.e. "Alexa start hello world"
    'LaunchRequest': function () {
        this.emit('SayHello');
    },
	//function called when users triggers intent i.e. "Alexa ask hello world to say hello" this is synced up with intent_schema.json"
    'HelloWorldIntent': function () {
        this.emit('SayHello')
    },
	//utility function that builds the output
    'SayHello': function () {
        this.emit(':tell', 'Hello New World!');
    }
};
