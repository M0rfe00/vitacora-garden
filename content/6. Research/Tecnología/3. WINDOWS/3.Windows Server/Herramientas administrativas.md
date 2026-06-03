---
tags:
  - Informática
  - Wind-Server
---

# Herramientas administrativas en Windows Server
___
## Administración de equipos:
Es una herramienta central de administración del servidor, permite administrar recursos locales y de red en un servidor Windows, tales como dispositivos hardware, usuarios, grupos, discos y servicios del sistema

## Asistente para la configuración de seguridad:
Ayuda a crear directivas de seguridad aplicables a cualquier servidor, configura la seguridad de los servicios y de red basándose en el rol del servidor, también establece la configuración de auditorías y del registro, ejemplos: bloqueo de cuentas, directivas de contraseñas para la protección contra amenazas y accesos no autorizador.

## Administrador del servidor:
Interfaz centralizada para la configuración y supervisión de recursos y funciones del servidor, facilitando la gestión y monitoreo del sistema

## Configuración del sistema:
Permite la configuración de arranque, identificar problemas de inicio y realizar diagnósticos de inicio selectivo en el servidor Windows

## Copias de seguridad de Windows Server
Permite hacer copias de seguridad de archivos, aplicaciones o de todo un servidor o de todo un servidor

## Desfragmentar y optimizar unidades
Permite analizar y optimizar en caso de ser necesarios las unidades de almacenamiento conectadas al equipo para que funcionen de manera más eficaz

## DHCP
Permite la asignación de IPs de forma dinámica y automática a los equipos conectados al servidor si así lo configuran

## Diagnóstico de memoria de Windows
Realiza pruebas de diagnóstico para identificar posibles problemas de hardware relacionadas con la memoria, tales como errores de lectura/escritura

## Directiva de seguridad local
Permite configurar directivas de seguridad local específicas en el nivel local del servidor, definir restricciones de contraseñas , bloquear cuentas, habilitar/deshabilitar funciones de seguridad, y aplicar configuraciones de seguridad personalidad en el servidor windows

## Firewall de Windows con seguridad avanzada:
Proporciona seguridad de red a los equipos de la red, permite definir reglas de Entrada/Salida para permitir o bloquear conexiones de red, asegurando solo las conexiones autorizadas.

## Información del sistema:
Muestra información detallada del equipo tales como los componentes hardware e información del sistema operativo

## Iniciador iSCSI:
Permite al servidor Windows conectarse a dispositivos de almacenamiento remoto a través del protocolo iSCSI, permitiendo utilizar almacenamiento en red como si fuera local, ampliando así la capacidad de almacenamiento del servidor.

## Monitor de recursos
Muestra el uso y rendimiento de CPU, discos, red y memoria

## Monitor de rendimiento
Permite analizar, diagnosticar y recopilar problemas de rendimiento, de CPU, memoria, discos y red

## Orígenes de datos ODBC
Permiten configurar orígenes de datos ODBC (Open Database Connectivity). Los orígenes de datos ODBC facilitan la conexiona diversas fuentes de datos, como bases de datos, desde aplicaciones compatibles con ODBC

## Programador de tareas
Herramienta que permite programar y automatizar tareas para que se ejecuten según las especificaciones asignadas a dicha tarea, tales como reinicios, copias de seguridad, ejecución de aplicaciones, lo que facilita la administración del servidor

## Servicios de componentes
Herramienta utilizada para administrar y configurar aplicaciones y componentes COM+ en servidores Windows, Permite controlar la ejecución de componentes, definir configuraciones de seguridad y supervisar el rendimiento de las aplicaciones basadas en COM+. Esto es esencial para garantizar la estabilidad y eficiencia de las aplicaciones empresariales en el servidor.

## Servicios
Permite la administración de los servicios en ejecución en el servidor, pudiendo habilitar/deshabilitar, iniciar/detener o configurar los servicios del sistema y las aplicaciones instaladas.


Windows powershell
Interfaz de línea de comandos para automatizar tareas, crear scripts administrar el servidor mediante comandos



# LISTADO V2
___
Administración de equipos 
- Esta herramienta permite administrar recursos locales y de red en un servidor Windows, incluyendo dispositivos de hardware, usuarios, grupos, discos y servicios del sistema. Es una herramienta central para la administración del servidor. 
	- Herramientas del sistema 
	- Almacenamiento 
	- Servicios y aplicaciones 

Administrador del servidor (Server Manager): 
- Proporciona una interfaz centralizada para la configuración y supervisión de recursos y funciones del servidor, simplificando la gestión y el monitoreo del sistema. 

