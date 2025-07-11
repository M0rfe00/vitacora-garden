# **Tema 6 Administración de usuarios y grupos en Windows Server**

## **Objetivos:**

- Administrar sistemas Windows server.

- Diferenciar distintos tipos de usuarios y grupos del sistema.

- Gestionar permisos.

- Conocer el concepto de domino.

- Instalar el servicio del directorio (Active Directory).

- Saber establecer relaciones de confianza entre dominios.

- Configurar perfiles móviles.

- Monitorizar sistemas Windows Server.

## **Glosario:**

**Active Directory Domain Services (ADDS):** Servicio de directorio de los servidores Windows.

**Administrador:** Usuario de mayor privilegio. La suya es la primera cuenta que se crea cuando se realiza la instalación del sistema operativo.

**Dominio de active Directory:** Contenedor lógico utilizado para administrar unidades organizativas, usuarios, grupos, equipos y políticas de seguridad, entre otros objetos

**Perfil móvil:** Entorno de usuario almacenado en un equipo servidor que permite ser cargado en al equipo cliente a través de una red.

**Permiso:** Funcionalidad del sistema encargada de delimitar el acceso que los usuarios, grupos u objetos tienen sobre los recursos del sistema o la red.

**Relación de confianza:** Relación establecida entre dos dominios de forma que permite a los usuarios de un dominio ser reconocidos por los controladores de dominio de otro dominio.

**Servicio de directorio:** Aplicación o conjunto de aplicaciones que sirve para, en una red informática almacenar, organizar y centralizar la información de los usuarios, equipos, grupos, dominios, recursos compartidos, políticas de seguridad, etcétera.

**SID:** Security Identifier o identificador de seguridad. Identificador único e inmutable de un usuario, grupo de usuarios u otro principal de seguridad.

**UAC:** User Account Control o control de cuentas de usuario. Infraestructura de seguridad que impide que aplicaciones maliciosas hagan cambios no autorizados en el ordenador.

**Unidad organizativa:** Objeto contenedor utilizado para organizar otros objetos de un dominio.

## **Resumen:**

- Una vez realizada la instalación del sistema operativo Windows Server, el siguiente paso fundamental es el de la administración de cuentas de usuario y grupos para controlar el acceso al sistema. Los usuarios pueden. Los usuarios pueden ser estándar, invitados y administradores. Dicha administración puede realizarse mediante comandos o entorno gráfico.

- En los sistemas Windows server, se dispone de medidas de seguridad para la gestión de permisos de los usuarios. Los permisos son los encargados de delimitar el acceso que los usuarios, grupos o equipos tienen sobre los recursos del sistema o red.

- Una correcta administración de usuarios y permisos se lleva a cabo mediante Active Directory Domain Services (ADDS), que es el servicio de directorio de los servidores Windows.

- Un servicio de directorio es una aplicación o conjunto de aplicaciones que sirve para, en una red informática, almacenar, organizar y centralizar la información de los usuarios, equipos, grupos, dominios, recursos compartidos, políticas de seguridad, etcétera., con el fin de facilitar su localización de y administración.

- Active Directory, por tanto, se podría definir como una gran base de datos mediante la cual se puede gestionar una red con una estructura jerárquica. Los elementos que componen la estructura lógica de una red son objetos (UO), dominios, árboles y bosques.

- Además, se ha estudiado en que consiste una relación de confianza, que es aquella establecida entre dos dominios de forma que permite a los usuarios de un dominio ser reconocidos por los controladores de dominio de otro dominio. Estas relaciones permiten a los usuarios acceder a los recursos de otro dominio.

- Cuando falla el servicio de directorio, los datos se graban rápidamente en el registro de eventos del sistema. Si los eventos o logs son analizados a fondo, se puede encontrar el origen del problema. Por ello, es de vital importancia la monitorización de eventos.