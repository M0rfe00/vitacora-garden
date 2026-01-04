# **Trabajar el color:**
___
- ==**Corrección de color y etalonaje:**== La corrección de color se basa en corregir los posibles errores de color de un clip, mientras que el etalonaje es más creativo y subjetivo.

	Antes de empezar a entalonar se suelen realizar algunas correcciones comunes como ajustar la exposición, el contraste, realizar un balance de blancos..., tras esto se puede se puede empezar a entalonar o en otras palabras corregir de forma creativa.

	Antes de empezar a entalonar un segundo clip hay que realizar las correcciones necesarias para para que la transición entre uno y otro no sea muy brusca, para todos estos ajustes se suelen utilizar principalmente dos nodos, uno para la corrección individual para cada clip, otro para el etalonaje general y otros adicionales para ajustes, efectos, correcciones.

	A la hora de aplicar los nodos de un clip a otros en vez de copiarlos y pegarlos clip a clip, es posible agrupar los clips, lo que creara unas ventanas adicionales en la que podremos pegar los nodos o preferiblemente una captura de ellos (capturándolos, borrándolos de la ventana inicial y aplicando la captura en la ventana “clips posteriores al grupo”) esto permite modificar todos los clips del mismo grupo a la vez de forma procedural al compartir los nodos del post grupo.

- ==**Igualación:**== Para igualar los colores de un plano de referencia a uno de nuestros clips, un método es; capturar el clip de referencia, activar el icono de comparativa para comparar la referencia y nuestro clip, de esta forma al mover la cortinilla de la comparativa también se verá en la representación gráfica, de esta forma se podrá igualar tanto de forma visual viendo directamente ambas imágenes como de forma matemática guiándonos por las diferentes gráficas.

- ==**Tratamiento de pieles:**== Para tratar las pieles respetando el resto de las correcciones en el plano lo primero que hay que hacer es aislarla, esto se puede hacer con la herramienta Qualifier para seleccionar los tonos de la piel y la máscara para delimitar la selección, también se podría modificar el fondo por separado añadiendo un mezclador de capas.

	Independientemente de la persona la tonalidad de la piel es la misma, lo que cambia de una a otra son los valores de luminosidad, por ello el vectorscopio es realmente útil para esto ya que muestra los diferentes tonos y del centro para fuera la saturación del color, esta grafica viene con un espacio cromático adicional que podemos activar llamado “indicadores de tono de piel” que muestra una referencia de donde debería estar el tono de piel de la selección, lo que se debe hacer es modificar el color para que quede ligeramente por encima de la línea.

	Para ajustar el color de la piel hay que jugar un poco con las ruedas de color; en los tonos medios el tono de la piel, en las sombras un poco de rojo y saturación para darle vida a la piel y en las altas luces el mismo color del fondo para suavizar el contraste y asimilar los reflejos del fondo en la piel, todos estos ajustes pueden ser modificados para conseguir efectos diferentes como por ejemplo bajar la saturación de las sombras y teñirlas de azul para conseguir una piel más apagada.

	En caso de haber demasiado cambio de color en la piel se puede reducir la ganancia de salida a la máscara para que se mezcle más suavemente con la piel original.

# **Workflow de color:**
___
**Es útil trabajar el color de clips teniendo en cuenta las necesidades.**

- **Modo clip:** para trabajar el color de un clip individualmente.

- **Modo Línea de tiempo:** Trabajar el color de todos los clips de la línea de tiempo.

- **Modo previo/posterior del grupo:** Trabajar el color de los clips de un grupo concreto.

- **Importar entre clips:** Es posible importar configuraciones de color de un clip a otro teniendo seleccionado el clip receptor y clicando con la rueda del ratón el ajustado.

- **Capturas y LUTs:** Útil para guardar y aplicar configuraciones de color a otros clips

- **Espacio de color:** pese utilizar un espacio de color para la gestión cromática hay que tener en cuenta el estándar del espacio cromático de la plataforma de destino.


# **Colorización \[Nicolas alexander\]**
___
<iframe width="560" height="315" src="https://www.youtube.com/embed/do9qi74lIbw?si=KIzZBa2Wb3p_TLdA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

La edición se compone de dos partes, el revelado y la colorización

El revelado seguía principalmente por el histograma y consiste en realizar los ajustes necesarios antes de colorizar la imagen.

Al colorizar aunque el uso de filtros como los de redes sociales se han popularizado ya se dan una solución sencilla no es precisa, DaVinci es uno de los mejores programas para realizar la colorización mediante un árbol de nodos.

La colorización más allá de ser únicamente un proceso mecánico es subjetivo y se basa principalmente en fundamentos como la teoría y psicología del color:

- Contrastar la iluminación y color de la imagen, para generar una imagen llamativa.

- Exposición, respetar la vision del ojo en la que hay zonas que se queman y otras que se ven negras y no como en log3 o todo iluminada o enfocado.

- Balancear los blancos, para tener una temperatura neutra antes de trabajar el color ya que la mayoría de LUTs están pensados para trabajar en blancos neutros.

- Saturación de los colores, mientras menos luz recibe un color menos saturado es.

- Tener en cuenta el espacio de color de la cámara y los programa y plataformas.

# **Color grade**
___
<iframe width="560" height="315" src="https://www.youtube.com/embed/OJQ0jH5l9Lg?si=5jAe9rELO8cgtyix" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

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

# **Color grading VS Look development**
___
<iframe width="560" height="315" src="https://www.youtube.com/embed/W5p1vONfTi0?si=ZZ742p14runxI-Vq" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

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


# **Estructura de nodos**
___
<iframe width="560" height="315" src="https://www.youtube.com/embed/Bxmnv-P-vkk?si=g--2CjuvwEwgVkOH" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
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
