# Fibra Óptica
___
Los datos del mundo real son codificados mediante lógica binaria para que el ordenador pueda entenderlos.

Una vez el ordenador tiene dicha información puede almacenarla, procesarla y transmitirla a la hora de transmitir los datos los dispositivos adaptaran las señales al medio usado para transmitirlo ya sean alámbricos o inalámbricos, guiados o no guiados, dentro de los guiados se dividen en cables metálicos y dieléctricos a los que pertenecen los cables de fibra óptica.

Los cables de fibra óptica están hechos de conductos de fibra de vidrio, están formados por un núcleo, revestimiento y cubierta.

Permiten la transmisión en distancias y ancho de banda más grandes que los cables eléctricos, son inmunes a las interferencias electromagnéticas (perturbación en un equipo, componente o sistema producida por una fuente de radiación electromagnética), esta tecnología ha sustituido al ADSL.


## Componentes: 
___
### Fuente emisora de luz:
- (Laser, LED) que convierte la señal eléctrica en una luminosa.

### Detector:
- genera un pulso eléctrico cuando la señal luminosa incide en el.

### Fibra óptica:
- transmite la señal luminosa

## Tipos de fibra óptica:
___
(ordenadas de menor a mayor velocidad) 

### Multimodo de índice escalonado: 
- el núcleo posee índice de refracción constante, alta dispersión modal

### Multimodo de índice gradual: 
- el núcleo posee un índice de refracción no constante y una menor dispersión modal, el núcleo es de otros materiales

### Monomodo: 
- solo se propaga un modo de luz, se logra reduciendo el diámetro del núcleo, se usa para distancias más largas 400km máx.


## Características: 
___
### bidireccional: 
- distintas lambdas de subida(1310µm) y bajada (1490µm) desde la ONT a la OLT

### Punto multipunto: 
- sale una fibra de central que puede llegar a varios clientes


## Conceptos 
___
### Conectores: 
- elementos que permiten la interconexión entre los diferentes tipos de cables a los dispositivos finales Dependiendo del tipo de cable se podrán tener diferentes tipos de conectores 

### Adaptadores alámbricos: 
- permiten la conexión de los ordenadores al medio de transmisión físico 

### Adaptadores inalámbricos: 
- permiten la conexión de los ordenadores al medio de transmisión aéreo o radiofrecuencias (wifi, bluetooth, infrarrojos) 

### Medios inalámbricos: 
- permiten la comunicación por medio de ondas de radio Wifi: redes de conexión de dispositivos electrónicos de forma inalámbrica, 

### WIFI
- realmente es una organización comercial que adopta, prueba y certifica que los equipos cumplen los estándares de redes inalámbricas de área local, existen diversos tipos y estándares

### ADSL: 
- Asymetric digital subscriber line/ línea de abonado digital asimétrica, tecnología de modem que transforma las líneas telefónicas o el par de cobre abonado las líneas de alta velocidad.

- Es una tecnología de acceso a internet de banda ancha consiste en la transmisión de datos apoyada en el cable de pares simétricos de cobre que lleva la línea telefónica convencional o de abonado, siempre que la distancia hasta la central telefónica no supere los 10km o no haya otros servicios por el mismo cable que puedan interferir 

#### Esta ofrece 3 servicios: 
- canal de envió de datos 
- canal de recepción de datos
- canal de servicio telefónico normal

### Multimodo: 
- significa que los haces de luz pueden circular por más de un camino, esto supone que no llega a todos a la vez, son usados generalmente para distancias cortas -2km Los rayos de luz que entren en la fibra recorrerán diferentes trayectorias/modos 

- Dispersión modal: el rayo de luz rebotará en zigzag entre el límite del revestimiento y el núcleo, cada rebote provoca esta dispersión, cuanto mayor sea el trayecto mayor será la dispersión



# Estructura: 
___
## En central: 
___
### OLT (optical line terminator): 
- concentra toda la información que se envía y recibe de los clientes y sale hacia un arrecife 
- une a los clientes con las redes IP, distribuye las fibras a los edificios 
- todas las fibras se concentran en 2 fibras, una de transmisión y otra de recepción en la OLT que posteriormente conectara con un ROM 

### ROM (Repartidor óptico modular) 
- une las fibras de transmisión que vienen de la OLT con las fibras del cable de alimentación 
- Esos cables conectan con sala/galería de cables


### Galería de cables: 
- sala donde se concentran todos los cables de fibra y cobre de la operadora 
- los cables de fibra conectan con los conductos 
- los conductos son los tubos por donde salen los cables para conectarse con el exterior


## Fuera de central:
___
### Splitter: 
- elemento pasivo (no requiere alimentación) el cable de luz entra por él, tiene una entrada con varias salidas, suele haber varias etapas de división: (1-4, 1-16), dependiendo de la operadora 

### Caja de empalme: 
- el cable que salía por el subconducto desde la galería acaba en una caja de empalme 
- la caja sirve para hacer varios empalmes de cables y cubrir distancias las cuales con uno solo no se podría 
- también sirve para subdividir el tubo y seleccionar un cable del mismo para desplegarlos por los edificios 
- suelen encontrarse en el subsuelo dentro de una cámara de registro (habitáculo en el que se ven los conductos y subconductos que vienen desde central hasta el empalme) 
- algunas cajas de empalme más pequeñas suelen encontrarse en fachadas o postes


### Caja de fibra óptica: 
- el cable que viene desde la central se conecta que una caja de fibra 
- desde la caja de fibra se conecta al domicilio del cliente 
- en ocasiones hay que hacer una transición de cable exterior a interior mediante una roseta exterior, para conectarlas habrá que fusionar las fibras que conectará con la interior/final, la cual terminará en un conector de fibra 
- En caso de no poseer una infraestructura interior para llegar desde la acometida hasta el domicilio del cliente, suelen estar en fachadas, postes o pedestales


### Cajas preconectorizadas: 
- se encuentran en el interior del edificio 
- se divide en 2 cajas de operador con un cable de alimentación cada una y una caja 1 de cliente con otro tipo de cable 
- las cajas de operador conectan con la de cliente mediante un conector preconectorizado 
- una vez la señal de central ha sido conectada hay que buscar la caja de derivación en la planta correspondiente y desde ahí conectar hasta el domicilio del cliente 
- una vez sacado el cable en el domicilio se conecta en una roseta final que conectara con la ONT


### Cajas interiores fusionadas (sin preconectorizar): 
- se encuentran en el interior del edificio 
- sigue la misma filosofía que las preconectorizadas con la diferencia que hay que fusionar las fibras desde la fibra de la caja de derivación, después se termina conectando desde la caja de derivación hasta la roseta en el domicilio del cliente


## Configuración en el domicilio: 
___
### ONT
- hay configurar el ONT 
- una vez configurado se conecta el ONT con la roseta 

### ONT+Router: 
- se unen ambos equipos 

ONT y Router en el mismo equipo: