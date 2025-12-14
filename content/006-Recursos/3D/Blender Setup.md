# IMPORT - EXPORT
___
### **Import-Export Fotmats**
![[3D Formats.jpg]]
- Generalmente para exportar un personaje a cualquier software, si no tiene animaciones, es mejor Obj,  ya que es más estable y guardara todas las texturas en un directorio aparte.
- FBX también puede usarse, pero a veces no es completamente preciso al exportar poses, animaciones.
### **Import Daz to Blender**
___
1) Export Daz: Seleccionar el personaje, seleccionar File>Send To> Daz to Blender
2) Seleccionar la versión de Blender y clicar en instalar Pluggin
3) Activar el Pluggin en Blender Edit>Preferences>Add-ons>Import-Export: DazToBlender

4) Export Daz: seleccionar File>Send To> Daz to Blender
5) Import Blender: Selecionar el Pluggin en la barra lateral y clicar "Import New Genesis figure"

6) En Pose Tools seleccionar el personaje que se quiere posar y clicar "Import Pose"
	Todas las poses de DAZ, gratuitas y de pago se almacenan en un directorio en archivos .duf
	- ruta ejemplo: /My Daz 3D Library/People/Genesis 8 Female/Poses
7) Para modificar el personaje sin borrar la pose se puede desactivar temporalmente en Object Data Properties > Reset Position/Pose Postition


### **Import Pose Daz to Blender w/ Diffeomorphic**
___
1) Ir a https://diffeomorphic.blogspot.com/
2) Clicar en el enlace de DAZ Importer para descargar los recursos (Add-on + Script)
3) Para instalar el Script en Daz copiar el contenido de la capeta Script dentro del zip al directorio Script en "My Daz Library"
4) Para instalar el Add-on en Blender Edit>Preferences>Install y seleccionar el Zip descargado y aparecerá Daz Setup y Daz Runtime
5) Para activar el Script en Daz: Smart Content>Content DB Mantenance>Re-import Metadata
6) Para exportar: File>Export HD to Blender / Content Library .../Scripts:
	1) Seleccionar Save Paths y elegir un directorio para los archivos del personaje
	2) Guardar el archivo en la misma carpeta (File>Save as)
	3) Seleccionar Export Blender y guardar en la misma carpeta
7) En Blender seleccionar Daz Setup>Easy Import Daz y seleccionar el archivo .duf guardado en la carpeta anterior.
8) Para modificar el rig a uno adecuado para blender: Daz Setup>Convert To MHX
9) Para acceder a la animación facial: Daz Runtime>Morph>Face Units
10) Para modificar la pose; Selccionar armadura/rig y entrar en Pose Mode
11) Para agilizar el proceso de animación se puede añadir el modificador Subsurface y bajar el nivel a 0 solo en el viewport para que al renderizar se vea bien

### **Retarget w/ Diffeomorphic**
___
1) Ir a https://diffeomorphic.blogspot.com/
2) Clicar en el enlace de BVH and FBX Retargeter para descargar el add-on para Blender
3) Al instalar este add-on aparecera el panel BVH que permite importar archivos FBX como animaciones de [mixamo](https://www.mixamo.com/) y utilizarlas en el personaje de Daz
4) Para importar la animación: BVH>Load BVH or FBX File y seleccionar el archivo
5) Para Retargetear: seleccionar el rig animado, el rig del personaje de Daz y clicar en BVH>Retarget Selected To Active 
6) Si hay problemas con el Mesh de la ropa se puede solucionar en Esculpt Mode>Elastic Deform
- Wonder Studios (https://app.wonderdynamics.com/): analiza el movimiento de videos y genera FBX que pueden importarse al personaje

### **How to import animations from Daz to Blender**
___
1) Para exportar se usa un pluggin interno de Daz: "aniMate2"
2) Seleccionar el personaje, File>Export como Obj ![[Pasted image 20251213183325.png]]
3) Exportar en la misma carpeta anterior en formato mdd
	![[Pasted image 20251213183502.png]]

4) Para importar en Blender hay que importar el Obj del personaje y cambiar de split a keep en los ajustes
	![[Pasted image 20251213183719.png]]
