### **Materiales**
___
Añadir un Principled Hair BSDF
<img
  src="../media-content/Apuntes/3D-Notes/Hair-media/EyeLashesh-Material.png"
  alt="Brush"
  style="margin: 0 auto; padding: 0; width: 100%; height: auto;"
/>

<iframe 
style="width:100%; aspect-ratio:16/9; height:auto;"  src="https://www.youtube.com/embed/n-NKQ6L01-o?si=GCBmUcTKBXN4zzgU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

<!--
Emission:
- Number: 0
- Seed: 0
- Hair length: 3cm
- Segments: 4

Source: 
- Emit from: Faces (no habilitar la casilla inferior)
- Distribution: Jittered (habilitar Random order y Even Distribution)
- Particles/Face: 0
- Jittering Amount: 1

Hair Dynamics: desabilitado.

Render:
- Render As: Path
- Material: nombre del material de las pestañas
- Cordinate system: nada (habilitar Sow Emitter)
Path:
- B-Spline: Habilitado
- Steps: 7

Timing: nada.
Extra: nada

Viewport Display:
- DIsplay As: Rendered.
- Color: Material
- Strand Steps: 5
- Amount: 100% 
- Show Emitter: Habilitado

Children:
- Simple
- Display Amount: 97
- Render Amount: 100
- Length: 0.869
- Threshold: 0.202
- Seed: 1239
- Size: 1
- Random Size: 0
- Radius: 0.15cm
- Roundness: 0.803

Clumping: Habilitar "Use Clump Curve"
- Primer tipo de curva: X: 1 / Y:0
- Twist: 0
- Use Twist Curve: Deshabilitado
- Clump Noise: Deshabilitado

Roughness: Deshabilitar "Use Roughness Curve"
- Uniform: 0
- Size: 1
- Endpoint: 0.005
- Shape: 1.1
- Random: 0.003
- Size: 0.915
- Threshold: 0.127
-->



# PEACHFUZZ EN BLENDER
___
Como crear vello facial con sistemas de pelo.

Tutorial hecho en C4D con redshift, pero puede ser aplicado en otros generadores de pelo y engines.
<iframe 
style="width:100%; aspect-ratio:16/9; height:auto;"  src="https://www.youtube.com/embed/uc_8BY5k2mQ?si=n9mHcBi_GEGw3pRR" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

Seleccionar el área donde crecerá el pelo, por ejemplo la cara.

>[!Info] Copiar particle system
>Seleccionar el objeto al cual se quiero copiar, presionar "Shift" y seleccionar el objeto con el sistema de particulas.
>En particle properties, clicar en el desplegable bajo "+-" y seleccionar "Copy active to selected"

### **Añadir un sistema de particulas de pelo.**
___

| Parámetro       | Valor recomendado para peachfuzz    |
| --------------- | ----------------------------------- |
| **Number**      | 20,000 – 50,000 (no hace falta 60k) |
| **Hair Length** | 0.001 – 0.002 (1–2 mm)              |
| **Segments**    | 4 – 6                               |
| **Children**    | Usa **Simple Children**: 5-10       |
| Count           | 5–10                                |
| Clumping        | 0.05                                |
| Roughness       | Muy poco o nada (0.01-0.02)         |

- Activar **Use Modifier Stack** si tu mesh tiene subdivisión.
- **Dynamics**: desactivado para peachfuzz estático.

# Growth Map (dónde crecerá)
- En **Vertex Groups**, pinta con **Weight Paint** dónde quieres que crezca.
- En **Particle Settings → Vertex Groups → Density**, conecta tu grupo.
- Opcionalmente puedes usar **Length** para que ciertas zonas tengan pelo más corto.
### Hair Materiales:
___
**Color:** Establecer una rampa de color de un tono mas oscuro a uno claro (color similar a la piel) (No usar negro ni marrón oscuro, usar un color **apenas más oscuro que la piel**)

| Parámetro            | Valor sugerido                               |
| -------------------- | -------------------------------------------- |
| **Color / Melanin**  | Melanin: 0.1–0.2 (muy claro, cercano a piel) |
| **Roughness**        | 0.3–0.5                                      |
| **Radial Roughness** | 0.3                                          |
| **Randomize Color**  | 0.05 – 0.1 (sutil variación)                 |
| **IOR**              | 1.55 (default)                               |

<!--
Establecer la siguiente configuración en las propiedades del sistema:
**Guides>Roots:**
- **Longitud:**  0.5 - 1.5 mm (0.001)
- Count: 300/600 aprox.
- Segments: 4-6 max.

**Hairs>Hairs:**
- Count:
	- Viewport: 10k – 30k
    - **Render:** 30k – 80k
- Segments: 12

**Hairs>Roots:** mantener los parametros por defecto

**Hairs>Growth:** añadir un Growth map para establecer en B/W donde crecerá el pelo. (conectarlo a Densitu)

**Hairs>Cloning:** mantener los parametros por defecto

**Generate>Render Hairs:** asegurarse que esta activado para que se muestre en el render

**Desactivar "Dynamics"** en caso de realizar una animación

>[!Info] Usar el nuevo sistema de particulas de pelo Blender
>Add>Curves>Empty Hair / Geometry Nodes Hair. Sobre la cabeza
>(Es más rapido, estable, mejor shading y da mejor control con mapas)
-->

<!--
Materiales C4D/Blnd
Specular: 
- Strength: 70%
- Sharpness: 50
- Secondary Strength: 80%
- Secondary Sharpness: 80%
- Back Specylar: 90%

Thickness:
- Root: 0.00001 – 0.00002 <!--0-001cm--><!--
- Tip: 0.000005 – 0.00001 <!--0.001cm--><!--
- Variation: 0cm
- Curve: una ligera curva descendente (1 aprox - 0.5 aprox)
	*Más grueso: parece barba/sucio/polvo*

Frizz: **0.01 – 0.05**
- Frizz: 90%
- Variation: 0.2 – 0.4 importante para que no parezca césped. <!--10%--><!--
- Scale X & Y: 100%
- Amount: 100%
- Curve: ascendente (0 - 1.2 aprox)
	*Nunca 90% como en pelo largo, evitar poner mucho*

Length: (apenas modificados)
- Length: 90%
- Variation: 20%
- Amount: 100%
	Evitar hacerlo muy largo

Bend: **0.05 – 0.15**
- Bend: 20%
- Variation: 0.1 <!--10%--><!--
- Amount: 100%
- Direction Random / Variation: 0%
	*Que NO esté perfectamente recto, pero tampoco rizado.*

(El resto de los parámetros del material están desactivados)
(Añadir una contraluz mejora mucho visualmente el peach fuzz)
-->



<!--
- [Youtube](https://youtu.be/fK7sjl5DYOk?si=lvLu6vBJhe_Sbgib)
- [Patreon](https://www.patreon.com/posts/daz-studio-hair-144675164?source=storefront) 
- [Gumroad](https://armouredavian.gumroad.com/l/aviansdazhairmaterialblender?layout=profile)

**Peach fuzz material**
https://render-state.to/3d/vellus-peach-fuzz-for-genesis-8-female/
-->

<!--
# Octane Hair Shaders
___
<iframe 
style="width:100%; aspect-ratio:16/9; height:auto;" 
 src="https://www.youtube.com/embed/WQY8rVvueZY?si=x9xSjQcZMw6Smj9Q" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
-->