# **Recursos:**
- **Operator** **Snippets:** Help\> Operator snippets
- **Palette:** panel situado a la izq. con componentes, tools y ejemplos ready-to-use.

# **Atajos de teclado:**
___
- **Tab/2ble clic:** ambas opciones sirven para añadir un operator.
- Clic dcho. en el out de un operador lo conecta automáticamente.
- **Ctrl+G:** muestra una lista con todos los grupos de operadores de la red.
- **Shift+T:** muestra una lista de todos los operadores de la red.
- **Tecla P:** ocultar/mostrar panel de parámetros de un operador
- **Tecla N:** alterna el tamaño del texto de los nodos.
- **Tecla S:** cambia la forma de conexión de los cables entre nodos.
- **Tecla o:** abre una vista general de la red.
- **Tecla c:** abre la paleta de colores.
- **Shift+f/h:** centra la vista en los operadores seleccionados.
- **Tecla 'U':** navega *hacia arriba* un nivel en la jerarquía.
- **Tecla 'I':** navega *al* siguiente nivel (componente seleccionado).

# **Casillas/flags de los operadores:**
___
- **Active** **viewer:** inferior derecha, al pulsarlo muestra las opciones de visualización del nodo (Color, Alpha, R, G, B)

- **Viewer:** (Eye Icon) alterna la vista previa del operador.

- **Clone isolate:** permite que el clon de un operador no se vea afectado por el máster.

- **Bypass:** (Yellow Arrow) pasa la entrada al siguiente operador sin procesarla.

- **Lock:** (Snowflake Icon) congela el parámetro actual del operador.

- **Display**:** (Blue Square) expande la vista del operador para verlo con detalle \[TOP, CHOP, SOP\]

- **Render:** (Purple Sphere - Geo COMP) determina si la geometría contenida en un Geometry COMP se incluirá en la salida de un Render TOP

- **Template:** (Purple Wireframe - SOPs) muestra la geometría de la SOP como una estructura alámbrica gris no interactiva en visores 3D, útil como referencia visual sin saturar la escena.

- **SOP viewer** **<u>options:</u>** muestra diferentes modos de visualización de la geometría 3D (puntos, normales, ejes...)

# **Operadores:**
___
Un operador es una unidad de procesamiento que recibe entradas realiza una función específica y genera una salida, lo que permite construir un sistema complejo mediante la conexión de operadores, (efectos visuales, animaciones interacciones, procesamiento de datos)

## **Tipos de operadores:**

- **TOPs:** (Texture operator): manejan datos de imágenes y videos 2D.

- **SOPs:** (Surface operators) generan y manipulan geometría 3D

- **MATs:** (Material operators) definen la apariencia de los objetos 3D.

- **CHOPs:** (Channel operator): procesan flujos de datos numéricos (movimiento, audio, entradas de sensores...)

- **COMPs:** (component operators) actúan como contenedores para organizar la red, crear sistemas modulares o interfaces.

- **DATs:** (Dara operators) manejan y procesan información basada en texto (tablas, scripts...)

# **Referencia de parámetros:**
___
- Export CHOP: (Flecha verde) envía el valor de un canal chop a un parámetro, si se cambia el nombre solicita actualizarlo.

- **Reference CHOP:** (Expresión azul) el valor de un canal chop es enviado a un parámetro mediante una expresión de Python, permitiendo realizar operaciones sobre el, si se cambia el nombre del operador de origen hay que actualizar la referencia manualmente.

- **Binding:** (Triángulo Morado) Crea un enlace bidireccional entre un parámetro dentro de un componente y un parámetro personalizado fuera de él, los cambios se sincronizan en ambos sentidos.

- **Select TOP/CHOP...:** se utiliza para referenciar u TOP desde otro lugar sin cables.

