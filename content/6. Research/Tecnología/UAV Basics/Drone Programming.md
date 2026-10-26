Overview of the open source flight stack that is popular amongst both commercial interests (companies) and hobbyists.. And its all FREE!

![[Pasted image 20261026095744.png]]

In this course, we will use a simulated drone (called SITL) that will use our flight stack and will allow us to test any code that we develop.

Sections:
![[Pasted image 20261026095847.png]]

*Requires basic Linux knowledge*
*Requires basic Python knowledge*


External documentation:
- ArduPilot, MAVLink, MAVProxy and DroneKit all have EXCELLENT documentation
- Provided links to the documentation throughout the lectures
- You will become a drone wizard if you learn to use the documentation for independent learning!

# Flight Stack structure
___
### Basic Structure:
___
![[Pasted image 20261026100216.png]]

La estructura típica se basa en un Drone, una Ground control station y una capa de comunicacion que les permite comunicarse entre ellos, compartiendo información como voltaje de la bateria, enviar comandos al dron.

En este diagrama cuanto mas arriba este mas nivel de abstracción hay, es decir, sistemas que dependen de otros sistemas de nivel inferior. 

## ==Drone Layer:==
___
![[Pasted image 20261026100607.png]]

==**Drone Hardware:**== En el nivel mas bajo de abstracición tenemos el hardware del dron, el motor, los propelers, el frame. GPS, ESC, modulos de telmetria...

==**FC Hardware:**== En el segundo nivel tenemos el hardware de controlador de vuelo / autopilot, todos los compenentes basicos del dron se conectan a este hardware. algunos populares son el Pickhawk y Navio2.

==**FC Software:**== El hub/hardware es usado por la capa superior de software de controlador de vuelo / autipilot, este software es esencialmente codigo compilado que se carga en el hardware del flight controller para controlar los componentes basicos del dron, es decir el software es el que aplica la lógica para que el dron vuele. 
Los 2 principales proyectos de código de abierto de software de autopilot son Ardu Pilot y PX4, este ultimo surgio como spinof de Ardupilot y es utilizado principalmente por empresas que quieren realizar cambios en el código original sin necesidad de publicarlos, operando con una licencia BSD, por otro lado Ardupilot usa GPL, sin embargo su funcionamiento es fundamental el mismo.

### Software in The Loop (SITL)
___
![[Pasted image 20261026105444.png]]

Es perfectamente posible tener un dron stack reemplazando el hardware del drone y el controlador de vuelo con una instance de software in the loop (SITL), una simulación de un dron que se ejecuta virtualmente y ejecuta Ardupilot/PX4 sin necesidad de construir un dron o comprar todos los componentes hasta por fin empezar a programar, el mismo codigo que use el STIL funciona en un dron real, lo que permite practicar y probar en software y después transferir el código a hardware real.

## ==Comunication Layer==
___
![[Pasted image 20261026105943.png]]

Usualmente llamada middelware o comunication layer, es simplemente un protocolo estándar para que la ground control station y el autopilot software puedan comunicarse entre sí.

Por ejemplo; si la ground control station quiere que el dron aterrice, usara el comando 21 del protocolo MAVLink, el cual sera empaquetado y enviado al dron a traves de la capa de comunicación diciéndole al dron que debe aterrizar.

## ==Ground Control Station==
___
![[Pasted image 20261026110446.png]]

==**GSC Hardware:**== En el nivel mas bajo siempre hay un ordenador con un modulo de telemetría incorporado, a su vez en el dron en el hardware de autopilot habrá otro modulo que se comunicara con este, normalmente a 915MHz/433MHz usando el protocolo MAVLink.

==**GCS Software:**== Es la capa de interfaz de usuario, las principales interfaces de GCS son QGroundControl, APM Planner y Mission Planner, siendo los dos primeros exclusivos de Linux y el ultimo de Windows, escencialmente todas son interfaces de usuario que utilizan el protocolo MAVLink permitiendo empaquetar y enviar un mensaje MAVLink al dron mediante interfaz grafica. 
También existe Dronekit, el cual se diferencia por no ser una GUI (no tener interfaz) sino que permite enviar paquetes MAVLink empaquedatos via scripts de Python, es decir permite controlar el dron mediante lineas de codigo python sin necesidad de C++.

## Real World VS Simulated Setup
___
Real world: costoso, necesidad de mucho hardware...
![[Pasted image 20261026111552.png]]

Simulated: Gratuito, código abierto, industry standard
![[Pasted image 20261026111654.png]]

# ARDUPILOT
___
### Por que es necesario:
- Estimate vehicle location and orientation (angles) in 3D space from the various sensor inputs and calculations (GPS, Gyroscopes, Accelerometers, barometer, Magnetometer etc) so the drone knows where it is
- Automatically adjust motor output to compensate for any measured error. For example, if the drone is supposed to be level but is at a 2 degree incline, the FC software will adjust the output of the motors to strive for no incline (without the pilot having to do anything)
- Provides different flight modes for different vehicle behavior
- Much more..

![[Pasted image 20261026112130.png]]

