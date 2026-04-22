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


# **Import Daz to Blender**
___
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

>[!Info] Evitar Frame Drop
>Para evitar el frame drop out y suavizar el playback de la animación; en la timeline > "Playback>Sync" seleccionar Frame dropping



# ANIMATION - DAZ To Blender Bridge
___
>[!Info] Inconvenientes DAZ To Blender
>Este método puede ser deficiente a la hora de la animación facial y respetar las animaciones hechas en DAZ una vez se exporta el personaje a Blender.

>[!Info] Utilidades DAZ TO Blender
>Sin embargo puede ser útil para animaciones en las que no se necesita que el personaje sea muy expresivo y el peso recaiga en los movimientos del cuerpo del personaje.

>[!Info] Aconsejable Texturizar Manualmente
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


# How to add real physics
___
**To objects and characters in Blender (Hair with realistic movement) IN REAL TIME**

A la hora de crear una animación realista es importante el movimiento, para ello no es suficiente la animación del rig, para ello se puede añadir complejidad con simulaciones de físicas como; fuego, agua, viento...

## **Animación de viento y colisiones**
En ocasiones a la hora de animar una escena compleja es imposible animar keyframe a keyframe toda, por ello hay que recurrir a simulaciones, sin embargo algunas de estas requieren muchos recursos como las de tela y a veces los resultados pueden ser muy caóticos.

>[!Info] WIGGLE 2
>**[Wiggle 2](https://github.com/shteeve3d/blender-wiggle-2):** Es un add-on para Blender que permite animar físicas con bones.

**Examples:**
<img
  src="../media-content/Apuntes/3D-Notes/Animation/Pasted image 20251230165754.png"
  alt="WPC"
  style="margin: 0 auto; padding: 0; width: 100%; height: auto;"
/>


Esta técnica no solo puede utilizarse en pelo hecho a base de cards.
### **Físicas y Colisiones**
**Hueso principal:** ir al panel lateral Animation>Wiggle2; clicar el hueso del rig que ser el principal del personaje (cadera) y seleccionar "Bone Head" (Eso le dice al rig que ese será el hueso principal).

**Huesos secundarios:** Seleccionar los huesos secundarios en orden (de manos a cabeza) e ir clicando en Animation>Wiggle2>Bone tail.


**Configurar colisiones:** para que la geometría del personaje no se atraviese hay que configurar la colisiones:

Hay que separar la malla de las piernas de la del cuerpo ya que si es un mismo objeto puede generar problemas; 
- Ir a Pose Mode y seleccionar el hueso que se quiere separar y en Animation>Wiggle2>Collision y seleccionar la geometría del objeto que se quieren separar con la pipeta
- también se pueden modificar los valores de (radius/friction/bounce/sticky)

El resto de parámetros del plugin son útiles:
Mass: El peso en kilogramos del hueso y que tan afectado será por la cadena de huesos, el hueso mas pesado afectara el movimiento de los huesos más livianos. (Cuanta menos masa mayor sensación de elasticidad dará).

**Stiff:** Elasticidad del hueso, esto ayuda a que el hueso tenga la sensación de ser mas elástico y que fluya con el movimiento de la cadena de huesos. (Al ponerlo a 0 el movimiento es más gelatinosos lo cual es útil con el pelo, para rigs alrededor de 200 esta bien)

**Stretch:** Básicamente estira o comprime el hueso, también es afectado por la gravedad

**Damp** Mantiene el hueso en su posición inicial (no es necesario modificarlo)

	(tanto stretch como damp funcionan según el caso)

**Gravity:** menos gravedad hará que el hueso sea mas influenciado por la inercia del movimiento del Bone head y la demas cadena de huesos, más gravedad es equivalente a tener resistencia de movimiento y dar la sensación de ser un hueso más pesado

Es posible seleccionar varios y modificarlos huesos simultáneamente para obtener un resultado más uniforme, esto depende de la situación, por ejemplo en el pelo:
- La parte cercana al cráneo no se mueve tanto (Mass + Gravity) como los mechones (Stiff + Gravitty)

<img
  src="../media-content/Apuntes/3D-Notes/Animation/Pasted image 20251230172827.png"
  alt="WPC"
  style="margin: 0 auto; padding: 0; width: 100%; height: auto;"
/>

### **Viento**
A la hora de crear vegetación realista es común no animarla, lo cual resta realismo.

**Crear rig:** Seleccionando el objeto Ctrl+A>Armature, colocarlo en la base de la planta y crear nuevos huesos extruyendolo, tras crear el rig seleccionar el objeto y la armadura Ctrl+P>With automatic weights, esto aplicara la armadura al objeto, el cual podra modificarse en pose mode.

**Hueso principal:** ir al panel lateral Animation>Wiggle2; clicar el hueso del rig que ser el principal y seleccionar "Bone Head" 

**Huesos secundarios:** Seleccionar los huesos secundarios en orden (del exterior a la base) e ir clicando en Animation>Wiggle2>Bone tail.

**Simular viento:** Shift+A>Force Field>Wind: y colocar el viento en la dirección deseada, y al panel de fisicas y modificar las propiedades del viento.

**Activar fisicas viento:** En pose mode seleccionar los Bone tail y en el panel Animation>Wiggle2>Bone tail>Wind: Seleccionar el viento creado.

**Propiedades de cada hueso:** Configurar las propiedades de cada hueso para obtener una simulación realista: Animation>Wiggle2>Bone tail>mass, stiff...


### **Haird Cards animation**
Esta técnica también permite animar pelo hecho a base de cards.

El rig del pelo es un tanto diferente al de una armadura u objetos simples como una planta, y hay que tener algunas cosas en cuenta:
- El pelo necesita tener una cantidad huesos más ordenada, para poder tenerlo separado por partes.
- Mientras que otros objetos pueden rigearse manualmente o con automáticamente con herramientas, el pelo también puede rigearse de forma manual, lo cual es recomendable según el caso, aunque también se puede usar Diffeomorphic.

**Exportar el pelo de DAZ a Blender:**
El proceso variara según el tipo de pelo, cuanto más largo sea el pelo puede llegar a ser más compleja la animación sobretodo por las colisiones.

**Exportar el personaje a Blender**
1) Exportar el personaje utilizando Diffeomorphic.
2) Importar el personaje a Blender