# **Interoperabilidad:**
___
Cada familia de operadores gestiona tipos de datos específicos, por lo que las conexiones han de ser compatibles, para ello existen operadores de conversión de un tipo de dato a otro, **\[TOP to CHOP\]**, **\[CHOP to TOP\]**, **\[CHOP to DAT\]**, **\[DAT to CHOP\]**...

### **NOISE**

Herramienta fundamental desarrollada para simular fenómenos naturales, nubes, terrenos, agua, texturas... El ruido de Perlin es una función matemática que genera valores pseudoaleatorios.

##### **Parámetros:**

- Tipo: define el tipo de ruido que se generara.

- **Seed:** define el valor inicial para generar el ruido

- **Periodo:** controla la escala del patrón de ruido, los valores altos crean amplias y suaves, los valores bajos producen ruido más detallado.

- **Harmónicos:** añaden capas a diferencias frecuencias para incrementar la complejidad y detalle de los patrones.

- **propagación de harmónicos:** Ajusta la distribución de la frecuencia de harmónicos, permitiendo mayor variedad y menor uniformidad en el patrón.

- **ganancia de harmónicos:** controla la intensidad de cada capa de harmónicos, afectando al contraste y prominencia del ruido en todo el patrón.

- **Exponente:** modifica la distribución del valor del ruido, permitiendo ajustar el contraste y el rango dinámico del patrón.

- **Amplitud:** define la máxima intensidad de variaciones del ruido, determinando como de pronunciadas son las texturas.

- **Offset:** Cambia el rango del valor de ruido, ajustando el brillo general del patrón sin cambiar su estructura.

- **Monocromático:** Genera ruido en una escala de grises o en color, permitiendo patrones más complejos y coloridos.

- **Corrección de aspecto:** mantiene la proporción del ruido cuando se cambia la resolución, previniendo la distorsión en la textura.


# **4.1 Gradient Parametric Effects – Remap & Luma Blur Processing**
___
**Luma blur:** aplica desenfoque basado en la luminancia (brillo) de otra imagen.

**Ramp:** genera gradientes con diferentes parámetros ajustables (color, fase y periodo).

**Composite:** fusiona imágenes usando diferentes métodos de fusión (multiply, divide, negate, add...) \[merge en fusión\]

**Remap:** usa una segunda imagen para definir el UV map, para distorsionar o recolocar los pixeles del primer input (R: horizontal, G: Vertical)

**Noise/Displace:** pueden combinarse para crear texturas procedurales.

**Select TOP:** se una para referenciar operadores remotamente sin
cables.

# **4.2 Noise and Feedback – Glass Textures and Infinite Tunne**
___
**Noise:** genera patrones pseudoaleatorios, útil para texturas y arte generativo.

**Feedback:** Consiste en reconectar un operador a su propio proceso tras aplicarle una modificación, lo que genera un bucle infinito en el que se aplica está dando lugar a efectos como rastros, ecos o repeticiones infinitas.

**Remap: r**eposiciona los pixeles de una imagen en función de los valores de color de otra (UV).

**Compositing:** sirve para combinar diferentes señales en una sola según el método aplicado.

**Select:** útil par referenciar operadores sin la necesidad de cables.

**Animación:** los parámetros pueden ser animados a lo largo del tiempo utilizando la expresión “absTime.seconds” y dividiendo o multiplicando el valor para controlar la velocidad.

# **4.3 Video Manipulation – Time Warping**
___
**Text3D:** almacena en cache un numero especifico de fotogramas de entrada “ chache size” como textura 3D. Usa “Pre-fill” para capturar los fotogramas.

**Time machine:** Selecciona frames de la cache de un Text3D,
seleccionándolo cada píxel según el píxel correspondiente en la escala
de grises del segundo input “control map”

**Control map:** determina que frames seleccionara el Timemachine, puede ser un Ramp, Constant, Layout o un Transform, permitiendo posibilidades como mosaicos.

**LFO:** usado para controlar el periodo del ruido y después combinarlo con el video original en un displacement generando efectos dinámicos.

