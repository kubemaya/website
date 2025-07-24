---
sidebar_position: 1
---

# Generate offline installer

## Creating the k3s installer (Developer Environment)
In your Developer Machine do the next:
1. Clone the repository
```
git clone https://github.com/sergioarmgpl/kubemaya.git
```

2. Change to the airgap directory
```
cd kubemaya
```
3. Prepare a fresh environment
```
export PATH=$PATH:$(pwd)/scripts
chmod +x scripts/kubemaya.sh
/bin/bash kubemaya.sh clean
```
Note: To override the architecture use the following command:
```
K3S_ARCH=amd64 /bin/bash kubemaya.sh clean
```   
4. Set the `container` file that you to include in your installer by setting the content in the images for example:   
```
busybox busybox:1.37.0 linux/arm64/v8
redis redis:8.0.0-alpine3.21 linux/arm64/v8
nginx nginx:1.17.5-alpine linux/arm64/v8
```   
**Note:** The format used in this file is ```tar_name image architecture```  

5. Start you docker service and be sure of having the docker cli   

6. Generate the tgz file which contains all the images to run offline and the installer   
```
/bin/bash kubemaya.sh gen-installer
```
**Note:** To override to a different architecture than arm64, use the variable `K3S_ARCH=<amd64,etc>`. Also, you have to start docker before run it.   
```
K3S_ARCH=amd64 /bin/bash kubemaya.sh gen-installer
```
7. Copy the k3s_airgapped_installer.tgz to a USB storage
