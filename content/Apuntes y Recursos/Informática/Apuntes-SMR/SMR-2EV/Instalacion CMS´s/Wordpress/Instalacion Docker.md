**Webgrafía:**

https://youtu.be/gj7D9SuPZZg?si=JBY67SpqDsGK2r5f

**Resumen:**

En mi caso he instalado WordPress con Docker en un Ubuntu server, para ello primero he instalado algunos paquetes de Docker necesarios y el archivo yaml de WordPress, el archivo yaml lo he instalado desde un cliente y lo he pasado al servidor con FileZilla, después de pasar el
archivo de WordPress e instalado las librerías necesarias y al finalizar la instalación ya podía acceder al panel de instalación y administración desde el cliente introduciendo la dirección del servidor y el puerto 8000

*Aclarar que para instalar los paquetes de Docker necesitas salida a internet en el servidor, después de tendrás que estar en la misma red que el cliente para poder conectarte desde FileZilla para pasar el archivo Yaml, después de tener el archivo deberás tener salida a internet de nuevo para instalar WordPress y por ultimo deberás estar en la misma red que el cliente para acceder al panel de instalación.*

Instalo Docker
<img src="./media/image10.png"
style="width:4.41728in;height:0.43756in" />

<img src="./media/image6.png" style="width:4.7715in;height:0.62509in" /><img src="./media/image3.png"
style="width:4.87568in;height:0.46882in" />

Instalo el archivo de Docker en el cliente
<img src="./media/image11.png" style="width:5.90556in;height:1.7in" />

Paso el archivo desde el cliente al servidor a través de FileZilla
<img src="./media/image4.png"
style="width:5.90556in;height:3.70556in" />

Compruebo que se ha pasado correctamente
<img src="./media/image9.png"
style="width:5.90556in;height:0.78611in" />

Ahora instalo las librerías de Docker necesarias para acceder a WordPress
<img src="./media/image5.png"
style="width:5.68829in;height:0.63551in" />

Busco en el navegador del cliente la dirección y puerto de WordPress
<img src="./media/image1.png"
style="width:5.90556in;height:1.31944in" />

<img src="./media/image2.png"
style="width:5.90556in;height:5.50417in" />

<img src="./media/image8.png"
style="width:5.90556in;height:2.80972in" />

Aquí ya estaría en el panel de administración de WordPress
<img src="./media/image7.png"
style="width:5.90556in;height:3.71042in" />
