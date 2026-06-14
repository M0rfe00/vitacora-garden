---
tags:
  - Informática
  - Teoria
---
# **Direccionamiento IP:**
___
- Vamos a repasar como hacer el direccionamiento de red y a dar algunos consejos para ello.

## **Dirección IP:**

- Compuesta por 32 bits agrupados en 4 octetos separados por un punto entre si

- **Ejemplo**: 10100000.00011000.00000000.00000011

# **Mascara de red:**

- Compuesta 32 bits agrupados en 4 octetos separados por un punto, dividida en bits de red (1) y bits de host (0), identifica la subred y se suele representar después de la dirección IP con una barra lateral indicando después el número de bits de red que tiene

- Ejemplo mascara: 11111111.11111111.11111111.00000000

- Ejemplo IP: 192.169.32.4 / 24

- El “/24” nos indica que esta dirección IP tiene 24 de sus 32 bits a 1 es decir de red

## **Bits de la mascara**

## **Bits de Red:**

- Bits de la máscara destinados a identificar la red, están a 1 y siempre están a la izquierda

## **Bits de Host:**

- Bits de la máscara destinados a la asignación de IP a los equipos en la red, están 0 y siempre están a la derecha

- 11111111.11111111.11111111.10000000

## **Conversión binario-decimal de octetos:**

- Los octetos son agrupaciones de 8 bits en binario, para pasar estos octetos a decimal podemos utilizar la siguiente plantilla:

| 128 | 64  | 32  | 16  | 8   | 4   | 2   | 1   |
| --- | --- | --- | --- | --- | --- | --- | --- |

(Esta plantilla no es más que 8 potencias de 2 ordenadas de menor a mayor)

- Después de escribir la plantilla escribimos el octeto binario en orden justo debajo de la plantilla haciendo coincidir los números, para hacer la conversión sumamos los valores de la plantilla que debajo tengan un 1 e ignorando los que tengan un 0

**Ejemplo:**

| 128 | 64  | 32  | 16  | 8   | 4   | 2   | 1   |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1   | 1   | 0   | 0   | 0   | 1   | 0   | 1   |

128 + 64 + 4 + 1 = 197

- Para hacer el proceso inverso y poder pasar de decimal a binario escribimos la plantilla y descomponemos en números decimal en la suma de los números de la plantilla, escribiendo un 1 en los números que lo compongan y un 0 en los que no

- **Ejemplo:** Si queremos pasar 172 a binario, lo descomponemos en la suma de los números de la tabla, en este caso 128 + 32 + 8 + 4, escribimos la plantilla y ponemos un 1 en estos números y 0 en el resto

| 128 | 64  | 32  | 16  | 8   | 4   | 2   | 1   |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1   | 0   | 1   | 0   | 1   | 1   | 0   | 0   |


## **Identificar la clase de la IP:**
___
Las direcciones IP están clasificadas según el uso al que están destinados, para identificarlas tenemos que fijarnos en el primer octeto, esto nos sirve además para conocer la máscara de subred predeterminada de la dirección de red, ergo el numero de bits de red y host


|     | Primer octeto (Intervalo) | N.º de bits de red de la mascara |
| --- | ------------------------- | -------------------------------- |
| A   | 0 – 127                   | 8 bits                           |
| B   | 128 – 191                 | 16 bits                          |
| C   | 192 – 223                 | 24 bits                          |

**Ejemplo:**

**173**.164.201.9

Fijándonos en el primer octeto observamos que está dentro del rango de la clase B, por lo que podemos saber que su mascara predeterminada es de / 16 bits de red

11111111.11111111.00000000.00000000

Un truco para memorizar el N.º de bits de red de cada clase sirve fijarse que según se va avanzando alfabéticamente en las clases se añaden 8 bits de red.



