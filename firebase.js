const admin = require('firebase-admin');
const serviceAccount = require('./serviceAccountKey');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://analytics-49369.firebaseio.com"
});

function saveData(serverName, latency) {
  var d = new Date();
  var now = d.getTime();
  admin.database().ref('servers/' + serverName + '/' + now ).set({
    latency,
    timestamp: now,
  });
}

module.exports = {
  saveData
}