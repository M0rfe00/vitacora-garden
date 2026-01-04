---
tags:
  - Davinci
  - Color
---
# **Introducción al color - \[AURAPRODS\]**
___
**Luz/color:** La luz es una onda electromagnética, dentro del espectro de frecuencias electromagnéticas hay un rango de ondas/luz visible por el ojo humano y el cerebro interpreta como colores.

## **Captación de la imagen Ojos y Cámaras:**

El ojo humano no es capaz de captar la realidad tal como es si no la información que recibe tras un proceso previo antes de llegar al ojo, ej; una luz ilumina una manzana esta la absorbe y refleja la luz roja que llega al ojo.

El ojo humano solo es capaz de captar tres colores, rojo, verde y azul (sobre todo el verde), a través de la mezcla de estos tres es capaz de formar el resto de los colores restantes intermedios, a la hora de crear los mecanismos de las cámaras se utilizó la misma lógica haciendo que los sensores de las cámaras captaran los mismos colores (RGB), el sensor de una cámara representa la luz en un (patrón Bayer) RGB dando prioridad al verde como el ojo (50% 25% 25%),

A la hora capturar una imagen el sensor de la cámara capta la luz y se llevan a cabo una serie de procesos que encasillan y comprimen la información de la realidad ejemplos; al reducir la exposición reducimos el número de luz del rango, al elegir un formato como mp4 se reduce la información para reducir su tamaño y al final de estos procesos la información que llega al archivo en una porción reducida de la que había en la realidad y ha sido capaz de captar la cámara.

**Profundidad de bits:** a la hora de representar los colores de la realidad los sensores comprimen esa información en bits (0,1), un sensor de 8 bits es capaz de representar los colores entre un rango de 256 variaciones por color, mientras que un sensor de 10 bits será capaz de representar un rango de 1024 por cada uno. (Es útil grabar a 10 bit para tener un mayor rango en post, pero al exportar suele ser 8 ya que es el estándar de la mayoría de pantallas). El color digitalmente realmente es un valor “xyz”.

## **Propiedades del color:**

- **Tono;** frecuencia electromagnética, habitualmente llamado “color” ya que es lo que lo distingue de otro, es la posición dentro del círculo cromático.

- **Saturación;** Intensidad o pureza del color del color, un color saturado es muy vivo mientras poco saturado es apagado.

- **luminancia;** determina la cantidad de luz blanca de un color, cuanta más luminancia más claro será el color y viceversa.

Debido que pese a existir los colores puros cada pantalla lo representa de diferente forma (tono, saturación, luminancia) y cada persona los percibe de diferente forma, existen herramientas para representar e identificar los colores independientemente de la pantalla para monitorear la señal de color.

# **COLOR EN DAVINCI - \[AURAPRODS\]:**
___
**Espacios cromáticos:** Son gamas de colores capaces de representar diferentes paletes colores (RGB, CMYK, SRGB), el espacio de color más común es el Rec. 709 (igual al sRGB), el estándar para cine es ACES (AP1) es mucho más amplio que el Rec. 709,

Dentro de DaVinci es útil utilizar el espacio DaVinci WG ya que su espacio es mucho mayor a los anteriores facilitando trabajar el color, aunque luego se exporte solo lo que hay en Rec. 709. Para ajustarlo hay que modificar los ajustes de gestión cromática y seleccionar Colorimetría\>DaVinci YRGB Color managed, en Color processing mode\>HDR DaVinci Wide Gamut Intermediate y en Espacio cromático final\>Rec.709 (=Colorimetría y procesamiento del color en el espacio cromático de DaVinci pero el espacio cromático final en Rec.709)

Con este método, además de para tener una mayor precisión al ajustar los colores, al gestionar los colores con DaVinci color managed se ajusta el espacio de color de los clips RAWs automáticamente base a sus metadatos, también permite cambiar el espacio de color de un clip LOG haciendo “clic derecho\>Espacio cromático inicial”

- **LOG y RAW:** LOG y RAW son diferentes tipos de metraje de alta calidad que ofrecen una calidad óptima para ajustar los colores en post.

