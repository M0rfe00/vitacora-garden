 
# **Tema 2 Servicios de configuración dinámica de sistemas** 
 

## **Objetivos:**

- Conocer el protocolo encargado de realizar la configuración automática de los parámetros de conexión de las interfaces de red de los equipos, así como sus alternativas principales.

- Distinguir entre los diferentes modos de trabajo del protocolo de configuración automática.

- Diferenciar los mecanismos que permiten configurar los parámetros de red de los equipos.

- Reconocer los diferentes tipos de mensaje intercambiados entre clientes y servidores en el proceso de asignación, renovación y liberación.

- Aprender a instalar y configurar servicios de configuración dinámica en sistemas operativos libres y propietarios.

## **Glosario:**

**BIOS:** Acrónimo de Basic Input Output System (“sistema básico de entrada salida”), es el firmware almacenado en la placa base del equipo que se ejecuta cuando se inicia el equipo para detectar todos los dispositivos conectados, comprobar su funcionamiento e iniciar el gestor de arranque
desde uno de ellos.

**IANA:** En sus orígenes era una organización encargada de la asignación global de direcciones IP, asignación de puertos, gestión de los servidores raíz de nombres de dominio DNS, mantenimiento de Internet... Su nombre es el acrónimo de Internet Assigned Numbers Authority. Actualmente es un departamento dirigido por la ICANN.

**ICANN:** Institución encargada de dirigir a la IANA. Su nombre es el acrónimo de Internet Corporation for Assigned Names and Numbers.

**Log:** Fichero, o base de datos, que almacena registros secuencialmente con información sobre los eventos o acciones que afectan a un determinado sistema o aplicación.

**MMC:** Acrónimo de Microsoft Management Console ("consola de administración de Microsoft"), que se emplea para identificar cada una de las herramientas administrativas que permiten gestionar algún complemento.

**PID:** Acrónimo de Process Identifier ("identificador de proceso").

**Powershell:** Interfaz consola para manejo de sistemas operativos Microsoft Windows, que permite la escritura y ejecución de scripts y que acepta y devuelve objetos .NET Framework.

**Raspberry Pi:** Minicomputador de bajo coste desarrollado por Raspberry Pi Foundation con el objetivo de que se emplee en el ámbito educativo y favorecer el aprendizaje informático.

**Renderer**: Elemento encargado de procesar la información especificada en los ficheros de configuración de red y traducir su contenido al gestor de red correspondiente.

**Rsyslog:** Sistema de procesamiento de registros del sistema.

**UEFI:** Acrónimo de Unified Extensible Firmware Interface. Evolución del BIOS que corrige algunas deficiencias de este, añade soporte para su manejo con ratón e interfaz gráfica, reduce el tiempo de arranque...

**Wildcard:** Carácter comodín que representa cualquier otro carácter o cadena de caracteres. Ejemplos de Wildcard en Windows son \* (cero o más caracteres), ? (un único carácter), \[\] (encierra un listado de caracteres de los que podrá coincidir con uno de ellos), - (un rango de caracteres dentro de un listado definido por \[\]), \# (cero o más ocurrencias del carácter o listado precedente), + (una o más ocurrencias del carácter o listado precedente) o \\ (anula el significado especial del carácter al que precede para se interprete como un simple literal).

## **Resumen**

- Los equipos que se conectan a una red pueden hacerlo despreocupándose de configurar los parámetros de sus interfaces de red gracias al servicio DHCP.

- Gracias a un agente DHCP Relay, un servidor DHCP puede ofrecer servicio a equipos que se encuentren en otras redes.

- Un servidor DHCP puede ser autorizado o no autorizado.

- Este protocolo puede encontrarse tanto en redes LAN como en redes WAN.

- En conexiones IPv4, un cliente que hace uso del servicio utilizará el puerto 68 UDP, mientras que el servidor permanecerá a la escucha por el puerto 67 UDP.

- Si la conexión es IPv6, los clientes emplearán el puerto 546 UDP y los servidores el 547 UDP.

- servidor DHCP posee un listado con las direcciones IP que se han asignado a los clientes.

- El Un servidor DHCP puede, o bien asignar una dirección IP concreta a una máquina determinada (identificándola por su dirección MAC), o bien asignar una dirección IP a una máquina cliente con o sin límite de tiempo de uso.

- Los mensajes intercambiados entre cliente y servidor que operan sobre conexiones IPv4 son DHCPDISCOVER, DHCPOFFER, DHCPREQUEST, DHCPACK, DHCPNACK, DHCPDECLINE, DHCPRELEASE y DHCPINFORM.

- En ausencia de un servidor DHCP, existen mecanismos alternativos que permiten realizar una configuración mínima como para poder realizar conexiones con equipos de la misma red. Entre esas alternativas, se encuentran la configuración manual, APIPA/ avahi-autoipd (IPv4) y SLAAC (IPv6).

- El protocolo BOOTP es el precursor de DHCP
