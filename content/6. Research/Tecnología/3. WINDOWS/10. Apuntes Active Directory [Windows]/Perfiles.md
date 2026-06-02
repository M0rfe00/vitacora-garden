---
tags:
  - Informática
  - Active-Directory
---
> **Perfiles**

<img src="/media-content/Apuntes/media-informatica/Media Windows/Media Active Directory WIND/image1.jpeg" style="margin: 0 auto; padding: 0; width: 100%; height: auto;" />

Podemos definir un perfil como aquellos aspectos de configuración del
equipo y del entorno de trabajo propios del usuario y que además son
exportables a otras máquinas de manera transparente al mismo. En otras
palabras, mediante los perfiles conseguimos que el usuario,
independientemente del equipo en el que inicie la sesión, disponga de un
entorno de trabajo similar. Todo esto se entenderá mejor con los
ejemplos preparados en las secciones siguientes.

Existen tres tipos de perfiles:

1.  **Perfiles locales**: se almacenan en el equipo, y configuran el
    entorno de trabajo de cada usuario. No los abordaremos en este curso
    ya que lo que nos interesa es la gestión centralizada de recursos.

2.  **Perfiles móviles**: el usuario configura el entorno de trabajo a
    su gusto en un equipo, y al iniciar sesión en cualquier otra
    estación de trabajo, la configuración se importa y aplica a ese
    nuevo equipo. Abordaremos este tipo de perfiles más adelante.

3.  **Perfiles obligatorios**: un usuario con permisos de administración
    define la configuración del entorno de trabajo, y se aplica a los
    usuarios del dominio. Estos pueden modificarla durante la sesión,
    pero al iniciar otra sesión, se vuelve a cargar la configuración del
    perfil obligatorio. En lugar de trabajar con perfiles obligatorios,
    en el apartado anterior hemos visto cómo configurar entornos de
    trabajo definidos para los miembros de una unidad organizativa de
    una manera más cómoda y potente.

**Perfiles móviles**

Como se ha comentado en el apartado anterior, los perfiles consisten en
una serie de ficheros de configuración del entorno de trabajo, que se
aplican a todos los equipos de la red desde donde pueda iniciar sesión
el usuario. Estos ficheros deconfiguración deben almacenarse en una
ubicación accesible por los equipos clientes, como por ejemplo el
controlador de dominio.

Concretamente, almacenaremos los perfiles en una carpeta de perfil. Esta
carpeta de perfil la crearemos dentro de las carpetas particulares de
los usuarios. Por ejemplo, vamos a hacer que los usuarios del
departamento Gestión tengan un perfil móvil:

<img src="/media-content/Apuntes/media-informatica/Media Windows/Media Active Directory WIND/image2.jpeg" style="margin: 0 auto; padding: 0; width: 100%; height: auto;" />

*Perfil móvil para usuarios de departamento Gestión*

Esto hará que estos usuarios cuando inicien sesión en alguna de las
máquinas cliente de nuestro dominio, recupere todo su perfil de la
carpeta personal del usuario. Para ello, vamos a modificar el siguiente
campo de la pestaña perfil:

<img src="/media-content/Apuntes/media-informatica/Media Windows/Media Active Directory WIND/image3.jpeg" style="margin: 0 auto; padding: 0; width: 100%; height: auto;" />

> *Perfil móvil usuario usudir1*

Y estableceremos la ruta de acceso al perfil. En nuestro caso, vamos a
establecer la ruta de acceso al perfil móvil, dentro de la carpeta
personal del usuario. Por tanto, seleccionaremos los dos usuarios y con
el botón de la derecha del ratón:

<img src="/media-content/Apuntes/media-informatica/Media Windows/Media Active Directory WIND/image4.jpeg" style="margin: 0 auto; padding: 0; width: 100%; height: auto;" />

> *Perfil móvil usuarios gestion*

Y para la ruta del perfil móvil estableceremos la siguiente dirección:

> **\\192.168.100.1\Pistonazo_users\$\\username%\perfil**

De esta forma cuando algún usuario de Gestión inicie sesión, se creará
en la carpeta personal su perfil. Así independientemente del equipo
donde se conecte, siempre tendrá la información:

<img src="/media-content/Apuntes/media-informatica/Media Windows/Media Active Directory WIND/image5.jpeg" style="margin: 0 auto; padding: 0; width: 100%; height: auto;" />

*Creación de carpeta de perfil móvil*

<img src="/media-content/Apuntes/media-informatica/Media Windows/Media Active Directory WIND/image6.jpeg" style="margin: 0 auto; padding: 0; width: 100%; height: auto;" />

