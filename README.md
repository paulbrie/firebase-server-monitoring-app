# firebase-server-monitoring-app

## About the app
This is a very simple application which monitors nodesjs.org using nodejs and firebase.

- the server monitors nodejs.org server by sending a http request every 2 seconds ( @nodesjs.org: sorry for the traffic! :) )
- the latency is stored in firebase db on the server side
- the client application (html/js) listens to each update on the firebase db and updates the chart

## Installation

```bash
git clone https://github.com/paulbrie/firebase-server-monitoring-app.git .
npm install
```

You need then to:
- upload the Firebase certKey in the main folder as `serviceAccountKey.js` and modify it to be js file. Example:

```javascript
module.exports = {
  "type": "service_account",
  "project_id": "your-project-id",
  "private_key_id": "your-key",
  "private_key": "your-private-key",
  "client_email": "your-email",
  "client_id": "your-client-id",
  "auth_uri": "https://accounts.google.com/o/oauth2/auth",
  "token_uri": "https://accounts.google.com/o/oauth2/token",
  "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
  "client_x509_cert_url": "your-cert-url"
}
```

- update the firebase configuration in `index.html`
- start the app

```
node index.js
`