### Su Historia
![[Pasted image 20261026112228.png]]
- Started from Lego Mindstorm UAV creation by Chris Anderson: 2007
- Inspired DIYDRONES.com (Also Chris Anderson): 2007
- Chris Anderson and Jordi Munoz found 3D Robotics or 3DR: 2009
- First ArduPilot inspired hardware was released: 2009
- Open source code repository for ArduPilot was created by Jordi: 2009
- New ArduPilot inspired autopilot hardware released consistently
- Last ArduPilot developed hardware was the APM 2.5/2.6, they have since focused on the software side: 2012
- 3DR was initially a primary factor in the progression of ArduPilot, but has since focused on its own flight stack/hardware PX4. Today, PX4 and ArduPilot are more distinctly separate entities
Source: http://ardupilot.org/planner2/docs/common-history-of-ardupilot.html

>[!Info] Nomencaltura Semantica Ardupilot:
>- The autopilot hardware and software of ArduPilot were one in the same in the beginning
>- This meant the hardware name of APM (ArduPilotMega) was synonymous with the software name too
>- While the APM hardware is no longer being made (as the community ramped up its production of hardware), "APM" is a remnant of the past that is still used to refer to the ArduPilot software
>Jargon: (noun) specialist vocabulary for a particular subject or profession.

>[!Info] Nomencaltura Semantica Ardupilot:
>- Similarly to APM and Ardupilot, PX4 initially represented both autopilot hardware and software.
>- Today, PX4 refers to the PX4 autopilot software, while pixhawk refers to the open source hardware
>- This can be confusing if you visit the pixhawk.org website (PX4 is the logo)
>- NOTE: I may even have some of the historical originations of the Jargon mixed up

A día de hoy (2019):
- Over 700,000 lines of code
- Advanced Kalman Filter to fuse the myriad of sensor inputs into one attitude/position estimation
- Supports 7 different vehicle types (Multirotor, Helicopter, Fixed wing, VTOL, Rover, Submarine, Antennae Tracker)
- Pioneering Linux based autopilot hardware
- Active community of talented developers working on new features/maintaining the code, as well as implementing 3rd party hardware (such as POZYX or IR-LOCK)
- Rapidly lowering the barrier of entry into the drone world, encouraging higher level innovation

Desarrolladores:
- With the rapid increase of autopilot hardware builders, ArduPilot gets to focus its efforts exclusively on the software
- Industry leading drone delivery company Matternet used ArduPilot to deliver a coffee to the roof of a Mercedes
- In the past you could buy a commercial autopilot, but it was US$10,000 for a cheap one and $100,000 for a good one. By 2012-2013, ArduPilot had advanced to the point where it had most of the features that those more expensive autopilots did"

Sources: 
- https://discuss.ardupilot.org/t/impressive-ardupilot-based-drone-delivery-demo/22491
- https://www.interdrone.com/news/surveying-mapping/craigelder-talks-the-future-of-ardupilot-outside-of-dronecode/

Drone Industrial Boom:
- We are on the cusp of rapid integration of drones into our everyday lives.
- The every day interaction with drones with everyday people may be farther away than the current hype, but it is coming.
- This is THE time to learn the tools that are laying the foundation for the adoption of drones by the masses
- Lets prepare for tomorrow by learning the skills today!


# GROUND CONTROL STATIONS
___
How they talk with drones
- Generally speaking, it is an interface to the drone that gives the pilot/drone user a way of communicating with the drone.
- This interface can be used to command the drone or simply receive informational updates (GPS Health, battery levels, ground speed etc)
- GCS can refer to the hardware setup of the ground control station, or the high level software that presents all the incoming data with a GUI.

![[Pasted image 20261026114349.png]]

>[!Example] Drone & GCS comunication Example
>Para hablar con el dependiente de una tienda deberemos:
>![[Pasted image 20261026114542.png]]
>- High level: Empezaras hablando con el dependiente.
>- Medium level: para entendernos hablaremos el mismo idioma.
>- Low level: Para hacer llegar nuestros mensajes generaremos sonidos mediante nuestras cuerdas vocales.
>
>Para aterrizar el drone deberemos:
>![[Pasted image 20261026115026.png]]
>Ground Control Station:
>- High level: Escribiremos un comando a traves de MAVProxy / Usaremos la interfaz grafica de QGroundControl para decirle al dron que aterrice.
>- Medium Level: La solicitud de el dron aterrice se enviara a través del protocolo MAVLink
>- Low level: el paquete MAVLink se enviara a traves del enlace entre los modulos de telemetria del drone y el GCS, o a traves del Protocolo IP (TCP and UDP).
>
>Drone
>- Low level: El dron recibe el paquete a través de su modulo de telemetría
>- Medium Level: Interpreta el mensaje MAVLink y enviara el mensaje a Ardupilot, el cerebro
>- Hight Level: El cerebro, Ardupilot recibe el mensaje de aterrizaje y buscara el codigo determinado para ejecutar esa instrucción


# MAVLINK
___
1. Standardizes the communication protocol for sending information
2. Standardizes the types of messages that can be sent
3. Allows for bi-directional communication between GCS and drone (both can send and receive MAVLink messages)