> Carga en red Perfil Móvil
>
> Hay que tener en cuenta de que cuando un usuario con perfil móvil
> inicia la sesión, la información del servidor se copia al cliente.
> Cuando cierra la sesión se realiza la operación inversa. Un alto
> número de usuario con perfil móvil puede sobrecargar la red demasiado.
> Por tanto, hay que saber exactamente en qué usuarios debemos aplicar
> esta característica.

<img src="/media-content/Apuntes/media-informatica/Media Windows/Media Active Directory WIND/image1.jpeg" style="margin: 0 auto; padding: 0; width: 100%; height: auto;" />

**Perfiles obligatorios**

Cuando un usuario tiene un perfil obligatorio, al cerrar la sesión no se
guardan los cambios que el usuario ha hecho en su perfil, por lo que
cuando vuelva a iniciar sesión, se encontrará su entorno de trabajo como
si no hubiera cambiado nada.

La primera vez que un usuario inicia sesión se crea su perfil dentro de
su carpeta como si se tratara de un perfil local
(C:\Usuarios\nombreUsuario en Windows 7 y posteriores o C:\Documents and
Settings\NombreUsuario en Windows XP), o en la carpeta indicada en su
cuenta de usuario si se trata de un perfil móvil.

El perfil consta de muchas carpetas y ficheros donde se almacena la
configuración de ese usuario, y se crea a partir del perfil de usuario
predeterminado. Entre los ficheros que se crean está el fichero
NTUSER.DAT (es un fichero oculto) que cuenta las principales
configuraciones del perfil. Para convertir ese perfil en obligatorio, lo
único que tenemos que tenemos que hacer es cambiar el nombre del fichero
indicado anteriormente por NTUSER.MAN (este cambio tiene que hacerse con
la sesión del usuario cerrada).

A partir de ahora, cuando el usuario inicie sesión y realice cambios en
su perfil, estos cambios no se guardarán al cerrar la sesión.

El problema que nos encontramos para hacer esto, es que solo el propio
usuario tiene permisos para entrar en su carpeta de perfil, ni si quiera
el administrador puede entrar. Lo que podemos hacer es cambiar
temporalmente el propietario de la carpeta del perfil del usuario.

Esto lo haremos desde el menú contextual de la carpeta Propiedades -\>
Seguridad -\> Opciones avanzadas -\> Propietario -\> botón Editar:

<figure>
<img src="/media-content/Apuntes/media-informatica/Media Windows/Media Active Directory WIND/image7.png" style="margin: 0 auto; padding: 0; width: 100%; height: auto;/>
<figcaption><p>Cambiar el propietario de una carpeta</p></figcaption>
</figure>

Pondremos como nuevo propietario al Administrador (o al usuario con el
que estemos logueados), y no olvidar marcar la casilla de Reemplazar
propietario en subcontenedores y objetos para cambiar también el
propietario en los ficheros de dentro de la carpeta (especialmente en
NTUSER.DAT que es el que tenemos que cambiar).

Ahora ya podemos entrar a la carpeta y cambiar el nombre del fichero
NTUSER.DAT a NTUSER.MAN, y habremos hecho el perfil obligatorio. Por
último tenemos que cambiar el propietario de la carpeta para que el
usuario pueda acceder a su perfil.

**Utilizar un mismo perfil obligatorio para muchos usuarios**

En ocasiones tenemos que reducir el tráfico en la red y para ello, más
de un usuario que tiene que tener perfil obligatorio, es decir, el
perfil obligatorio tiene que ser el mismo para uno o varios grupos de
usuarios. En este caso no hay que tener un perfil para cada usuario, y
hacer obligatorio cada uno de ellos como hemos visto antes, sino que
podemos utilizar la misma carpeta de perfil para todos ellos, ya que
nunca se guardarán los cambios que haga cualquiera de ellos.

La manera más sencilla de hacer esto es iniciando sesión en el cliente
con cualquier usuario del dominio, y configurando su perfil como
queremos que lo tengan los usuarios que gastarán este perfil. Cuando ya
lo tenemos, cerramos la sesión para que se guarden los cambios (que se
guardarán en local en el cliente).

Ahora iniciamos sesión en ese cliente con la cuenta del administrador
del dominio y copiamos el perfil creado antes en la carpeta del servidor
donde queremos que esté el perfil obligatorio.

Para hacerlo desde el menú contextual del icono Equipo (en Windows 7 y
posteriores) o Mi PC (en Windows XP), abrimos Propiedades y en la
pestaña Opciones avanzadas pulsamos en el botón Configuración, dentro de
Perfiles de usuario:

<figure>
<img src="/media-content/Apuntes/media-informatica/Media Windows/Media Active Directory WIND/image8.png" style="margin: 0 auto; padding: 0; width: 100%; height: auto;" />
<figcaption><p>Perfiles de usuario</p></figcaption>
</figure>

