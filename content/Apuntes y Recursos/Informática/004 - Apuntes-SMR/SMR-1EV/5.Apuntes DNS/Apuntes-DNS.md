---
tags:
  - Informática
  - DNS
---
## **DNS: Domain Name Service**

- **Protocolo que traduce nombres de dominio a direcciones IP**

- Aunque el protocolo IP sigue utilizando direcciones, es más fácil para el usuario memorizar el nombre del dominio en lugar de su dirección IP
- Además, la dirección IP puede cambiar mientras que el nombre de dominio es fijo

- Cliente: Le da al servidor el nombre de dominio
- Servidor: Averigua la dirección IP correspondiente y se la devuelve al cliente
- Es empleado en multitud de aplicaciones, navegación web, correo electrónico…

## **Dominios:**

- Un dominio es un nombre único asignado a un área especifica dentro de una red, un contenedor lógico utilizado para administrar usuarios, grupos y computadoras entre otros objetos.

## **Estructura de un nombre de dominio:**

La estructura de un dominio esta formada por varios apartados separados por un punto, cada uno de ellos recibe el nombre de subdominio, siendo el dominio que esta más a la derecha el de carácter más alta dentro de la estructura, además se asemeja a un árbol invertido siendo el tronco
la parte superior y ramificándose hacia

<img src="./media/image6.png"
style="width:3.63544in;height:0.90416in" />

<img src="./media/image8.png" style="width:2.80491in;height:2.8342in" />

