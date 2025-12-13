

# AVATAR CREATION
___

# SKIN
___
### **How to create textures from scratch**

##### **BLENDER/DAZ:** Exportar el personaje y las texturas
1) Export a character from Daz to Blender

2) In Blender adjust World properties:
	- Surface>Sampling: Manual
	- Surface>Map Resolution & Max Bounces: 512

3) En los materiales de la cara mantener solo el "Diffuse Map" y eliminar el resto, para crear nuevas texturas a partir de esta.

4) En Texture Paint guardar una copia del mapa de la cara en un nuevo directorio

##### **PHOTOSHOP:** Crear Bump, Normal, Roughness, Ambien Occlusion & SSS Textures 
5) Crear un archivo de 4096x4096px y exportar la textura, rasterizarla y duplicarla para crear el resto de texturas.

6) **Normal:** Filter>3D>Generate Normal Map, check "Invert box" y modificar ajustes para detallar (escala de detalle).

7) **Bump:** Filter>3D>Generate Height Map, check "Invert box" y modificar ajustes para detallar (escala de detalle), aumentar el contraste con "Curvas" para afilar detalles.

8) **Roughness:** Image>Regulations>Remove Saturation + Image>Regulations>Invert, utilizar curvas para aumentar el contraste

9) **New Diffuse:** Image>Regulation>Curves: Aumentar el contraste del Deffuse original para crear un nuevo Diffuse Map más detallado.

10) **Subsurface Scatter:** Renombrar la textura original como SSS

11) **Ambient Occlusion:** Duplicar la textura SSS, Image>Regulations>Remove Saturation + Image>Regulations>Invert + Aumentar contraste con curvas. Con un pincel blanco (855px, Dureza 0%, Opacidad 14%) aclarar las zonas alrededor de los ojos, nariz, boca y orejas (1/2 toques por zona)

12) Specular: ??? (Invert+contrast?) (the original?)
- Guardar todas las texturas en el mismo directorio donde esta el proyecto de blender

##### **BLENDER:** Texturize the character 

13) En los materiales de la cara; añadir un nodos de imagen, seleccionar los mapas creados y conectarlos a un IrayUberSkin en vez de a un Principled BSDF.
	- **Normal:** Color Space - Non-Color. ->Normal
	- **Bump:** Color Space - Non-Color. -> Bump Strength & Displacement
	- **SSS:** Color Space - sRGB. -> SSSBlue & SSSRed
	- **Roughness:** Color Space - Non-Color. -> Dual Lobe Specular & Specular Lobe
	- **Diffuse:** Reemplazar el original por el nuevo saturado ->Hue Saturation Value (0.0.0.1)
	- **Ambient Occlusion & Diffuse:** Color ->Mix (Multiply) -> Diffuse Texture


14) Copiar todos los nodos de la cara y reemplazarlos en los materiales de Labios, Orejas, EyeSocket.

15) **REPETIR PROCESO CON EL RESTO DE TEXTURAS (HEAD, TORSO, LEGS, ARMS).

- Seleccionar el Diffuse de la cara para pintarlo en Texture Paint para añadir detalle, como por ejemplo; oscurecer labios el interior superior de los ojos (pincel: Black, Multiply, tamaño y fuerza: según la zona)

- Esculpir algunos detalles en la cara para definirla y detallarla, también se pueden alargar las pestañas seleccionándolas y usando el pincel "Snake hook" en Sculp Mode

- Se puede editar la cantidad de roughness en Texture Paint, pintando de negro donde se quiera destacar como pómulos, labios o nariz (Guardar siempre la textura después de modificarla)


 ##### **RENDER SETTINGS:**
 - **Engine:** Cycles
 - **Samples:** 2000
 - **Tile Size:** 256px
 - **Resolution:** 2000x2000px
 - 
# MAKE UP
___



# EYES
___
![[EYE-Parts.jpg]]
#### **How to fix white daz eyes in blender:**

Al importar el personaje Genesis 8 de Daz  a Blender, los ojos aparecen en blanco, para solucionarlo:
También es posible que falte el material de "Tears" llamado "Tear opacity.jpg" que se conecta a Alpha

**Tears Materials:**
- Metallic: 0
- Roughness: 0
- IOR = 0
- Alpha: Opacity Map
- Normal: Normal Map
- Specular>IOR: 1
- Transmission>Weight: 1 
- Emission>Strength: 1 /Color (black & Opacity:1)

**Sclera, Pupils & Irises Materials:**
- Metallic: 0
- Roughness: 0.03
- IOR = 1.5
- Alpha: 0.995
- Specular>IOR: 0.007
- Sheen>Weight/Roughness: 0.5
- Transmission>Weight: 1 
- Emission>Strength: 1 / >Color (black & Opacity: 1)

**Cornea & Eye Moisture Materials:**
- Metallic: 0.1/1
- Roughness: 0.07/0.057
- IOR = 1.5
- Alpha: 0.995
- Specular>IOR: 0.5
- Transmission>Weight: 1 
- Emission>Strength: 1 / >Color (black & Opacity: 0.1)

