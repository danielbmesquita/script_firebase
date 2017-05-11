let firebase = require("firebase");

firebase.initializeApp({
 apiKey: 'AIzaSyADHwnU3O-7oJWZWy3bGJun2sfa5uSbMi4',
 authDomain: 'yo-ember-6f8f9.firebaseapp.com',
 databaseURL: 'https://yo-ember-6f8f9.firebaseio.com',
 storageBucket: 'yo-ember-6f8f9.appspot.com',
 messagingSenderId: "547033235722"
});

let email = "user@email.com";
let password = "password";

firebase.auth().createUserWithEmailAndPassword(email, password).then(() => {

  firebase.auth().signInWithEmailAndPassword(email, password).then((user) => {
    let userId = user.uid;
  firebase.database().ref('users/' + user.uid).set({
     email : user.email
  }).then(() => {process.exit()}).catch(error => console.log(error));

  }).catch(function(error) {
    var errorCode = error.code;
    var errorMessage = error.message;
  });

}).catch(function(error) {
  var errorCode = error.code;
  var errorMessage = error.message;
});
