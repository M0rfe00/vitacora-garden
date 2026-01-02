# Poster Fundamentals
___
### **Formato**
Tener en cuenta tanto formatos digitales como físicos para poder imprimir si es necesario

| Estilo       | Digital        | Fisico            |
| ------------ | -------------- | ----------------- |
| Flyer        | 1920 x 2176 px | A4 = 210 x 297 mm |
| Typographic  | 2160 x 3054 px | A3 = 297 x 420 mm |
| Photographic | 3840 x 5441 px | A2 = 420 x 596 mm |

### **Texture Paper**
____
En lugar de únicamente colocar una textura de papel seleccionar el modo de fusión en multiplicar hay formas mas efectivas:

1) Clic derecho sobre la textura>Blending options: reducir el slide "current layer" y seleccionar el modo de fusión en pantalla
![[Pasted image 20251216012524.png]]

2) En las capas inferiores>Filtros>Distorsión>Ripple: 100% aprox
3) También en las capas inferiores>Filter gallery>Sprayed Strokes
4) Desenfocar un poco las capas inferiores

### **Blending modes Tips**
___
**Tip 1:** 
- Añadir una texutura con muchas sombras y seleccionar el modo de fusión en "Lighten color"


**Tip 2:** 
- Invertir todas las capas con "Ctrl+i"
- Cambiar el modo de fusión de la textura a "Difference" añadir una capa "Hue/Sat" y bajar el Hue al mínimo. 

**Tip 3:** 
- Añadir una textura muy compleja y establecer el modo de fusión en "Saturation"
- Intentar combinar 2 texturas y si es muy caotico añair una capa "Hue/Sat" y jugar con los valores hasta conseguir un buen resultado.

### **Displacement Maps**
___
En lugar de simplemente añadir una textura, guardarla como .PSD ir a Filter>Distort>Displace y elegir el psd, una mejor forma es:

1) Abrir un archivo nuevo con el mismo tamaño del poster
2) Añadir una capa y convertirla en "Smart object" y Filter>Render>Fibers..
3) En la capa anterior >Filter>Blur Gallery>Path blur y diseñar la distorsión deseada.

4) De nuevo en el poster; Convertir el texto en "Smart object" y Filter>Distort>Displace y elegir el archivo anterior, pudiendo volver a modificarlo cuando sea.

### **Images to Textures**
___
1) En la imagen deseada; Filter>Camera Raw y establecer los siguientes valores como referencia:
**Light:**
- Exposure: -2,25
- Contrast: -95
- Hightlights: +44
- Shadows: -100
- Whites: -100
- Blacks: +100

**Efects:**
- Texture: -100
- Clarity: +100
- Dehaze: +100
- Vignette: 0
- Grain: 50
	- Size: 100
	- ROughness: 92

**Color:** 
- bajar la saturación al maximo de todos los colores que no se quieren en el poster

2) Seleccionar el modo de fusión a "Hue"
3) Añadir un color solido debajo de todo y elegir un color dentro de esta área:
 ![[Pasted image 20251216015121.png]]
 4) Por ultimo se puede añadir una textura nueva por encima.+



### **Typography tips:**
___

1) Normalmente en jerarquía solo se habla de tamaño, grosor y espaciado, pero también se puede crear jerarquía con contexto.

2) Se puede utilizar la misma fuente y modificarla, por ej; estrechándola para conseguir diferentes resultados.. 

3) Descargar fuentes "Display", normalmente son experimentales pero otorgan al poster mayor personalidad.

### **Create Color Palettes:**
___
###### **Monocromatic:** 
Elegir un color y complementarlo con neutrales como blanco o negro.

- **Elementos principales:** Titulos, imagenes, iconos, en general lo grande e importante a color para que se lleven la atención.

- **Elementos Complementarios:** divisores, subtitulos, detalles, en blanco o negro suele funcionar, están para acompañar la atención, no para luchar contra ella.

 - **Detalles:** Texturas, formas, relleno, normalmente blanco o negro suele funcionar y pequeños detalles a color solo si ayuda a dirigir la atención.

###### **Analogues:** 
Elegir un color base y mover ligeramente el "Hue" para elegir 2 colores cercanos.

1) **Boost contrast:** ajustar los niveles de color de la imagen con una capa "colors", bajar las sombras y subir la luces

2) **Expand color range:** En lugar de elegir 3 colores continuos, dejar un color intermedio entre cada uno para tener una paleta mas amplia e interesante.

3) **Gradient Map:** Aplicar un gradient map y seleccionar los colores elegidos.
- **tip:** jugar con los ajustes del gradient map 


###### **Complementarios:** 
Elegir un color y su diagonal, para generar la paleta.

1) Seleccionar dos subtonos para cada uno, dos más claros para el primer color y dos más oscuros para el segundo.
2) Ajustar los niveles de luz de la imagen con una capa "Levels", bajar las sombras, subir las luces.
3) Aplicar un Gradient map y seleccionar los colones en el, duplicar los colores en la rampa y acercarlos para reducir la distancia entre ellos.
4) Incrementar el contraste.



### **Color density**
___
La densidad de color es cuan luminoso u oscuro parece un color, se refiere a la absorción de luz, esencialmente es intensidad o riqueza en lugar de la saturación especifica, en otras palabras es buena saturación.

Al intentar hacer los colores más vivos, en lugar de saturarlos al máximo hay que prestar atención al brillo y como afecta a la armonía con el resto de colores.

La clave esta en ajustar el brillo de los colores, los colores oscuros se sienten pesados.

Durante siglos los artistas han sabido como utilizar la densidad de color, eligiendo colores clave y otros secundarios para apoyarlos, aprender de ellos no significa copiar sus colores, estilos sino sus decisiones
<img
  src="../media-content/Apuntes/media-foto/20251226210231.png"
  alt="Densidad de color"
  style="margin: 0 auto; padding: 0; width: 100%; height: auto;"
/>