5) Paña añadir la animación al personaje importado: añadir el modificador "MeshCache" y en file path seleccionar el archivo de animación "mdd" exportado antes
6) 
### **Exportar animaciones con Sagan**
- Ir a la pagina de [Sagan](https://www.daz3d.com/forums/discussion/428856/sagan-a-daz-to-blender-alembic-exporter?srsltid=AfmBOor8S41RtEQNddSyJ1f4cPXYpcH97AsVkIh2VfVqRsVLTY9L0qkd) es la web de Daz y descargar el programa.
- Este exportador bakea toda la animación, sin embargo, no permite modificar la mesh en blender.




# **BEST RENDER SETTINGS FOR PORTRAITS**
___
##### **Camera Tips:** 
- **Focal Length** Colocar la cámara lejos del sujeto y aumentar la distancia focal
- **Position:** **Location:** X/0cm, Y/-282cm, Z/161cm || **Rotation:** X/90º
- Añadir Profundidad de campo, definiendo la distancia de forma que el enfoque quede en la cara y las orejas desenfocadas, se puede reducir el "F stop" para reducir el desenfoque  
- **Background** Mantener el fondo simple con un color solido ayuda a centrar la atención el el sujeto, para ello en el panel "World" modificar el nodo "Background"
![[Camera Focal.png]]

##### **Render Settings:**
- **Render Engine:** Cycles
- **Feature Set:** Supported
- **Device:** GPU Compute

- **Format:**
	- Resolution: 2160x2700px (2x Instagram size)

- **Sampling:**
	- **Samples:** cuantos más mejor, pero para evitar crasheos, mantenerlos entre 200 y 2000

- **Light Paths:** puede aumentar la calidad del render pero también ralentizarlo mucho (aumentarlo solo lo necesario). 
	- **Transmission:** Necesario si hay muchos objetos de cristal, aumentar un poco y ver poco se ve en el viewport
	- **Volume:** Necesario aumentar si hay nubes, humo, fuego... 
	- **Transparent:** Necesario aumentar en casos como pelo complejo, aprox 40

 - **Performance>:**
	 - Memory: "Use Tiling" 
	 - Memory>Tile Size: 256

- **Color Management:** permite cambiar el contraste, espacio de color...

![[Raw Render + Edit.png]]

# **Render Settings - Tile Size comparison GPU/CPU:**
___
**Best for GPU Renders:**
- **Tile size:** 256x256 px
- **Sample Range:** 500-1500

**Best for CPU Renders:**
- **Tile size:** 32x32
- **Sample range:** 500-1500

### # **Render Settings - Characters Daz:**
___
- Ajustar la resolución
- Ruta output
- Color management AgX
- Noise threshols off
- Samples 200
- Transparent 70


# **Lightning in Blender**
___
## **Tipos de iluminación en Blender:**

##### **Lightning with HDR:**
- Los HDR son iluminaciones globales que replican iluminaciones de entornos reales como estudios, habitaciones, fabricas.

- Algunos paginas para conseguir HDRs son: www.texutes.com www.polyheaven.com

1) En "Shader Editor" seleccionar el tipo "World"
2) Clicar en el Nodo "Background" y hacer Ctrl+T para añadir los nodos necesarios
3) Seleccionar el archivo HDR en el nodo "Enviorment Texture"
4) Modificar el valor de los nodos para generar diferentes iluminaciones


##### **Lightning with Sky Texture:**
- Los Sky Textures son muy parecidos a los HDR pero permiten mayor modificación y posibilidades como crear nible, rayos de luz. 

- Permiten modificar el tamaño del sol, intensidad, altitud, rotación, añadir aire, polvo, atmosfera

1) En "Shader Editor" seleccionar el tipo "World"
2) Conectar un nodo "Sky Texture" al color del Nodo "Background" 
3) Modificar el valor de los nodos para generar diferentes iluminaciones


##### **Lightning with Lamps:**
1) En el 3D Viewport Shif+A>Light y elegir entre los 4 tipos de lampara (Point, Sun, Spot, Area)

- **Point light:** Se utiliza para iluminar secciones especificas de la escena, es general ya que ilumina en todas las direcciones.
- **Sun light:** Es similar a Sky Texture sin embargo, ofrece menos posibilidades, ambas funcionan para crear un ambiente volumétrico. Para cambiar los parámetros del sol hay que hacerlo desde el panel de propiedades; color, intensidad, ángulo de incidencia.
- **Spot light:** Es una luz direccional, como una lampara de techo, sirve para acentuar ciertos lugares de la escena.
- **Area light:** lampara cuadrada que ofrece muchas posibilidades, su luz afecta de forma muy diferente según su tamaño

## **How to light a scene:** 
1) HDRI (0.1 Strength).
2) Soft area light on face.
3) Another area light - brighter. Focus on the side not facing the camera.
4) Duplicate. Reveal some more of the face.
5) Very large area light from above. For the general more.
6) Add as many area lights needed. Face away from the character, to light up the background a little.
7) Bubbles, dust or general noise into the scene.
8) Very imporant. Volume (fog) to scatter these light for a softer look

##### **Preview Tips:**
- **Viewport:** reducir los Samples (200 aprox) y activar Denoise para agilizar el proceso
- **Render:** Aumentar Samples (4096 aprox) esto aumenta el tiempo pero también la calidad del render (ajustar a la complejidad de la imagen, a más simple menos Samples)
- **Format Resolution:** la resolución y duración de renderizado dependerá de la complejidad de la escena