**Math:** usado para modificar el rango de salida del LFO que luego modificara el periodo del ruido.

**Layout:** Útil para organizar varias entradas TOP en cuadriculas o secuencias, ej “un tablero de ajedrez”

**Displace:** Desplaza una imagen segun los valores de color de otra

# **5.1 Procedural Geometry – Mandala Patterns**
___
**Instances:** Una instancia es una copia de una geometría basada en su información (Posición, color, escala...), pero puede ser modificada de forma independiente por fuentes externas como TOPs o CHOPs. Se configuran en el “Geomtetry COMP”.

Cualquier operador puede ser interpretado como info. Pero renderizado de diferentes formas como los TOPs en imágenes, pero fundamentalmente son valores RGB, o los CHOPs que permiten ver valores numéricos pero pueden ser interpretados como imágenes.

**Noise TOP as Instance data:** Los valores RGB de una textura pueden ser mapeados directamente a posiciones XYZ mediante instancias a los parámetros de un “Geo COMP”, se arrastra el operador de la textura al parámetro “Translate OP” y seleccionando a que coordenada corresponderá
cada valor.  

Cada color tiene valores entre un rango de 0 a 1 y la intensidad corresponde a los valores entre ambos, para colocar un círculo situado exactamente en el centro los valores RGB deben de ser de 0.5 en los tres colores.

**ADD:** Permite añadir puntos basado en las coordenadas que de proporcionen.

**Convert:** Permite convertir los puntos en diferentes tipos de rendes (Mesh, Polygon, Particles per point...).

**Geo:** Contiene la información de la geometría y define como debe ser renderizada

**Camera:** definir el punto de vista de la cámara, lo que definirá el render.

**Material:** define el material de la geometría y como se verá.

**Render TOP:** trae la información de la geometría, cámara, luces, material... Para componer una escena final convertida en una textura 2D que pueda visualizarse.

**SOP Basic Chain:** 1. Se crea una geometría simple utilizando **“Add SOP”** 2. Se usa un **“Convert SOP”** para hacer que los puntos se puedan representen como “partículas por punto”.

**Essential 3D Render pipeline:** Requiere al menos un **“Geo COMP”** para contener la geometría, una **“Camera COMP”** para definir el punto de vista y un **“Render TOP”** para renderizar la escena en una textura 2D. Un **“Material”** ej; **“Point Sprite MAT**” es necesario para que la geometría sea visible.

**Noise Resolution & Instances:** La resolución del Noise TOP usado para la instancia determina directamente el número de instancias creadas (1 píxel = instancias), el nº de instancias puede afectar al rendimiento.

**Post-Processing:** Los efectos TOP estándar (Feedback, Mirror, Edge, Level) se pueden utilizar tras el “Render TOP” para mejorar o modificar el render final.


# **5.2 Displacement Mapping – Noise Instancing**
___
**Sincronización y centralización de datos:** el nº de muestras combinadas en un conjunto de datos de un “Merge” <u>deben coincidir;</u> *(Grid Points = TOP pixels)* para que las coordenadas XY coincidan, eso se logra referenciando los valores de resolución y dimensiones grid al mismo “Constant CHOP” consiguiendo que coincidan y puedan controlados simultamente de forma modular.

**Mapeo de instancias:** los datos de un Merge CHOP (tx/y, scale_x/y, scale_transform_z) se mapea a los parámetros correspondientes del “GEO COMP”; “Translate”, “Scale”, el canal “scale_transform_z” se utiliza para ambos, translate z y scale z.

**Interoperabilidad y Manipulación de información CHOP:**

**TOP to CHOP:** Convierta pixeles de texturas a canales, para obetener toda la información de la imagen hay que usar “Crop = Full image”

**SOP to CHOP:** Convierte atributos de un SOP (tx, ty, tz) a canales

*renombrar los canales es útil para organizar y reconocer las señales más tarde.*

