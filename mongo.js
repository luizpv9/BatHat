var express = require('express');
var app = express();

var mongo = require('mongodb');
var mongoHost = '127.0.0.1';
var mongoPort = mongo.Connection.DEFAULT_PORT;

var db = new mongo.Db("nodejs-introduction", 
	new mongo.Server(mongoHost, mongoPort), {safe:false});

db.open(function(err, db)
{
	console.log("We are connected");
	if(err) return;
});

setTimeout(function()
{
	db.collection('wines', function(err, collection){
		collection.find().toArray(function(err, items) {
	            console.log(items);
	    });
	});

}, 250);
