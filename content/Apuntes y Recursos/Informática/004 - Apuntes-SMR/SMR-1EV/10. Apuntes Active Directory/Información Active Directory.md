---
tags:
  - Informática
  - Active-Directory
---
# **Información general de los Servicios de dominio de Active Directory**

Servicios de dominio de Active Directory (AD DS) almacena información sobre los usuarios, equipos y otros recursos de red. AD DS ayuda a los administradores a administrar esta información de forma segura. Asimismo, facilita el uso compartido de los recursos y la colaboración entre los usuarios. Se requiere AD DS para las aplicaciones habilitadas para el uso de directorios, como Microsoft Exchange Server, y para otras tecnologías de Windows Server como Directiva de grupo.

**Nota:** AD DS requiere que un servidor de Sistema de nombres de dominio (DNS) esté instalado en la red. Si no tiene un servidor DNS disponible para la resolución de nombres en el dominio, se le pedirá que instale el rol de servidor DNS en este servidor.



## **Ejecución de AD DS**

AD DS proporciona una base de datos distribuida que almacena y administra información acerca de los recursos de red y datos específicos de las aplicaciones habilitadas para el uso de directorios. Los administradores pueden usar AD DS para organizar los elementos de una red, como usuarios, equipos y otros dispositivos, en una estructura de contención jerárquica que incluye el bosque de Active Directory, dominios del bosque y unidades organizativas (OU) en cada dominio. Un servidor que ejecuta AD DS se denomina controlador de dominio.

La organización de los elementos de la red en una estructura de contención jerárquica ofrece las siguientes ventajas:

- El bosque actúa como un límite de seguridad para la organización y define el ámbito de autoridad de los administradores. De forma predeterminada, el bosque contiene un solo dominio llamado dominio raíz del bosque.

- Se pueden crear dominios adicionales en el bosque para facilitar la partición de los datos de AD DS, lo que permite a las organizaciones replicar datos solo si es necesario. Esto permite que AD DS se ajuste de forma global en una red con un ancho de banda limitado. Además, un
  dominio de Active Directory es compatible con otras funciones clave relacionadas con la administración, incluidas la identidad de usuario, la autenticación y las relaciones de confianza en la red.

- Las unidades organizativas simplifican la delegación de autoridad, que facilitan la administración de un gran número de objetos. Mediante la delegación, los propietarios pueden transferir una autoridad total o limitada sobre los objetos a otros usuarios o grupos.

## **Servicios de rol para AD DS**

Administración de identidades para UNIX es un servicio de roles de AD DS que solo se puede instalar en controladores de dominio. Dos tecnologías de Administración de identidades para Unix (Servidor para NIS y Sincronización de contraseña) facilitan la integración de los equipos
con Windows en la empresa UNIX existente. Los administradores de AD DS pueden usar Servidor para NIS para administrar los dominios del Servicio de información de la red (NIS). La Sincronización de contraseña  sincroniza automáticamente las contraseñas entre los sistemas operativos Windows y UNIX.

## **Tecnologías del servicio de roles**

### **Servidor para NIS**
Permite que un controlador de dominio de Active Directory basado en Microsoft Windows administre redes de Servicio de información de la red (NIS) de UNIX.

### **Sincronización de contraseña**
Ayuda a integrar las redes de Windows y UNIX, ya que simplifica el proceso de mantenimiento de contraseñas seguras en ambos entornos.