- **RAW** es un formato de datos sin comprimir ni procesar, que conserva toda la información captada por el sensor, esto permite ajustar parámetros como la ISO, Tinte, Exposición de forma real y no sobre una imagen ya procesada.

- **LOG** es la imagen grabada, plana y sin saturación de color lo que sigue siendo útil para la colorimetría, pero a diferencia de RAW los ajustes que se hagan en estos clips son sobre una imagen ya procesada.

## **Compresión: \[Ini. foto y video\]**

- **Bitrate:** al comprimir un video hay que decidir la cantidad de bits asignados a cada segundo del video, a mayor cantidad de bits mayor calidad y tamaño.

- **Códec:** determina como se gestionan la profundidad y bitrate, los más utilizados son H264 y H265/EVC, que es capaz de incluir la misma información con la mitad de bitrate comprimiendo bastante sin perder calidad, pero requiriendo más recursos.

- **Contenedor:** el formato de archivo o contenedor es una forma de organizar y empaquetar datos, como video, audio y metadatos, dentro de un archivo, MOB, MP4...

## **Graficas de visualización:**

- **Gráfica RGB/Parade:** Representa de izq. a dcha. los canales RGB de la imagen

- **Forma de onda:** Representa de Izq. a dcha. la forma de la onda de la imagen

- **Vectorscopio:** Muestra los niveles de luz y saturación de la imagen

- **Cromaticidad CIE:** a

## **Nodos:** 
De la misma forma que en fusión, touchdesigner, geometry nodes y shaders en blender los ajustes de color se trabajan con nodos, por defecto hay una entrada y una salida, la cual podremos modificar para aplicar los ajustes, un nodo recibe la información del anterior y aplica un nuevo ajuste sobre el resultado, trabajan de forma procedural es decir un cambio en un nodo afectara a todos aquellos conectados a él, cada nodo solo puede tener un tipo de información (efecto, LUT...)

- **Alt+S:** Crear nodo a la derecha

- **Shift+S:** Crear nodo a la izquierda

- **CTRL+D:** activar/desactivar un nodo

- **Alt+L:** añadir un mezclador de capas (por defecto esta invertido el orden de las capas)

#### **Presets:**

- **Capturas**: es posible guardar una modificación de color que se haya hecho haciendo clic derecho sobre el clip\>capturar, lo que guardara una version , estas capturas se guardaran en Galería pudiendo aplicarla en otro clip o al mismo en otro momento.

- **LUTs:** desde esta ventana se pueden añadir LUTs, que simplificando son filtros, los hay de utilidad como por ejemplo pasar una imagen de LOG a 709 y creativos como aplicar una configuración sepia al clip.

- **Power grades**: De forma similar a los LUTs, permite capturar una red de nodos ya sea una corrección, un efecto... guardarla en un archivo y poder aplicar luego ese power grade a otro clip en cualquier otro proyecto, pero a diferencia de los LUTs permite la posibilidad de modificar los nodos.

# **Herramientas de corrección:**

- **Ruedas LOG:** permiten modificar de forma discriminada ajustes como sombras, luces, puntos medios o a todo de forma indiscriminada.

- **Ruedas HDR:** Son una version actualizada de los círculos cromáticos hechas para trabajar con clips de alto rango dinámico (HDR), aunque se puede y son útiles de usarse, aunque los planos no sean necesariamente de bits altos (10, 12,14), su principal diferencia es que utiliza un modelo de color nuevo que respeta mejor cómo funcionan los cambios de color en luces y sombras

	Además, tiene en cuenta el espacio cromático del clip y en el que estamos trabajando (color space y gamma). Con la version inicial si quisiéramos aumentar la temperatura del clip seria como poner un filtro naranja, mientras que con las HDR realmente se pude modificar la temperatura de forma más realista ya que analiza la imagen y se mapea al modelo del espacio de color.

	Tiene seis ruedas que aíslan zonas de la imagen de oscuras a iluminadas para modificarlas por separado, las zonas de cada extremo se incluyen entre si (black/ dark/ shadow, light/ highlight/ specular y global) el umbral de las zonas se puede modificar para incluir mas o menos sombras o luces en cada una o incluso crear una nueva, para ello se hace desde la vista de gráfico.

