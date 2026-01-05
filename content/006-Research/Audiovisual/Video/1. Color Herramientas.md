---
tags:
  - Davinci
  - Color
---
# **Introducción al color - \[AURAPRODS\]**
___
## **Luz/color:** 
La luz es una onda electromagnética, dentro del espectro de frecuencias electromagnéticas hay un rango de ondas/luz visible por el ojo humano y el cerebro interpreta como colores.

## **Captación de la imagen Ojos y Cámaras:**
El ojo humano no es capaz de captar la realidad tal como es si no la información que recibe tras un proceso previo antes de llegar al ojo, ej; una luz ilumina una manzana esta la absorbe y refleja la luz roja que llega al ojo.

El ojo humano solo es capaz de captar tres colores, rojo, verde y azul (sobre todo el verde), a través de la mezcla de estos tres es capaz de formar el resto de los colores restantes intermedios, a la hora de crear los mecanismos de las cámaras se utilizó la misma lógica haciendo que los sensores de las cámaras captaran los mismos colores (RGB), el sensor de una cámara representa la luz en un (patrón Bayer) RGB dando prioridad al verde como el ojo (50% 25% 25%),

A la hora capturar una imagen el sensor de la cámara capta la luz y se llevan a cabo una serie de procesos que encasillan y comprimen la información de la realidad ejemplos; al reducir la exposición reducimos el número de luz del rango, al elegir un formato como mp4 se reduce la información para reducir su tamaño y al final de estos procesos la información que llega al archivo en una porción reducida de la que había en la realidad y ha sido capaz de captar la cámara.

**Profundidad de bits:** a la hora de representar los colores de la realidad los sensores comprimen esa información en bits (0,1), un sensor de 8 bits es capaz de representar los colores entre un rango de 256 variaciones por color, mientras que un sensor de 10 bits será capaz de representar un rango de 1024 por cada uno. (Es útil grabar a 10 bit para tener un mayor rango en post, pero al exportar suele ser 8 ya que es el estándar de la mayoría de pantallas). El color digitalmente realmente es un valor “xyz”.

## **Propiedades del color:**

- **Tono;** frecuencia electromagnética, habitualmente llamado “color” ya que es lo que lo distingue de otro, es la posición dentro del círculo cromático.

- **Saturación;** Intensidad o pureza del color del color, un color saturado es muy vivo mientras poco saturado es apagado.

- **luminancia;** determina la cantidad de luz blanca de un color, cuanta más luminancia más claro será el color y viceversa.

>[!Info]
>
>Debido que pese a existir los colores puros cada pantalla lo representa de diferente forma (tono, saturación, luminancia) y cada persona los percibe de diferente forma, existen herramientas para representar e identificar los colores independientemente de la pantalla para monitorear la señal de color.

# **==COLOR EN DAVINCI - \[AURAPRODS\]:==**
___
## **Espacios cromáticos:** 
___
Son gamas de colores capaces de representar diferentes paletes colores (RGB, CMYK, SRGB), el espacio de color más común es el Rec. 709 (igual al sRGB), el estándar para cine es ACES (AP1) es mucho más amplio que el Rec. 709,

Dentro de DaVinci es útil utilizar el espacio DaVinci WG ya que su espacio es mucho mayor a los anteriores facilitando trabajar el color, aunque luego se exporte solo lo que hay en Rec. 709. Para ajustarlo hay que modificar los ajustes de gestión cromática y seleccionar Colorimetría\>DaVinci YRGB Color managed, en Color processing mode\>HDR DaVinci Wide Gamut Intermediate y en Espacio cromático final\>Rec.709 (=Colorimetría y procesamiento del color en el espacio cromático de DaVinci pero el espacio cromático final en Rec.709)

Con este método, además de para tener una mayor precisión al ajustar los colores, al gestionar los colores con DaVinci color managed se ajusta el espacio de color de los clips RAWs automáticamente base a sus metadatos, también permite cambiar el espacio de color de un clip LOG haciendo “clic derecho\>Espacio cromático inicial”

