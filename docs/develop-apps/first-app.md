---
sidebar_position: 1
---

# Your first application

## Create application to deploy
***Option 1***
1. Clone the demo-application folder
2. Rename the folder   

***Option 2***
1. Create an application by running:
```
/bin/bash scripts/kubemaya.sh create-app <application-name>
```   
2. Build and package the app with the following command:
```
/bin/bash scripts/kubemaya.sh package <username|namespace> <application-name> <version> <amd64|arm64>
```
**Here is a video of how this looks to generate the installer:**. 

[![asciicast](https://asciinema.org/a/729829.svg)](https://asciinema.org/a/729829)