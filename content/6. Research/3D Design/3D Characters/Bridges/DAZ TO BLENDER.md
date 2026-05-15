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


# **Import Daz to Blender**
___
>[!Success] Utilidades DAZ TO Blender
>Este método puede ser útil para: animaciones en las que no se necesita que el personaje sea muy expresivo y el peso recaiga en los movimientos del cuerpo del personaje.

>[!Warning] Inconvenientes DAZ To Blender
>- Este método puede ser deficiente a la hora de la animación facial y respetar las animaciones hechas en DAZ una vez se exporta el personaje a Blender.
>
>- Tanto Diffeomorphic como [DAZ To Blender](https://www.daz3d.com/daz-to-blender-bridge) crean unos nodos especiales para texturizar los personajes, sin embargo es recomendable texturizar manualmente para obtener resultados más realistas.

## **1. Export Daz:** 
Seleccionar el personaje, seleccionar File>Send To> Daz to Blender

>[!Info] Instlar y Activar Plugin
>La primera vez hay que hay que seleccionar la versión de Blender y clicar en instalar Plugin.
>
>Y activar el Pluggin en Blender Edit>Preferences>Add-ons>Import-Export: DazToBlender

## **2. Export Daz:**
seleccionar File>Send To> Daz to Blender

## **3. Import Blender:** 
Seleccionar el Plugin en la barra lateral y clicar "Import New Genesis figure"

### **3.1. Import pose** 
 En Pose Tools seleccionar el personaje que se quiere posar y clicar "Import Pose" Todas las poses de DAZ, gratuitas y de pago se almacenan en un directorio en archivos .duf
	- ruta ejemplo: /My Daz 3D Library/People/Genesis 8 Female/Poses.

## **4. Modificar pose**
Para modificar el personaje sin borrar la pose se puede desactivar temporalmente en Object Data Properties > Reset Position/Pose Postition


# **How to import animations from Daz to Blender**
___
>[!Info] AniMate2
>Para exportar se usa un pluggin interno de Daz: =="aniMate2"==

## **Export character**
Seleccionar el personaje, File>Export como **Obj** 

<img
  src="../media-content/Apuntes/3D-Notes/Pasted image 20251213183325.png"
  alt="Character-Options"
  style="margin: 0 auto; padding: 0; width: 70%; height: auto;"
/>

## **Export animation**
Exportar en la misma carpeta anterior en formato mdd

<img
  src="../media-content/Apuntes/3D-Notes/Pasted image 20251213183502.png"
  alt="Animation-Options"
  style="margin: 0 auto; padding: 0; width: 50%; height: auto;"
/>

## **Import Character in Blender**
Para importar en Blender hay que importar el Obj del personaje y cambiar de split a keep en los ajustes:
<img
  src="../media-content/Apuntes/3D-Notes/Pasted image 20251213183719.png"
  alt="Impor-Options"
  style="margin: 0 auto; padding: 0; width: 50%; height: auto;"
/>

## **Import Animation in Blender**
Paña añadir la animación al personaje importado: añadir el modificador =="MeshCache"== y en **file path** seleccionar el archivo de animación **"mdd"** exportado antes


# Blender animation Workflow
___
## **Animar**
Animar el personaje Daz moviendo el rig y utilizando keypoints en la timeline.

## **Exportar**
Exportar el personaje a Blender: File>Send to> Daz To Blender
	- Asset Type: Animtion
	- Animation Settings > Bake: Check
<img
  src="../media-content/Apuntes/3D-Notes/Animation/20251230144739.png"
  alt="Impor-Options"
  style="margin: 0 auto; padding: 0; width: 50%; height: auto;"
/>


## **Importar**
Importar el personaje a Blender, y ajustar la timeline, el frame rate (same as Daz)

>[!Warning] Evitar Frame Drop
>Para evitar el frame drop out y suavizar el playback de la animación; en la timeline > "Playback>Sync" seleccionar Frame dropping



# ANIMATION - DAZ To Blender Bridge
___
>[!Warning] Inconvenientes DAZ To Blender
>Este método puede ser deficiente a la hora de la animación facial y respetar las animaciones hechas en DAZ una vez se exporta el personaje a Blender.

>[!Success] Utilidades DAZ TO Blender
>Sin embargo puede ser útil para animaciones en las que no se necesita que el personaje sea muy expresivo y el peso recaiga en los movimientos del cuerpo del personaje.

>[!Tip] Aconsejable Texturizar Manualmente
>Tanto Diffeomorphic como [DAZ To Blender](https://www.daz3d.com/daz-to-blender-bridge) crean unos nodos especiales para texturizar los personajes, sin embargo es recomendable texturizar manualmente para obtener resultados más realistas.

## **Exportar a Blender:**
Seleccionar el personaje en Daz y File>Send To>Daz To Blender (Asset Type>Animation y configurar número de subdivisiones).
<img
  src="../media-content/Apuntes/3D-Notes/Animation/Pasted image 20251230163439.png"
  alt="Imp"
  style="margin: 0 auto; padding: 0; width: 100%; height: auto;"
/>

## **Importar el personaje:** 
Seleccionar el Plugin en la barra lateral y clicar "Import New Genesis figure"




DAZ TO CLO
<iframe style="width:100%; aspect-ratio:16/9; height:auto;"
src="https://www.youtube.com/embed/xJ0eGqPkdRs?si=n05LDTiI_z4l2VDY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

ANIMATION DAZ/CLO/BLENDER
<iframe style="width:100%; aspect-ratio:16/9; height:auto;" src="https://www.youtube.com/embed/hYeq3_iIL58?si=5LGwnOyTMPt56LSt" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

ANIMATION CLO/BLENDER/MIXAMO
<iframe width="560" height="315" src="https://www.youtube.com/embed/SqYZ1HL0x5c?si=engd6W3qUL5U3XWB" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

<iframe width="560" height="315" src="https://www.youtube.com/embed/3GpXgKEZ5Kk?si=WjKD7m0zX7vLYO4h" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

CLO3D RETOPOLOGY IN BLENDER
<iframe width="560" height="315" src="https://www.youtube.com/embed/hIebHFzHUmw?si=rV9_h_JaKZHNBRg8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>