Por ahora el personaje cuenta con un rig, sin embargo el pelo no lo tiene y esta unido al personaje por lo que su movimiento es rígido siguiendo el movimiento del personaje.

**Riggear pelo**
3) Seleccionar el personaje y pelo ir a Daz Set Up>Add Hair Rig: aquí hay que ajustar los parámetros y deseleccionar "Check Strips". Esto generara un rig en el pelo.

**Añadir físicas al pelo**
Para añadir físicas al pelo hay que combinar este metodo de importación con el add-on Wiggle 2.

4) Tocar el rig del pelo, entrar a pose mode ir Animation>Wiggle2: y seleccionar los huesos que estarán afectados por la cadena.

Ahora al reproducir la timeline el pelo será afectado por las físicas.


**Añadir viento**
Añadir viento para comprobar como reaccióna el pelo a las fisicas.

5) Añadir y configurar viento.
6) Seleccionar los huesos, entrar a Pose mode ir a Animation>Wiggle2>Bone Tail>wind: y seleccionar los huesos que serán afectados.

**Configurar colisiones**
Para que pelo no atraviese el rostro del personaje al moverse hay que configurar las colisiones del pelo, separando el rostro del personaje para que el análisis de colisiones no tenga que analizar el cuerpo completo.

7) Seleccionar el personaje en Object Mode, entrar en Edit Mode, ir a materiales y seleccionar (face, lips, Ears) y separar con P>Selection

8) Ir al frame 0, seleccionar el rig del pelo, ir a pose mode y en Animation>Wiggle2>Bone Tail>Collision: seleccionar el rostro del personaje para el pelo delantero y el cuerpo para el pelo trasero.

(reducir el radius de la colisión de los huesos para evitar errores).

**Fases de movimiento:**
Configurar el movimiento del pelo para añadir realismo, teniendo en cuenta que las partes más cercanas al cráneo se mueven menos que las puntas y que cada mechón interactúa de forma diferente.

Para ello hay que ir modificando las propiedades de los huesos del pelo hasta obtener el resultado deseado Animation>Wiggle2>Bone Tail> Mass, Stiff, Stretch..



DAZ TO CLO
<iframe width="560" height="315" src="https://www.youtube.com/embed/xJ0eGqPkdRs?si=n05LDTiI_z4l2VDY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

ANIMATION DAZ/CLO/BLENDER
<iframe width="560" height="315" src="https://www.youtube.com/embed/hYeq3_iIL58?si=5LGwnOyTMPt56LSt" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

ANIMATION CLO/BLENDER/MIXAMO
<iframe width="560" height="315" src="https://www.youtube.com/embed/SqYZ1HL0x5c?si=engd6W3qUL5U3XWB" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

<iframe width="560" height="315" src="https://www.youtube.com/embed/3GpXgKEZ5Kk?si=WjKD7m0zX7vLYO4h" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

CLO3D RETOPOLOGY IN BLENDER
<iframe width="560" height="315" src="https://www.youtube.com/embed/hIebHFzHUmw?si=rV9_h_JaKZHNBRg8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>