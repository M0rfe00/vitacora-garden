---
tags:
  - Informática
  - Teoria
---
# **Tema 4 Instalacion de Windows Server**

## **Objetivos:**

- Configurar máquinas virtuales.

- Instalar sistemas operativos Windows server.

- Aprender a manejar el entorno Powershell en Windows.

- Administrar sistemas Windows Server

- Crear particiones en el disco.

- Establecer fecha y zona horaria

- Actualizar el sistema.

- Monitorizar sistemas Windows Server.

## **Glosario:**

**Característica:** Función para el propio servidor

**Consola:** Archivo que permite personalizar el entorno de trabajo incluyendo aquellas herramientas mas comunes en el trabajo diario del equipo

**ISE:** Entorno de scripting integrado en Windows PowerShell

**Logs:** Archivos que contienen registros que se producen en un equipo con SO Windows instalado.

**MMC:** Microsoft Management Console. Herramientas que se emplean para la personalización de Windows.

**MS-DOS:** Microsoft Disk Operating System. Principal sistema operativo de disco de Microsoft de las décadas de los ochenta y noventa

**PowerShell:** Interfaz de consola de diseñada para su uso por parte de administradores de sistemas, con el propósito de automatizar tareas o realizarlas de forma más controlada.

**ROL:** Capacidad que se agrega al servidor para que los clientes de la red dispongan de un servicio que puedan aprovechar

**VDI:** VirtualBox Disk Image. Propio contenedor abierto de VirtualBox utilizado por defecto al crear una máquina virtual con VirtualBox.

**Visor de eventos:** Herramienta que existe en todas las versiones de los SO de Windows y que permite llevar un control de todo lo que sucede en el sistema. Errores de hardware, software, instalación de programas etcétera.

## **Resumen:**

- En 1985, Windows nació como una interfaz gráfica para sistema operativo MS-DOS. Esto supone un punto de partida hacia la evolución de del sistema operativo más utilizado actualmente

- Las versiones de Windows Server han ido en paralelo con el desarrollo de las versiones Windows Clientes. Windows server, en particular ha sido desarrollado junto a Windows 10.

- La instalación de esta versión es tan sencilla e intuitiva como la de cualquier otra de Microsoft. Durante el proceso de instalación, es posible seleccionar entre server Core o con experiencia de escritorio gráfico. En ambas viene incluido PowerShell, herramienta modo texto para administrar, configurar y monitorizar el servidor.

- Posteriormente a esta instalación, será necesario que el administrador realice su puesta en marcha, configuración e instalación de las herramientas necesarias. El administrador del servidor es la herramienta principal de configuración desde la que se pueden, entre otras funcionalidades, agregar roles y características, configurar la red, el Firewall, las actualizaciones del sistema, administración de dispositivos, gestión de servicios, etcétera.

- Windows server, al igual que otras versiones de Windows, dispone de bastantes herramientas para monitorizar y controlar lo que está ocurriendo en el servidor.

- Algunas de esas herramientas son el visor de eventos, donde queda registrado todo lo que ocurre en el sistema y que puede ayudar a solucionar y prevenir errores; el monitor de recursos; el monitor de rendimiento, y el administrador de tareas, donde se puede observar en tiempo real como se está comportando el hardware y los procesos que se están ejecutando en el equipo, así como identificar y localizar que proceso está generando un problema de rendimiento y así poder actuar y solucionarlo

- También es posible automatizar tareas a través de la herramienta Tareas programadas, que es útil para tareas repetitivas que se debe llevar a cabo en un servidor, por ejemplo copias de seguridad y también para controlar periódicamente determinados aspectos que puedan afectar al rendimiento.