# **Crear subredes**
___
Crear subredes consiste en alterar los bits de la máscara y modificar la dirección de red para obtener una nueva dirección de red que dé cabida a un número determinado de host dentro de la red o crear una cantidad determinada de subredes a partir de la dirección original.


## **Crear subredes teniendo en cuenta el número de host/equipos:**
___
- Si nos piden crear una subred que dé cabida a un determinado número de host debemos modificar el número los bits de host de la máscara para obtener una dirección que dé cabida a la cantidad solicitada

- Para calcular el número de bits de host necesarios para dar cabida a una determinada cantidad de host sirve la siguiente formula:

- N.º de bits**2** = Numero de host – 2

- **Ejemplo:** 
	- Si nos dan la dirección 192.158.20.0 y nos piden crear una subred que dé cabida a 30 equipos
	
	- Identificamos la clase, en este caso (C), por lo que la mascar tiene 3 bits de red (1) y 1 de host (0)
	
	- Para dar cabida a 30 equipos necesitamos 5 bits, (25 =32, 32-2 = 30), con 5 bits damos cabida a 30 host
	
	- Modificamos el octeto con los bits de host: 11111111.11111111.11111111.**00000000**
	
	- Al haber cedido 5 bits de host a red debemos añadir 5 bits de red más a la máscara pasando de ser /24 a /29

 

## **Crear subredes teniendo en cuenta el número de subredes:**
___
- Si nos dan una dirección IP y nos piden crear un número determinado de subredes a partir de ella, debemos modificar el número de bits de red y host, para calcular el número de bits necesarios para crear un número determinado de subredes utilizamos la formula:

- N.º bits 2 = N.º de subredes

- **Ejemplo:**
	- Nos dan la dirección 176.143.0.0/16 crea 10 subredes
	
	- Para crear 10 subredes necesitamos 4 bits (42= 16)
	
	- Modificamos 4 bits de host de la máscara cediéndoselos a los bits de red 11111111.11111111.**00000000.00000000**
	
	- Al haber cedido 4 bits de host a los bits de red tenemos que añadir 4 bits de red a la máscara, pasando a ser de /16 a /20


## **Crear redes desde 0**
___
- En caso de que nos soliciten crear una red a partir de la cual trabajar, deberemos crearla nosotros mismos

- Para ello debemos tener en cuenta el número de equipos que queremos dar cabida

- Un método podría ser elegir la clase IP que mejor nos convenga dependiendo de su mascara predeterminada, ya que esta nos indican el n.º de host posibles dentro de la red

- Y hacer subredes a partir de esta red


- **Ejemplo:**

	- Necesitamos una red que, de cabida a 40 equipos, para ello utilizamos una clase c:
	- Dirección red: 182.168.20.0/24
	- Mascara red: 11111111.11111111.11111111.00000000
	- Para dar cabida a 40 equipos necesitamos 6 bits de host
	
	- (2nºbits   -2 = n.º de host asignables dentro de una red)
	- Por lo que modificamos la máscara de red anterior para tener únicamente 6 bits de host
	- Anterior Máscara red: 11111111.11111111.11111111.**00000000**
	- Actual Máscara red: 11111111.11111111.11111111.11**000000**
	
	- Una vez modificada la máscara modificamos el octeto correspondiente en la dirección de red para obtener la subred
	- Dirección red: 182.168.20.**0**/24
	- Dirección red: 182.168.20.**0**/26
	- El rango asignable se nos quedaría así:

| **Dirección de red** | 182.168.20.**0**/26 |
| -------------------- | ------------------- |
| **Primer host**      | 182.168.20.1/26     |
| **Ultimo host**      | 182.168.20.62/26    |
| **D. Broadcast**     | 182.168.20.63/26    |


# **Intervalo entre Subredes:**
___
- Distancia numérica entre subredes creadas a partir de la misma dirección de red, es decir donde acaba una y empieza la siguiente, esto nos sirve para calcular el rango de asignación de direcciones IP y calcular de forma más ágil una subred en concreto

