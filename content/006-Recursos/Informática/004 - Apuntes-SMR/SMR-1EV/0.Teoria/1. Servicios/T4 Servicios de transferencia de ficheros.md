---
tags:
  - Informática
  - Teoria
  - FTP
---
# **Tema 4 Servicios de transferencia de ficheros**

## **Objetivos**

- Conocer los protocolos empleados en la transferencia de ficheros a través de la red.

- Manejar los diferentes tipos de cliente del protocolo FTP para realizar tareas básicas.

- Diferenciar los modos de conexión de los servidores de transferencia de ficheros FTP.

- Identificar los agentes que intervienen en la comunicación entre un cliente y un servidor FTP.

- Reconocer los diferentes tipos de petición y respuesta intercambiados entre clientes y servidores FTP, así como los códigos en ellos incluidos.

- Saber cuáles son los modos de transferencia, así como los tipos de información más adecuados en cada caso.

- Aprender a instalar y configurar servicios FTP sobre sistemas operativos libres y propietarios en determinados escenarios.

## **Glosario**

**ACL:** Acrónimo de Access Control List ("lista de control de acceso"). Es un mecanismo que permite extender los permisos que ofrece un sistema operativo.

**DoS:** Acrónimo de Denial of Service ("denegación de servicio"). Ataque informático cuyo fin es el bloqueo de un servidor mediante la saturación del mismo o mediante explotación de alguna vulnerabilidad que consiga el mismo resultado.

**EBCDIC:** Acrónimo de Extended Binary Coded Decimal Interchange Code ("código de intercambio decimal codificado en binario extendido"). Código binario empleado para representar caracteres alfanuméricos, controles y signos de puntuación.

**GID**: Abreviatura de Group Identifier ("identificador de grupo"). Cadena numérica o alfa- numérica que permite identificar al grupo de un sistema entre los demás.

**GPL:** Acrónimo de General Public License ("Licencia Pública General de GNU"). Licencia muy utilizada en software libre de código abierto que garantiza la libertad de uso, estudio, copia y modificación del software.

**LDAP:** Acrónimo de Lightweight Directory Access Protocol ("protocolo ligero de acceso a directorios"). Es un conjunto de protocolos abiertos usados para acceder a información a través de la red.

**Mirrors:** Réplicas de un servidor ubicadas en diferentes ubicaciones físicas.

**PROM:** Acrónimo de Programmable Read Only Memory ("memoria programable de solo lectura"). Tipo de memoria empleado en dispositivos electrónicos digitales para alma- cenar programas de bajo nivel que no deben borrarse.

**SSL:** Acrónimo de Secure Sockets Layer ("capa de sockets seguros"). Es una tecnología que mantiene seguras las conexiones a través de Internet mediante algoritmos de cifrado que codifican los datos.

**TLS:** Acrónimo de Transport Layer Security ("seguridad en la capa de transporte"). Versión actualizada y más segura de SSL.

**UID:** Abreviatura de User Identifier ("identificador de usuario"). Cadena numérica o alfa- numérica que permite identificar al usuario de un sistema entre los demás.

**Virgulilla:** Signo ortográfico con forma de coma, rasguillo o trazo, que en sistemas operativos UNIX/Linux se corresponde con el directorio home del cliente autenticado.

## **Resumen:**

- FTP es un protocolo que se diseñó para transferir ficheros con la mayor velocidad, pero que no tiene en cuenta la seguridad, pues todo el tráfico viaja en claro.

- Los clientes FTP deben enviar su login y password, aunque se permiten accesos anónimos. Estos disponen de un amplio repertorio de comandos.

- La comunicación puede llevarse a cabo en modo activo o pasivo.

- El servidor mantiene un canal de control para el intercambio de comandos y sus res- puestas (formadas por un código de estado y un mensaje informativo). A través de este canal se intercambia la información necesaria para establecer las conexiones de datos e iniciar las transferencias.

- Cada cuenta de usuario, incluso si se trata del usuario anónimo, accederá a un directorio remoto del servidor con unos permisos determinados. Estos permisos serán proporcionados por las directivas de acceso del servicio, así como por los permisos propios del sistema de archivos.

- Dependiendo del tipo de contenido para transferir, puede ser conveniente modificar el tipo de transferencia.

- TFTP es un protocolo simple de transferencia de ficheros que se utiliza conjuntamente con BOOTP para permitir el arranque de máquinas a través de la red.

- FTPS o SFTP son alternativas que ofrecen seguridad.