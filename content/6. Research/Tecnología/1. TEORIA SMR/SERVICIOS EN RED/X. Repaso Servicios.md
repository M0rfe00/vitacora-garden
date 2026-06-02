---
tags:
  - Informática
  - Teoria
---
Después de terminar la instalación del servidor procedo a instalar todos los servicios (menos Correo y LDAP, correo lo instalare después de configurar los servicios anteriores)

## **Instalación de los servicios**

DHCP
<img src="/media-content/Apuntes/media-informatica/Media Teoria SMR/Repaso Servicios/Repaso Servicios 2.png"
style="width:4.17616in;height:0.49138in" />

DNS
<img src="/media-content/Apuntes/media-informatica/Media Teoria SMR/Repaso Servicios/Repaso Servicios 7.png"
style="width:4.11275in;height:0.48232in" />

WEB
<img src="/media-content/Apuntes/media-informatica/Media Teoria SMR/Repaso Servicios/Repaso Servicios 10.png"
style="width:3.8591in;height:0.52745in" />

FTP
<img src="/media-content/Apuntes/media-informatica/Media Teoria SMR/Repaso Servicios/Repaso Servicios 11.png"
style="width:3.98593in;height:0.55468in" />

Después de instalar los servicios pongo la maquina en red interna, modifico la configuración del archivo que esta en netplan y empiezo a configurar los servicios uno a uno

## **Configuración de red**
<img src="/media-content/Apuntes/media-informatica/Media Teoria SMR/Repaso Servicios/Repaso Servicios 5.png" style="width:4.6084in;height:1.27399in" />

<img src="/media-content/Apuntes/media-informatica/Media Teoria SMR/Repaso Servicios/Repaso Servicios 1.png"
style="width:5.19919in;height:1.83659in" />

<img src="/media-content/Apuntes/media-informatica/Media Teoria SMR/Repaso Servicios/Repaso Servicios 3.png" style="width:5.227in;height:0.64318in" />

## **Configuración de los servicios:**

**DHCP**
<img src="/media-content/Apuntes/media-informatica/Media Teoria SMR/Repaso Servicios/Repaso Servicios 20.png"
style="width:5.49035in;height:1.94819in" />

**DNS**
<img src="/media-content/Apuntes/media-informatica/Media Teoria SMR/Repaso Servicios/Repaso Servicios 4.png"
style="width:5.19893in;height:1.90343in" />

<img src="/media-content/Apuntes/media-informatica/Media Teoria SMR/Repaso Servicios/Repaso Servicios 29.png"
style="width:5.17616in;height:2.14659in" />

<img src="/media-content/Apuntes/media-informatica/Media Teoria SMR/Repaso Servicios/Repaso Servicios 28.png"
style="width:5.1785in;height:2.28205in" />

**Web**
<img src="/media-content/Apuntes/media-informatica/Media Teoria SMR/Repaso Servicios/Repaso Servicios 18.png"
style="width:4.93401in;height:0.9202in" />

<img src="/media-content/Apuntes/media-informatica/Media Teoria SMR/Repaso Servicios/Repaso Servicios 19.png"
style="width:4.90649in;height:3.43812in" />

<img src="/media-content/Apuntes/media-informatica/Media Teoria SMR/Repaso Servicios/Repaso Servicios 35.png"
style="width:5.90556in;height:0.61944in" />

<img src="/media-content/Apuntes/media-informatica/Media Teoria SMR/Repaso Servicios/Repaso Servicios 17.png"
style="width:3.68802in;height:0.66676in" />

**FTP**
<img src="/media-content/Apuntes/media-informatica/Media Teoria SMR/Repaso Servicios/Repaso Servicios 24.png"
style="width:5.46951in;height:0.80219in" />

<img src="/media-content/Apuntes/media-informatica/Media Teoria SMR/Repaso Servicios/Repaso Servicios 25.png"
style="width:5.28199in;height:1.08348in" />

<img src="/media-content/Apuntes/media-informatica/Media Teoria SMR/Repaso Servicios/Repaso Servicios 31.png"
style="width:5.54244in;height:0.95847in" />

<img src="/media-content/Apuntes/media-informatica/Media Teoria SMR/Repaso Servicios/Repaso Servicios 33.png"
style="width:3.07335in;height:0.41672in" />

<img src="/media-content/Apuntes/media-informatica/Media Teoria SMR/Repaso Servicios/Repaso Servicios 30.png" style="width:3.1754in;height:0.382in" />

**Correo**
Pongo la máquina en NAT y cambio la configuración del archivo que esta en Netplan, para poder instalar los paquetes necesarios del servicio de correo

