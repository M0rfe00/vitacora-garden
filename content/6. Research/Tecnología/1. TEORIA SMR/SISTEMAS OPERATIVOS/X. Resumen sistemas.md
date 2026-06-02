---
tags:
  - Informática
  - Teoria
---
## **Requisitos Windows Server**

- **Procesador:** 64 bits, 1.4 GHz

- **RAM:**
	- Sin experiencia de escritorio: 512MB
	- Con experiencia de escritorio: 2GB

- **Almacenamiento:** 32GB

## **Características de la arquitectura cliente-servidor**

- Coordina las funciones de todos los periféricos y recursos

- Conecta todos los recursos y equipos de la red

- Proporciona seguridad, pues controla el acceso a los datos y recursos - Optimiza la utilización de los recursos independientemente del hardware y del software utilizado

- Centraliza la gestión de recursos y equipos de la red

- Se puede adaptar a los cambios sin menospreciar recursos, por ejemplo si aumentan los usuarios el S.O escala hacia arriba añadiendo más recursos

## **¿Para qué sirve la documentación técnica?**

- Ya que una vez se instala el equipo, a lo largo del tiempo se realizan modificaciones, por eso es importante tener una documentación técnica del equipo que indique en qué estado se dejó el equipo después de la instalación y evitará que se formen errores por desconocimiento

## **Explica los modos de instalación de sistemas operativos**

- Mediante DVD

- **Mediante USB**
	- **Rufus:** Es una aplicación que permite convertir un pendrive en un USB de arranque utilizando muy pocos recursos Ubuntu

- **Una ISO**

- **Varias ISO**
	- **Yumi**: Trabajando desde Windows cliente se puede tener una memoria USB con varios S.O, Yumi es un software libre muy completo que te permite hacer eso
	
	- **MultiBootUSB**: Este sirve para crearlo mediante Ubuntu

- **Mediante Red**
	- **PXE**: Se dispone de servidor el resto de los demás equipos, el servidor contiene la ISO que se instalará y los clientes tendrán configurado el arranque por red como primera opción en la BIOS
	
	- **Windows Serva**

## **Sistema de archivos de Windows Server**

**Los más utilizados por Windows son:**

- FAT
	- FAT16: para particiones con una capacidad menor a 500MB
	- FAT32: para particiones con capacidad mayor a 500MB

- NTFS

## **¿Para qué sirven las herramientas administrativas**

- Contienen herramientas para los administraciones para configurar el server Define los siguientes conceptos:

- **Dominio de AD:** Es un contenedor lógico utilizado para administrar unidades

- organizativas, usuarios, grupos, equipos... Es importante tener disponible el servicio de DNS

- **Permiso**: Cuando un usuario crea un archivo o directorio, se convierte en su propietario, al archivo se le asignan permisos separados de lectura, escritura y ejecución.

- Solamente el propietario y administrador pueden cambiar esos permisos ⚫ Servicio de directorio: Es una aplicación o conjunto de aplicaciones que sirve para, en una red informática, almacenar, organizar y centralizar la información de los usuarios, equipos, grupos, dominios, recursos compartidos... con el fin de facilitar su administración