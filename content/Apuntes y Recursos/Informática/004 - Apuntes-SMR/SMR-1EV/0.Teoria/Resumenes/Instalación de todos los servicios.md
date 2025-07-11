---
tags:
  - Informática
  - Teoria
---
# **Instalación de todos los servicios**

- Instalar todos los servicios en un Windows Server y probar que funcionan correctamente.

- Dada la dirección de re 204.187.100.0 crear subredes para que en cada una de ellas entren 32 equipos. Debes de quedarte con la tercera subred.

- Haz una reserva para un cliente Linux. El nombre del dominio será fuencarral.net. Muestra la web del dominio.

- Crea tres usuarios para el servicio FTP, de nombre Lucía, Olga y Miguel. Cada uno de ellos podrá acceder a su carpeta personal. Miguel podrá tener acceso a las otras carpetas para poder leer.

- Da de alta el correo electrónico de cada uno de los usuarios y manda correos para probarlo en Windows y Linux.

### **Direccionamiento:**
**DHCP (Reserva)**
**DNS**
**WEB**
**Usuarios**
**FTP**
**Correo**


## **Direccionamiento:**

- **La dirección 204.187.100.0, es una clase C, tiene 3 octetos de red y 1 de host, por los que tenemos 254 host asignables (28-2 =254).**

- Nos piden 32 equipos, a estos e les añadimos el 10% adicional (36 equipos) para 36 equipos necesitamos 6 bits de host.**

- Reducimos los 8 bits de host que tenemos actualmente por los 6 que necesito.**

- Al modificar el octeto me quedo con la tercera subred.**

- Sabemos que el segundo bit equivale a 64, por lo que para conseguir la tercera subred sabemos que la primera es la acabada en cero y las siguientes irán de 64 en 64 siendo la segunda la 64 y la tercera la 128, sabiendo cual es la siguiente sabemos cuál es la dirección de broadcast de nuestra red.**

- **Una vez sabemos cuál es la tercera subred modificamos el octeto correspondiente.**

- **Además, debemos modificamos la mascara de red, siendo la predeterminada de la clase C:  /24, y al añadir dos bits de red pasa a ser /26.**


**La tercera subred es la:**

| Dirección de red:       | 204.187.100.128/26 |
| ----------------------- | ------------------ |
| Primer Host:            | 204.187.100.129/26 |
| Ultimo Host:            | 204.187.100.190/26 |
| Dirección de Broadcast: | 204.187.100.191/26 |

**Instalacion de todos los servicios** **(DHCP, DNS, ISS, FTP, Mercury y Thunderbird)**

Vamos a instalar los servicios DHCP, DNS, ISS y FTP simultáneamente y después los configuraremos por separado

Para ello vamos a la parte superior derecha, agregar roles y características
![[Pasted image 20250709010113.png]]

Seleccionamos: Instalacion basada en características o roles, seleccionamos nuestro servidor, Marcamos los Roles servidor DCHP, DNS y WEB
![[Pasted image 20250709010134.png]]

Para instalar el servicio FTP debemos y a los roles del servicio web y marcar la casilla de servicio FTP![[Pasted image 20250709010152.png]]

Confirmamos la instalación y finalizamos, después revisamos la pestaña de Notificaciones y completamos las configuraciones necesarias.![[Pasted image 20250709010220.png]]


### DHCP
Primero debemos asignarle un dirección IP a nuestro servidor, para ello vamos a servidor local Ethernet, Propiedades y asignamos un configuración de forma manual.![[Pasted image 20250709010247.png]]

Para configurar un ámbito vamos a la configuración DCHP, seleccionamos nuestro servidor hacemos clic derecho sobre IPv4 y seleccionamos Ámbito nuevo.![[Pasted image 20250709010302.png]]

En el ámbito deberemos asignarle:

Intervalo de direcciones IP:![[Pasted image 20250709010337.png]]

Exclusión: (IP del servidor, para que DHCP no la asigne y no haya conflicto)
![[Pasted image 20250709010359.png]]

Concesión:![[Pasted image 20250709010427.png]]

Resolución de nombres![[Pasted image 20250709010446.png]]

Activamos y finalizamos![[Pasted image 20250709010459.png]]

Reserva cliente Linux

Para hacer la reserva debemos conocer la dirección MAC de nuestro cliente, para ello vamos a la información de red del cliente y nos fijamos en la dirección física.![[Pasted image 20250709010512.png]]

Una vez conocemos la dirección MAC de nuestro cliente vamos al ámbito que creamos anteriormente, seleccionamos reservas y creamos una nueva reserva: asignamos un nombre e introducimos la dirección IP que queremos asignarle a la reserve y el protocolo compatible:![[Pasted image 20250709010525.png]]

Comprobamos en el cliente:![[Pasted image 20250709010536.png]]


### DNS

Para configurar la resolución de nombre debemos crear la zona directa introduciendo la dirección de red y la zona inversa con nuestros dominios y host

Zona directa![[Pasted image 20250709010600.png]]
![[Pasted image 20250709010606.png]]

Zona inversa

Creamos la zona net y el host Fuencarral![[Pasted image 20250709010621.png]]

### WEB

Para tener un servidor web deberemos introducir nuestro archivo de hipertexto en la carpeta wwwroot, y después ir al administrador IIS, agregar un sitio web.![[Pasted image 20250709010636.png]]

Ponemos el archivo como documento predeterminado y nos aseguramos que esta iniciado![[Pasted image 20250709010647.png]]
![[Pasted image 20250709010657.png]]

Comprobamos en el cliente que la resolución de nombres funciona![[Pasted image 20250709010713.png]]
![[Pasted image 20250709010719.png]]

Accedemos al sitio web desde el navegador introduciendo el dominio![[Pasted image 20250709010730.png]]

#### Creación usuarios:

Para crear usuarios vamos al panel de control -> Cambiar cuentas de usuario y agregamos usuarios.![[Pasted image 20250709010752.png]]

Después de crear las carpetas, para administrar los permisos de estas, hacemos clic derecho sobre ellas, propiedades y vamos al apartado seguridad, hay editamos los permisos de cada usuario sobre ellas.
![[Pasted image 20250709010807.png]]

Hacemos que Olga y Lucia solo puedan ver sus carpeta y Miguel todas
![[Pasted image 20250709010853.png]] 
![[Pasted image 20250709010903.png]]

Agregamos el sitio FTP, para ello agregamos el host en DNS![[Pasted image 20250709010916.png]]

Después añadimos el sitio FTP desde el administrador IIS![[Pasted image 20250709010936.png]]
![[Pasted image 20250709010944.png]]


### Correo electrónico:

Para dar servicio de correo electrónico debemos, crear un intercambiador en DNS, instalar Mercury en el servidor y crear usuarios para después iniciar sesión en Thunderbird desde los clientes y utilizar el servicio

Añadimos los dominios del host y el intercambiador![[Pasted image 20250709011001.png]]


Creamos los usuarios
![[Pasted image 20250709011012.png]]



Ahora solo queda iniciar sesión en Thunderbird y comprobar que funciona

![[Pasted image 20250709011038.png]]
![[Pasted image 20250709011048.png]]
![[Pasted image 20250709011118.png]]


Enviamos un mensaje desde la cuenta de Miguel y comprobamos que Olga lo recibe en el Buzón de su cuenta.
![[Pasted image 20250709011132.png]]

Buzón de Olga![[Pasted image 20250709011143.png]]
![[Pasted image 20250709011150.png]]

FIN.!