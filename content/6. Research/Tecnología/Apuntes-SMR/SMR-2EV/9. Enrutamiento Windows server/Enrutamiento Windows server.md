---
tags:
  - Informática
  - Wind-Server
---
# Documentación enrutamiento Windows server

Para empezar debemos tener dos tarjetas de red en el servidor, una en red interna para comunicarse con los clientes y otra en NAT para dar salida a internet
![](content/6.%20Research/Tecnología/Apuntes-SMR/SMR-2EV/9.%20Enrutamiento%20Windows%20server/media/image1.png)![](content/6.%20Research/Tecnología/Apuntes-SMR/SMR-2EV/9.%20Enrutamiento%20Windows%20server/media/image2.png)

Antes de instalar el servicio de acceso remoto/enrutamiento debemos configurar en el servicio DHCP, dentro del ámbito que creamos previamente tenemos que ir a opciones del ámbito y en DNS añadir el DNS de google “8.8.8.8”, aparte deberemos asignarle un dirección IP estática
al servidor y establecer como puerta de enlace la dirección de la tarjeta de red que está en NAT
<img src="./media/image3.png" style="width:5.90556in;height:3.32188in"
alt="C:\Users\Aitor\Pictures\Captura15.PNG" />

<img src="./media/image4.png" style="width:5.90556in;height:3.32188in"
alt="C:\Users\Aitor\Pictures\Captura4.PNG" />

Una vez hemos configurado el DHCP, instalamos el servicio Acceso remoto con la característica Enrutamiento

<img src="./media/image5.png" style="width:5.90556in;height:3.32283in"
alt="C:\Users\Aitor\AppData\Local\Microsoft\Windows\INetCache\Content.Word\Captura2.png" />![](content/6.%20Research/Tecnología/Apuntes-SMR/SMR-2EV/9.%20Enrutamiento%20Windows%20server/media/image6.png)

Después de instalar el servicio de acceso remoto y reiniciar el equipo, vamos a herramientas y seleccionamos “Enrutamiento y acceso remoto”, en este panel hacemos clic derecho sobre el servidor y seleccionamos la una opción que dice algo asi como activar el enrutamiento![](content/6.%20Research/Tecnología/Apuntes-SMR/SMR-2EV/9.%20Enrutamiento%20Windows%20server/media/image7.png)

En el asistente de la instalación seleccionamos “Configuración personalizada”
<img src="./media/image8.png" style="width:5.90556in;height:3.32283in"
alt="C:\Users\Aitor\AppData\Local\Microsoft\Windows\INetCache\Content.Word\Captura7.png" />

Habilitamos los servicios NAT y Enrutamiento LAN y continuamos
![](content/6.%20Research/Tecnología/Apuntes-SMR/SMR-2EV/9.%20Enrutamiento%20Windows%20server/media/image9.png)

Una vez hemos acabado el paso anterior, clicamos sobre IPV4 y hacemos clic derecho sobre “IGMP” y añadimos la interfaz de red de la tarjeta que está en red interna dejando las opciones por defecto y aceptando en todos los apartados
<img src="./media/image10.png" style="width:5.90556in;height:3.32283in"
alt="C:\Users\Aitor\AppData\Local\Microsoft\Windows\INetCache\Content.Word\Captura9.png" />

Sobre el apartado “NAT” hacemos lo mismo pero esta vez añadiendo la tarjeta de red que esta en “NAT” y seleccionado los apartados “Interfaz publica conectada a internet” y “Habilitar NAT en esta interfaz”
<img src="./media/image11.png" style="width:5.90556in;height:3.32283in"
alt="C:\Users\Aitor\AppData\Local\Microsoft\Windows\INetCache\Content.Word\Captura12.png" />

Después de añadir las tarjetas de red en sus apartados correspondientes, hacemos clic derecho sobre general y seleccionamos la opción “Nuevo protocolo de enrutamiento” y seleccionamos RIP
<img src="./media/image12.png" style="width:5.90556in;height:3.32188in"
alt="C:\Users\Aitor\Pictures\Captura13.PNG" />

Una vez añadido el protocolo RIP, de las misma forma que antes deberemos añadir las interfaces de red, en este caso en el apartado RIP ambas interfaces, tanto la que esta en NAT como la que esta en red interna.
<img src="./media/image13.png" style="width:5.90556in;height:3.32188in"
alt="C:\Users\Aitor\Pictures\Captura14.PNG" />

Después de configurar el enrutamiento/acceso remoto, se caerán los servicios del servidor y deberemos iniciarnos uno por uno para ello vamos al panel central donde están todos los servicios y en el apartado de servidor local clicamos sobre “servicios” y en el desplegable “Tipos
de inicio” seleccionamos la opción todo, esto nos mostrara todos los servicios, arriba en rojo nos saldrá el número de servicios caídos, para levantarlos hacemos clic derecho sobre ellos y pulsamos en iniciar, así con todos.
<img src="./media/image14.png" style="width:5.90556in;height:3.32188in"
alt="C:\Users\Aitor\Pictures\Captura16.PNG" />

Para comprobar que el enrutamiento se está haciendo correctamente deberemos conectarnos con un cliente con conexión a la máquina y comprobar que el servidor le está dando acceso a internet, es posible que debamos reiniciar las maquinas, tened en cuenta que al reiniciar el servidor habrá que volver a levantar todos los servicios manualmente.
