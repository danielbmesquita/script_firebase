let firebase = require("firebase");
let admin = require("firebase-admin");
let serviceAccount = require("./yo-ember-admin.json");

firebase.initializeApp({
 apiKey: 'AIzaSyADHwnU3O-7oJWZWy3bGJun2sfa5uSbMi4',
 authDomain: 'yo-ember-6f8f9.firebaseapp.com',
 databaseURL: 'https://yo-ember-6f8f9.firebaseio.com',
 storageBucket: 'yo-ember-6f8f9.appspot.com',
 messagingSenderId: "547033235722"
});


admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://yo-ember-6f8f9.firebaseio.com"
});

firebase.database().ref('users').on('value', (snapshot) => {
  snapshot.forEach((childSnapshot) => {
    admin.auth().deleteUser(childSnapshot.key).then(() => console.log("Successfully deleted user"));
  });
}).then(() => process.exit());