En esta ventana aparecen los perfiles de todos los usuarios que han
iniciado sesión en la máquina cliente. Puede haber usuarios con perfil
local, móvil u obligatorio. Desde aquí seleccionamos el perfil del
usuario que tenemos configurado para ser el perfil obligatorio (que será
local o móvil) y pulsamos el botón Copiar a:

<figure>
<img src="/media-content/Apuntes/media-informatica/Media Windows/Media Active Directory WIND/image9.png" style="margin: 0 auto; padding: 0; width: 100%; height: auto;" />
<figcaption><p>Copiar perfil</p></figcaption>
</figure>

En Copiar perfil en indicaremos la ruta de la carpeta donde se copiará
el perfil (se creará la carpeta indicada) y en la opción **Está
permitido usar** tenemos que añadir el grupo al que pertenecen los
usuarios que tendrán perfil obligatorio para que puedan acceder al
perfil, (también podemos elegir Todos, aunque no sea lo más estricto).

Si queremos dar permiso a un grupo en la ventana de Seleccionar usuario
o grupo, pondremos su nombre. Si no lo encuentra, tendremos que pulsar
el botón de avanzadas y en la ventana que se abra vamos a Tipos de
objetos y marcamos la casilla de Grupos, que por defecto está
desmarcada:

<figure>
<img src="/media-content/Apuntes/media-informatica/Media Windows/Media Active Directory WIND/image10.png" style="margin: 0 auto; padding: 0; width: 100%; height: auto;" />
<figcaption><p>Seleccionar usuario o grupo: Tipos de
objetos</p></figcaption>
</figure>

Ahora ya encontrará el grupo que queremos y lo seleccionaremos para
permitir que sus miembros puedan acceder a la carpeta donde se copiará
el perfil.

Con esto ya tenemos el perfil en la carpeta del servidor indicada. Nos
falta hacerlo obligatorio, y para eso entraremos en la carpeta y
cambiaremos el nombre de NTUSER.DAT por NTUSER.MAN.

<u>Por último tenemos que modificar la plantilla de los usuarios que
tendrán perfil obligatorio para poner en la opción **Perfil** la ruta
donde hemos hecho la copia del perfil. Hay que tener en cuenta que ahora
la ruta no acabará con %username%</u>, ya que no queremos una carpeta de
perfil diferente para cada usuario, sino que todos tendrán el mismo
perfil, y por lo tanto, accederán a la misma carpeta.

<img src="/media-content/Apuntes/media-informatica/Media Windows/Media Active Directory WIND/image1.jpeg" style="margin: 0 auto; padding: 0; width: 100%;" />**Caso
práctico** <span class="mark">PROBAR</span>

Imaginemos que tenemos que crear un perfil obligatorio para el grupo
Alumnos de un instituto.

Todos utilizarán el mismo perfil y aunque hagan cambios, no se guardarán
para futuras conexiones.

La ruta del perfil de los alumnos deberá ser algo como esto:

\\Servidor\Perfiles\PerfilObligatorio

Y deberá existir un grupo Alumnos, donde estarán todos los grupos de
alumnos a los que hay que aplicar este tipo de perfil.

Los pasos a seguir para realizar esta configuración son:

1\. Iniciar sesión en el cliente con el usuario Administrador del
dominio (o con cualquiera que también es administrador del dominio).

2\. Ir a "Panel de control -\> Sistema y seguridad -\> Sistema" y
acceder a la "Configuración avanzada del sistema". Posteriormente
accederemos dentro de "Perfiles de usuario" y copiamos el Perfil
predeterminado dentro del recurso donde queremos guardarlo a:
[\\Servidor\Perfiles\PerfilObligatorio.V6](file:///\\Servidor\Perfiles\PerfilObligatorio.V6)

(no olvidéis el .V6).

En la parte inferior donde dice qué usuarios pueden utilizar este perfil
seleccionaremos el grupo gAlumnos.

1.  Iniciamos sesión en el cliente con un usuario alumno y configuramos
    el perfil como queremos que se quede para todos los alumnos. Al
    cerrar la sesión estos cambios se quedan guardados en el perfil
    almacenado en el servidor.

2.  Por último accedemos dentro de la carpeta del perfil en el servidor
    y modificamos el fichero ntuser.dat por ntuser.man. A partir de
    ahora ya no se guardarán los cambios hechos a este perfil

3.  Iniciamos sesión con un alumno y probamos a modificar el perfil.
    Posteriormente cuando iniciemos con otros alumnos o con ese mismo,
    comprobaremos que no se han guardado los cambios.

4.  Importante, hay que configurar la ruta de acceso al perfil en la
    plantilla del grupo de usuarios que vaya a tener un perfil
    obligatorio!