- **==LOG y RAW:==** LOG y RAW son diferentes tipos de metraje de alta calidad que ofrecen una calidad óptima para ajustar los colores en post.

- **==RAW==** es un formato de datos sin comprimir ni procesar, que conserva toda la información captada por el sensor, esto permite ajustar parámetros como la ISO, Tinte, Exposición de forma real y no sobre una imagen ya procesada.

- **==LOG==** es la imagen grabada, plana y sin saturación de color lo que sigue siendo útil para la colorimetría, pero a diferencia de RAW los ajustes que se hagan en estos clips son sobre una imagen ya procesada.

## **Compresión: \[Ini. foto y video\]**
___
- **==Bitrate:==** al comprimir un video hay que decidir la cantidad de bits asignados a cada segundo del video, a mayor cantidad de bits mayor calidad y tamaño.

- **==Códec:==** determina como se gestionan la profundidad y bitrate, los más utilizados son H264 y H265/EVC, que es capaz de incluir la misma información con la mitad de bitrate comprimiendo bastante sin perder calidad, pero requiriendo más recursos.

- **==Contenedor:==** el formato de archivo o contenedor es una forma de organizar y empaquetar datos, como video, audio y metadatos, dentro de un archivo, MOB, MP4...

## **Graficas de visualización:**
___
- **==Gráfica RGB/Parade:==** Representa de izq. a dcha. los canales RGB de la imagen

- **==Forma de onda:==** Representa de Izq. a dcha. la forma de la onda de la imagen

- **==Vectorscopio:==** Muestra los niveles de luz y saturación de la imagen

- **==Cromaticidad CIE:==** a

## **Nodos:** 
___
De la misma forma que en fusión, touchdesigner, geometry nodes y shaders en blender los ajustes de color se trabajan con nodos, por defecto hay una entrada y una salida, la cual podremos modificar para aplicar los ajustes, un nodo recibe la información del anterior y aplica un nuevo ajuste sobre el resultado, trabajan de forma procedural es decir un cambio en un nodo afectara a todos aquellos conectados a él, cada nodo solo puede tener un tipo de información (efecto, LUT...)

- **==Alt+S:==** Crear nodo a la derecha

- **==Shift+S:==** Crear nodo a la izquierda

- **==CTRL+D:==** activar/desactivar un nodo

- **==Alt+L:==** añadir un mezclador de capas (por defecto esta invertido el orden de las capas)

## **Presets:**
___
- **==Capturas:==** es posible guardar una modificación de color que se haya hecho haciendo clic derecho sobre el clip\>capturar, lo que guardara una version , estas capturas se guardaran en Galería pudiendo aplicarla en otro clip o al mismo en otro momento.

- **=LUTs:==** desde esta ventana se pueden añadir LUTs, que simplificando son filtros, los hay de utilidad como por ejemplo pasar una imagen de LOG a 709 y creativos como aplicar una configuración sepia al clip.

- **==Power grades:==** De forma similar a los LUTs, permite capturar una red de nodos ya sea una corrección, un efecto... guardarla en un archivo y poder aplicar luego ese power grade a otro clip en cualquier otro proyecto, pero a diferencia de los LUTs permite la posibilidad de modificar los nodos.

# **Herramientas de corrección:**
___
- **==Ruedas LOG:==** permiten modificar de forma discriminada ajustes como sombras, luces, puntos medios o a todo de forma indiscriminada.

