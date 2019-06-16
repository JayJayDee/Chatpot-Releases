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

## Example configuration
save following contents to `$HOME/chatpot-release-page.env`
```bash
MYSQL_HOST=127.0.0.1
MYSQL_PORT=3306
MYSQL_USER=root
MYSQL_PASSWORD=password
MYSQL_DATABASE=chatpot_dev_release
MYSQL_CONNECTION_LIMIT=10
HTTP_PORT=3000
```