● Asistente para la configuración de seguridad 
- Ayuda a configurar políticas de seguridad, como las directivas de contraseña y bloqueo de cuentas, para proteger el servidor contra amenazas y accesos no autorizados. 

Configuración del sistema 
- Se utiliza para administrar la configuración de arranque, identificar problemas de inicio y realizar diagnósticos de inicio selectivo en el servidor Windows. 

Copias de seguridad de Windows Server 
- Esta herramienta se utiliza para realizar copias de seguridad y restaurar datos en un servidor Windows. 

Desfragmentar y optimizar unidades 
- La desfragmentación y optimización de unidades ayudan a reducir la fragmentación de archivos, lo que acelera el acceso a los datos y mejora la eficiencia del disco duro. 

Diagnóstico de memoria de Windows 
- Realiza pruebas de diagnóstico para identificar posibles problemas de hardware relacionados con la memoria, como errores de lectura/escritura. 

Directiva de seguridad local 
- Esta herramienta permite configurar políticas de seguridad específicas en el nivel local del servidor. Puedes definir restricciones de contraseñas, bloquear cuentas, habilitar 
o deshabilitar funciones de seguridad, y aplicar configuraciones de seguridad personalizadas en el servidor Windows. 

Firewall de Windows con seguridad avanzada 
- Con esta herramienta puedes definir reglas de entrada y salida para permitir o bloquear conexiones de red, asegurando que solo las comunicaciones autorizadas pasen a través del servidor. 

Información del sistema 
- Muestra información del sistema 

Iniciador iSCSI 
- Esta herramienta permite a un servidor Windows conectarse a dispositivos de almacenamiento remoto a través del protocolo iSCSI, lo que permite utilizar almacenamiento en red como si fuera local. Es útil para ampliar la capacidad de almacenamiento del servidor. 

Monitor de recursos 
- Muestra los procesos activos además de uso de CPU, Memoria, Discos y Red 

Monitor de rendimiento 
- Esta herramienta permite supervisar el rendimiento del servidor, mostrando información sobre el uso de recursos como CPU, memoria, disco y red. Es útil para identificar cuellos de botella y problemas de rendimiento en el servidor. 

Orígenes de datos ODBC (32bits) y (64bits) 
- Estas herramientas permiten configurar orígenes de datos ODBC (Open Database Connectivity) en servidores Windows. Los orígenes de datos ODBC facilitan la conexión a diversas fuentes de datos, como bases de datos, desde aplicaciones compatibles con ODBC. La versión de 32 bits se usa para aplicaciones de 32 bits, mientras que la versión de 64 bits es para aplicaciones de 64 bits, asegurando la compatibilidad con los diferentes tipos de software. 

Programador de tareas 
- Esta herramienta permite programar y automatizar tareas en un servidor Windows en momentos específicos o en respuesta a eventos desencadenantes. Puedes programar la ejecución de scripts, programas o comandos, lo que facilita la administración y mantenimiento del servidor al realizar tareas repetitivas de manera programada. 

Servicios de componentes 
- Esta herramienta se utiliza para administrar y configurar componentes y aplicaciones COM+ en un servidor Windows. Permite controlar la ejecución de componentes, definir configuraciones de seguridad y supervisar el rendimiento de las aplicaciones basadas en COM+. Esto es esencial para garantizar la estabilidad y eficiencia de las aplicaciones empresariales en el servidor. 

Servicios 
- Esta herramienta permite administrar los servicios que se ejecutan en un servidor Windows. Puedes habilitar, deshabilitar, iniciar, detener o configurar los servicios del sistema y las aplicaciones instaladas. ● Visor de eventos 
- Esta herramienta muestra registros de eventos del sistema, seguridad y aplicaciones, lo que ayuda a diagnosticar problemas y supervisar la salud del servidor. 

● Windows PowerShell (x86) 
- Es la versión de 32 bits de Windows PowerShell, una interfaz de línea de comandos para automatizar tareas y administrar el servidor mediante scripts. 

Windows PowerShell ISE(x86) 
- Es la versión de 32 bits del Entorno de Scripting Integrado (ISE) de Windows PowerShell, que proporciona un entorno de desarrollo más completo para crear y probar scripts. 

Windows PowerShell ISE 
- Es la versión de 64 bits del Entorno de Scripting Integrado (ISE) de Windows PowerShell, que proporciona un entorno de desarrollo más completo para crear y probar scripts.