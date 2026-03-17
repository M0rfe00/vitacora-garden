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


# Face Motion Capture
___
iPhone with Face App to record to motion (costs 60$ iirc for the license - there are maybe other options that work now for other devices. I've just used this for a few years now)

Daz studio with Face Mojo add-on to process the FBX

Sagan alembic exporter to export the file from Daz to blender (this is truly the most stable way. FBX is broken to blender, and the bridge doesn't keep all the facial animation. I've tried dozens of methods. This is the path of least resistance!! However bear in mind this is baked in and we can't edit the mesh or animation I. Blender)

And blender for the rest.

Resumen:
Para hacer captura facial de movimiento se puede utilizar la app "Face Cap" la cual esta disponible desde el IPhone 10 en adelante con escaneo facial.

En Daz hay que instalar el addon "Face Mojo add-on"

Usando el add-on hay que clicar en motion, la animación tendrá imperfecciones las cuales habrá que suavizar y añadir movimiento adicional a la animación de forma manual.

Exportar la animación a Blender usando "Sagan Alembic Exporter". Los archivos serán pesados pero es la única forma estable de tener las animaciones con los datos correctos de Daz a Blender.

Exportar las texturas y materiales del personaje.
