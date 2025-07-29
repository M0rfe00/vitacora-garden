---
tags:
  - Informática
  - DHCP
---
# **Introducción a DHCP**

Al implementar los servidores del Protocolo de configuración dinámica de host (DHCP) en la red, puede proporcionar automáticamente equipos cliente y otros dispositivos basados en TCP/IP con direcciones IP válidas. También puede proporcionar los parámetros de configuración adicionales que estos clientes y dispositivos necesitan. Estos parámetros se denominan opciones DHCP y permiten que los dispositivos se conecten con otros recursos de red, como servidores DNS, servidores WINS y enrutadores.

## **Qué proporciona un servidor DHCP**

DHCP es una tecnología de cliente y servidor que permite que los servidores DHCP asignen o concedan direcciones IP a equipos y otros dispositivos habilitados como clientes DHCP. Con DHCP, puede hacer lo siguiente:

- Conceder direcciones IP para una cantidad de tiempo específica a los
  clientes DHCP y, a continuación, renovar automáticamente las
  direcciones IP si el cliente solicita una renovación.

- Actualizar automáticamente los parámetros de los clientes DHCP
  mediante la modificación de una opción de servidor o ámbito en el
  servidor DHCP en lugar de realizar esta acción de forma individual en
  todos los clientes DHCP.

- Reservar direcciones IP para equipos específicos u otros dispositivos
  de modo que siempre tengan la misma dirección IP y reciban las
  opciones DHCP más actualizadas.

- Excluir direcciones IP o intervalos de direcciones de la distribución
  mediante el servidor DHCP de modo que estas direcciones IP e
  intervalos se puedan usar estáticamente para configurar servidores,
  enrutadores y otros dispositivos que requieran direcciones IP
  estáticas.

- Proporcionar servicios DHCP a varias subredes si todos los enrutadores
  entre el servidor DHCP y la subred para los que desea proporcionar el
  servicio están configurados para reenviar mensajes DHCP.

- Configurar el servidor DHCP para realizar servicios de registro de
  nombres DNS para los clientes DHCP.

- Proporcionar asignaciones de direcciones de multidifusión para
  clientes DHCP basados en IP.

## **Administración de un servidor DHCP**

Las herramientas que puede usar para administrar servidores DHCP incluyen la consola de DHCP y Windows PowerShell para DHCP. La consola de DHCP está disponible en el menú Herramientas del Administrador de servidores y Windows PowerShell para DHCP está automáticamente
disponible en un símbolo del sistema de Windows PowerShell al instalar el rol de servidor DHCP.


## **Tareas administrativas comunes para DHCP**

Una vez instalado el servidor DHCP, puede usar la consola de DHCP o
Windows PowerShell para DHCP para realizar las siguientes tareas
administrativas del servidor básicas:

1.  Crear ámbitos
2.  Agregar y configurar superámbitos y ámbitos de multidifusión
3.  Ver y modificar las propiedades de los ámbitos (por ejemplo, configurar intervalos de exclusión adicionales)
4.  Activar ámbitos, ámbitos de multidifusión o superámbitos
5.  Supervisar la actividad de concesión de ámbitos mediante la revisión de las concesiones activas para cada ámbito
6.  Crear reservas en ámbitos según sea necesario para clientes DHCP que requieren una dirección IP permanente para un uso concedido

**Nota:** Los superámbitos solo son compatibles con IPv4. El servidor DHCPv6 no es compatible con los superámbitos.