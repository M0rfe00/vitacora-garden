---
tags:
  - Informática
  - Active-Directory
---
# **Directiva de fondo de escritorio**

**Web-grafía:**
[<u>https://www.desdeelsite.com/2020/02/10/politica-de-fondo-de-pantalla-gpo/</u>](https://www.desdeelsite.com/2020/02/10/politica-de-fondo-de-pantalla-gpo/)

Para crear y comprobar la directiva de fondo de pantalla, debemos tener previamente el servicio Active Directory Domain Service, un dominio creado y usuarios (todo esto esta previamente explicado en los documentos anteriores)

## **Crear archivo y compartirlo en red**
**elegimos la imagen que queremos utilizar de fondo de pantalla en los clientes, hacemos clic derecho sobre el archivo -\> compartir com -\> usuarios específicos**

<img src="/media-content/Apuntes/media-informatica/Media Windows/Media Active Directory WIND/image7.png"
style="margin: 0 auto; padding: 0; width: 100%; height: auto;" />

**Elegimos el usuario al que se lo vamos a compartir y le asignamos los permisos correspondientes.**
<img src="/media-content/Apuntes/media-informatica/Media Windows/Media Active Directory WIND/image6.png"
style="margin: 0 auto; padding: 0; width: 100%; height: auto;" />

**Nos quedamos con la ruta creada del archivo en la red, para después introducirla en la directiva**
**Según el usuario o grupo al que queramos aplicar la directiva de fondo de pantalla crearemos el GPO en un Dominio u otro, en este caso “segundo"** <img src="/media-content/Apuntes/media-informatica/Media Windows/Media Active Directory WIND/image2.png"
> style="margin: 0 auto; padding: 0; width: 100%; height: auto;" />

## **Crear GPO**
**para crear la directiva vamos a herramientas -\> Administración de directivas de grupo** <img src="/media-content/Apuntes/media-informatica/Media Windows/Media Active Directory WIND/image9.png">style="margin: 0 auto; padding: 0; width: 100%; height: auto;"/>

**Para crear el GPO hacemos clic derecho sobre el dominio que queramos y seleccionamos “Crear un GPO en este dominio y vincularlo aquí…”** <img src="/media-content/Apuntes/media-informatica/Media Windows/Media Active Directory WIND/image5.png"
> style="margin: 0 auto; padding: 0; width: 100%; height: auto;" />  
> >

**Le ponemos un nombre al GPO que estamos a punto de crear y siguiente**
> <img src="/media-content/Apuntes/media-informatica/Media Windows/Media Active Directory WIND/image4.png"
> style="margin: 0 auto; padding: 0; width: 100%; height: auto;" />

## **Crear directivas**
**Ahora editamos el GPO para crear en el las directivas que queramos**
<img src="/media-content/Apuntes/media-informatica/Media Windows/Media Active Directory WIND/image3.png"
style="margin: 0 auto; padding: 0; width: 100%; height: auto;" />

Para la directiva de fondo de pantalla vamos a Configuracion de usuario -\> Directivas -\> Plantillas administrativas… -\> Active Desktop -\> y habilitamos Active desktop y aplicamos
<img src="/media-content/Apuntes/media-informatica/Media Windows/Media Active Directory WIND/image1.png" style="margin: 0 auto; padding: 0; width: 100%; height: auto; />

Habilitamos, aplicamos y aceptamos. (esta pantalla nos explica con que versiones es compatible la directiva y en que consiste)
<img src="/media-content/Apuntes/media-informatica/Media Windows/Media Active Directory WIND/image10.png"
style="margin: 0 auto; padding: 0; width: 100%; height: auto;" />

En el apartado Tapiz del escritorio, habilitamos, introducimos la ruta compartida del archivo que vamos a poner de fondo de pantalla y el estilo de la imagen, aplicamos y aceptamos. (además, no explica en que consiste la directiva, el tipo de archivos compatibles y las versiones de Windows compatibles con la directiva) Para **aplicar la directiva** debemos utilizar el comando “**gpupdate /force**” en la **terminal**, esto **actualizará** las **directivas aplicadas**
<img src="/media-content/Apuntes/media-informatica/Media Windows/Media Active Directory WIND/image8.png"
style="margin: 0 auto; padding: 0; width: 100%; height: auto;" />

## **Comprobar directiva**
Para comprobar que se aplica la directiva iniciamos sesión en el dominio desde el usuario al que hemos aplicado la directiva
