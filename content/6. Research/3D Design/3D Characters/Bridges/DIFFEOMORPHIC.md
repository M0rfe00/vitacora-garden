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

> [!Tip] OBJ como estandar
> Generalmente para exportar un personaje a cualquier software, si no tiene animaciones, es mejor Obj,  ya que es más estable y guardara todas las texturas en un directorio aparte.

> [!Warning] Inconvenientes FBX  
> FBX también puede usarse, pero a veces no es completamente preciso al exportar poses, animaciones.

# Workflow
___
1) **Crear y customizar el personaje** en **Daz** (anatomía, pose/animación, etc).
2) **Exportarlo a Blender** y crear escenario, setup de luces y cámara.
3) **Exportar a Clo3d**, vestir al avatar y exportar la ropa a **Blender**.
4) **Crear texturas** realistas en **Photoshop** y **Corregir los shaders** (Piel, Ojos, Pelo).
5) **Texturizar en Substance Painter** (Maquillaje, Tatuajes, detalles..). 
6) **Renderizar en Blender**.
7) **Editar render en Photoshop**

# **==ANIMATION -DIFFEOMORPHIC==**
___
>[!Success] Diffeomorphic
>Diffeomorphic aunque no es un plugin oficial de Daz, es realmente útil ya que permite:
>- Animar personajes de forma completa en Blender.
>- Exportar los personajes con una pose concreta y modificarla posteriormente en Blender.
>- Convertir la mesh del pelo a sistemas de particulas
>- Crear físicas con la ropa y exportar el personaje con las texturas ya aplicadas (aunque igualmente hay que ajustarlas para hacerlas ver realistas) [tutorial](https://www.youtube.com/watch?v=jR7HXMhsRa8)

>[!Warning] No Exporta animaciones
>Diffeomorphic como tal no permite exportar animaciones de Daz a Blender pero ofrece muchas formas de animar personajes de la misma forma que se haría en Daz dentro de Blender

## **Guardar personaje:** 
==Seleccionar el personaje y guardar la escena== en una carpeta.

## **Exportar a Blender:** 
- **==Buscar el Script==** de Diffeomorphic en Content Library y ejecutar:**

- "**==Export to Blender==**" lo cual creara un archivo secundario con el mismo nombre con el cual se guardo el proyecto de Daz (**==guardar en la misma carpeta==** para que Blender lo identifique).

- "**==Save Path==**" y **==guardar el archivo generado en la misma carpeta==** que los anteriores archivos.

## **Importar en Blender:** 
- Tras instalar y habilitar el add-on en Blender abrir su panel y en Global Settings>Load Root Paths: seleccionar carpeta donde se guardaron los archivos anteriores y seleccionar el archivo .json (esto permite importar el proyecto de Daz).

- EN el panel del add-on seleccionar "**==Import Daz==**" y seleccionar el archivo .duf

>[!Bug] aviso
>Al importar suele salir un aviso de error, no hacer caso

>[!Info] **Sobre esta importación**
>Este método permite posar de forma más sutil que un FBX y similar a Daz
>
>Este tipo de importación también permite traer de Daz a Blender todos los Morhps deseados y modificar los gestos faciales de forma similar a Daz.

## **Import Morphs**:
En el panel del add-on>==Import units==: y seleccionar únicamente lo necesario ya que importar todas las herramientas de morph puede ralentizar el proyecto.

## **Modificar Morphs:** 
En el add-on>==Morphs>Face units,== esto mostrara el panel para modificar los morphs (para modificar la apertura de los ojos hay que unir las pestañas con el personaje seleccionando y Ctrl+J)

>[!Info] Exportar expresiones y morphs
>También es posible importar expresiones faciales y morphs a Blender para modificar el personaje.

## **Animar el personaje:** 
Hay que ir al frame 0 en la timeline, insertar un keyframe en el panel de modificación de los morphs e insertar otro keyframe en otro frame.

También es posible animar el personaje modificando su pose desde "Pose mode".


# ==Import Pose Daz to Blender w/ Diffeomorphic==
___
## **Instalación**
1) Ir a https://diffeomorphic.blogspot.com/
2) Clicar en el enlace de DAZ Importer para descargar los recursos (Add-on + Script)
3) Para instalar el Script en Daz copiar el contenido de la capeta Script dentro del zip al directorio Script en "My Daz Library"
4) Para instalar el Add-on en Blender Edit>Preferences>Install y seleccionar el Zip descargado y aparecerá Daz Setup y Daz Runtime
5) Para activar el Script en Daz: Smart Content>Content DB Mantenance>Re-import Metadata
## **Exportar**
6) **Para exportar:** File>Export HD to Blender / Content Library .../Scripts:
	1) Seleccionar Save Paths y elegir un directorio para los archivos del personaje
	2) ==Guardar la escena en una carpeta con el mismo nombre (File>Save as)==
	3) ==Seleccionar el script Export Blender y guardar en la misma carpeta con el mismo nombre==