**Ejemplo:** [<u>www.ejemplo.com</u>](http://www.ejemplo.com)

- **Dominio:** COM
- **Subdominio:** Ejemplo
- **Nombre del host:** www

### **Tipos de Dominios:**

**Absolutos:** También conocidos como **FQDN** (Full Qualified Domain Name) en estos se
especifica todo el nombre completo del dominio

**Relativos:** Hacen referencia a un dominio, es decir la ruta no es absoluta

**Ejemplo:**

- Relativa: ejemplo.es
- Absoluta: [<u>www.ejemplo.es</u>](http://www.ejemplo.es)
- Los dominios de primer nivel también pueden ser clasificados por geografía, tipo de organización

<table>
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<thead>
<tr>
<th colspan="2">Dominios de alto nivel de organización</th>
</tr>
<tr>
<th>Domino</th>
<th>Significado</th>
</tr>
<tr>
<th>com</th>
<th>Organización comercial</th>
</tr>
<tr>
<th>edu</th>
<th>Institución educativa</th>
</tr>
<tr>
<th>gov</th>
<th>Institución gubernamental</th>
</tr>
<tr>
<th>Int</th>
<th>Organización internacional</th>
</tr>
<tr>
<th>mil</th>
<th>Organización militar</th>
</tr>
<tr>
<th>net</th>
<th>Organización de red</th>
</tr>
<tr>
<th>org</th>
<th>Organización sin animo de lucro</th>
</tr>
<tr>
<th>es</th>
<th>Organización española/ Ubicación del host</th>
</tr>
</thead>
<tbody>
</tbody>
</table>

## **Objetos:**

**Representaciones de los recursos de red como usuarios, equipos, impresoras etc…**

## **Arboles:**

Agrupación de uno o mas dominios que comparten un espacio contiguo, es decir están al mismo nivel en la estructura

## **Bosque:**

Agrupación de uno o más árboles que comparten un espacio de nomenclatura contiguo y catalogo global

<img src="./media/image5.jpg" style="width:5.11307in;height:2.02022in"
alt="Blink Activity | BlinkLearning" />

## **Unidades organizativas:**

Una Ud. organizativa vendría a ser una carpeta, en la que hay un conjunto de objetos de dominio tales, equipos, usuarios, impresoras…

El objetivo es administrar el conjunto con las unas directivas diferentes al dominio

<img src="./media/image19.png"
style="width:1.79765in;height:2.63308in" />

## **La configuración de DNS consiste en:**

- **Zona directa:** el servidor resuelve la IP en un nombre de dominio
- **Zona inversa:** el servidor traduce los dominios en IPs
- **Dominio:** Forma de identificar un elemento de una red que no sea su dirección IP
- **Alias**
- **Host**
- **Zonas**
- **Puntero PTR**

## **Instalación servicio DNS**

**Para agregar el servicio DNS en el servidor vamos a Administrar -\> Agregar roles y características:**

<img src="./media/image3.png"
style="width:3.14338in;height:2.20994in" />

**Una vez dentro del panel seleccionamos Instalacion basada en roles y pulsamos siguiente:**

<img src="./media/image31.png"
style="width:3.76783in;height:2.71023in" />

**Seleccionamos el servidor en el que lo queremos instalar y pulsamos en siguiente:**

<img src="./media/image28.png"
style="width:4.04362in;height:2.86914in" />

**Seleccionamos el servicio que queremos instalar, en este caso DNS**

<img src="./media/image29.png"
style="width:5.90556in;height:4.18333in" />

**Puede que nos salte un aviso que indique que la instalación requiere agregar características adicionales, las agregamos y pulsamos continuar**

<img src="./media/image18.png"
style="width:3.33483in;height:3.45692in" />

**En este caso no es necesario el apartado características, lo dejamos como esta y pulsamos continuar:**

<img src="./media/image30.png"
style="width:5.90556in;height:4.21319in" />

**El siguiente apartado únicamente nos explica el funcionamiento del servicio DNS, lo leemos y pulsamos continuar**

<img src="./media/image10.png"
style="width:5.90556in;height:4.18056in" />

**El apartado confirmación nos muestra los datos de la instalación, nos pregunta si deseamos reiniciar en caso de ser necesario y por último una confirmación de la instalación**

<img src="./media/image11.png"
style="width:4.84958in;height:3.43702in" />

**Por último, el apartado Resultados nos muestra el progreso de la instalación**

<img src="./media/image12.png"
style="width:4.76109in;height:3.39054in" />

**Una vez terminada la instalación del servicio DNS es posible que nos salga una notificación de que es necesario completar la configuración DNS, Entramos en la notificación**

<img src="./media/image27.png"
style="width:1.66617in;height:1.01822in" />

**Al acceder a la notificación esta nos redirigirá al asistente posterior a la configuración de DNS, el cual nos dirá que es necesario crear usuarios y administradores de DNS**

<img src="./media/image21.png"
style="width:4.69898in;height:3.32326in" />

## **Configuración Servicio DNS**

La configuración del servicio DNS en pocas palabras consiste en la creación de zonas directas, creación de zonas inversas, para después crear hosts dentro de ellas, la comprobación consiste en la utilización del comando nslookup para ver si el servidor está resolviendo los dominios en sus respectivas IPs y viceversa

**Antes de configurar el servicio DNS debemos asignar un IP al servidor, para ello vamos al apartado: Servidor local -\> Ethernet -\> Ethernet -\> Protocolo IPv4**

**Y una vez dentro marcamos la casilla “Utilizar la siguiente dirección IP” para establecer una dirección IP de forma manual al servidor e introducimos la IP que le queremos asignar con su respectiva mascara de red, enrutador y DNS en caso de ser necesario y pulsamos en validar al
salir y aceptamos.**

**Es posible que salte un diagnóstico para detectar posibles problemas tras la configuración, cerramos y continuamos.**

<img src="./media/image33.png"
style="width:3.29526in;height:2.28234in" /><img src="./media/image35.png"
style="width:2.55547in;height:2.95998in" />

<img src="./media/image26.png"
style="width:2.81325in;height:3.50552in" /><img src="./media/image25.png"
style="width:3.11767in;height:3.43916in" />

**Una vez instalado procedemos a su configuración desde el apartado herramientas -\> DNS**

<img src="./media/image32.png"
style="width:2.80365in;height:1.84562in" />

**Una vez dentro de la configuración DNS accedemos al servidor que queremos configurar y hacemos clic en el apartado “Zonas de búsqueda inversa” y seleccionamos “Zona nueva”**

<img src="./media/image7.png"
style="width:4.71289in;height:3.29526in" />

**Esto nos abrirá el asistente para crear una zona nueva, Seleccionamos “Zona principal”**

<img src="./media/image9.png"
style="width:3.90525in;height:3.06623in" />

**En este apartado debemos seleccionar IPv4**

<img src="./media/image2.png"
style="width:4.51867in;height:3.52333in" />

**En este apartado debemos indicar la dirección de red que estamos utilizando en nuestro servidor**

<img src="./media/image24.png"
style="width:4.7705in;height:3.73504in" />

**En este apartado debemos indicar si queremos utilizar un archivo existente de zona o crear otro**

<img src="./media/image14.png"
style="width:5.37575in;height:4.17767in" />

El apartado “Actualización dinámica” debemos indicar si queremos que la zona acepte o no actualizaciones de los registros

<img src="./media/image1.png" style="width:5.3445in;height:4.17767in" />

**Finalizamos y tendríamos la zona creada**

<img src="./media/image13.png"
style="width:5.37575in;height:4.1985in" />

**Una vez dentro de la configuración DNS accedemos al servidor que queremos configurar y hacemos clic en el apartado “Zonas de búsqueda directa” y seleccionamos “Zona nueva”**

<img src="./media/image15.png"
style="width:4.83028in;height:3.35461in" />

**Esto nos abrirá el asistente para crear una zona nueva, Seleccionamos “Zona principal”**

<img src="./media/image9.png"
style="width:4.69979in;height:3.69007in" />

**En el apartado “Nombre de zona” debemos ponerle un nombre a la zona que queremos crear´**

<img src="./media/image16.png"
style="width:5.33408in;height:4.16725in" />

**En el apartado “Archivo de zona” debemos indicar si queremos utilizar el archivo predeterminado para guardar la información, renombrarlo o utilizar otro distinto**

**Por lo general lo habitual es utilizar el predeterminado**

<img src="./media/image4.png" style="width:3.958in;height:3.10599in" />

**El apartado “Actualización dinámica” debemos indicar si queremos que la zona acepte o no actualizaciones de los registros**

<img src="./media/image1.png" style="width:5.3445in;height:4.17767in" />

**Finalizamos y tendríamos la zona creada**

<img src="./media/image36.png"
style="width:3.63588in;height:2.82948in" />

**Después de haberla creado accedemos a ella para crear host dentro**

<img src="./media/image22.png"
style="width:4.98481in;height:3.46135in" />

**En la configuración del Host debemos asignarle un nombre al mismo, una IP y marcar la casilla “Crear registro del puntero (PTR) asociado”**

<img src="./media/image20.png"
style="width:2.75358in;height:2.76121in" /><img src="./media/image17.png"
style="width:2.73191in;height:1.1284in" />

**Para comprobar que el host ha sido creado con éxito, necesitamos un cliente conectado al servidor**

**Para comprobar que el cliente tiene conectividad con el servidor utilizaremos el comando ping + “IP del servidor”**

**Para comprobar que el servicio de resolución de nombres de dominio funciona utilizaremos el comando nslookup + “nombre completo del dominio”/”IP del dominio”**

**Con este comando**  
<img src="./media/image34.png"
style="width:5.90556in;height:2.96528in" />

**Para crear un alias debemos ir a la zona en la que esta el host ya sea la directa o inversa, hacer clic derecho y seleccionar el apartado “Nuevo alias”**

<img src="./media/image23.png"
style="width:5.90556in;height:4.13194in" />

Esto nos abrirá un panel para crear un nuevo registro de alias, en el que debemos seleccionar el nombre que queremos asignar al dominio y el nombre completo del dominio

<img src="./media/image37.png"
style="width:4.33394in;height:4.86526in" />
