---
sidebar_position: 3
---

# Install & Uninstall KubeMaya

## Install KubeMaya
In your edge device run the following steps:
1. Set your WLAN location before start (sudo raspi-config Localisation Options > WLAN Country)
2. Set a temporary WIFI Connection with nmtui
```
sudo mount /dev/sda1 /mnt
```
3. Copy the file to the edge device (Mount a USB Device)
```
cp /mnt/k3s_airgapped_installer.tgz .
```
4. Or copy the .tgz using scp using ssh
```
/bin/bash kubemaya.sh scp_device <IP_ADDRESS> <USER>
```
5. Untar the file in /opt/k3s:
```
sudo mkdir -p /opt/k3s
sudo tar -xzvf k3s_airgapped_installer.tgz -C /opt/k3s
```
6. Install missing dependencies (Tested in Rasbian minimal)
```
sudo /bin/bash /opt/k3s/scripts/kubemaya.sh install-dep
```
7. Set the flags to use containers in your device by running(Raspberry only):
```
/bin/bash /opt/k3s/scripts/kubemaya.sh set-flags
```
**Note:** This restarts your device, also for Debian you have to set the following flag systemd.unified_cgroup_hierarchy=1 in the variable GRUB_CMDLINE_LINUX_DEFAULT inside the file /etc/default/grub and restart your device.  After that run `sudo update-grup` and then restart with `sudo reboot`. For Debian is need it to install SSH and sudo with all the necessary permissions for the user that you are going to use to install KubeMaya. Also check if your device already has the CGROUPS activated by running the following command: `stat -fc %T /sys/fs/cgroup/`.
8. Disable your current wifi-connection if set (nmtui in Raspbian)  
9. Change to the installer path
```
cd /opt/k3s
```
10. Install K3s running:
```
sudo /bin/bash scripts/kubemaya.sh k3s-install
```   
**Note:** To override to a different architecture than arm64, use the variable `K3S_ARCH=<amd64,etc>`.
```
sudo K3S_ARCH=SOME_VALUE /bin/bash scripts/kubemaya.sh k3s-install
```   

## Uninstall KubeMaya
To clean a previous installation run the following commands
1. To uninstall K3s run:
```
k3s-uninstall.sh
```   
2. Delete the /opt/k3s directory:
```
rm -R /opt/k3s
```   

**Here is a video of how this looks to install KubeMaya:**
[![asciicast](https://asciinema.org/a/729675.svg)](https://asciinema.org/a/729675)

## Extra links
For setup swap memory: https://www.digitalocean.com/community/tutorials/how-to-add-swap-space-on-ubuntu-20-04