## **Importar**
7) En Blender seleccionar Daz Setup>Easy Import Daz y seleccionar el archivo .duf guardado en la carpeta anterior.
8) Para modificar el rig a uno adecuado para blender: Daz Setup>Convert To MHX
## **Animar & Posar**
9) Para acceder a la animación facial: Daz Runtime>Morph>Face Units
10) Para modificar la pose; Seleccionar armadura/rig y entrar en Pose Mode
11) Para agilizar el proceso de animación se puede añadir el modificador Subsurface y bajar el nivel a 0 solo en el viewport para que al renderizar se vea bien

# ==Retarget w/ Diffeomorphic==
___
## **Instalación**
1) Ir a https://diffeomorphic.blogspot.com/
2) Clicar en el enlace de BVH and FBX Retargeter para descargar el add-on para Blender
3) Al instalar este add-on aparecera el panel BVH que permite importar archivos FBX como animaciones de [mixamo](https://www.mixamo.com/) y utilizarlas en el personaje de Daz.
## **Importar animación**
4) Para importar la animación: BVH>Load BVH or FBX File y seleccionar el archivo.

## **Retargetear**
4) Para Retargetear: seleccionar el rig animado, el rig del personaje de Daz y clicar en BVH>Retarget Selected To Active 


>[!Info] Problemas Mesh
>Si hay problemas con el Mesh de la ropa se puede solucionar en Esculpt Mode>Elastic Deform

>[!Info] Wonder Studios
>[Wonder Studios](https://app.wonderdynamics.com/): analiza el movimiento de videos y genera FBX que pueden importarse al personaje

# VIDEOS
___
<iframe style="width:100%; aspect-ratio:16/9; height:auto;" src="https://www.youtube.com/embed/_zKnaVeSYhk?si=6OaxN0FH06JdvVEe" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

<iframe style="width:100%; aspect-ratio:16/9; height:auto;" src="https://www.youtube.com/embed/YuvuV1-g5jQ?si=3GtEFJE24vnn6Vq0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

<iframe style="width:100%; aspect-ratio:16/9; height:auto;" src="https://www.youtube.com/embed/VhIkYHwhfIQ?si=JPa1vIMEPJGfbRK8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

<iframe style="width:100%; aspect-ratio:16/9; height:auto;" src="https://www.youtube.com/embed/wej2V1cNJPE?si=k0gggyTGfmjmQ-tT" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

<iframe style="width:100%; aspect-ratio:16/9; height:auto;" src="https://www.youtube.com/embed/TtFX58BPNjQ?si=QSplF1hM4-FF4F8G" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

<iframe style="width:100%; aspect-ratio:16/9; height:auto;" src="https://www.youtube.com/embed/y6M35d1nvKQ?si=V-WigqRrUeGbDWCa" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

<iframe style="width:100%; aspect-ratio:16/9; height:auto;"  src="https://www.youtube.com/embed/FsfS34TTiVo?si=4CyUuQV0pAHSpQfv" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>


<iframe style="width:100%; aspect-ratio:16/9; height:auto;" src="https://www.youtube.com/embed/J_Nz0-hLsMw?si=JMmSkL5jQmpGvq5t" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
<iframe style="width:100%; aspect-ratio:16/9; height:auto;" src="https://www.youtube.com/embed/1Nsg0Je6vUo?si=evVJFrDmPTKGs-qx" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>