>[!Example] Comunicaction analogy
>Tenemos dos personas que quieren comunicarse, para ello pueden hacerlo hablando y entendiendo que dice la otra persona, diseccionando esta interacción seria algo así;
>![[Pasted image 20261026134628.png]]
>
>Sound Layer: cuerdas vocales que pueden crear sonidos que pueden ser transmitidos por el espacio hasta los oidos del receptor cuyo cerebro interpretara y analizara.
>
>Word Layer: No podemos hacer cualquier sonido y esperar que la otra persona lo entienda, para ello necesitamos el lenguaje, una lista de palabras con un significado objetivo que tambien tienen un sonido caracteristico y patron que podemos crear con nuestras cuerdas vocales, captar y interpretar con el cerebro.

>[!Info] MAVLink comunication
>![[Pasted image 20261026135146.png]]
>Cuando dos MAVic tratan de comunicarse entre si, en este caso un GSC y un Drone:
>- Necesitamos un medio consistente para comunicarnos con el nivel inferior, para ello usamos la estructura de mensajes de MAVLink.
>- Cada mensaje MAVLink tiene la misma estructura permitiendo a empaquetar información de forma consistente y recibir notas para analizar la información entrante de forma consistente. 
>- Proveemos variabilidad dentro de los mensajes MAVLinkn de forma consistente al modificar el ID del mensaje.
>- Los Message ID son las palabras del sistema MAVLink, cada mensaje MAVLink contiene un número que representa el mensaje MAV enviado.
>- Estos mensajes tienen un significado objetivo.
>

Layer 1:
Standardizes the communication protocol for sending information
- How do we gather useful information from a bunch of 1s and Os?
- SystemID: Typically 255 for GCS and 1 for drone

![[Pasted image 20261026140201.png]]

![[Pasted image 20261026140217.png]]
Layer1: Message Structure
Source: https://discuss.ardupilot.org/t/mavlink-step-by-step/9629

Cada mensaje MAV siempre consta de una cabecera de 6 bytes, el tamaño del mensaje puede variar entre 8 y 263 bytes, dependiendo del tipo de message id usado.

1º byte: indica el numero hexadecimal de OxDE, sin ello el dron no sabe interpretarlo como un mensaje MAV.
2º byte: indica la longitud del mensaje
3º byte: indica la secuencia de paquetes y se puede usar la perdida de paquetes y por lo tanto la fiabilidad del mensaje
4º byte: system ID, sirve como analogía a la dirección IP.
5 byte; Component ID, sirve como analogía del nº de puerto, normalmente esta en 0 ya que no se suele usar, permite especificar a que parte especifica del dron se quiere enviar.
6º byte; Message ID: representa el tipo de mensaje que se esta recibiendo para que el nodo receptor pueda analizar los datos entrantes adecuadamente
 
El cuerpo del mensaje es la parte dinámica y concisa del mensaje MAV, la información transmitida esta relacionada directamente con el tipo de datos asociados al ID del mensaje en el byte anterior.
Todo esto convierte a MAVLink en una herramienta de comunicación independiente del lenguaje de programación, mientras puedas un paquete con la estructura estándar y enviarlo al dron, no importa el lenguaje que utilices

Layer 2:
Como cambiar el Message ID para variar los tipos de mensajes que se envían con la estructura estándar, estos Message ID estandar indican al nodo mavic receptor como analizar los datos entrantes y que accion ejecutar al recibir el Message ID especifico.

El estandar tambien indica al nodo mavic transmisor como empaquetar los datos en paquetes con el formato correcto

>[!Example] MAVLink Proxy Message
>![[Pasted image 20261026143515.png]]
>Hemos estado configurando parametros del dron a traves de MAV Proxy, pero internamente, MAV Proxy esta creando un mensaje con el Message ID 23 y completando los campos apropiados para satisfacer nuestra solicitudff de MAV Proxy.
>El mensaje 23 tiene 5 campos estandar que deben ser rellenados
>- 1º: El System ID del nodo MAVLink que queremos configurar el parametro. normalmente 1.
>- 2º El Target Component si es aplicable. normalmente 0.
>- 3º Param ID, hay que especificar el nombre del parametro que se quiere cambiar
>- 4º Parameter Value, valor que queremos establecer para el parametro
>- 5º Parameter Type, especificar el tipo de parametro
>
>Todo esto se empaquetay constituye una portción de informacion del mensaje MAVLink.
>El mensaje nº 23 se mapea al byte index nº 5 de la cabecera Mavic.
>Todo este se enviara y una vez sea recibido por el dron y vea el Message ID nº23 en el header y sepa como analizar la información del mensaje para cumplir la solicitud


>[!Example] MAVLink Proxy Message
>![[Pasted image 20261026145054.png]]
>The command long message gives us a dynamic way of controlling the drone exclusively through MAVLink commands.
>
Its "command" field takes as input a MAV_CMD enum value.
>
>Example: LAND command is number 21

>[!Example] MAVLink Message Command Long
>![[Pasted image 20261026145648.png]]



# How to program a Drone
___
![[Pasted image 20261026151155.png]]