- **Curvas:** Las curvas de color representan de forma gráfica de los niveles de luz, como un ecualizador, pero de luces, existen diferentes tipos de curvas las cuales permiten modificar las luces en base diferentes parámetros (modificar un tono en base a luminancia, la luminancia en base a su saturación...)

- **Mascaras:** Permiten crear mascaras para realizar correcciones únicamente a zonas concretas, útil cuando seleccionamos un color con Qualifier pero selecciona una zona más amplia de la que queremos, con la máscara podremos modificar esa selección únicamente a las zonas dentro de la máscara.

- **Trackeo de máscaras:** Permite trackear las máscaras a lo largo del tiempo, util ya que un objeto se puede mover durante el clip y sin trackeo la máscara se quedaría en la posición inicial.

- **Mascaras mágicas:** Permite utilizar una IA para crear mascaras sobre personas y objetos para trackearlos a lo largo del tiempo haciendo una rotoscopia.

	Útil para realizar ajustes de colores a zonas concretas o también para conectarlo a una salida Alpha, duplicar el clip, después desconectar la salida Alpha del segundo clip para tener un clip con la imagen original y por encima otra con el objeto rotoscopiado pudiendo poner textos, imágenes... Entre ambos clips.

- **Qualifier:** Permite seleccionar colores específicos o rangos de colores en base a los parámetros que ajustemos (Tono, Saturación, Luminancia...) útil para ajustar zonas o colores concretas como por ejemplo pieles.

- **Color warper/Distorsión cromática:** Permite modificar el tono/saturación, crominancia/luminancia de un color de forma discriminada, se pueden modificar las subdivisiones de la malla para tener un mayor control al modificar el color, también se pueden fijar los puntos para bloquearlos y modificar un color de forma aislada sin afectar a los adyacentes

- **Tabla cromática:** Permite calibrar los colores de la escena en base a la tabla cromática de diferentes empresas de cámaras, estas tablas únicamente son paletas con colores optimizados para poder calibrar los colores que capta la cámara con la realidad.

- **Mezclador RGB:** se podría considerar una version analógica o antigua de las otras dos ruedas cromáticas, pero en vez de discriminar las modificaciones por luces, sombras, saturación... se discrimina por canal modificando cada uno individualmente, pudiendo subir tonos verdes en el canal azul, tonos azules en el rojo...,

	un ejemplo de utilidad sería un plano con mucha predominancia de un color como el rojo, podríamos bajar la información del rojo en su canal y ajustar en los demás, realizando asi un balance de blancos.

- **Efectos de movimiento:** permite realizar efectos de arreglo, en concreto reducir el ruido en base al tiempo (comparando con otros fotogramas), reducción de ruido espacial (comparando con otras zonas de la imagen y haciendo una media, desenfocando las zonas con ruido) y desenfoque de movimiento (recreando un desenfoque de movimiento en analizando la posición de los pixeles en el tiempo, valores entre 5/10 recomendado).

- Desenfoque: permite añadir desenfoque, nitidez y niebla además de poder ajustar su intensidad, relación de aspecto y redimensionamiento y modificarlos por canal RGB

- **Ajuste de tamaño:** permite modificar transformar ancho, alto, zoom rotación... del clip.

- **Imágenes estereoscópicas:** Sirve para sincronizar, mezclar, ajustar y todo lo relacionado a planos grabados en 3D

# **Trabajar el color:**

