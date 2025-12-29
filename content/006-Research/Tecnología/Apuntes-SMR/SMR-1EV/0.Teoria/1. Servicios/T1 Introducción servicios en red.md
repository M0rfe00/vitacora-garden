---
tags:
  - Informática
  - Teoria
---
# **Tema 1 Introducción a los servicios en red**

## **Objetivos:**

- Recordar los modelos de red que guían los procesos de interconexión entre dispositivos.

- Conocer el concepto de servicio de red.

- Dominar los conceptos de direccionamiento sobre las dos versiones del protocolo IP para    poder realizar posteriormente las configuraciones necesarias en los equipos servidor y cliente.

- Relacionar los servicios en red con los protocolos y puertos relacionados.

- Adoptar una visión general de los principales servicios en red.

- Preparar los equipos con los que posteriormente se reproducirá los escenarios ejemplo de los capítulos anteriores


## **Glosario:**

**Checksum:** Suma de determinados datos de un mensaje que realiza el emisor y transmite junto con el mensaje original. Cuando el mensaje llega al destino, el receptor puede realizar el mismo cálculo sobre los datos recibidos y comparar el Checksum obtenido y, por tanto, se habrá producido un error.

**CDIR:** Acrónimo de Clasessless Inter-Domain Routing (“encaminamiento entre dominios sin clases”), es la respuesta ante el agotamiento de direcciones que permite un direccionamiento flexible y más ajustado a cada escenario.

**DARPA:** Acrónimo de Defense Advanced Research Projects Agency (“Agencia de proyectos de investigación avanzada de defensa”). Es una agencia dependiente del Departamento de Defensa de Estados Unidos.

**EUI-64:** Acrónimo de 64-bit Extended Unique Identifier (“Identificador único extendido de 64-bits”). Es el identificador único de 64 bits obtenido a partir de la dirección MAC (por ejemplo, interfaces serial), el Router elige la MAC de la interfaz con el numero mas bajo que tenga la MAC.

**ICMP:** Acrónimo de Internet Control Message Protocol (“protocolo de mensajes de control de internet”). Permite realizar diagnósticos y notificaciones de error del protocolo IP.

**IoT:** Acrónimo de Internet of Things (“Internet de las cosas”). Es el concepto empleado para describir la interconexión de cualquier tipo de producto (electrodoméstico, vehículo, termostatos…) con otros a través de internet.

**IPSec:** Abreviatura de Internet Protocol Security (“Seguridad del protocolo IP”). Es un conjunto de protocolos que se aseguran las comunicaciones TCP/IP mediante autenticación o cifrado de cada paquete.

**NAT:** Abreviatura de Network Address Translation (“traducción de direcciones de red”). Mecanismo empleado para modificar las direcciones IP de los paquetes que llegan al dispositivo. En los paquetes que llegan desde los nodos de una red, sustituye la dirección de origen por la dirección IP que este tiene en la otra red y viceversa con su dirección con los paquetes que al dispositivo llegan desde la otra red como respuesta, modificando su dirección, que es la que aparece como destinataria, por la del equipo que originó el envió desde la red local.

**RFC:** Acrónimo de Request For Comments (“peticion de comentarios”). Documento publicado por el IETF (siglas inglesas para Internet Enginieering Task Force, o “Grupo de trabajo de ingeniería de internet”) que describe detalladamente protocolos, métodos, propuestas tecnológicas…

**RIR:** Acrónimo de Regional Internet Registry (“registro regional de internet”). Organización que supervisa la asignación de recursos de números de internet (IPv4, IPv6…) para una región.

**SCTP:** Acrónimo de Stream Control Transmission Protocol (“protocolo de transmisión de control de flujo”). Protocolo orientado a conexión ubicado en la capa de transporte que ofrece los mismos servicios a la aplicaciones que TCP, pero que permite conectar dispositivos con más de una dirección, lo cual aporta mayor tolerancia a fallos y lo hace muy apropiado para sistemas VoIP.

**VoIP:** Acrónimo de Voice over IP (“voz sobre IP”). Es la tecnología empleada para transferir a través de internet señales analógicas de voz.


## **Resumen:**

- Existe una gran cantidad de servicios de red, cada uno orientado a un tipo de tarea, y su uso reporta ventajas en entornos tanto domésticos como corporativos.

- Los modelos de red regulan cómo deben  realizarse las conexiones y comunicaciones. El modelo OSI lo hace desde un punto de vista teórico, mientras que el modelo TCP/IP lo hace desde un punto de vista eminentemente práctico. Ambos dividen el proceso en una serie de capas/niveles.

- Generalmente, un servicio de red se implanta en una arquitectura Cliente-Servidor y el equipo que lo ofrece y mantiene se denomina “servidor”. En otros casos el servicio se ofrece de forma distribuida en arquitecturas P2P y el papel de servidor se encuentra repartido entre los pares de la red.

- Un servidor puede ser cualquier tipo de equipo que disponga del software y el hardware apropiados a los requisitos del servicio que quiere ofrecer, aunque hay distribuciones especialmente dedicadas a este uso.

- Las normas que rigen cómo deben  operar cada servicio dependen del protocolo empleado. El cual está definido en una RFC.

- A nivel de capa de aplicación del modelo TCP/IP se hace uso del protocolo o protocolos especialmente diseñados para el servicio (que en muchos casos tienen el mismo nombre que el propio servicio). Estos trabajan sobre el protocolo y puertos correspondientes de la capa de transporte que garantiza la comunicación. Finalmente, los mensajes viajaran en paquetes sobre el protocolo de la capa de internet que permite identificar de forma lógica los nodos de comunicación.

- La versión IPv6 del protocolo de la capa de Internet ofrece varias mejoras frente a su antecesor.

- Para simular diferentes escenarios y trabajar con distintas distribuciones , se recomienda el empleo de software de virtualización.