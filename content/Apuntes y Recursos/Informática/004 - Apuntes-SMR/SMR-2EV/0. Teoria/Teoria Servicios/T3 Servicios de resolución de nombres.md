---
tags:
  - Informática
  - Teoria
  - DNS
---
# **Tema 3 Servicios de resolución de nombres**

## **Objetivos**

- Comprender la importancia de utilizar sistemas de resolución de nombres.

- Conocer los protocolos implicados en la resolución de nombres.

- Diferenciar los roles que puede desempeñar un servidor de resolución de nombres.

- Aprender a instalar y configurar servicios de resolución de nombres en sistemas operativos libres y propietarios.

## **Glosario**

**IDN:** Acrónimo de Internationalized Domain Name("nombre de dominio internacionalizado"). Se trata de un tipo de nombre que puede contener caracteres que no son ASCII.

**IPX:** Acrónimo de Internetwork Packet Exchange ("intercambio de paquetes interred"). Protocolo de comunicación para redes NetWare de Novell. Ubicado en la capa de red (nivel 3 OSI), se empleaba para el intercambio de datagramas. Trabaja conjuntamente con el protocolo SPX.

**LDH:** Acrónimo de letters-digits-hyphen. Conjunto de caracteres formado por letras, dígi- tos y guion, que son los caracteres que tradicionalmente se permitían en los nombres de dominio.

**NetBEUI:** Abreviatura de NetBIOS Extended User Interface.

**Nombre articulado:** Identificador compuesto por secuencias de caracteres que permiten conocer el contexto y jerarquía en la que se encuentra un determinado equipo.

**Nombre plano:** Identificador compuesto por secuencias de caracteres que no denotan la existencia de ninguna jerarquía.

**Referral:** Respuesta que ofrece un servidor DNS ante una consulta que no contiene sección  de respuesta (está vacía), pero que contiene la referencia a uno o más servidores DNS autoritativos que están más cerca de la pregunta realizada.

**Resolver:** Servicio ejecutado en el cliente que realiza consultas a los servidores DNS, interpreta  las respuestas recibidas y devuelve el resultado al programa que desencadenó la consulta.

**SPAM:** Correo basura, normalmente de género publicitario, cuyo remitente suele ser des- conocido, anónimo o distinto de quien dice ser y que generalmente se envía de forma masiva.

**SPX:** Acrónimo de Sequenced Packet Exchange ("intercambio de paquetes secuenciados"). Protocolo de comunicación de Novel NetWare que trabaja en la capa de transporte y controla la entrega de datos a través del protocolo IPX.

**VPN**: Acrónimo de Virtual Private Network ("red privada virtual"). Es una tecnología que extiende las redes locales a través de las infraestructuras de redes públicas para que sigan utilizándose de forma transparente mediante el uso de conexiones dedicadas, cifrados o ambos.


## **Resumen**

- Existen varios mecanismos que permiten llevar a cabo la traducción de nombres a direcciones IP y viceversa. Por un lado, hay sistemas basados en nombres planos como NetBIOS y WINS, y, por otro lado, sistemas basados en nombres jerárquicos como DNS (ambos pueden integrarse).

- DNS se organiza conforme a un sistema jerárquico en forma de árbol invertido, en el que el elemento raíz del árbol se corresponde con el dominio raíz. Este lo gestiona el ICANN y está disponible en trece servidores con centenares de réplicas por todo el mundo. El siguiente nivel está formado por dominios TLD.

- Las consultas DNS pueden ser recursivas o iterativas y todos los servidores deben atender como mínimo a las iterativas.

- Para que un servidor resuelva consultas de nombre a IP, debe crearse una zona de resolución directa; para las resoluciones opuestas, debe crearse una zona de resolución inversa.

- Un servidor DNS puede trabajar como servidor maestro (la información la maneja de primera mano), esclavo (la información la obtiene desde un maestro mediante una "Transferencia de zona"), caché (la información la obtiene al preguntar a otros servidores) o como una combinación de los anteriores.

- Cuando la información no se encuentra contenida en la zona que un servidor gestiona:

	- Reenvía la consulta a otro servidor si es sobre recursos que están en otra zona ajena. Si este proceso falla, se hace la consulta pertinente a un servidor raíz.
	
	- Delega la consulta en otro servidor si es sobre recursos que están en una subzona.

- Existen diferentes tipos de registros para identificar cada tipo de información.

- Los servidores DNS pueden admitir actualizaciones dinámicas por parte de clientes o servidores DНСР.

- El resolver es el componente cliente encargado de consultar al DNS para conseguir la dirección IP. Existen varios tipos de herramientas que permiten interrogar a servidores DNS (nslookup, dig o host son algunas de ellas).