---
tags:
  - Informática
  - Wind-Server
---
# **Windows server**

**Windows server es un sistema operativo servidor, esto quiere decir que su función es proporcionar servicios a otros sistemas operativos clientes**

**Modelo Cliente servidor**

# **Instalacion Windows server:**

## **Para Sistemas en red:**

**Se ha acordado utilizar la ISO de Window Server 2016, por lo que tenemos que instalar la ISO y hacer la configuración**

**Para instalar Windows Server 2016 mediante la imagen ISO en VirtualBox, seleccionamos Maquina -\> Nueva**

### **Automática:**

<img src="./media/image1.png"
style="width:5.64662in;height:2.38575in" />

**Esto nos abrirá la ventana para crear una nueva máquina virtual, aquí
debemos ponerle nombre a la máquina, especificar donde se van a
almacenar sus archivos y la ubicación de la imagen ISO.**

<img src="./media/image2.png"
style="width:5.59717in;height:3.13162in" />

**En el siguiente apartado debemos indicar un Nombre de usuario, su
respectiva contraseña y si queremos instalar las guest adittions**

<img src="./media/image3.png"
style="width:5.59891in;height:3.11943in" />

**En el apartado Hardware debemos indicar la memoria RAM de la maquina y
CPU**

<img src="./media/image4.png"
style="width:5.55888in;height:3.08602in" />

**En el apartado disco duro virtual debemos indicar, si queremos crear
un disco duro virtual o no, la capacidad del mismo, usar uno ya
existente..**

<img src="./media/image5.png"
style="width:5.90556in;height:3.35278in" />

**El apartado de Resumen es el último de configuración de la maquina
antes de iniciarla y proceder a la instalación del sistema, y nos
muestra un resumen de la configuración**

<img src="./media/image6.png"
style="width:5.90556in;height:3.28958in" />

**Tras la configuración de la maquina se abrirá y empezará la
instalación de Windows automáticamente**

<img src="./media/image7.png"
style="width:5.90556in;height:3.19514in" />

### **Manual:**

<img src="./media/image8.png"
style="width:5.46951in;height:2.42742in" />

**Esto nos abrirá la ventana para crear una nueva máquina virtual, aquí
debemos ponerle nombre a la máquina, especificar donde se van a
almacenar sus archivos y la ubicación de la imagen ISO, en este caso al
hacer la instalación de forma manual, marcaremos “Skip unattended
Installation”, lo que nos permitirá configurar cosas como las
particiones durante la instalación.**

<img src="./media/image9.png"
style="width:5.90556in;height:3.27222in" />

**En el apartado Hardware debemos indicar la memoria RAM de la maquina y
CPU**

<img src="./media/image10.png"
style="width:5.90556in;height:3.26042in" />

**En el apartado disco duro virtual debemos indicar, si queremos crear
un disco duro virtual o no, la capacidad del mismo, usar uno ya
existente.**

<img src="./media/image11.png"
style="width:5.90556in;height:3.27708in" />

**El apartado de Resumen es el último de configuración de la maquina
antes de iniciarla y proceder a la instalación del sistema, y nos
muestra un resumen de la configuración**

<img src="./media/image12.png"
style="width:5.90556in;height:3.26875in" />

**Tras la configuración de la maquina hay que abril y seleccionar el
idioma y formato de hora antes de iniciar la instalación**

<img src="./media/image13.png"
style="width:5.90556in;height:3.83333in" />

**Le damos a Instalar ahora**

<img src="./media/image14.png"
style="width:5.90556in;height:3.83333in" />

**En el apartado de clave de producto seleccionamos “No tengo clave de
producto” y aceptamos los términos**

<img src="./media/image15.png"
style="width:5.90556in;height:3.78125in" />

**En el tipo de instalación seleccionamos “Personalizada”**

<img src="./media/image16.png"
style="width:5.90556in;height:3.76389in" />

**Para seleccionar un disco en el que instalar el sistema primero
debemos darle formato, seleccionamos el disco que queremos, le damos a
nuevo, especificamos el tamaño que queremos darle y aplicamos.**

**En caso de querer crear una partición deberíamos indicar un tamaño
inferior al tamaño total del disco original para crear dos unidades y
posteriormente darle formato.**

<img src="./media/image17.png"
style="width:5.90556in;height:3.75694in" />

<img src="./media/image18.png"
style="width:5.32366in;height:2.21906in" />

**Tras la configuración manual comenzara la instalación del sistema.**

<img src="./media/image19.png"
style="width:5.90556in;height:3.77361in" />

**después debemos seleccionar una contraseña para el usuario
administrador.**

<img src="./media/image20.png"
style="width:5.90556in;height:3.79097in" />

**Después nos va a pedir cambiar la contraseña**

<img src="./media/image21.png"
style="width:5.90556in;height:3.78542in" />

**La primera vez que iniciemos el sistema nos saldrá un aviso que nos
pregunta si queremos que nuestro PC pueda ser visto por el resto de
equipos de la red, marcamos que si**

<img src="./media/image22.png"
style="width:2.31005in;height:2.83827in" />

**Es posible que nos pida configurar Windows essentials, en dicho caso
le damos a cancelar ya que algunas ISOs crashean durante la
configuración**
