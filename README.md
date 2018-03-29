This is going to be a music-player app, hosted on Raspberry Pi. The play/pause opertaions are going to be executed via a REST-endpoint form the Quorra telegram bot.

### Installation process
To mbe able to build lame locally oin Windows OS you'll need to have Python 2.7 (not sure about 3.x.x) installed on your machine. You can download it from (https://www.python.org/downloads/).
Don't forget to set "add Python.exe to Path" checkmark. You need to run MSI as adminisatrtor.
After installation add Python variable to NPM config file:
```
npm config set python "c:\Program Files (x86)\Python27\python.exe"
```