- Para calcular el intervalo entre subredes, nos fijamos en tras que numero se ha quedado la frontera al hacer la subred a partid de una dirección de red

- **Ejemplo:**
	- Tenemos la siguiente mascara de red y dirección IP
	- 128.80.5.1 /16
	- 11111111.11111111.**00000000.00000000**
	- La modificarla para hacer una subred, movemos la frontera 4 bits, quedando así:
	- 11111111.11111111.**00000000.00000000**
	- Al quedar la frontera tras el 4º bit del octeto y saber que la equivalencia de 4º bit con la plantilla es 16, podemos saber que las subredes van de 16 en 16
	- Siendo:

| N.º Subred | Dirección IP |
| ---------- | ------------ |
| Primera    | 128.80.0.0   |
| Segunda    | 128.80.16.0  |
| Tercera    | 128.80.32.0  |

- Para calcular una subred en concreto multiplicamos el N.º de subred por el intervalo entre subredes

- Utilizando la red anterior si quisiésemos calcular la quinta subred multiplicamos (5 x 16 =80)

- Siendo la quinta subred la 128.80.80.0

 

# **Rango de asignación IP:**
___
- Intervalo de direcciones IP asignables a host dentro de una red

- Cogiendo como ejemplo la quinta subred del apartado anterior sabemos que su dirección de red es la: 128.80.80.0

- Para saber el rango asignación sumamos a el intervalo entre redes a la dirección de red
- 128.80.**80.0** + **16.0 =** 128.80.96.0
- Al hacer esta operación obtenemos la siguiente subred, lo que nos permite conocer donde acaba nuestra dirección de red (justo antes de la siguiente)
- El primer se obtiene al sumar un bit a la dirección de red: **128.80.80.0 + 0.0.0.1**
- La dirección de broadcast se obtiene al restar un bit a la siguiente subred:**128.80.96.0 – 0.0.0.1**
- El ultimo host se obtiene al restar un bit a la dirección de broadcast: **128.80.95.256 – 0.0.0.1**

| Dirección de red | 128.80.80.0   |
| ---------------- | ------------- |
| Primer Host      | 128.80.80.1   |
| Ultimo Host      | 128.80.95.255 |
| Broadcast        | 128.80.95.256 |

 

# **Porcentaje adicional (10%)**
___
- A la hora de crear subredes debemos tener en cuenta un 10% adicional a lo que nos pidan para evitar problemas

	- A) Si nos piden crear 10 subredes deberemos crear un 10% adicional, en este caso serian 11 subredes

	- B) Si nos piden crear subredes que den cabida a 30 host, realmente nos están pidiendo crear subredes que den cabida a 33 host

- Para calcular el porcentaje adicional multiplicamos la cantidad que nos piden(x) por 10 y los dividimos entre cien y sumamos el resultado a la cantidad inicial
	- Ejemplos:
		- A)     (10 x 10) /100 +10 = 11
		- B)     (10 x 30) /100 + 30 = 33


# **Modelo TCP/IP**
___
**Es un modelo arquitectónico de redes de ordenadores basado en capas o niveles,**

**Surgió como mejora del modelo OSI**
![[Capas TCPIP 20250709012202.png]]

TCP/IP determina **cómo los ordenadores transfieren datos** de un dispositivo a otro. Estos datos deben ser exactos para que el receptor obtenga la misma información enviada por el emisor.

Para garantizar que cada comunicación llegue intacta al destino deseado, el modelo TCP/IP divide los datos en _paquetes_ y luego los vuelve a juntar para formar el mensaje completo en el destino. Enviar los datos en paquetes pequeños hace que sea más fácil mantener la exactitud que enviando todos los datos a la vez.

### **¿Cómo funciona el modelo TCP/IP?**

