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
3. This will generate a file in the directory package called `<application-name>.tgz`  

**Note:** That file is used to deploy your application using the dashboard. Check the next page for this.  

**Here is a video of how this looks to generate the installer:**. 

[![asciicast](https://asciinema.org/a/729829.svg)](https://asciinema.org/a/729829)

# Custom configurations

***Overriding the Dockefile and YAML***   
To override the Dockefile with your own set the variable:
```
export OVERWRITE_DOCKERFILE=yes
```   
To override the YAML with your own set the variable:
```
export OVERWRITE_YAML=yes
```   
Then run the command.