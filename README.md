This is going to be a music-player app, hosted on Raspberry Pi. The play/pause opertaions are going to be executed via a REST-endpoint form the Quorra telegram bot.

### Installation process
To be able to build lame locally in Windows OS you'll need to have Python 2.7 (not sure about 3.x.x) installed on your machine. You can download it from (https://www.python.org/downloads/).
Don't forget to set "add Python.exe to Path" checkmark. You need to run MSI as adminisatrtor.
After installation add Python variable to NPM config file:
```
npm config set python "c:\Program Files (x86)\Python27\python.exe"
```

### How to use existing Google Music Account
If you have exiting google account and want to use it in this project you need to generate application specific password on (https://security.google.com/settings/security/apppasswords) and then use it as a password for playmusic packet. It will allow backend to login to Google music and generate masterToken.

### Important commands for the app to work on Linux (Ubuntu)
```console
sudo npm install --unsafe-perm=true --allow-root
```
```console
sudo apt-get install libasound2-dev
```