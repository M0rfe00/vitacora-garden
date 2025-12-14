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