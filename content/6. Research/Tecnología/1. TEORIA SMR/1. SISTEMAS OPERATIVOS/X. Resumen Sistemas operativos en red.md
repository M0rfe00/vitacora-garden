---
tags:
  - Informática
  - Teoria
---
# **Resumen Sistemas operativos en red 2º Evaluación**
___
## **Sistemas operativos**
___
El Sistema operativo es el software más importante de un ordenador ya que hace de intermediario entre el usuario y el hardware de la máquina

**Principales sistemas operativos**

- Windows
- Linux
- Android
- IOS
- MacOS
- Unix

## **Sistema operativo en red**
___
Con la evolución de los sistemas operativos se ha dado lugar a los S.O. en red, los cuales además de contar con las herramientas de un S.O. convencional permite compartir los recursos de los equipos en red

Los S.O. en red están íntimamente vinculados a la arquitectura cliente servidor, en la que el cliente solicita un servicio al servidor a través uno o mas puertos del mismo y el servidor recibe las peticiones de los clientes, las procesa elaborando una respuesta para finalmente responder
al cliente por uno o varios puertos

Algunos de estos servicios pueden ser, DHCP, DNS, FTP, HTTP, Correo, Impresión…

## **Características de la arquitectura cliente servidor**
___
- Coordina y centraliza todos los recursos de la red
- Interconecta todos los equipos y recursos de la red
- Proporciona seguridad, controlando el acceso a los datos y recursos de la red
- Escalable y adaptable a cambios, como por ejemplo ampliación de la memoria, almacenamiento, usuarios equipos etc…

## **Comprobación previa a instalar un S.O.**
___
Antes de instalar un S.O. hay que tener en cuenta a que uso vamos a destinarlo, recursos hardware que disponemos, requisitos mínimos del sistema que vamos a instalar, tipo de red

**Requisitos Ubuntu server**

- CPU: 1Ghz (64 bits)
- RAM: 1GB
- Almacenamiento: 10 GB
- Gráfica: 640x480

### **Modos de instalación de un sistema operativo**
___
Para realizar la instalación de un sistema operativo tenemos varias opciones, podemos utilizar un USB booteable o mediante la red

**USB:** Para crear un USB booteable utilizaremos una aplicación u otra en función del nº de ISOs que queramos poner dentro del mismo, en caso de utilizar una única ISO, utilizaremos Rufus o Ubuntu, en caso de utilizar varias ISOs dentro del USB podemos utilizar Yumi o Multiboot USB

**Red** Dependiendo del S.O. que utilicemos para gestionar la instalación mediante la red utilizaremos una aplicación u otra, en el caso de Windows podemos utilizar AOMEI PXE o Serva, y en el caso de Linux podemos utilizar PXE boot


## **Instalacion de Linux**
___
Los sistemas operativos Linux constan principalmente de 2 partes

**Núcleo:** Parte que interactúa con el hardware, administra todos los recursos hardware como memoria, procesador, almacenamiento, y los periféricos

**Shell:** Interfaz que interactúa con él con el núcleo, es el programa encargado de interpretar las órdenes del usuario y traducirlas a instrucciones que entienda el sistema

Algunas de las principales distribuciones basadas en el kernel de Linux son, Debian, Fedora, Red hat…

### **Sistema de archivos:** 
___
Componente del S.O. encargado de administrar el almacenamiento y ubicación de los datos del sistema

Linux es el S.O. que mas sistemas de archivos soporta de EXT1-EXT4

**Ext:** extended file system, Sistema de archivos

**Swap:** Partición con un sistema archivos utilizada en Linux para descargar la memoria RAM cuando esta se ve desbordada

## **Directorios principales**
___
**Raiz (/):** Directorio principal a partir del cual se ramifican todo el resto de
directorios del sistema

**Boot:** Directorio que contiene todos los archivos necesarios para el arranque,
excepto los de configuración

**Dev:** Directorio que representa los dispositivos hardware conectados en forma
de archivo (sda, cdrom, audio,…)

**etc:** Directorio que contiene los archivos de configuración del S.O. y
diversos programas

**Home:** Directorio destinado a alojar los archivos de los usuarios del sistema
del sistema excepto root

**Root:** Directorio equivalente al directorio home para el usuario root

**Proc:** Sistema de archivos virtual que proporciona información de los procesos
y aplicaciones que se ejecutan en el S.O

**lib:** directorio que almacena bibliotecas compartidas necesarias para los
binarios/ejecutables/programas almacenados en /bin y /Sbin

**Sbin:** Directorio similar a /bin a diferencia de que los ejecutables que
almacena solo pueden ser ejecutados por root

**Mnt:** Directorio con la finalidad de albergar los distintos puntos de montaje
de los dispositivos de almacenamiento

**Media:** Directorio similar /mnt, a diferencia de que almacena los puntos de
montaje de los dispositivos de almacenamiento extraíbles como USB, CDs …

**Opt:** Directorio similar a /programfiles en Windows, almacena los programas
que no vienen con el S.O. como Spotify, Chrome, Discord, FileZilla…

**Var:** Contiene archivos variables y temporales como logs del sistema, logs de
programas, archivos spool etc…

**Usr:** Contiene la gran mayoría de programas instalados en el S.O.


### **Arranque del sistema:**
___
**Bios:** Realiza la comprobación de los dispositivos disponibles, después carga en memoria el cargador de arranque y le pasa el control

**GRUB:** Muestra un menú que ofrece la posibilidad de elegir que partición primaria se quiere elegir para convertir en activa, cargando el Kernel en la memoria

**Kernel:** Transfiere el control del proceso de arranque al programa /sbin/init (padre de todos los procesos), ahora conocido como systemd

**Init/systemd:** Supervisa y gestiona las tareas y servicios de inicio cuando el sistema
arranca y deteniéndolos cuando este se apaga.

**Interfaz:** Por ultimo muestra la interfaz del sistema al usuario


### **Usuarios grupos y permisos**
___
**Comandos:**

- **su “user”**: cambiar a otro usuario
- **chown**: cambiar propietario de un archivo
- **chgrp**: cambiar grupo de un archivo
- **useradd**: crear nuevo usuario
- **passwd**: asignar contraseña a un usuario
- **groupadd**: crear nuevo grupo
- **usermod**: añadir un usuario a un grupo
- **chmod**: cambiar permisos de un archivo

### **Notación octal de permisos**
___
A la hora de observar los permisos de un archivo podemos observar tres segmentos en los que hay tres variables posibles, (r), (w), (x), cada segmento representa al propietario del archivo, grupo, otros respectivamente

Cada segmento puede ser representado por un número octal, para hacer la conversión simplemente debemos poner un 1 en caso de haber una variable y 0 en caso de no haberla,

Ejemplo:
- r-x, pondríamos: 101
- -wx, pondríamos: 011

Una vez hemos sustituido las variables de cada segmento por un número binario, sabemos que la r equivale a 4, la w a 2 y la x a 1 simplemente debemos hacer la conversión sumando las variables:
- 101: 4+1 = 5
- 011: 2+1 = 3

Para cambiar o asignar permisos a un archivo utilizamos el comando **chmod,** seguido de los permisos de cada segmento representado con un número octal y el archivo

**Ejemplo:**
- chmod 754 ejemplo.txt
- chmod 000 ejemplo2.txt
