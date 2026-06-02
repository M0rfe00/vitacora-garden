---
tags:
  - Informática
  - Acceso-Remoto
---
# **Configuración e instalación de SSH Ubuntu server**

Para ello necesitamos dos máquinas

Para instalar el servicio ssh en el servidor en caso de no haberlo instalado durante la instalación utilizamos el siguiente comando
<img src="/media-content/Apuntes/media-informatica/Media Linux/Media SSH Ubuntu/image2.png"
style="margin: 0 auto; padding: 0; width: 100%; height: auto;" />

Es posible que el firewall de algunos problemas para ello podemos habilitar el puerto 22 que es el que utiliza ssh por defecto o deshabilitarlo completamente, con el comando:
- ufw allow 22/tcp

En mi caso tengo la siguiente configuración en el firewall
<img src="/media-content/Apuntes/media-informatica/Media Linux/Media SSH Ubuntu/image1.png"
style="margin: 0 auto; padding: 0; width: 100%; height: auto;" />

Para conectarnos desde el cliente, debemos introducir lo siguiente
- ssh “usuario”@”IP/Dominio del servior” -p “puerto del servidor”

Ejemplo
<img src="/media-content/Apuntes/media-informatica/Media Linux/Media SSH Ubuntu/image3.png" style="margin: 0 auto; padding: 0; width: 100%; height: auto; />

Aceptamos e introducimos la contraseña del usuario con el que nos estamos conectando
<img src="/media-content/Apuntes/media-informatica/Media Linux/Media SSH Ubuntu/image4.png"
style="margin: 0 auto; padding: 0; width: 100%; height: auto;" />

Ahora ya estaríamos en el servidor remotamente con una conexión segura desde la terminal
<img src="/media-content/Apuntes/media-informatica/Media Linux/Media SSH Ubuntu/image6.png"
style="margin: 0 auto; padding: 0; width: 100%; height: auto;" />

Para salir simplemente escribimos exit

También podemos conectarnos al servidor remotamente con ssh la aplicación Putty

Introducimos la dirección del servidor, el puerto por el que estableceremos la comunicación y SSH como tipo de conexión
<img src="/media-content/Apuntes/media-informatica/Media Linux/Media SSH Ubuntu/image8.png"
style="margin: 0 auto; padding: 0; width: 100%; height: auto;" />

<img src="/media-content/Apuntes/media-informatica/Media Linux/Media SSH Ubuntu/image7.png"
style="margin: 0 auto; padding: 0; width: 100%; height: auto;" />

Se nos abrirá una terminal en la que tenemos que introducir las credenciales del usuario con el cual nos estamos conectando
<img src="/media-content/Apuntes/media-informatica/Media Linux/Media SSH Ubuntu/image9.png"
style="margin: 0 auto; padding: 0; width: 100%; height: auto;" />

Lo rellenamos y ya tendríamos acceso al servidor
<img src="/media-content/Apuntes/media-informatica/Media Linux/Media SSH Ubuntu/image5.png"
style="margin: 0 auto; padding: 0; width: 100%; height: auto;" />
