---
tags:
  - Informática
  - Teoria
---
# **Tema 5 Administración de usuarios y grupos en Linux**
___
## **Objetivos**
___
- Administrar usuarios y grupos.
- Manejar permisos y propiedad de archivos.
- Saber administrar las listas de control de acceso.
- Instalar y configurar el servicio de directorio OpenLDAP.
- Gestionar el servicio de directorio OpenLDAP.
- Dar de alta, modificar y eliminar objetos de la base de datos de OpenLDAP.
- Aprender a gestionar cuotas de discos.
- Configurar tareas programadas.

## **Glosario:**
___
**ACL:** Access Control List o lista de control de acceso. Lista de permisos adjuntos a un objeto que posibilitan realizar una gestión más avanzada de permisos de archivos y directorios, controlando el acceso a ellos.

**Crontab:** Fichero de texto que permite configurar tareas programadas a los usuarios del sistema.

**GID:** Group Identifier. Valor numérico que se utiliza para representar a un grupo específico.

**LDAP:** Lightweight Directory Access Protocol o protocolo simplificado de acceso a directorios. Protocolo a nivel de aplicación que permite realizar consultas sobre un servicio de directorio para poder buscar información.

**LDIF:** LDAP Data Interchange Format. Archivo de texto plano con un formato y sintaxis especial que se utiliza para configurar el servicio LDAP

**Multiusuario:** Característica del sistema operativo que permite que este sea utilizado por múltiples usuarios al mismo tiempo, compartiendo procesador, memoria, almacenamiento, aplicaciones y periféricos.

**NSCD:** Name Service Cache Daemon. Servicio que administra las búsquedas de
claves, grupos y hosts de los programas que están en ejecución, guardando en la
caché los resultados obtenidos para la siguiente petición.

**NSS:** Name Service Switch. Servicio que permite acceder a diferentes bases de datos de usuario y contraseñas (o grupos).

**PAM:** Pluggable Authentication Modules. Mecanismo de autenticación flexible que permite abstraer las aplicaciones y otro software del proceso de identificación.

**UID:** User Identifier. Identificador del usuario.


## **Resumen**
___
- La administración de las cuentas de usuarios y grupos de un sistema es una parte de vital importancia de su administración, siendo el principal motivo identificar al usuario que lo utiliza, así como permitir la utilización de los recursos disponibles.

- Según la finalidad que dicho usuario le dé al sistema, será creado y clasificado para tal fin, incluso controlando el tiempo que el usuario hará uso de este, mediante fijación de fechas de expiración de las cuentas.

- Es importante, para el administrador de la red, tener centralizada la autenticación de usuarios, tanto los del sistema como los de aplicaciones tales como servicios web, FTP o correo electrónico. Esta centralización simplifica mucho la administración tanto para el administrador como para los usuarios, debido a que, de esta manera, con un mismo usuario y contraseña, se puede acceder a todos los servicios que suministra la red. La herramienta que facilita tal gestión en sistemas Linux se denomina OpenLDAP.

- Entre otras tareas de vital importancia, se encuentran el control de los permisos y la gestión de cuotas de discos para establecer límites en la cantidad de espacio y el número de ficheros de los que puede disponer un usuario o grupo. Esto permite al sistema controlar que no haya usuarios que abusen del espacio de almacenamiento en disco.

- Tareas como realizar las copias de seguridad y la revisión de la red suelen llevarse a cabo durante las horas de menor impacto al usuario final, las cuales no suelen coincidir con el horario de trabajo habitual. Para facilitar la labor del administrador y poder realizar estas tareas repetitivas de manera automática en una fecha y hora concretas, el sistema operativo Linux proporciona, entre otras, herramientas como cron y at para configurar tareas programadas.