Comprobamos o cambiamos el nombre del servidor con el comando hostname, debe ser nuestro nombre de dominio
<img src="/media-content/Apuntes/media-informatica/Media Teoria SMR/Repaso Servicios/Repaso Servicios 13.png" style="width:3.91721in;height:0.573in" />

## **Instalamos Postfix**
<img src="/media-content/Apuntes/media-informatica/Media Teoria SMR/Repaso Servicios/Repaso Servicios 22.png"
style="width:4.07349in;height:0.42714in" />

<img src="/media-content/Apuntes/media-informatica/Media Teoria SMR/Repaso Servicios/Repaso Servicios 27.png"
style="width:5.90556in;height:1.2625in" />

<img src="/media-content/Apuntes/media-informatica/Media Teoria SMR/Repaso Servicios/Repaso Servicios 14.png"
style="width:5.90556in;height:1.15903in" />

Después de terminar la instalación, debemos configurar Postfix, para ello vamos al archivo “/etc/Postfix/main.cf”, debemos modificar este archivo, debemos asegurarnos que en la línea mydestination, esta nuestro dominio y en la línea mynetworks, deberemos indicar nuestra dirección de red añadiendo 2 líneas adicionales, “home_mailbox = Maildir/” y “mailbox_command = ”
<img src="/media-content/Apuntes/media-informatica/Media Teoria SMR/Repaso Servicios/Repaso Servicios 15.png"
style="width:5.90556in;height:1.74653in" />

## **Ahora instalamos Dovecot**
<img src="/media-content/Apuntes/media-informatica/Media Teoria SMR/Repaso Servicios/Repaso Servicios 36.png"
style="width:4.69857in;height:0.4584in" />

Modificamos el archivo “/etc/Dovecot/conf.d/**10-auth.conf**” y
modificamos la siguiente línea cambiando el “yes” por “no”
<img src="/media-content/Apuntes/media-informatica/Media Teoria SMR/Repaso Servicios/Repaso Servicios 12.png"
style="width:5.90556in;height:1.78264in" />

Ahora debemos modificar el archivo “/etc/dovecot/conf-d/**10-mail.conf**”, este archivo debemos modificarlo ya que previamente modificamos la ubicación del maildir, así que descomentamos la línea en verde y comentamos la línea en rojo
<img src="/media-content/Apuntes/media-informatica/Media Teoria SMR/Repaso Servicios/Repaso Servicios 23.png"
style="width:5.65277in;height:1.61249in" />

Ahora deberemos configurar el DNS para especificar el intercambiador de correo y configurar las direcciones smtp y pop3 para que los clientes puedan resolver correctamente

**Empezamos modificando la zona directa**

**Añadimos:**

- pop3 IN CNAME “IP del servidor”
- smtp IN CNAME “IP del servidor”
- “dominio” IN MX correo.”dominio”

<img src="/media-content/Apuntes/media-informatica/Media Teoria SMR/Repaso Servicios/Repaso Servicios 9.png"
style="width:4.88276in;height:3.12533in" />

Reiniciamos el servicio DNS y comprobamos desde el cliente que los host y el intercambiador de correo resuelven bien
<img src="/media-content/Apuntes/media-informatica/Media Teoria SMR/Repaso Servicios/Repaso Servicios 6.png"
style="width:5.90556in;height:1.76667in" />

## **Instalamos dovecot-imapd**
<img src="/media-content/Apuntes/media-informatica/Media Teoria SMR/Repaso Servicios/Repaso Servicios 26.png"
style="width:4.35477in;height:0.53132in" />

Ahora simplemente iniciamos sesión en Thunderbird desde el cliente y probamos a enviar un correo a otro usuario
<img src="/media-content/Apuntes/media-informatica/Media Teoria SMR/Repaso Servicios/Repaso Servicios 8.png"
style="width:2.78683in;height:1.97794in" />
<img src="/media-content/Apuntes/media-informatica/Media Teoria SMR/Repaso Servicios/Repaso Servicios 32.png"
style="width:2.67607in;height:2.56146in" />

<img src="/media-content/Apuntes/media-informatica/Media Teoria SMR/Repaso Servicios/Repaso Servicios 21.png"
style="width:2.79563in;height:1.80894in" />

Prueba de mensaje
<img src="/media-content/Apuntes/media-informatica/Media Teoria SMR/Repaso Servicios/Repaso Servicios 16.png"
style="width:5.48679in;height:1.40396in" />

Recibido desde el destinatario
<img src="/media-content/Apuntes/media-informatica/Media Teoria SMR/Repaso Servicios/Repaso Servicios 34.png"
style="width:5.90556in;height:1.74931in" />
