#### Example integration Midtrans CoreApi with NodeJS

###### Prerequisites

```
NodeJS
NPM
```

###### Installing
* Create ENV file (.env) on the root folder with this configuration

```
PORT = 3000
MIDTRANS_SANDBOX_ENDPOINT = 'https://api.sandbox.midtrans.com/v2'
MIDTRANS_SERVER_KEY = 'your_server_key'
MIDTRANS_CLIENT_KEY = 'your_client_key'
MIDTRANS_TOKEN = 'your_token'
```

note: for MIDTRANS_TOKEN value, you can encode "**your_server_key:**" to base64.

* Then run this command

```
$ npm install
$ npm start
```

### Enjoy! :)
