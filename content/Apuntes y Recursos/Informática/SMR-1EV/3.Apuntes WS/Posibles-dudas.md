## **Visibilidad entre maquinas**

**Para que el servidor y el cliente puedan verse ambos deben de estar la
misma red, en nuestro caso lo haremos configurando la maquina servidor y
cliente en red interna desde la configuración de VirtualBox, para
acceder a la configuración de la maquina hacemos Ctrl+S seleccionando la
máquina, una vez dentro seleccionamos el apartado Red y en el
desplegable “Conectado a:” Seleccionamos Red Interna**

<img src="./media/image1.png"
style="width:3.82994in;height:2.48514in" />

## **Posibles errores:**

- Las maquinas no están en la misma red, esto puede ser por que una este
  en red interna o NAT

- El cliente tiene un IP estática por lo que no se le puede asignar una
  dirección por DHCP, esto puede solucionarse configurando las opciones
  de red del cliente y seleccionar “Obtener una dirección IP
  automáticamente”

- El DHCP no asigna IPs a los clientes, puede ser por que no esté bien
  configurado, mi consejo es borrar el ámbito y comprobar que el
  direccionamiento esta bien calculado y la IP asignada al servidor es
  correcta

## **Instalar Guest Adittions**

Las Guest adittions son características adicionales que no tienen las
máquinas virtuales por defecto, tales como establecer pantalla completa,
crear carpetas compartidas, opciones de teclado etc.…

Para instalarlas debemos ir a la parte superior del hud de VirtualBox en
la sección **dispositivos** -\>” **Upgrade Guest Adittions**…”

<img src="./media/image2.png"
style="width:5.38761in;height:2.66962in" />

Una vez hemos hecho el paso anterior nos descargara las guest adittions,
para instalarlas debemos darle al dispositivo creado en el equipo

<img src="./media/image3.png"
style="width:5.34818in;height:4.01931in" />

Al darle nos abrirá el instalador

<img src="./media/image4.png"
style="width:4.79538in;height:3.74319in" />

Seleccionamos donde queremos que se instale

<img src="./media/image5.png"
style="width:4.76551in;height:3.72793in" />

Debemos elegir que componentes adicionales queremos instalar y
continuamos

<img src="./media/image6.png"
style="width:4.72844in;height:3.68379in" />

Para terminar la instalación debemos reiniciar

<img src="./media/image7.png"
style="width:4.83468in;height:3.79667in" />

## **Crear carpetas Compartidas**

**Las carpetas compartidas son ficheros a los que se puede acceder tanto
desde una máquina virtual como desde el ordenador real**

Para crear una carpeta compartida, vamos a la parte superior del hud de
VirtualBox en el apartado dispositivos -\> Carpetas compartidas -\>
Preferencias de carpetas compartidas

<img src="./media/image8.png"
style="width:5.90556in;height:2.58958in" />

Esto nos abrirá el panel para crearlas, para ello le damos al icono de
la carpeta+

<img src="./media/image9.png"
style="width:5.45971in;height:3.60043in" />

Esto nos abrirá la configuración para crear una carpeta compartida, en
la que debemos especificar la ruta del ordenador principal que vamos a
utilizar para hacer de nexo entre el ordenador y la maquina virtual,
nombre de la carpeta, y seleccionar las casillas Automontar y hacer
permanente, una vez rellenemos todo y tendremos la carpeta compartida
creada.

<img src="./media/image10.png"
style="width:3.35463in;height:2.42742in" />

Para comprobar que se ha creado correctamente vamos a la ruta que hemos
creado y comprobamos que podemos acceder a los ficheros del ordenador
principal

<img src="./media/image11.png"
style="width:4.19096in;height:3.14864in" />