Cuando envía algo por Internet, ya sea un mensaje, una foto o un archivo, el modelo TCP/IP divide esos datos en paquetes según un procedimiento de cuatro capas. Los datos primero atraviesan estas capas en un sentido, y luego lo hacen en sentido contrario cuando los datos se vuelven a juntar en el destino.
![[Capas TCPIP 20250709012218.png]]

#### **Capa 1: Enlace**
**gestiona la infraestructura física** que permite a los ordenadores comunicarse entre sí por Internet. Esto abarca, entre otros elementos, cables Ethernet, redes inalámbricas, tarjetas de interfaz de red

#### **Capa 2: Red**
**controla el flujo y el enrutamiento de tráfico** para garantizar que los datos se envían de forma rápida y correcta. Esta capa también es responsable de volver a juntar el paquete de datos en el destino.

#### **Capa 3: Transporte**
**proporciona una conexión de datos fiable** entre dos dispositivos. Es como enviar un paquete asegurado: la capa de transporte divide los datos en paquetes, confirma los paquetes que ha recibido del remitente y se asegura de que el destinatario confirme los paquetes recibidos por su parte.

#### **Capa 4: Aplicación:**
es el grupo de aplicaciones que **permite al usuario acceder a la red**. Para la mayoría de nosotros, esto significa el [correo electrónico](https://www.avg.com/es/signal/tag-email), las [aplicaciones de mensajería](https://www.avg.com/es/signal/secure-message-apps) y los programas de almacenamiento en la nube. Esto es lo que el usuario final ve y con lo que interactúa al recibir y enviar datos.

### **Puertos:**
Están formados por 16 bits (0000000000000000 – 1111111111111111)

De la misma forma que las direcciones IP sirve para identificar equipos dentro de una red, el puerto sirve para identificar una aplicación/Proceso dentro de un equipo

Los clientes han de saber a que puerto del servidor dirigir las peticiones

Los servidores han de saber por que puerto reciben las peticiones de los clientes y escuchar por ellos

Si a un servidor le llega una petición a un puerto por el que no esta escuchando esta es ignorada

#### **Tipos de Puertos:**

##### **Bien conocidos:**
Van desde el 0 hasta el 1023, son aquellos reservados para los protocolos, programas y servicios establecidos universalmente y conocidos por todos, Solo pueden ser asignados por usuarios root, ya que su uso indebido podría generar problemas de seguridad

##### **Puertos registrados:**
están asignados por la [IANA](https://www.iana.org/assignments/service-names-port-numbers/service-names-port-numbers.xhtml) y van desde el 1024 hasta el 49151, son los utilizados por las aplicaciones cuando queremos conectarnos a ellas, como juegos, aplicaciones de mensajería etc.

##### **Puertos efímeros o dinámicos**.
Van desde el 49152 hasta el 65535 y son unos puertos temporales de usar y tirar que el sistema operativo asigna a las aplicaciones cuando los necesitan. Una vez que la conexión ha terminado ese puerto queda libre y puede ser reutilizado nuevamente por cualquier otra aplicación.

| **Puerto**         | **desde** | **hasta** |
| ------------------ | --------- | --------- |
| **Bien conocidos** | **0**     | **1023**  |
| **Registrados**    | **1024**  | **49151** |
| **Efímeros**       | **49151** | **65535** |




# **Ejercicios resueltos**
___
### **Prueba DHCP, A**
**Dada la dirección 192.158.20.0 crea subredes para almacenar 30 equipos en cada una de ellas, quédate con la primera**
___
**Fijándonos en el primer octeto observamos que es una clase C, es decir tiene 3 octetos de red y 1 de host, /24**

**Mascara: 11111111.11111111.11111111.00000000**

**Nos piden 30 host, calculamos el 10% adicional, 33 host, para dar cabida a 33 host necesitamos 6 bits de host**

**Mascara: 11111111.11111111.11111111.00000000**

**Modificamos la mascara y el octeto correspondiente en la red**

**Red anterior: 192.158.20.0/24**

**Red actual:    192.158.20.0/26**

| **Dirección de red** | **192.158.20.0/26**  |
| -------------------- | -------------------- |
| **Primer host**      | **192.158.20.1/26**  |
| **Ultimo host**      | **192.158.20.62/26** |
| **D. Broadcast**     | **192.158.20.63/26** |

### **Prueba DHCP Instituto**
**Dada la dirección 192.168.200.0, haz 6 subredes y quédate con la segunda**
___
**La IP es una clase C, /24**

**Mascara: 11111111.11111111.11111111.00000000**

**Nos piden 6 subredes, calculando el 10% adicional tenemos que crear 7 subredes**

**Para crear 7 subredes necesitamos 3 bits**

**Modificamos la dirección de red y la mascara**

**Mascara: 11111111.11111111.11111111.00000000**

**Para sacar la segunda multiplicar 2 por 32   = 64**

**(numero de la subred por el intervalo entre subredes)**

**Red anterior: 192.168.200.0/24**

**Segunda subred: 192.168.200.32/27**

| **Dirección de red** | **192.168.200.32/27** |
| -------------------- | --------------------- |
| **Primer host**      | **192.168.200.32/27** |
| **Ultimo host**      | **192.158.20.62/27**  |
| **D. Broadcast**     | **192.158.20.63/27**  |

### **Ejercicio DHCP y DNS Windows, A**
**Dada la dirección 176.143.0.0 realiza 10 subredes, quédate con la cuarta**
___
**Fijándonos en el primer octeto observamos que es una clase B, es decir tiene 2 octetos de red y 2 octetos de host**

**Mascara: 11111111.11111111.00000000.00000000**

**Nos piden 10 subredes, calculando el 10% adicional tenemos que obtener 11 subredes**

**Para crear 11 subredes necesitamos 4 bits**

**Modificamos la dirección de red y la mascara**

**Mascara: 11111111.11111111.00000000.00000000**

**Observamos al quedarnos con el cuarto bit, que equivale a 16 y queremos obtener la cuarta subred multiplicamos 16 x 4**

**(intervalo entre subredes por el numero de la subred)**

**Modificamos el octeto correspondiente, en este caso el tercero e introducimos el valor que hemos obtenido al calcular la cuarta subred (64.0)**

**Al modificar 4 bits se los añadimos a la máscara, pasando de /16 a /20**

**Red anterior: 176.143.0.0/16**

**Segunda subred: 176.143.64.0/20**

| **Dirección de red** | **176.143.64.0/20**   |
| -------------------- | --------------------- |
| **Primer host**      | **176.143.64.1/20**   |
| **Ultimo host**      | **176.143.79.255/20** |
| **D. Broadcast**     | **176.143.79.256/20** |

### **Ejercicio DHCP, DNS y WEB**
**Dada la dirección 172.124.1.5 crea 12 subredes, quédate con la tercera**
___
**Es una clase B, /16**

**Mascara: 11111111.1111111.00000000.00000000**

**Para crear 16 subredes necesitamos 4 bits**

**Modificamos la dirección de red y la mascara**

**Mascara: 11111111.1111111.00000000.00000000**

**Para obtener la cuarta subred multiplicamos 4 por 16 = 64**

**(intervalo entre subredes por el numero de la subred)**

**Modificamos el octeto correspondiente, en este caso el tercero y cuarto e introducimos el valor que hemos obtenido al calcular la cuarta subred (64.0)**

**Al modificar 4 bits se los añadimos a la máscara, pasando de /16 a /20**

**Red anterior: 172.124.1.5/16**

**Segunda subred: 172.124.64.0/20**

| **Dirección de red** | **172.124.64.0/20**   |
| -------------------- | --------------------- |
| **Primer host**      | **172.124.64.1/20**   |
| **Ultimo host**      | **172.124.79.255/20** |
| **D. Broadcast**     | **172.124.79.256/20** |

