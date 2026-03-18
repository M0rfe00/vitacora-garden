---
tags:
  - 3D
  - Formats
  - Rig
---
# **Import-Export Fotmats**
___
<img
  src="../media-content/Apuntes/3D-Notes/3D-Formats.jpg"
  alt="ImpExp-Formats"
  style="margin: 0 auto; padding: 0; width: 100%; height: auto;"
/>

> [!info] OBJ como estandar
> Generalmente para exportar un personaje a cualquier software, si no tiene animaciones, es mejor Obj,  ya que es más estable y guardara todas las texturas en un directorio aparte.

> [!info] Inconvenientes FBX  
> FBX también puede usarse, pero a veces no es completamente preciso al exportar poses, animaciones.


# ANIMATION - **==FBX with GNS RIG==**
___
>[!Info] Exportar en FBX
>**FBX permite exportar no solo el objeto, también incluye más información como texturas, animaciones.**

>[!Info] GNS RIG
>El add-on [GNS](https://22722studios.gumroad.com/l/yFocf) sirve para rigear personajes de Daz en Blender de forma correcta ya que a la hora de exportar fbx desde Daz se pueden encontrar problemas con el rig, este método no solo permite animar de forma manual en Blender sino también utilizar animaciones de Mixamo o Cascadeur.

## **Exportar personaje:** 
En Daz seleccionar el personaje y ==exportarlo en formato fbx== con los siguientes ajustes:
<img
  src="../media-content/Apuntes/3D-Notes/Animation/Pasted image 20251230153406.png"
  alt="WPC"
  style="margin: 0 auto; padding: 0; width: 100%; height: auto;"
/>



## **Habilitar RIG GNS en Blender:** 
Preferences>Add-ons: check.

## **Importar el personaje:** 
Seleccionar el add-on en el panel lateral: ==Import GNS Figure== y buscar el archivo de la personaje de Daz.

## **Ajustar armadura:** 
==Seleccionar armadura== y en el panel del addon seleccionar primero "==Addquire Meta==" luego "==Match rig==", después "==Generate rig==" y finalmente "==Rig Figure==".


>[!Info] Deformación sin limites
A la hora de rigear personajes fbx suele encontrarse el problema de no haber limites de deformación al modificar la pose.
>
Por ello esta técnica es más útil para importar animaciones o realizar animaciones sencillas sin incluir animación facial

## **Descargar animación:** 
Descargar una animación de [Mixamo](https://www.mixamo.com/#/?page=1&type=Motion%2CMotionPack) configurando el formato en FBX y el numero de frames.

## **==Importar animación:==** 
Seleccionar el personaje y en el panel del add-on ir a la sección "==AriMixa>Export>Mixamo==".

## **Aplicar animación:** 
En el panel del add-on "==AriMixa>Bind=="

## **Modificar pose:** 
El add-on permite modificar la pose del personaje aunque se le haya aplicado una animación, para ello hay que seleccionar el personaje y en  "==AriMixa>Adjust==" seleccionar la parte del cuerpo que se quiere modificar y arrastrando el icono que tiene a la derecha.


# **Exportar animaciones con Sagan**
___
>[!Info] Instalación
>Ir a la pagina de [Sagan](https://www.daz3d.com/forums/discussion/428856/sagan-a-daz-to-blender-alembic-exporter?srsltid=AfmBOor8S41RtEQNddSyJ1f4cPXYpcH97AsVkIh2VfVqRsVLTY9L0qkd) es la web de Daz y descargar el programa.

>[!Info] Ventajas y Desventajas
>Este exportador bakea toda la animación, sin embargo, no permite modificar la mesh en blender.