- **Corrección de color y etalonaje:** La corrección de color se basa en corregir los posibles errores de color de un clip, mientras que el etalonaje es más creativo y subjetivo.

	Antes de empezar a entalonar se suelen realizar algunas correcciones comunes como ajustar la exposición, el contraste, realizar un balance de blancos..., tras esto se puede se puede empezar a entalonar o en otras palabras corregir de forma creativa.

	Antes de empezar a entalonar un segundo clip hay que realizar las correcciones necesarias para para que la transición entre uno y otro no sea muy brusca, para todos estos ajustes se suelen utilizar principalmente dos nodos, uno para la corrección individual para cada clip, otro para el etalonaje general y otros adicionales para ajustes, efectos, correcciones.

	A la hora de aplicar los nodos de un clip a otros en vez de copiarlos y pegarlos clip a clip, es posible agrupar los clips, lo que creara unas ventanas adicionales en la que podremos pegar los nodos o preferiblemente una captura de ellos (capturándolos, borrándolos de la ventana inicial y aplicando la captura en la ventana “clips posteriores al grupo”) esto permite modificar todos los clips del mismo grupo a la vez de forma procedural al compartir los nodos del post grupo.

- **Igualación:** Para igualar los colores de un plano de referencia a uno de nuestros clips, un método es; capturar el clip de referencia, activar el icono de comparativa para comparar la referencia y nuestro clip, de esta forma al mover la cortinilla de la comparativa también se verá en la representación gráfica, de esta forma se podrá igualar tanto de forma visual viendo directamente ambas imágenes como de forma matemática guiándonos por las diferentes gráficas.

- **Tratamiento de pieles:** Para tratar las pieles respetando el resto de las correcciones en el plano lo primero que hay que hacer es aislarla, esto se puede hacer con la herramienta Qualifier para seleccionar los tonos de la piel y la máscara para delimitar la selección, también se podría modificar el fondo por separado añadiendo un mezclador de capas.

	Independientemente de la persona la tonalidad de la piel es la misma, lo que cambia de una a otra son los valores de luminosidad, por ello el vectorscopio es realmente útil para esto ya que muestra los diferentes tonos y del centro para fuera la saturación del color, esta grafica viene con un espacio cromático adicional que podemos activar llamado “indicadores de tono de piel” que muestra una referencia de donde debería estar el tono de piel de la selección, lo que se debe hacer es modificar el color para que quede ligeramente por encima de la línea.

	Para ajustar el color de la piel hay que jugar un poco con las ruedas de color; en los tonos medios el tono de la piel, en las sombras un poco de rojo y saturación para darle vida a la piel y en las altas luces el mismo color del fondo para suavizar el contraste y asimilar los reflejos del fondo en la piel, todos estos ajustes pueden ser modificados para conseguir efectos diferentes como por ejemplo bajar la saturación de las sombras y teñirlas de azul para conseguir una piel más apagada.

	En caso de haber demasiado cambio de color en la piel se puede reducir la ganancia de salida a la máscara para que se mezcle más suavemente con la piel original.

## **Workflow de color:**

**Es útil trabajar el color de clips teniendo en cuenta las necesidades.**

- **Modo clip:** para trabajar el color de un clip individualmente.

- **Modo Línea de tiempo:** Trabajar el color de todos los clips de la línea de tiempo.

- **Modo previo/posterior del grupo:** Trabajar el color de los clips de un grupo concreto.

- **Importar entre clips:** Es posible importar configuraciones de color de un clip a otro teniendo seleccionado el clip receptor y clicando con la rueda del ratón el ajustado.

- **Capturas y LUTs:** Útil para guardar y aplicar configuraciones de color a otros clips

- **Espacio de color:** pese utilizar un espacio de color para la gestión cromática hay que tener en cuenta el estándar del espacio cromático de la plataforma de destino.



# **Iluminación y balance de blancos:**
___
## **<u>BALANCE DE BLANCOS Preproducción - \[Sam Holland\]:</u>**

A lo largo del día la iluminación va cambiando, cuando el sol sale comienza cálido y a medida que se acerca al medio día para al espectro más frio o neutro, pero cuando se pone vuelve a bajar al más cálido y cuando se ha ido completamente vuelve azul.

Utilizar el balance automático en condiciones de iluminación variable ya que el cambio puede ser drástico y verse poco natural por lo que es mejor utilizar un valor estático.

Dejar el balance para la postpo es poco optimo ya que, aunque existe rango de manipulación sigue habiendo un límite al forzar los colores sin deteriorar la imagen.