**Select CHOP:** Aísla los canales específicos que necesitemos de una señal de entrada compuesta.

**Pattern CHOP:** Aplica formas de onda matemáticas a canales CHOP, añadiendo movimiento/desplazamiento procedural sobre los ejes tx, ty.

**Shuffle CHOP:** Reorganiza/secuencia canales según el método aplicado.

**Merge SOP:** Combina diferentes canales/señales en un solo conjunto que puede ser utilizado para instanciar.

**Renderizado:**

**PBR MAT:** (Physically Based Rendering) es un material usado para
lograr superficies realistas, (utiliza parámetros como color base,
metalizado, rugosidad) (PBR texture de blender), puede utilizar texturas
ej: rampas.

**Enviorment Light COMP:** Simula una iluminación global y reflejos realistas usando una imagen HDRI proporcionada a través de un “Moviefilein” conectado a su parámetro “Enviorment map”.

# **5.3 Vector Field Instances – Rotation Manipulation**
___
#### **Nodos útiles**

- **Base:** Nodo COMP que permite encapsular diferentes partes de la red para mejorar la organización y modularidad.

- **Constant :** Nodo CHOP que permite definir parámetros globales como resolución (filas, columnas) y referenciar esos parámetros en otros nodos para asegurar la consistencia de la red.

- **Math:** Nodo CHOP que permite remapear información de un contexto para **controlar parámetros** en otro contexto ej: (valores de ruido 0-1 para controlar rotación 0-360) se puede utilizar el parámetro “Multiply” o el panel “Range” para lograr una escala precisa.

- **Rename:** Nodo CHOP que permite **renombrar la información de los canales** antes de aplicarlos como instancias para mejorar la claridad ej: (rotation, scale, tx, ty).

- **Lag:** Nodo CHOP que permite **suavizar cambios** rápidos en las señales de entrada como movimientos del cursor y crear transiciones más orgánicas.

- **Feedback:** Nodo TOP util para añadir motion blur, estelas y la sensación de persistencia o historia a los efectos visuales, haciéndolos generalmente más vivos.

- **Mousein:** Nodo CHOP que registra las posiciones XY del cursor y las envía a un nodo “select” para pasarlos por un nodo “math” y reescalar la señal, después se combinan ambas en un “ merge” y se suaviza la señal con un nodo “lag”

#### **Consejos útiles:**

Explorar diferentes formas de mezclar fuentes de ruido o entradas interactivas utilzando entradas de ruidos o los diferentes modos del COMP.

Experimentar con los parámetros TOP de ruido (periodo, amplitud, amónicos, velocidad de animación...) y los parámetros SOP base (ej: Line SOP points...) para conseguir cambios drásticos en el resultado.

Experimentar con diferentes materiales y TOPs (ej: ramp) conectados a parámetros de materiales (ej: color map) para añadir coloreados sofisticados y efectos de materiales.

Intenta replicar los proyectos para solidificar el entendimiento
mediante ingeniería inversa.

#### **Ejercicio:**

A Instancias SOP para crear una malla que simule un campo vectorial, usando un ruido para controlar la rotación de un eje

En vez de viento el movimiento se simulara controlado por el ruido,

La primera red es una versión simplificada sin efectos o posprocesamiento para entender la lógica de la técnica.

La segunda red aplica varias técnicas usadas anteriormente para complementar la composición.


# **5.4 Practice: Recreate the following visual results.**
___
Análisis: Mouse interactivity, particles per point, colors blue and purple, position of the grid horizontal
<img
  src="/media-content/Apuntes/media-foto/43cfeb8848a42cf82eb0b6ab9e06d3a95f72d813.png"
  alt="foto"
  style="margin: 0 auto; padding: 0; width: 80%; height: auto;"
/>
<img
  src="/media-content/Apuntes/media-foto/7b6f5baf912a057be7d5a498b368e23a36b72a6b.png"
  alt="foto"
  style="margin: 0 auto; padding: 0; width: 80%; height: auto;"
