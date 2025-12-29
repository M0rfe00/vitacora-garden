---
tags:
  - Informática
  - DNS
---
# **Introducción a DNS**

El sistema de nombres de dominio (DNS) es un sistema para asignar nombres a equipos y servicios de red que se organiza en una jerarquía de dominios. La asignación de nombres DNS se emplea en redes TCP/IP, como Internet, para buscar equipos y servicios mediante nombres descriptivos.  Cuando un usuario escriba un nombre DNS en una aplicación, los servicios DNS pueden traducir el nombre a otra información que está asociada a dicho nombre, como una dirección IP.

El rol del servidor DNS en Windows Server 2012 combina la compatibilidad para los protocolos DNS estándar con los beneficios de integración con los Servicios de dominio de Active Directory (AD DS) y otras características de seguridad y redes Windows. Windows Server 2012 incluye soporte mejorado para las Extensiones de Seguridad DNS (DNSSEC). La configuración DNS y la administración también está mejorada con Windows PowerShell. Para obtener más información, vea los temas siguientes:

## **Descripción del rol**

DNS es un sistema que se utiliza en redes TCP/IP para nombrar computadoras y servicios de red. La denominación DNS localiza computadoras y servicios mediante nombres fáciles de usar. Cuando un usuario ingresa un nombre DNS en una aplicación, los servicios DNS
pueden resolver el nombre con otra información asociada con el nombre, como una dirección IP.

Windows Server proporciona varias mejoras al servicio del servidor DNS. Para obtener más información sobre las novedades del servidor DNS y el cliente DNS para Windows Server 2012 R2, Windows Server 2012, Windows 8.1 y Windows 8, consulte y del cliente DNS

## **Aplicaciones prácticas**

DNS en Windows Server 2012 R2 y Windows Server 2012 proporciona lo siguiente:

- El servicio Servidor DNS en Windows Server 2012 ha mejorado enormemente el soporte para Extensiones de seguridad DNS (DNSSEC), un conjunto de extensiones que agrega seguridad al protocolo DNS. Para obtener más información sobre DNSSEC, consulte Descripción general de DNSSEC.

- La integración de DNS con Active Directory es la misma en Windows Server 2012 R2 y Windows Server 2012 que en los sistemas operativos anteriores. Cuando el servidor DNS está instalado en un controlador de dominio, DNS está integrado en los Servicios de dominio de Active Directory (AD DS) para almacenar y replicar zonas DNS. Esto hace posible la replicación multimaestro, junto con una transmisión más segura de datos DNS. A su vez, AD DS requiere DNS para que los clientes puedan localizar controladores de dominio.

- La integración de DNS y DHCP es la misma en Windows Server 2012 R2 y Windows Server 2012 que en los sistemas operativos anteriores. La integración de DNS y DHCP permite que los registros de recursos DNS se actualicen dinámicamente para nuevas computadoras y dispositivos, o cuando las direcciones IP de los dispositivos existentes cambian en la red.

## **Importante**

La función de servidor DNS se instala frecuentemente con los Servicios de dominio de Active Directory (AD DS). Servidor DNS y se puede instalar en un controlador de dominio mediante el Asistente para agregar funciones y características del Administrador del servidor, o se puede
instalar como una opción disponible durante la promoción de un servidor a controlador de dominio. Si instala AD DS y promueve el servidor a un controlador de dominio usando Windows PowerShell, puede instalar DNS especificando el parámetro **–InstallDns** cuando usa el cmdlet **Install-ADDSDomainController . **Los servicios de rol de servidor DNS y AD DS se pueden instalar de forma independiente o conjunta. Sin embargo, el servicio de rol AD ​​DS es necesario si el servidor DNS hospedará zonas DNS integradas en Active Directory.
