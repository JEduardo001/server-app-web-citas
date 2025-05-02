var admin = require("firebase-admin");

var serviceAccount = require("./citas-84d02-firebase-adminsdk-fbsvc-23425086f3.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore(); 
const auth = admin.auth()

module.exports = {db,auth};