---
sidebar_position: 3
---

# Access your application
KubeMaya includes the tab **APPS** to show all the applications that you installed using the **UPLOAD** feature. To access an specific application follow the next steps:
1. To access your application go to the **APPS** tab
2. Click on the button with the name of your application, for example **DEMO1**

![](/img/access-app/s1.png)  
3. The application will show like this  

![](/img/access-app/s2.png)  

**Note:** This demo application is based on the default templates created by using the kubemaya.sh

## How KubeMaya deploys your application
KubeMaya run some steps in order to deploy your application:
1. Uploads the tgz file in the device
2. Copy the tar files containing your container images into a folder where K3s can load them to be used in deployments
3. Create a namespace with the same name of your application to deploy it
4. Create a service to expose your application through the access point by using Traefik

**Note:** For more details check the architecture document and the deploy.sh script file in the mayaui source code.