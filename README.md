# Chatpot Release Web Page
Release page for Chatpot apps. supports CI-automated APK, windows, mac app deployment.

## How to run
before run the web application, you needs set configuration file `chatpot-release-page.env` to your home directory. 

for example, you can set your configuration file to `/Users/jaydee/chatpot-release-page.env`


then, you're ready to rock!
```bash
$ nvm use 10 # recommends node v10.x or above
$ npm run dev
```

or you can run application with environment variables. for example:
```bash
$ HTTP_PORT=8080 MYSQL_HOST=192.168.0.17 ... npm run start
```

## Configuration format
```bash

```