---
sidebar_position: 4
---

# Restart Application
To restart an application follow the next steps:
1. Go to the Rocket Icon called K8s
2. Click on the yellow button in the row asociated to your application
3. The application will restart showing a different status than Running like UnStable or similar.  
![](/img/km-install/s7.png). 

**Note:** The dashboard shows a table showing the namespace where the application is deployed, the name of the application and the status. In Kubernetes the namespace are used to group objects in this case our applications. The status refers if the application is running as expected. It can take some minutes until get a Running status, because it has to set the image to use in the deploy, and it can takes some minutes to sync to finally get the application up and in running state. The kube-system namespace refers to the default namespaces for applications need to run Kubernetes, you can ignore them. Also each application will be deployed by default using a namespace with the same name of the application, but this behavior can be overwritten by defining your own YAML files. Check the next section for this.

For more information check:
- https://kubernetes.io/docs/concepts/workloads/controllers/deployment/
- https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/