/>

# **6.1 Blob instancing: Lets combine everything we've learned**
___
**Blob tracking:** implica utilizar una imagen de color y un fondo de referencia para aislar elementos en movimiento

**Blob track OP:** Operador que proporciona información en formato de tabla, incluyendo coordenadas UV, anchura, altura y tiempo de seguimiento.

Esta información puede ser usada para; generar instancias, cajas de texto y varios efectos.

Convertir la información de la tabla en canales CHOP es crucial para manipular y sincronizar información de blob tracking.

Ajustar la proporción de aspecto es esencial para mantener correctamente las proporciones al trabajar con diferentes resoluciones .

Las coordenadas UV necesitan convertirse a coordenadas píxel absolutas para posicionar correctamente el texto.

#### **Tips:**

- **Cache:** operador TOP útil para congelar un frame de referencia para mayor eficiencia en el blob tracking.

- **Organizar la red en secciones;** para una mejor manipulación y entendimiento.

- **Camera:** es posible que al instanciar una geometría se difícil de localizar en el visor de la cámara, esto suele deberse a que los ajustes de escala y cámara,

- para solucionarlo hay que ajustar la **proyección:** ortográfica, el **Ortho** **origin:** Bottom-Left, **Ortho width:**1, **Near:** 0.1, **Window size:** 1
	Esto sucede ya que la salida del Blob track son coordenadas UV, en las que (0U, 0V = Bottom-Left) y (1U, 1V = Bottom-Right) usar una cámara perspectiva puede distorsionar esas coordenadas, pero una ortográfica elimina la profundidad asegurando que las posiciones blob y las instancias coincidan.

- **Relación de aspecto:** si no se ajusta la proporción de aspecto la posición de las instancias se puede distorsionar al cambiar la relación de aspecto o resolución.

- La relación de aspecto de una pantalla o COMP es la relación entre el ancho y alto expresado en forma de fracción o ratio (16:9 = 1.777), ej; una resolución estándar de 1920x1080 tiene una relación de aspecto de 16:9, lo que significa que por cada 16 uds horizontales hay 9 uds verticales.

- En el Blob tracking las coordenadas son valores UV, valores que son independientes de las dimensiones de los pixeles, sin embargo, cambian con la relación de aspecto y para solucionarlo hay que recalcular el tamaño de las coordenadas UV dividiendo altura/ancho y multiplicando el resultado por las coordenadas en un “Math”.

- **Distorsión de resolución:** trabajando con resoluciones no cuadradas hay que calcular y aplicar el ratio de aspecto correcto para prevenir la distorsión.

	**Ej;** si la relación de aspecto es 16:9/1920x1080 hay que multiplicar las coordenadas por 0.5625, si fuese de 1080x1920 se multiplicaría por 1.777.

- **UV to Absolute:** Para pasar la salida del operador blob tracking (coordenadas UV) a coordenadas de píxel absolutas; hay que multiplicar las coordenadas U por el ancho y las V por el alto, ya que las coordenadas UV van de un rango (0-1) mientras que las coordenadas píxel van de un rango de 0 hasta las dimensiones de la resolución ej; (0-1920)

#### Ejercicios:

- 1 Easy) utilizar las instancias de blob track y el operador remap para los pixeles de una imagen en cuadrados o blobs

- 2 Intermediate) utilizar las capacidades del blob tracking para generar un sistema de partículas (sugerencia: utilizar “ParticlesGPU” o técnicas de instanciación con la blob data).

- 3 avanzado) utilizar la blob data para desplazar un sistema de instancias en lugar de utilizar ruido

- También, incorporar vector fields para controlar la rotación de instancias únicamente de aquellas desplazadas por blob

- Finalmente describir con integrar un “TimeMachine” en el resultado final para afectar solo a las instancias sin afectar a los blobs.