El balance debe realizarse antes de colocar filtros/objetivos ya que modifican el color.

Si hay una luz a 3200K ajusta la temperatura a 3200K la volvería blanca, por eso hay que subir la temperatura alrededor de 4500K para unos tonos cálidos.

Independientemente del momento del día hay que tener en cuenta las condiciones atmosféricas, el amanecer y atardecer suelen ser más cálidos \[4500 y 5600K\], en un día soleado \[5600 – 6200K - 7000K\] un día nublado \[6500 - 7500K\], Sombra \[7000K\] cielo azul tras la puesta del sol \[7500K\].

Cuanto más tarde sea en la noche más alto habrá que subir la temperatura, pero esto hará los blancos verse blancos haciéndolo parecer de día, para que parezca que se ha grabado de noche habrá que bajar la temperatura un poco a tonos cálidos para marcar los azules

Para una iluminación balanceada en un entorno controlado hay que hacer coincidir el balance con la temperatura, esto puede cambiarse si se quiere tender a un tono.

En una escena con predominancia de un color este puede causar reflejos y tintar la imagen, esto se puede compensar añadiendo el color opuesto en la cámara.

## **BALANCE DE BLANCOS Postproducción - \[Sam Holland\]:**
___
Generalmente cuando se empieza a corregir el color se realizan ajustes sin pensar en lo que se está haciendo hasta que se vea bien, el problema de esto es que los ojos nos engañan ya que tienden a acostumbrarse a una corrección entorpeciendo el proceso.

Una forma de realizar el balance es; si es video grabado en LOG convertir el espacio cromático a rec709, utilizar el vectorscopio para ver los niveles de luz y saturación, seleccionar una zona blanca de la imagen con una máscara y modificar los valores del vectorscopio hasta situar el blanco en el centro.

Sin embargo, esta forma puede tener problemas como que no haya nada blanco en la imagen, la solución sería abrir la visualización RGB y observar si los tres valores están al mismo nivel igualarlos guiándose con esta grafica.

Pero esta otra forma presenta el problema de que si hay un color dominante en natural que su valor en la gráfica RGB sea más alto por ello eso se utilizan paleta para calibrar.

Uno de los problemas al realizar el balance de blancos es hacer coincidir el blanco de una escena con un blanco independientemente de las características de esta, ya que si se hace balancea a blanco en una escena con una iluminación fría o cálida el resultado se verá artificial ya que en con iluminación fría los blancos serian azulados y en una cálida rojizos y eso es lo que hay que intentar simular.

Al alterar demasiado el color, la imagen se volverá irregular y con grano empeorando el uso del espacio de color de la cámara por lo que herramientas como el vectorscopio solo hay que utilizarlas con ajustes muy suaves o para calcar referencias y hay que intentar conseguir el mejor resultado al realizar el video.

## **Teoría de color para fotografía: \[Pedro Vidal\]**

Empezar entendiendo los componentes del color, tono, saturación, luminancia y temperatura, además de entender los espacios de color sus usos, la psicología del color, armonías de color...

Esta teoría se puede aplicar en programas como Lightroom;

El panel HSL (Hue, Saturation, Luminance) es una de las herramientas más útiles ya que permite ajustar los colores individualmente.

El panel de gradación de color permite ajustar los colores de las sombras, medio tonos y altas luces, útil para realizar balances de blancos o ajustar la temperatura.

La herramienta de mascara también es muy útil ya que permite realizar ajustes a zonas específicas, máscaras de luminancia, radiales, el pincel o mascaras inteligentes.

#### **Tips:**

- Definir el objetivo de la foto, emociones, estilo, mensaje en pre y postproducción.

- Descansar para evitar la fatiga del ojo y no acostumbrarse a los colores de la imagen.

- Practicar y experimentar con todas las herramientas de lightroom


## **Colorización \[Nicolas alexander\]**

La edición se compone de dos partes, el revelado y la colorización

El revelado seguía principalmente por el histograma y consiste en realizar los ajustes necesarios antes de colorizar la imagen.