- **==Ruedas HDR==:** Son una version actualizada de los círculos cromáticos hechas para trabajar con clips de alto rango dinámico (HDR), aunque se puede y son útiles de usarse, aunque los planos no sean necesariamente de bits altos (10, 12,14), su principal diferencia es que utiliza un modelo de color nuevo que respeta mejor cómo funcionan los cambios de color en luces y sombras

	Además, tiene en cuenta el espacio cromático del clip y en el que estamos trabajando (color space y gamma). Con la version inicial si quisiéramos aumentar la temperatura del clip seria como poner un filtro naranja, mientras que con las HDR realmente se pude modificar la temperatura de forma más realista ya que analiza la imagen y se mapea al modelo del espacio de color.

	Tiene seis ruedas que aíslan zonas de la imagen de oscuras a iluminadas para modificarlas por separado, las zonas de cada extremo se incluyen entre si (black/ dark/ shadow, light/ highlight/ specular y global) el umbral de las zonas se puede modificar para incluir mas o menos sombras o luces en cada una o incluso crear una nueva, para ello se hace desde la vista de gráfico.

- **==Curvas:==** Las curvas de color representan de forma gráfica de los niveles de luz, como un ecualizador, pero de luces, existen diferentes tipos de curvas las cuales permiten modificar las luces en base diferentes parámetros (modificar un tono en base a luminancia, la luminancia en base a su saturación...)

- **==Mascaras:==** Permiten crear mascaras para realizar correcciones únicamente a zonas concretas, útil cuando seleccionamos un color con Qualifier pero selecciona una zona más amplia de la que queremos, con la máscara podremos modificar esa selección únicamente a las zonas dentro de la máscara.

- **==Trackeo de máscaras:==** Permite trackear las máscaras a lo largo del tiempo, util ya que un objeto se puede mover durante el clip y sin trackeo la máscara se quedaría en la posición inicial.

- **==Mascaras mágicas:==** Permite utilizar una IA para crear mascaras sobre personas y objetos para trackearlos a lo largo del tiempo haciendo una rotoscopia.

	Útil para realizar ajustes de colores a zonas concretas o también para conectarlo a una salida Alpha, duplicar el clip, después desconectar la salida Alpha del segundo clip para tener un clip con la imagen original y por encima otra con el objeto rotoscopiado pudiendo poner textos, imágenes... Entre ambos clips.

- **==Qualifier:==** Permite seleccionar colores específicos o rangos de colores en base a los parámetros que ajustemos (Tono, Saturación, Luminancia...) útil para ajustar zonas o colores concretas como por ejemplo pieles.

- **==Color warper/Distorsión cromática:==** Permite modificar el tono/saturación, crominancia/luminancia de un color de forma discriminada, se pueden modificar las subdivisiones de la malla para tener un mayor control al modificar el color, también se pueden fijar los puntos para bloquearlos y modificar un color de forma aislada sin afectar a los adyacentes

- **==Tabla cromática:==** Permite calibrar los colores de la escena en base a la tabla cromática de diferentes empresas de cámaras, estas tablas únicamente son paletas con colores optimizados para poder calibrar los colores que capta la cámara con la realidad.

- **==Mezclador RGB:==** se podría considerar una version analógica o antigua de las otras dos ruedas cromáticas, pero en vez de discriminar las modificaciones por luces, sombras, saturación... se discrimina por canal modificando cada uno individualmente, pudiendo subir tonos verdes en el canal azul, tonos azules en el rojo...,

	un ejemplo de utilidad sería un plano con mucha predominancia de un color como el rojo, podríamos bajar la información del rojo en su canal y ajustar en los demás, realizando asi un balance de blancos.

- **==Efectos de movimiento:==** permite realizar efectos de arreglo, en concreto reducir el ruido en base al tiempo (comparando con otros fotogramas), reducción de ruido espacial (comparando con otras zonas de la imagen y haciendo una media, desenfocando las zonas con ruido) y desenfoque de movimiento (recreando un desenfoque de movimiento en analizando la posición de los pixeles en el tiempo, valores entre 5/10 recomendado).

- **==Desenfoque:==** permite añadir desenfoque, nitidez y niebla además de poder ajustar su intensidad, relación de aspecto y redimensionamiento y modificarlos por canal RGB

- **==Ajuste de tamaño:==** permite modificar transformar ancho, alto, zoom rotación... del clip.

- **==Imágenes estereoscópicas:==** Sirve para sincronizar, mezclar, ajustar y todo lo relacionado a planos grabados en 3D