#### **Fantasy Eyes**
1) Corregir los ojos al exportar el personaje a Blender (no specular and very little roughness)
2) En Texture Paint guardar y copiar "Eyes Diffuse Texture"
3) En Photoshop abrir un archivo de 4096x4096 px e importar la textura
4) Editar la textura (color iris, tamaño, añadir detalles...)
5) Usar Camera raw Filter para aumentar el detalle original de la textura
6) Exportar la nueva Textura como PNG 
7) Crear el Bump en Filter>3D>Generate Bump Map, ajustar el contraste con curvas y la textura con camera raw filter y exportar.
8) Aplicar las nuevas texturas a los materiales de Sclera, Iris and Pupils 
	- (Difuse color space - sRGB) (Bump and Normal maps - Non-Color)


# BLENDER & POST
___
### **BEST RENDER SETTINGS FOR PORTRAITS**

##### **Camera Tips:** 
- **Focal Length** Colocar la cámara lejos del sujeto y aumentar la distancia focal
- **Position:** **Location:** X/0cm, Y/-282cm, Z/161cm || **Rotation:** X/90º
- Añadir Profundidad de campo, definiendo la distancia de forma que el enfoque quede en la cara y las orejas desenfocadas, se puede reducir el "F stop" para reducir el desenfoque  
- **Background** Mantener el fondo simple con un color solido ayuda a centrar la atención el el sujeto, para ello en el panel "World" modificar el nodo "Background"
![[Camera Focal.png]]

##### **Render Settings:
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

# IMPORT - EXPORT
___
### **Import-Export Fotmats**
![[3D Formats.jpg]]

### **Import Daz to Blender**
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
1) Ir a https://diffeomorphic.blogspot.com/
2) Clicar en el enlace de BVH and FBX Retargeter para descargar el add-on para Blender
3) Al instalar este add-on aparecera el panel BVH que permite importar archivos FBX como animaciones de [mixamo](https://www.mixamo.com/) y utilizarlas en el personaje de Daz
4) Para importar la animación: BVH>Load BVH or FBX File y seleccionar el archivo
5) Para Retargetear: seleccionar el rig animado, el rig del personaje de Daz y clicar en BVH>Retarget Selected To Active 
6) Si hay problemas con el Mesh de la ropa se puede solucionar en Esculpt Mode>Elastic Deform
- Wonder Studios (https://app.wonderdynamics.com/): analiza el movimiento de videos y genera FBX que pueden importarse al personaje

### **How to import animations from Daz to Blender**
1) Para exportar se usa un pluggin interno de Daz: "aniMate2"
2) Seleccionar el personaje, File>Export como Obj ![[Pasted image 20251213183325.png]]
3) Exportar en la misma carpeta anterior en formato mdd
	![[Pasted image 20251213183502.png]]

4) Para importar en Blender hay que importar el Obj del personaje y cambiar de split a keep en los ajustes
	![[Pasted image 20251213183719.png]]
5) Paña añadir la animación al personaje importado: añadir el modificador "MeshCache" y en file path seleccionar el archivo de animación "mdd" exportado antes



# ANIMATION
___







___
# Harriet Davey:

Creating Virtual Characters and Avatars (Using Daz 3D and Blender) - Suitable for Beginners
___
### 1. Daz Studio Interface:
- Como abrir y cerrar los paneles
- Modificar los viewports y tipos de vista
- Los apartados básicos de cada panel
- Como moverse en el viewport

### 2. Genesis Figures:
- Como añadir una figura
- Se tiene acceso a los básicos de Genesis 3, 8 y 9 
- Ver los elementos de la escena en el panel lateral
### 3. Daz Store:
- Los morph packs son muy útiles para principiantes 
- Recomendado (Genesis 9 Essential Shapes Bundle) y (200 Plus Genesis 9 Edition)
### 4. Customising the Character:
- Usar los sliders de "Shaping" para modificar al personaje
- Cambiar la piel
- Cambiar la pose
- Tener en cuenta que siempre se vera más detallado de como será definitivamente al exportar
### 5. Exporting from Daz:
- Diagrama de formatos adecuados para cada Software
- Sagan: software de terceros que permite exportar animaciones de Daz a otros
- Daz to Blender: como el rig de Daz es un poco malo sirve de puente entre los dos programas
### 6. Blender Interface:
- Como importar
- Como modificar los mapas y ver las texturas
- Buscar HRIs en Poly Heaven
### 7. Material Setup:
- Corregir los materiales
- Corregir las texturas
- Corregir ojos y pestañas (min 32)
- Blender Kit: Muy util para encontrar materiales
### 8. Render setting:
- Ajustar la resolución
- Ruta output
- Color management AgX
- Noise threshols off
- Samples 200
- Transparent 70

Improving my Followers 3D Blender Renders
___
### 0. Daz Store:
**Manicura/Uñas:**
- FK Manicure Muse Morphs and Materials for Genesis 9 MR Bundle
- FK Manicure Muse Morphs for Genesis 9

**Basicos:**
- 200 Plus Genesis 9 Edition
- Genesis 9 Essential Shapes Bundle

**Piel/Skin:**
- Skin Builder 8 for Genesis 8 Female(s)
	-Permite crear texturas de piel, pero solo esta para pieles femeninas

- Genesis 8 UV Swap: Male and Female Base
	-Permite pasar UVs de las pieles femeninas a avatares masculinos
