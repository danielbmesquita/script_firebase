var firebase = require("firebase");
firebase.initializeApp({
	databaseURL: "https://yo-ember-6f8f9.firebaseio.com/"
});

var db = firebase.database();
var ref = db.ref("libraries");

ref.on("child_added", function(snapshot, childKey) {
	if (childKey != null) {
		ref.child(childKey).remove();
	}
}, function (errorObject) {
	console.log("The read failed: " + errorObject.code);
});
