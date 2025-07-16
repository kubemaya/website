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
/bin/bash scripts/kubemaya.sh create-app demo-application
```   
2. Build and package the app with the following command:
```
/bin/bash scripts/kubemaya.sh package sergioarmgpl demo-application v1 amd64
```