Al colorizar aunque el uso de filtros como los de redes sociales se han popularizado ya se dan una solución sencilla no es precisa, DaVinci es uno de los mejores programas para realizar la colorización mediante un árbol de nodos.

La colorización más allá de ser únicamente un proceso mecánico es subjetivo y se basa principalmente en fundamentos como la teoría y psicología del color:

Contrastar la iluminación y color de la imagen, para generar una imagen llamativa.

Exposición, respetar la vision del ojo en la que hay zonas que se queman y otras que se ven negras y no como en log3 o todo iluminada o enfocado.

Balancear los blancos, para tener una temperatura neutra antes de trabajar el color ya que la mayoría de LUTs están pensados para trabajar en blancos neutros.

Saturación de los colores, mientras menos luz recibe un color menos saturado es.

Tener en cuenta el espacio de color de la cámara y los programa y plataformas.

# **Color grade \[Jimmy on film\]**

El núcleo del etalonaje es la gestión de color (DaVinci CM, ACES, Manual CM/Rec709...) las diferentes formas de gestionar el color ofrecen un punto de partida neutral perfecto para trabajar el color hasta encontrar el estilo deseado.

Empezando de esta forma hay que trabajar el color utilizando un montón de herramientas hasta encontrar el estilo de color deseado, sin embargo, la mayoría de grandes producciones utilizan un enfoque de trabajo más holística teniendo en cuenta la gestión de color en todas las etapas de
la producción logrando desde un inicio una imagen ya estilizada y con necesidad de menor ajuste.

#### **Look Development:**

El primer paso es configurar la gestión de color del proyecto y pasar los clips de log al espacio de color en el que vayamos a trabajar.

El desarrollo del estilo se hace a nivel de timeline trabajando sobre clips de referencia que se sepan que están bien grabados

(para replicar un estilo de pelicula utiliza un LUT de emulación 23 D60 que es lo están grabadas la mayoría de peliculas, otra forma de lograr emular la pelicula es un perfil de negativo de pelicula)

Tras convertir al espacio de color deseado y el look, se empiezan a realizar ajustes:

Ajustes de saturación globales con el plugin de DCTL “KH Saturation shaper”

Ajustes en los colores de la piel con el plugin de DCTL “Tetra”

Añadir un poco de grano al final de la red y el efecto halation

#### **Grading preparation & workflow:**

Para trabajar el color de forma eficiente con muchos clips es util agupar en la pestaña de Lightbox.

La red de nodos está dividida en 3 secciones:

- **Balance:** tiene un nodo llamado “Bal” para ajustar la exposición y balance de colores y otro “Cont” para ajustar el contraste.

- **Teaks:** esta sección sirve en caso de necesitar más control sobre una toma especifica, se divide en 3 filas de nodos,

	**superior:** para iluminar u oscurecer áreas específicas de la escena izquierda, centro o derecha respectivamente

	**central:** para ajustes de rote de cielo, pieles o ruedas Log

	**Inferior:** está vacía para acomodar posibles ajustes adicionales necesarios.

	**ShotTrim:** nodo usado en caso de necesitar ajustes menores después de los principales para no estropearlos

- **Scene Trim:** Mientras que “Balance” y “Teaks” están dedicadas a tomas individuales, los cambios en “Scene Trim” afectan a toda la escena y hay que extenderlos a todo el grupo, estos son ajustes como la temperatura, iluminación...

<img
  src="/media-content/Apuntes/media-davinci/d74c9c55b8ea0a31ee7166719142ef826613e460.png"
  alt="video"
  style="margin: 0 auto; padding: 0; width: 90%; height: auto;"
/>


#### **Practical grading:**

Aunque la gradación de color se ha retratado como el arte de ajustar hasta la muerte una toma hasta que quede perfecta y luego pasar a la siguiente toma, el objetivo de la gradación de color es, ante todo, lograr la continuidad de color entre tomas.

Para esto, en cada escena se erigirá un frame en el que aparezca un elemento principal que represente mejor la escena, se balanceará esa escena en caso de ser necesario y si también fuese necesario se modificaría el nodo “Scene” para modificar el aspecto y sensación de la escena, usando solo la rueda “offset”.

