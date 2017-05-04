var firebase = require("firebase");
firebase.initializeApp({
	databaseURL: "https://yo-ember-6f8f9.firebaseio.com/"
});

var db = firebase.database();
var ref = db.ref("libraries");

ref.on("value", function(snapshot) {
	ref.remove();
	
}, function (errorObject) {
	console.log("The read failed: " + errorObject.code);
});
