---
tags:
  - Informática
  - Teoria
---
# **Tema 2 Modos de instalación de sistemas operativos**
___
## **Objetivos**
___
- Identificar, crear, eliminar y formatear particiones.
- Configurar software de aplicación.
- Instalar un sistema operativo.
- Establecer un sistema por red PXE en diferentes sistemas operativos.

## **Mapa conceptual: “”**


## **Glosario:**
___
**CLI:** Command Line Interface o interfaz de línea de comandos. Método que permite a los usuarios dar instrucciones a algún programa informático por medio de línea de texto simple

**DHCP:** Dynamic Host Configuration Protocol o protocolo de configuración dinámica de host. Protocolo a través del cual se puede configurar automáticamente los parámetros de red de un equipo informático (IP, Mascara, Puerta de enlace y DNS, entre otros.)

**GParted:** GNOME Partition Editor. Editor de particiones para el entorno de escritorio GNOME

**INETD:** Servicio que también se conoce como supervisor de internet , debido a que gestiona las conexiones de otros servicios. Cuando recibe una petición de conexión, decide que proceso va a responder a esa petición

**ISO:** Archivo informático donde se almacena una copia o imagen exacta de un sistema de archivos

**PXE:** Preboot eXecution Enviortment o entorno de ejecución de prearranque,. Entorno para instalar un sistema operativo desde la red. NO es necesario usar DVD o pen booteable para hacerlo.

**TFTP:** Trivial File Transfer Protocol. Protocolo de transferencia de ficheros parecido a FTP, pero más simple. En entornos PXE, se usa para poner la imagen del SO a disposición del cliente.

**USB:** Universal Seria Bus. Dispositivo de almacenamiento que utiliza una memoria flash para guardar información. Popularmente se conoce como pen drive o lápiz de memoria, pero no hay que olvidar que el termino hace referencia al puerto de conexión.

**YUMI:** Your Universal MultiBoot Installer. Herramienta de Windows para crear pen multibooteable

## **Resumen:**
___
- En la actualidad, los dos sistemas de instalación más comunes son mediante memoria USB o red.

- Las memorias USB reemplazan a los conocidos como DVD o CD, ya que presentan numerosas ventajas frente a estos, tales como mayor espacio de almacenamiento, mejor precio y reutilización del dispositivo, ya que permiten numerosas escrituras.

- Al mismo tiempo, cabe destacar que existen múltiples herramientas para crear memorias USB, ya sea en sistema operativo Windows o Ubuntu. A lo largo del capítulo se han manejado diferentes herramientas, todas software libre, distinguiendo si para una única ISO (Rufus) o varias (YUMI), una vez creada la memoria USB booteable, solo será necesario configurar en la BIOS como primera opción de arranque este dispositivo.

- La tendencia actual, dentro de una red, es poder instalar el sistema operativo a través de dicha red. Brinda una manera muy rápida y cómoda de realizar la instalación de un sistema operativo, dado que no se necesita que el cliente cuente con un reproductor de CD/DVD ni siquiera con un puerto USB disponible para que funcione correctamente.

- Para ello se necesita un equipo configurado previamente como servidor PXE, en el que es necesario tener activos, al menos, los servicios DHCP y TFTP. Si el servidor en Windows, se puede instalar una aplicación destinada a tal fin, como Serva (Shareware) ya que los servicios necesarios. Si el servidor es Linux, además será necesario tener los servicios Apache e INETD. Por otro lado, el equipo cliente debe estar configurado para que arranque desde la red como primera opción