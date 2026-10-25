# LiDAR
___
LiDAR significa Light Detection and Ranging, es decir, detección y medición de distancias mediante luz. Es un sistema que utiliza pulsos de luz, normalmente láser, para medir la distancia a los objetos.

# Funcionamiento
___
Su funcionamiento básico es bastante sencillo de entender:

#### 1: Emisión de luz
El sensor emite un pulso láser hacia el entorno.
![RPLIDAR-A2 Lidar 센서_솔리드 스테이트 Lidar（SLAMTEC）](https://images.openai.com/static-rsc-4/zkxICHvWHf1J1_XwxLvzsS6UM1G4NQg_7bHKY7oLmEGIIfjjevqzQTXukxUD0976rdVTMwwDNcyFT9yZOmHDlk4UJAHolOzZvq9OW5hCR-tj62anF4asMS2_4CyD4KOx5uXBdHBD_xDEeLLmfEvNy61jKh5hZa_UBTd0gMKhMlY?purpose=inline)

#### 2: Reflexión
Parte de la luz rebota en un objeto y regresa al sensor.
![LiDARの原理とは - ULVAC](https://images.openai.com/static-rsc-4/GWEbiHrw2tgGai0uyhjemWoa_qR0me7qDwBjiHRyFOx4P5mHAGBAWNGbonv1MiBy-z7Sota_kQXk0ebAU37Sa7Dwsbb-rhs2sbXxPjlC_wnGMgL-2oQ7PDPTCkeJfadwntHY5qsHfythXW_aYoW28n37Q90DC5fr2LO8IZ6OJZw?purpose=inline)


#### 3: Cálculo de la distancia
El sensor mide cuánto tarda la luz en regresar. Si conoce el tiempo de ida y vuelta, calcula la distancia mediante la velocidad de la luz.
![Snapklik.com : TOFSense-F2 Lidar Sensor 0.05-25m Range High Precision Single-Point Distance Sensor Compact Lightweight ToF Module](https://images.openai.com/static-rsc-4/LK-v7KgR5gfk50bki7SiNHro2KMGxxYsWu6gJNbacbRkCcCpWp6SCNebcqEipOOsNUagzhQdZ8rq6s6ZQUDIuHMUw6B6wc-tPwFUIvm_t6OJZbh_5vy5g0d5xgAbZIpL_x5YhpyLElbod1GUaSx9IL-qzwWs83TXXiT4JU-FfFI?purpose=inline)

#### 4: Construcción del entorno
Repitiendo las mediciones en muchas direcciones se obtiene una nube de puntos tridimensional que representa superficies, edificios, árboles, vehículos y otros objetos.
![What is LiDAR technology？How does it help with depth measurement？](https://images.openai.com/static-rsc-4/XznIs4zQ9jTR1xGIWfNUqWppqfhZTaZPD8QUJ-rGoaX_g7HsXsOW_Mx0Yy-BSXV5UuJfWsgk0L4OEk0cxzvNXpp_MglQ95qrz7Yg2x749bLRlr6cmBMnRcxNM9fDbmtAUW_HM6fLRDUclA30GUSCgEa71-ei5fYO2hkVdgR3X2I?purpose=inline)


# Diferencia entre LiDAR, cámara y radar?
___
Cámara
Captura imágenes y colores. Es excelente para reconocer detalles visuales, pero no mide directamente la distancia de cada píxel.
![Nuimages 10k Dataset Object Detection Dataset by new-workspace-hbhr7](https://images.openai.com/static-rsc-4/tlNpHMt1lfZUXWM18TRM6b0eND_UbpBlX1uy44i1JoAv-zOnJQlaQi5EUnfu1cmtWJzeO77S-UmDLQ60duGpiWV1SaCB4QCOfUpPA4EgpdithsLmowynJ_enrLACiWzkm3NYi-GshWjaWqRog4l0xIQs9P3OF-nE245Bf-SM4Z4?purpose=inline)

LiDAR
Proporciona mediciones geométricas y distancias, normalmente en 3D. Puede generar una representación espacial precisa del entorno.
![Inside the suppliers: Luminar | CarExpert](https://images.openai.com/static-rsc-4/Ukks-h3QrHlDOESuQtdoBY7Ix4GMfaEc08IJsxISOs1vkVdBiwZ8rmxBgBttXhGrSscYpTFAGBvlMh1jYnP9fF6S6HYcGmtAJwzguBbXlWDZEYz24MRJT4VcvLQGt8tOoGY20b_SksgQ7yEEFTQGM2P6hiOVNmet5SnDy4omfwI?purpose=inline)

Radar
Utiliza ondas de radio. Es especialmente útil para medir distancia y velocidad relativa, y suele funcionar mejor que el LiDAR en determinadas condiciones meteorológicas adversas.
![Object detection with LiDAR Point cloud Algorithm | by Junho Koh | Medium](https://images.openai.com/static-rsc-4/NHgD8F_nzDAh66kDySkoXYMY6qUNRjXB80mo_znjcCPfBU0L2UF02ttP7KXEJj5Pfig2I8HKtJdxJgDb1i-ldd-AbcRJF2e4LMJIC-tyc8UggQylcOVyjL7FN3HL05La0WzuJpLw5VTDPL-Ls5L4CDczbF4ls_in9YscOvDXaV4?purpose=inline)

Ninguno es siempre superior. Los sistemas profesionales combinan cámaras, LiDAR, radar, GPS y unidades de medición inercial (IMU) para aprovechar las ventajas de cada uno.

Además, el LiDAR tiene limitaciones: la lluvia intensa, la niebla, el polvo, ciertas superficies y las condiciones de iluminación o de reflectividad pueden afectar a sus mediciones. No todos los sensores LiDAR funcionan de la misma forma.


# Tipos de LiDAR
___
No todos los LiDAR se utilizan para lo mismo. Esta distinción importa porque determina qué herramientas aprenderás y a qué trabajos podrás optar.

### LiDAR 2D
Escanea un plano y genera mediciones alrededor del sensor. Es común en robots móviles, navegación y detección de obstáculos.
Dificultad inicial: baja-media.
![Lydsto R5D 3 In 1 Sweeping & Mopping Vacuum Cleaner, LDS Navigation System, Advanced Smart Sensors, 3000Pa Suction, WiFi & App Control, White | YM-R5D-W03 Buy, Best Price in UAE, Dubai, Abu Dhabi, Sharjah](https://images.openai.com/static-rsc-4/v0wOMgaDG6wWEi1t7R3JERntYIpT-lcyiZ31yGwt_2J0e0o6XuKhiOmfLoHz4OGtB02HTleTm3UDd025kazeUeZkC_zFGse0hT2g67unTmwxFKRPeWXRfZRfK9J4j5fHPR7Gcfww_-DcNc61kL70dHH7MRuAjhz8bwuvIPrAg4E?purpose=inline)

### LiDAR 3D
Construye nubes de puntos tridimensionales. Se utiliza en robótica, vehículos autónomos, drones y reconstrucción de espacios.
Dificultad inicial: media.
![](https://images.openai.com/static-rsc-4/3F22-UYj5MSgoUmHHQztvsIc3zYfAay9Ls67nueFvVBD0y0up4vn5Tl7eF2DqR_Ikge0BcKvdXQFgf6wLhNj7wb207HFz0CKvOqL4R9NXQser7fa_dQPa1ZzDpeTK2vAEUbbJcUiAP3iYBUrMQS7qXVhhTaxh8DSIs6QvS51OaU?purpose=inline)

### LiDAR aerotransportado
Se monta en drones, aviones o helicópteros para medir terrenos, bosques, infraestructuras y grandes superficies.
Dificultad inicial: media-alta por la georreferenciación y la topografía.
![[Pasted image 20261025195649.png]]

### Escáner láser terrestre
Se coloca en un trípode o se lleva mediante un sistema móvil para capturar edificios, fábricas, túneles o instalaciones. Genera modelos para ingeniería, arquitectura y mantenimiento.
Dificultad inicial: media; requiere aprender captura y registro de datos.
![Scanner laser - RTC360  - LEICA PRECISION TOOLS BY LEICA GEOSYSTEMS  - 3D / autonivelant](https://images.openai.com/static-rsc-4/G6LbJx4BVkfXKhEB-JBFvctAgW4w0JXnASl3yU06CiHCT93qBZBx-xbnnp0umdQhLSB5M83yAvLzVhC3L8yUNDU23Z66WSf3GbIv4zel6qyjY8CrF-KbAKx40j2w_8Lc-rHt4tjlumRsSr6EMg4koDw96L5mM41EYcrelaupLU0?purpose=inline)


También existen sistemas especializados, como LiDAR de onda continua modulada en frecuencia (FMCW), que puede medir distancia y velocidad, y sistemas multiespectrales o de distintas longitudes de onda.

# Aplicaciones
___
### Drones, topografía y cartografía
Crear modelos digitales del terreno, medir volúmenes, estudiar bosques, inspeccionar líneas eléctricas y generar modelos 3D de infraestructuras. Es una de las conexiones más directas entre UAV y LiDAR.
![UAV LiDAR for Topographical Survey Under Dense Canopy](https://images.openai.com/static-rsc-4/FjFsj-TY7jj2nEUbXWQJhokBs3FWw7pLyaILDpkuTLznfy49rmIRmtaOocDyGzEaAYh_MYu0-kXBezTIFc8hxMug7_8qWxrcwHg82IHZcmfwyxBkOAjGpA_l93vQVdMkXydEllKqc0RYrNjCC5A780VDRZoWTVQs9Wy6RAHH7tQ?purpose=inline)

### Robótica y vehículos autónomos
Localizar obstáculos, construir mapas, estimar la posición del robot y navegar por entornos desconocidos. Se emplea en robots industriales, vehículos autónomos y sistemas de logística.
![[Pasted image 20261025202456.png]]

### Industria y gemelos digitales
Digitalizar edificios, fábricas y maquinaria para comparar el estado real con los planos, detectar desviaciones y mantener modelos digitales actualizados.
![Digital Twins from Laser Scans: Turning Reality into Actionable Data](https://images.openai.com/static-rsc-4/c8qYwDJQjp9b3FEl8Tu0Ook5WqA1duC3oO4oYozGKLU_7l0Ydoiu9h4s_9SAAAiZLUmy6yMKzZr0_QMzgSq-QBNNPcLRi3hC2EZyyniaYJQn9pxg1IDhbF9mgILAsEUYOU3KpWRFygwmx6bt0271D84OfZW2EJVY4L8fQxDEH_A?purpose=inline)

### Medioambiente, geología y arqueología
Analizar vegetación, erosión, inundaciones, cambios del terreno y estructuras ocultas por la vegetación, cuando las condiciones de adquisición lo permiten.
![Mucho más que un palacio: tecnología punta revela la enorme ciudad oculta en torno a Medina Azahara](https://images.openai.com/static-rsc-4/nIfs-_7cbLt6WWQWj9Zkm8LND2VyTdVGdHNu-F5AaBBBhs6GbOe77j5q8sMv5qhcnZloD22G0jErpHQ2XPl9Uzz2H4rtQ7IIyrPkMXq770zwVuPqd6v40v63Csq-U70GuRWR5C_WhuMiHnhLsz1qlKiKmj39LPMwY58IsUBo1eY?purpose=inline)

### Seguridad y defensa
Apoyar la percepción del entorno, el seguimiento espacial y la detección de obstáculos. En sistemas de seguridad, el LiDAR puede complementar cámaras, radar y sensores RF, aunque no sustituye por sí solo a todos ellos.
![Deep Learning Based SWIR Object Detection in Long-Range Surveillance Systems: An Automated Cross-Spectral Approach](https://images.openai.com/static-rsc-4/tLlC-ObZ81rvTXRimBz19gznHbIzZaf3qMqF4hrO_XNmsG05F0DKXbStxQkTiFzPhvYxlsXO-WBFNvEaDBJCB0BHfXlRg9aaeQQk8QwhZhuDl04Ue78yhDilVIzt8GYzoQ-kk9Ptf1sw6ONIyyh9tcDjlCZ1LRJ1DfHm7kNbPjA?purpose=inline)

### Diseño 3D, arquitectura y realidad aumentada
Escanear habitaciones y objetos, medir espacios, reconstruir geometría y generar modelos que posteriormente pueden utilizarse en CAD, visualización 3D y entornos virtuales.
![How To 3D Scan A Room at Candy Harper blog](https://images.openai.com/static-rsc-4/ZoXfFf7Igzj1hCe3h0UM3J_esiQglkI6mbF6n9RguNSV8dc-_6CeDso4YG0_V3yts0fL63EnJwdmSnAprr0AmCD6lZZ_dzXTxuNna4tCNgumgj4OCH6ClxxD_wTrreMyUggmKNk9bmLVzGs0Pzv6_73_TFF-biSANDrPr_lFAys?purpose=inline)




# Bloques de aprendizake
___
#### 1. Fundamentos del sensor
Tiempo de vuelo, precisión, alcance, resolución angular, frecuencia de escaneo, reflectividad y ruido. Aprende a interpretar las especificaciones de un sensor.

#### 2. Nubes de puntos 3D
Qué son las coordenadas XYZ, cómo visualizar archivos LAS/LAZ y PCD, cómo eliminar puntos erróneos, segmentar objetos y generar modelos.

#### 3. Programación y tratamiento de datos
Python, NumPy y una biblioteca de geometría 3D. Automatizar conversiones, filtrados, análisis y visualización de los datos.

#### 4. Robótica y navegación
ROS 2, sensores, coordenadas de referencia, odometría, SLAM y fusión sensorial. SLAM permite que un robot construya un mapa y estime su posición dentro de él.

#### 5. Geomática y cartografía (si eliges drones)
GNSS/GPS, sistemas de coordenadas, georreferenciación, fotogrametría, modelos digitales del terreno y control de precisión.

#### 6. Inteligencia artificial (opcional, avanzada)
Detección y clasificación de objetos, segmentación semántica 3D, seguimiento de objetivos y combinación de datos de diferentes sensores.


# Recursos de aprendizaje
___
### CloudCompare — visualización y análisis
Punto de partida; bre nubes de puntos, mide distancias, limpia datos, segmenta zonas y compara escaneos sin necesidad de programar.
Web oficial: [CloudCompare](https://www.cloudcompare.org/?utm_source=chatgpt.com)
![Point Cloud Import without color - Troubleshooting - Vectorworks Community Board](https://images.openai.com/static-rsc-4/tPXjnrhKToUhvkmL40o3vbgVJ7KAOMIwzJBG4Ozyxv4Kv58xKh3D6eBg6lcirvvXwGu7xkuvNFxtMhQD2AIOw1rX7yebXpYoqd6sdAoC7pT54W_1WYMDI5qI3VixaE91zFYFodEH6WcRA6k61z6R4wqrWHJ9sr541ZzRp7nzpmM?purpose=inline)

#### Open3D — programación 3D
Una biblioteca con interfaz para Python y C++ para cargar, filtrar, transformar y procesar nubes de puntos. Sus tutoriales incluyen reconstrucción de superficies y eliminación de puntos anómalos.
Web oficial: [open3d.org](https://www.open3d.org/docs/latest/index.html?utm_source=chatgpt.com)
Recursos: [Documentación y tutoriales de Open3D](https://www.open3d.org/docs/latest/?utm_source=chatgpt.com)
![Visualization — Open3D 0.12.0 documentation](https://images.openai.com/static-rsc-4/-Qbm327XPOHFP8w2fjI95nU0cavPpYxmwASGctVg6xLakX6foXWHZi7Q3fPTnXZdPk0DKMiyagsfp_1M05mhHCxNZ2EAQtNc9JlyoapbOXhq7X-U-Ju3NZMORJ_IjhreRPxrDfyW5bkwIWoFTWXEvxyxmgDBimQ6uY32RpdVteY?purpose=inline)


#### ROS 2 — robótica
Permite comunicar sensores, programas y robots. Puedes visualizar escaneos 2D y nubes de puntos 3D mediante herramientas como RViz y trabajar con simulaciones.
[Robotics AI Suite Documentation](https://developer.robotics.intel.com/development-stack/components/sensors/lidar/index.html?utm_source=chatgpt.com)
Recursos: [Documentación oficial de ROS 2](https://docs.ros.org/?utm_source=chatgpt.com)
![Tutorial: Visualization — Fetch & Freight Research Edition Melodic documentation](https://images.openai.com/static-rsc-4/NY0mEn3UUldu0GIS3DsbFpCWafFwNcIR9XwRgMhTMGVPjpndqwEV_jo97Foa8da8Iya-94fbC4PF41tD2SOEUqpZ4_sbDGTEH_kVKd9RpeGr65L5ej5p_Nz6P8upGim0ha0ENk-QXCXZKFlk1J4bZe0aRmprJZM5ZOiObt7l9qM?purpose=inline)


#### NVIDIA Isaac Sim — simulación avanzada
Permite experimentar con robots virtuales y sensores LiDAR simulados, conectándolos con ROS 2. Es útil para aprender percepción y navegación sin adquirir hardware.
[Isaac Sim Documentation](https://docs.isaacsim.omniverse.nvidia.com/6.0.0/ros2_tutorials/index.html?utm_source=chatgpt.com)
Recursos: [Documentación de Isaac Sim](https://docs.isaacsim.omniverse.nvidia.com/?utm_source=chatgpt.com)
![RTX Lidar Sensor — Isaac Sim Documentation](https://images.openai.com/static-rsc-4/6vScEyY4D8oySY3hbIwnGmda22a5eSBoHc90tTZmG_010Evvr_tGlwiFwnbsFPtTsZzZP5SQnCAHAnbKXathkM5Irsulawc_WkaaK1E7VM2KtimDcRrXo3-NCT_3p6s2WhWb1_phW76Fr6cvLWKK3yCMBmzv2R4bN8jX6tZKnQo?purpose=inline)


#### QGIS — cartografía y datos geoespaciales
Si te interesan los drones de mapeo, te ayudará a entender sistemas de coordenadas, elevaciones, datos geográficos y resultados cartográficos.
Recursos: [Web oficial de QGIS](https://qgis.org/?utm_source=chatgpt.com)
Para profundizar en algoritmos clásicos de procesamiento 3D, también puedes consultar la Point Cloud Library (PCL) en su [web oficial](https://pointclouds.org/?utm_source=chatgpt.com). Es más técnica y especialmente relevante para aplicaciones en C++.
[Point Cloud Library](https://pointclouds.org/?trk=public_post_reshare-text&utm_source=chatgpt.com)
![Test QGIS with Point Clouds on Windows | 3D Data Visualization Setup](https://images.openai.com/static-rsc-4/RMha5sZPC5GpJu4N3IJsSl3cVtMRufYL1WCJM5l8wVdfAJBJRsxN0TAjXfq0nn9VM1xPoCiLMPntt2FztNGCKjuF-YhHU7XOOctmlEFXiS7xSI0J1Kr_e1BLM6xHxrlK_Qht5ZTkp8JN1JKiO-gVUm8cq7EV_NOyQaReNrOvfcI?purpose=inline)

#### Datos LiDAR
##### [European Point Clouds](https://europeanpointclouds.tudelft.nl/?utm_source=chatgpt.com)
un catálogo de nubes de puntos y modelos de elevación europeos. Puedes explorar países y regiones, comprobar metadatos y acceder a las fuentes de los datos. Es particularmente útil si vives en Europa y quieres trabajar con datos de aquí. [Home](https://europeanpointclouds.tudelft.nl/?utm_source=chatgpt.com)
#### [Open LiDAR Data](https://registry.opendata.aws/open-lidar-data/?utm_source=chatgpt.com)
una colección de conjuntos de datos LiDAR de distintas regiones, con especial atención a Europa. Comprueba la licencia de cada conjunto antes de reutilizarlo comercialmente. [Registry of Open Data on AWS](https://registry.opendata.aws/open-lidar-data/?utm_source=chatgpt.com)


### RUTA A: LiDAR, nubes de puntos y cartografía
### 1. OpenTopography — curso de introducción y tutoriales
Gratis · A tu ritmo
Nivel: principiante a intermedio

Probablemente sea el mejor punto de partida para ti. Ofrece material sobre qué es LiDAR, densidad de puntos, resolución, metadatos, modelos digitales de elevación y procesamiento de datos topográficos. También tiene vídeos sobre QGIS y CloudCompare.

Orden recomendado: fundamentos → tipos de datos → descarga de nubes de puntos → modelos de terreno → visualización y análisis.
[Acceder a la formación de OpenTopography](https://opentopography.org/learn/onlinetraining?utm_source=chatgpt.com)
![OpenTopography Potree Point Cloud Treasure Hunt | OpenTopography](https://images.openai.com/static-rsc-4/xFEGYbFAjF_3yvoRAywAKW9Efd-sXocS38olJLVhEuZwtvP9qnjmlvHgVHJDLHVD7v8lVrb5p1FnP6v2lzsV8iPW4-GsV7rPpvht8Zlrxs7ruigW_Folp6j90oHV-8SwhJ0XgLSFvDnsG2-_S6_7sxuOpmTFxp2ZkRdSJ_2XHio?purpose=inline)



### 2. Manual oficial de QGIS — nubes de puntos
Gratis · Documentación oficial
Nivel: principiante a intermedio

Aquí aprenderás a cargar datos LAS/LAZ y EPT, visualizarlos en 2D y 3D y entender cómo QGIS trabaja con nubes de puntos. El manual incluye además operaciones de procesamiento.

Es especialmente útil porque QGIS no solo sirve para dibujar mapas: permite convertir datos LiDAR en productos geoespaciales que puedes analizar y presentar.
[Manual de nubes de puntos en QGIS](https://docs.qgis.org/latest/en/docs/user_manual/working_with_point_clouds/point_clouds.html?utm_source=chatgpt.com)
![Exploring the New Elevation Profile Tool with Point Clouds in QGIS 3.26 | Hans van der Kwast | 12 comments](https://images.openai.com/static-rsc-4/SVJg4-hxawJ6_b9RhY1a_B_fUvrXOIXpf2IQB0_E4F5im_3UqqctnRn5y_Z4O9tZaVpeSFsiqYUlpMNcle3fQbMxj3W813u_TRZWiV_I79Dfo8mL9k4f-YmBnusNV9qKlmd4NNCh4JbnmHXSKWYVSxSZcoYF0hjIUhfo1LgKnI4?purpose=inline)


### 3. CloudCompare — procesamiento 3D
Software gratuito y de código abierto
Nivel: principiante a intermedio

Complétalo con los tutoriales de OpenTopography. Practica la visualización, medición, segmentación, comparación y limpieza de escaneos.

No es un curso académico estructurado por sí mismo, sino una herramienta con la que realizar ejercicios prácticos.
[Web oficial de CloudCompare](https://www.cloudcompare.org/?utm_source=chatgpt.com)
![【CloudCompare教程】002：点云绘制模式详解_点云sf-CSDN博客](https://images.openai.com/static-rsc-4/UhvQRyIIr0A0NIzVywMxT1M8SSMDyBFFo7TfzfbnQBfcdL0Z7qOQx0hTK56Ci8rL5-S_nMMQevFUEZcKv7WbiLqMZ8cZDNoCjCoA3YkjMNKM84pKFcE4fPpBPAOM_E4wzR0wilot6LAD-5I9vUL36UU08TWGtr3Fj_jtR_WyglU?purpose=inline)


### 4. USGS — importar y visualizar LiDAR en QGIS
Gratis · Vídeo práctico
Nivel: principiante

Un tutorial de unos 20 minutos explica cómo importar una tesela LAS, instalar el complemento necesario, visualizar los puntos, filtrarlos y utilizar perfiles de elevación. Es una forma rápida de pasar de la teoría a un flujo de trabajo real.
[Ver el tutorial del USGS](https://www.usgs.gov/media/videos/lesson-10j1-importing-and-visualizing-3dep-point-cloud-data-qgis?utm_source=chatgpt.com)
![TNM Training Carousel for Lesson 10j1 - Importing and Visualizing 3DEP Point Cloud Data with QGIS | U.S. Geological Survey](https://images.openai.com/static-rsc-4/xX-9S1miFjvPZF4dHoGWHC-wM59dOGKDGqFag2XAXQSCwMkkLM8CT4b73KVCxxVxaGIM36EXeU5IZ1qzoDWzCGMqzVZDQcoDR850BJs6KK06zsoygcrJKnPVQmxAD9-LsInTG9ZgeZIzdfaLARxlAzeNnMIlXjK8fPeIowU39I0?purpose=inline)

### RUTA B: Profundizar en el análisis geoespacial
Una vez que controles lo anterior, te recomiendo el manual de formación de QGIS completo, no solo su apartado de nubes de puntos.

- [QGIS Training Manual](https://docs.qgis.org/latest/en/docs/training_manual/?utm_source=chatgpt.com): sistemas de coordenadas, datos ráster y vectoriales, geoprocesamiento y creación de mapas.
- [USGS National Geospatial Program](https://www.usgs.gov/programs/national-geospatial-program?utm_source=chatgpt.com): material técnico y conjuntos de datos para practicar con modelos de elevación y datos LiDAR.
- [OpenTopography](https://www.opentopography.org/?utm_source=chatgpt.com): para descargar datos y generar productos topográficos. Tiene acceso gratuito con límites que dependen del tipo de usuario y del conjunto de datos.

No necesitas completar todo el manual de QGIS antes de empezar a procesar LiDAR. Aprende primero los conceptos que vayas utilizando en tus proyectos.

### RUTA C: LiDAR, radar, RF y seguridad/defensa
Esta tercera ruta es bastante distinta. El objetivo no sería simplemente crear mapas, sino comprender cómo se detectan objetos, cómo se estima su posición y cómo se combinan datos procedentes de sensores diferentes.

Fundamentos de sensores
- Comprender alcance, precisión, campo de visión, resolución, falsas detecciones y limitaciones de cámaras, LiDAR y radar.

Análisis geoespacial
- Aprender QGIS, coordenadas, capas, elevaciones y representación de trayectorias. Esto permite contextualizar dónde se producen las detecciones.

Radar y RF
- Estudiar espectro electromagnético, frecuencia, ancho de banda, antenas, propagación, mediciones de radar y características de las señales. Aquí encajan los fundamentos de radiofrecuencia y SDR que te interesan.

Seguimiento y fusión sensorial
- Entender cómo combinar mediciones, asociar detecciones y estimar la posición y el movimiento de un objetivo, teniendo en cuenta la incertidumbre de cada sensor.

Aplicación a C-UAS
- Analizar arquitecturas de detección de drones con radar, RF, cámaras electroópticas e infrarrojas, y estudiar sus limitaciones en escenarios reales o simulados.
(1 Recursos Lidar & GIS, 2 Formación Radary RF, 3 Curso [Unitar](https://www.unsdglearn.org/courses/geospatial-information-technology-in-fragile-contexts/?utm_source=chatgpt.com); tecnologías geoespaciales en contextos de fragilidad y seguridad. Ofrece certificado de finalización al superar sus evaluaciones, pero no es una certificación de LiDAR ni de C-UAS.)


# Proyectos
___
#### Proyecto 1 — Analizar una nube de puntos LiDAR
Duración estimada: 6–12 horas para una primera versión sencilla.
1. Descarga una nube de puntos de un conjunto de datos público.
2. Ábrela en CloudCompare y observa qué representa cada punto.
3. Mide distancias y alturas, elimina ruido y separa una región de interés.
4. Carga el archivo en Python usando Open3D.
5. Crea un pequeño script que filtre los puntos y guarde el resultado.
6. Documenta el proceso, las herramientas y las limitaciones en tu portfolio.

#### Proyecto 2 — Procesamiento de una nube de puntos
Descarga un conjunto de datos LiDAR público, clasifica o filtra los puntos, mide alturas y genera una visualización 3D. Explica el formato, el proceso y los problemas que encontraste.

Demuestra: procesamiento 3D, atención al detalle y manejo de datos técnicos.

#### Proyecto 3 — Análisis de terreno con QGIS
Genera un modelo de elevación, un sombreado del relieve y un mapa con curvas de nivel. Documenta las fuentes, el sistema de coordenadas y las limitaciones del resultado.

Demuestra: GIS, cartografía, tratamiento de rásteres y documentación técnica.

#### Proyecto 3 — Estudio de arquitectura multisensor para C-UAS
Diseña un estudio conceptual de cómo combinar radar, RF, cámara y LiDAR. Compara qué información aporta cada sensor, sus limitaciones y cómo se representarían las detecciones en un mapa. Puedes usar datos sintéticos o públicos, sin necesidad de comprar equipos.

Demuestra: comprensión de sensores, análisis de sistemas y capacidad de documentación. No demostraría que sabes desarrollar un sistema C-UAS operativo, pero sí que comprendes los componentes y sabes analizar una arquitectura. Sería un buen puente hacia una futura especialización en defensa.

# Ruta de aprendizaje
___
### Nivel inicial (1-2 Semanas)
Entender cómo funciona el sensor, explorar visualizaciones y abrir tus primeras nubes de puntos con CloudCompare.

### Nivel práctico inicial (1–3 meses)
Completar varios proyectos de análisis, filtrado y visualización. Aprender Python básico para automatizar tareas.

### Especialización junior inicial (3–6 meses)
Desarrollar un portfolio con proyectos de robótica, percepción 3D o cartografía. Empezar a manejar herramientas de la especialidad elegida.

### Competencia profesional más sólida (6–18+meses)
Integrar sensores reales, evaluar precisión, resolver problemas complejos y trabajar con sistemas completos. Los puestos avanzados pueden requerir bastante más experiencia.

Hay una diferencia importante: puedes aprender a usar LiDAR en semanas, pero desarrollar un sistema fiable de percepción autónoma puede requerir años de práctica.

Tampoco necesitas dominar toda la tecnología para conseguir tu primer empleo relacionado. Puedes entrar por el procesamiento de datos, la operación de equipos o la asistencia técnica y especializarte progresivamente.




### Entender y visualizar Semanas 1–2
- Estudiar los fundamentos de LiDAR y las nubes de puntos
- Instalar CloudCompare y explorar un archivo LAS/LAZ
- Medir distancias, identificar ruido y guardar capturas

### Procesamiento 3D Semanas 3–5
- Aprender Python básico y NumPy si hace falta
- Seguir los tutoriales iniciales de Open3D
- Crear un script de filtrado y exportación de nubes de puntos

### Elegir una especialización Semanas 6–8
- Robótica: comenzar ROS 2 y visualizar escaneos simulados
- O cartografía: aprender QGIS y sistemas de coordenadas
- Documentar un proyecto reproducible

### Construir un portfolio Semanas 9–12
- Completar un proyecto de principio a fin
- Explicar qué datos usaste, qué hiciste y qué limitaciones encontraste
- Comparar ofertas laborales reales y anotar los requisitos que se repiten

|Periodo|Prioridad|Resultado|
|---|---|---|
|Mes 1|OpenTopography + CloudCompare|Primera nube de puntos procesada|
|Mes 2|QGIS + sistemas de coordenadas + elevación|Proyecto cartográfico completo|
|Mes 3|Python básico + automatización + documentación|Portfolio técnico y análisis de ofertas|

# Posibles Salidas laborales
___
Nivel 1 — Entrada más accesible Objetivo inicial
Puestos: técnico de procesamiento de datos, anotación 3D, asistente GIS y técnico junior de escaneo.

Se valora la capacidad para trabajar con datos espaciales, utilizar software especializado, seguir procedimientos y mantener la precisión.

Por ejemplo, una oferta europea de anotación de datos LiDAR publicada en octubre de 2026 describe un puesto de nivel inicial centrado en reconstruir redes eléctricas 3D a partir de nubes de puntos, mapas GIS e imágenes de drones. Destaca la orientación espacial, la atención al detalle y la capacidad de aprender.[Remote Europe](https://keywordise.com/jobs/data-annotator-for-geospatial-and-lidar-3ozzcqjkx4?utm_source=chatgpt.com)

Qué necesitarías: proyectos propios, dominio básico de QGIS y CloudCompare y un portfolio bien documentado.

### Nivel 2 — Técnico geoespacial o de integración
Puestos: técnico GIS, procesamiento LiDAR, técnico de datos UAV e integración de sensores.

Aquí ya suelen importar los sistemas de coordenadas, la calidad de los datos, la clasificación de puntos, los modelos de terreno y la automatización.

Hay empleadores que aceptan perfiles con formación técnica y experiencia relevante, aunque otros exigen títulos de geomática, topografía o disciplinas similares. Algunas ofertas de procesamiento de datos aéreos, por ejemplo, admiten perfiles técnicos de informática junto a perfiles geoespaciales. [vansteelandt.be](https://www.vansteelandt.be/en/vacatures/geospatial-data-processing-specialist?utm_source=chatgpt.com)

Qué necesitarías: varios proyectos completos, conocimientos geoespaciales sólidos y, preferiblemente, algo de Python.

### Nivel 3 — Ingeniería y defensa especializada
Puestos: ingeniero de percepción, especialista en fusión sensorial, ingeniero de radar o investigador de sistemas LiDAR.

Estos puestos pueden requerir cálculo, álgebra lineal, estadística, procesamiento de señales, algoritmos avanzados y experiencia con sensores reales. Es frecuente que las empresas soliciten un grado universitario o experiencia equivalente demostrable.

En defensa pueden añadirse requisitos de habilitación de seguridad, nacionalidad, autorización para acceder a información clasificada o restricciones por proyecto. No todas las empresas ni todos los puestos tienen los mismos requisitos.