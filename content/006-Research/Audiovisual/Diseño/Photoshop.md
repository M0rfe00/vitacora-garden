---
tags:
  - Design
---
# **Píxel y vector**
___
Las capas de píxel están formadas por pixeles de diferentes colores formado una con mucho detalle, pero pierden detalle al ser transformadas.

Las capas vectoriales están formadas por vectores, tienen menos detalle ya que solo pueden ser de un color plano o degradado, pero pueden ser transformadas sin perder detalle.

### **Formas y trazados vectoriales**
Para crear formas o trazos vectoriales principalmente se utiliza la forma pluma.

Los trazados vectoriales aparecen en un panel independiente como las capas, dentro de los ajustes se puede seleccionar añadir y sustraer de la selección.

Para utilizar un trazado como mascara: cargar selección, selección\>selecc aplicar mascara.

<img
  src="/media-content/Apuntes/media-foto/43b4412e7118046ff142df3b72e0a8c4eb0eca30.png"
  alt="foto"
  style="margin: 0 auto; padding: 0; width: 80%; height: auto;"
/>

# **Objetos inteligentes:**
___
Los objetos inteligentes protegen la información las capas de píxel para poder transformarlos sin perder su información original como las vectoriales.

Para editar el contenido de un objeto inteligente hay que hacer doble clic sobre la miniatura, lo que abrirá un nuevo proyecto en el que podremos realizar modificaciones y al guardar se actualizara en el anterior proyecto.

#### **Formas de incorporar un objeto inteligente:**
Incrustar: los formatos de imagen que no permiten capas como los psd no pueden ser modificados de la misma forma por lo que para modificarlo como un objeto inteligente en vez de arrastrarlo sin mas hay que incrustarlo.

Enlazar: en vez de incorporar la imagen dentro del proyecto enlaza la ruta del archivo, útil para proyectos de menor tamaño pero peligroso en caso de mover o borrarlo.

Arrastrar: permite utilizar un formato de imagen que inicialmente no utiliza capas como objeto inteligente, para ello hay que abrirla en un proyecto aparte y arrastrarla a otro proyecto.

**Instancias:** al duplicar un objeto inteligente PS las considera instancias, es decir que depender del mismo archivo, lo que permite realizar modificar simultáneamente.

Independizar instancias: se puede hacer clicando sobre el objeto y seleccionando “convertir en capas” lo que separara las capas del objeto, o seleccionando “nuevo objeto inteligente” lo que creara un nuevo proyecto de origen de ese objeto para modificarlo independiente al resto.

# **Selecciones:**
___
Seleccionar sujeto permite automatizar la selección de la imagen de una persona, se puede corregir con la herramienta selección rápida añadiendo o quitando zonas, para aplicarla se puede utilizar la herramienta seleccionar y aplicar mascara.

Seleccionar objeto funciona de forma similar, pero hay que establecer en que zona de la imagen se encuentra con la varita y tras aplicar la máscara se puede mejorar la selección.

Gama de colores sirve para seleccionar las zonas con un color determinado en una imagen.

# Mascaras
___
Permiten ocultar o mostrar zonas determinadas de una imagen, siendo las blancas visibles y otras blancas, para modificarlas se pueden utilizar el pincel, degradados, selecciones entre otras.

Están vinculadas a la imagen, se pueden transformarlas independientemente desvinculándolas, haciendo clic sobre el icono del clip entre ambas

# Canales RGB y Alpha
___
Trabajando en RGB la imagen estará compuesta por varios canales rojo, verde y azul que componen la imagen, al hacer clic sobre ellas se muestra en blanco y negro la información de color del canal, funcionan como una mascara.

Los canales son útiles para duplicar y separar elementos complejos, para ello hay que seleccionar el canal que mejor contrasta la información de color del elemento y llevarlo al icono “canal copia” para realizar una copia de ese canal, la selección del canal se puede invertir, añadir selección, seleccionar automáticamente el objeto, igualar con sub/sobrexponiendo... y pintar de negro con el pincel en el canal y finalmente cargar como selección y copiando, seleccionando el canal RGB.

# Modos de fusión:
___
Determinan como se mezclan las capas con las otras capas que tienen por debajo.

**Normal:** no hay mezcla se superponen una encima de la otra sin modificación.

**Modos de luz:** son los más comunes al añadir luces ya que tienen en cuenta la luminancia, también son utilices para dibujar destellos

**Modos de sombra:** permiten superponer imágenes cuando su fondo sea negro, funciona eliminando el blanco

**Modos de contraste:** mientras que los de luz transparentan el negro y los de sombra los blancos los contraste transparentan los grises permitiendo texturizar respetando los colores de la imagen inferior

# Textos:
___
Los textos se comportan de forma vectorial, por lo que pueden ser transformados sin perder calidad.

Se puede crear un texto simplemente haciendo clic, para crear un te dentro de una caja para que se ajuste a ese tamaño hay que arrastrar.

Como en cualquier editor de texto se puede editar los estilos del texto.

2 clics = palabra, 3 clics = línea, 4 clics = párrafo, 5 clics = todo el texto

# Estilos y efectos:
___
Los estilos permiten aplicar una serie de efectos modificables a las capas.

Un estilo es un conjunto de efectos que se puede aplicar a diferentes capas y proyectos.

Los efectos se pueden aplicar abriendo el panel “estilo de capa” clicando el icono “fx”

La capa de efecto puede ser movida y copiada a otra capa.

Para guardar un estilo hay que abrir el panel “estilos” crear una carpeta, seleccionar la capa de efectos y clicar el icono “+”. También se puede hacer clic sobre la capa de ajuste y seleccionar estilo nuevo

### Opacidad y Relleno
Opacidad controla la transparencia de toda la capa mientras que relleno solo del contenido, pero no lo que depende de ella como los efectos.

### Filtros Inteligentes;
Los filtros permiten dar acabados creativos a una capa para aplicarlos hay seleccionarlos en el menú “filtro”, para ello hay dos formas destructivamente o de forma inteligente.

Al aplicar un filtro a una capa inteligente se aplican mediante capas se puede modificar su orden, los parámetros del filtro, los modos de fusión y combinar con máscaras.

### Capas de ajuste.
Igual que al aplicar filtros a un objeto inteligente, los ajustes funcionan igual pudiendo modificar su orden, parámetros, modos de fusión y combinar con máscaras.



# Effects tier list
___

<img
  src="/media-content/Apuntes/media-diseño/tierlist GyLPAjRXQAAsk6U.jpg"
  alt="efectos"
  style="margin: 0 auto; padding: 0; width: 80%; height: auto;"
/>










