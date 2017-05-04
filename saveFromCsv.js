var firebase = require("firebase");
firebase.initializeApp({
	databaseURL: "https://yo-ember-6f8f9.firebaseio.com/"
});

var db = firebase.database();
var ref = db.ref("libraries");

const csvFilePath='./libraries.csv'
const csv=require('csvtojson')
csv().fromFile(csvFilePath).on('json',(jsonObj)=>{

	var newPostRef = ref.push();
	newPostRef.set(jsonObj);

}).on('done',(error)=>{
	console.log('end')
})
