---
tags:
  - Informática
  - Teoria
---
# **Servicios en red**
**Servicio:** proporciona algún tipo de funcionalidad
**En red:** gestionado a través de un conjunto de equipos conectados
entre sí

## **Ejemplos** **de servicios en red**

- Obtener una configuración de red al iniciar los ordenadores de una LAN
  (DHCP)

- Acceder a una carpeta remota (FTP)

- Traducir un nombre de un equipo a su dirección IP(DNS)

# **Modelo cliente servidor**

**S.O. Servidores:** equipo que proporciona un servicio a los clientes. Proveedor de
servicios

**S.O. Clientes:** equipo que solicita el uso del servicio al servidor. Consumidor de
servicios


### **Mecanismo interno**
1. **El cliente solicita el servicio al servidor**
2. **La petición del cliente viaja por la red y llega al servidor**
3. ** El servidor resuelve la petición, elabora una respuesta y la envía de vuelta al cliente**
4. **La respuesta viaja por la red y llega al cliente**
5. **El cliente procesa y analiza la respuesta**



<img src="/media-content/Apuntes/media-informatica/Cliente servidor/Cliente-Servidor 1.jpeg"
style="width:3.05208in;height:2.23323in" />

### **Ejemplos**

#### **DHCP**
**Cliente:** pide una configuración de red
**Servidor:** proporciona una configuración de red

#### **FTP**
**Cliente:** pide acceder al contenido de una carpeta remota
**Servidor:** comparte archivos y carpetas

#### **DNS**
**Cliente:** pide obtener la IP de un equipo, dado su nombre
**Servidor:** resuelve nombres

#### **WWW**
**Cliente:** solicita ver una página web
**Servidor:** tiene almacenadas las páginas web


## **Ventajas modelo C/S**
- **Distribución del procesamiento entre clientes y**
- **servidores: un equipo no realiza todas las tareas**
- **Gestión centralizada del servidor. Mantenimiento sencillo**
- **El cliente puede centrarse en tareas de presentación y el servidor en
- tareas de procesamiento**


## **Inconvenientes modelo C/S**
- **Debido a la centralización por parte del servidor, si éste no está
- disponible, ningún cliente verá respondidas sus peticiones → Solución: servidores secundarios**
- **Errores en el servidor afectan a todos los clientes**
- **El servidor puede verse sobrecargado si hay un número elevado de
- clientes simultáneos accediendo a él**


## **Otros modelos: Peer To Peer (P2P)**
- **En este modelo, todos los equipos funcionan a la vez como cliente y como servidor**
- **Ejemplos: Emule, BitTorrent, Ares...**
- **Cada equipo funciona como servidor (ofrece ciertos archivos a la red) y a la vez como cliente (se descarga archivos de otros equipos)**
- **Aunque caiga un servidor, la red sigue funcionando (el cliente accede a otro servidor para descargarse el mismo fichero) → Mayor robustez**
- **No requiere grandes recursos en los equipos**

<img src="/media-content/Apuntes/media-informatica/Cliente servidor/Cliente-Servidor 2.png" style="width:4.66667in;height:2.1506in" />