Después hay que igualar el nodo “Scene” en todo el grupo y balancear cada escena para igualar el elemento con la primera escena ajustada.
<img
  src="/media-content/Apuntes/media-davinci/4d33877f4ae2b96dbdb8c82c3e2f36e28f003a94.png"
  alt="video"
  style="margin: 0 auto; padding: 0; width: 90%; height: auto;"
/>
<img
  src="/media-content/Apuntes/media-davinci/6e01a94a01f5579d4bd2ac86ebca2dc251c32844.png"
  alt="video"
  style="margin: 0 auto; padding: 0; width: 90%; height: auto;"
/>
<img
  src="/media-content/Apuntes/media-davinci/3603ef8e15d1255a41d28c4fe796fcd85ae0030f.png"
  alt="video"
  style="margin: 0 auto; padding: 0; width: 90%; height: auto;"
/>
<img
  src="/media-content/Apuntes/media-davinci/666bd74fcb77ea601d414905e2b91f973a98e27a.png"
  alt="video"
  style="margin: 0 auto; padding: 0; width: 90%; height: auto;"
/>

tras realizar los balances se puede pasar a ajustar detalles concretos de cada escena como resaltar un personaje, por ejemplo

<img
  src="/media-content/Apuntes/media-davinci/d7be9c5f840ba0078b5156d5daece98946ea4760.png"
  alt="video"
  style="margin: 0 auto; padding: 0; width: 90%; height: auto;"
/>

# **Color grading VS Look development \[Jimmy on film\]**

El “look” a nivel técnico es el proceso de posprocesamiento de color que transforma la imagen de cómo fue capturada por la cámara a como lo reproduce una pantalla.

Estas transformaciones pueden ser pueden ir desde un LUT de conversión del espacio de color de la cámara al de las pantallas (Rec709) o más complejas donde la respuesta tonal y la gama de colores se transforman más de una vez.

Pensar que la gradación de color y el desarrollo del look son lo mismo es un error, aunque con herramientas de gradación puedas desarrollar un look no son lo mismo.

<img
  src="/media-content/Apuntes/media-davinci/047048103e905db0b5ce9fd5ddf0e740ddd2a1c1.png"
  alt="video"
  style="margin: 0 auto; padding: 0; width: 90%; height: auto;"
/>

Los LUTs originalmente se crearon por compañías como Kodak o Fuji ya que los negativos de pelicula se escaneaban para manipularlos digitalmente y en este proceso necesitaban una vista previa de cómo se verían imprimirse de nuevo para proyectarse, por lo que midieron la densidad de millones de rollos de pelicula para convertirlo en un modelo matemático.

Un LUT de impresión de pelicula da forma a la respuesta tonal y de color, mientras que una herramienta de corrección de color trabaja los valores de forma lineal.

<img
  src="/media-content/Apuntes/media-davinci/fc2c5efb918e7e35b523131e261b80fa9ac85aa1.png"
  alt="video"
  style="margin: 0 auto; padding: 0; width: 90%; height: auto;"
/>


# **Estructura de nodos \[Alex mufasa\]**

Es importante tener una estructura de nodos orgánica, funcional y no destructiva

Ajustes iniciales

Como utiliza los nodos de entrada y salida de la gestion de color en la estructura utiliza la Ciencia de color “YRGB”, Espacio de color de la timeline “DaVinci/Intermediate”, espacio de color de salida “Rec709”

<img
  src="/media-content/Apuntes/media-davinci/24412aa5fe459cde13c91a677de8fedd3145cec0.png"
  alt="video"
  style="margin: 0 auto; padding: 0; width: 90%; height: auto;"
/>

Tetrahedral hace una interpolación de los espacios de colores de los LUTs mas precisa que el antiguo método “Trilinear”

<img
  src="/media-content/Apuntes/media-davinci/73433a67bd7c71362068f26e72db03baae05b26a.png"
  alt="video"
  style="margin: 0 auto; padding: 0; width: 90%; height: auto;"
/>


Estructura...
