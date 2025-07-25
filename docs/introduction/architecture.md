---
sidebar_position: 2
---

# Architecture

KubeMaya use some basic technologies based on the book “Edge Computing Systems with Kubernetes” by Sergio Méndez, based on this book the first technologies that will use this framework are:

- Python
- K3s (Light weight Kubernetes)
- Micropython (For Microcontrollers)
- Raspberry devices (Pi & Pico)
- Linux (Raspbian % Debian based distros)
- NiceGUI
- Bash
- Gum Gum

## Components
In the following includes all the components used to run KubeMaya on an ARM devices.
![KubeMaya architecture](/img/architecture.png)

### Components description
The following components run on the edge and in air-gapped conditions. So there is not Internet connection available. Following is the description of the components used in KubeMaya:  
**MayaBox:** For KubeMaya a MayaBox is an ARM devices were KubeMaya runs, and is the device were all the applications run.  
**Debian Based OS:** A MayaBox runs on a Debian Based GNU/Linux distribution, currently we are supporting just Raspbian.  
**K3s:** Is the platform configured to run the applications using containers. K3s is a lightweight Kubernetes designed to run on low powered devices such as Raspberry Pi.  
**MayaUI:** Is the web user interface used to manage the device and deploy applications.
App or application: Is an application that run as a container in K3s.  
**Access Point:** This device can be configured with an access point that should be used to open the MayaUI and access the applications.  
**Developer:** Is a user that develop application and upload it using MayaUI, also, the developer can generate an offline installer to install KubeMaya.  
**User:** A user access the applications that are available using the MayaUI deployed as part of KubeMaya components.

## Edge Computing & IoT
The concepts of edge computing and IoT are used in KubeMaya as follows:
- A MayaBox has application to process data near to the source of data (Edge Computing) on a air-gapped environment
- The applications can receive data from IoT devices like micro controllers such as Arduinos, ESP32 and Raspberry Pico.
- KubeMaya provides a plataform to build an edge and IoT environment to capture and process information without depending on Internet connections just using smartphones, tables or similar devices to access the applications running on the edge inside a MayaBox.