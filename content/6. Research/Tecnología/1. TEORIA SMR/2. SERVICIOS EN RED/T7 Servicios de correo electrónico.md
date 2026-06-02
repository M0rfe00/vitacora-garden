---
tags:
  - Informática
  - Teoria
  - Correo
---
# **Tema 7 Servicios de correo electrónico**
___
## **Objetivos:**
___
- Conocer los protocolos implicados en el envío y la recepción de emails.

- Reconocer los diferentes encabezados y tipos de información que puede contener un email.

- Identificar los agentes que intervienen en la comunicación entre clientes y servidores de correo electrónico.

- Familiarizarse con los diferentes comandos y respuestas de los protocolos que intervienen en las comunicaciones de correo.

- Aprender a instalar y configurar servicios de correo electrónico y webmail sobre sistemas operativos libres y propietarios en determinados escenarios.

## **Glosario:**
___
**Active Directory:** Servicio de directorio de entornos Windows compuesto por una base de datos distribuida y jerárquica que comparte información sobre la infraestructura de la organización y que permite la administración de todos sus elementos (equipos, usuarios, grupos...).

**Core:** Opción de instalación mínima disponible en versiones Standard o Datacenter de Windows Server.

**GNU General Public License versión 3:** Licencia de software libre que permite a los usuarios finales libertad de uso, estudio, compartición y modificación.

**Lync Server o Skype Empresarial Server:** Servidor de comunicaciones unificadas (UC). Entre otros, permite la integración con la suite ofimática Office, ofrece servicios de mensajería instantánea (chat de voz y vídeo en tiempo real) y puede integrarse con sistemas PBX existentes o reemplazarlos totalmente.

**MariaDB**: Sistema gestor de bases de datos con licencia GPL derivado directamente de MySQL tras la adquisición de este último por parte de Oracle.

**Member server:** Equipo con sistema operativo de la familia Windows Server dentro de un dominio Active Directory, que trabaja como servidor y que no es controlador de dominio (servidor de archivos, servidor de aplicaciones, servidor de bases de datos, servidor web, servidor de certificados, firewall y servidor de acceso remoto).

**MySQL**: Sistema gestor de bases de datos de código abierto más popular del mundo. Actualmente pertenece a Oracle. Se distribuye con licencia tanto GPL como comercial.

**PBX**: Acrónimo de Private Branch Exchange ("red privada de conmutación automática"). Central telefónica privada que se conecta directamente con una pública mediante líneas troncales. Gestiona llamadas internas y externas de forma autónoma y permite que todos los usuarios de la organización compartan líneas telefónicas con el consiguiente ahorro en costes.

**Read-Only:** Término proveniente del inglés que significa "solo lectura" (es decir, no permite cambios).

**RSAT:** Acrónimo de Remote Server Administration Tools ("herramientas de administración remota del servidor"). Conjunto de herramientas que permiten a los administradores TI administrar de forma remota roles y características en Windows Server desde un equipo cliente con versión de sistema operativo Windows en versión Professional o Enterprise.

## **Resumen:**
___
- Los servicios de correo electrónico están formados por un conjunto de protocolos de la capa de aplicación, cada uno de los cuales se ocupa de una tarea determinada.

- Cada cuenta de correo electrónico está formada por el nombre del usuario y el nombre del dominio al cual pertenece dicho usuario. Ambas partes están separadas por @.

- Cada email dispone de una serie de encabezados que identifican al remitente, al destinatario, el asunto... Puede contener texto u otro tipo de información gracias a la inclusión de los tipos MIME.

- Cada uno de los elementos que intervienen en la transferencia o consulta de correos se denomina agente. Pueden ser MUA (encargado de componer, enviar y recibir emails en el lado cliente), MTA (encargado de recoger emails enviados por los MUA u otros MTA) o MDA (encargado de recibir los emails).

- Los protocolos empleados son POP (para la descarga de correos al equipo cliente, desde donde pueden leerse posteriormente), IMAP (para la consulta de correos a través de la red sin necesidad de descargarlos desde el servidor) y SMTP (para la transferencia de correos desde un cliente al servidor, así como entre servidores).

- Los protocolos POP, IMAP y SMTP admite~~admiten~~ conexiones seguras basadas en el empleo de SSL/TLS.

- Como tecnologías servidor se puede escoger entre:

	- Microsoft Exchange Server. Es el servidor de correo nativo de sistemas operativos Microsoft. Se trata de un servidor muy completo que ofrece muchas características extra y que requiere de la existencia de un dominio Active Directory al que debe pertenecer el servidor. Instala el servicio webmail, que permite accesos a través del navegador en la URL [https://FQDN/owa](https://fqdn/owa).

	- Postfix y Courier como alternativas para emplear sobre sistemas operativos de la familia Ubuntu Linux. Para ofrecer el servicio webmail, se puede hacer uso del paquete LAMP Server e integrar sobre él RoundCube.

- En el lado cliente también se puede escoger entre varias alternativas:

	- Microsoft Outlook es el cliente de correo nativo de sistemas operativos Microsoft. Viene distribuido con la suite ofimática Microsoft Office y permite una fácil integración con servicios Exchange.

	- Sylpheed es un simple cliente de escritorio para sistemas Ubuntu Linux. Fácilmente configurable y muy ligero. Mozilla Thunderbird. Se trata de un cliente de escritorio multiplataforma.