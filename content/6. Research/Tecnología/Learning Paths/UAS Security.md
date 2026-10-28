>[!Info] **UAS fundamentals**
>- arquitectura de drones
>- flight controllers
>- telemetry
>- MAVLink
>- PX4 / ArduPilot
>- ground control stations
>- GPS/GNSS
>- radio communications
>- FPV

>[!Info] Conexión entre disciplinas
>Esto conecta: **Cybersecurity + RF + networking + drones + seguridad física**
>
>y puede abrir puertas en:
>- critical infrastructure
>- airports
>- telecommunications
>- defence
>- border security
>- energy
>- industrial security
>- research

# Especializaciones
___
==**Seguridad de sistemas embebidos (Embedded Security):**== muchos controladores de vuelo y ordenadores de a bordo ejecutan Linux o RTOS. Analizar firmware, detectar vulnerabilidades o evaluar la cadena de arranque es una habilidad muy demandada.
    
==**Seguridad de redes inalámbricas:**== los drones utilizan Wi-Fi, telemetría, enlaces de radio, LTE/5G o protocolos propietarios. Comprender cómo funcionan estos sistemas y cómo protegerlos es muy relevante en entornos industriales y de defensa.
    
==**Seguridad de protocolos de comunicación:**== proyectos como MAVLink o DroneCAN son ampliamente utilizados. Entender su funcionamiento y sus mecanismos de autenticación e integridad resulta útil para diseñar sistemas más robustos.
    
==**Hardening de Linux embebido:**== muchos ordenadores de misión utilizan distribuciones Linux adaptadas. Saber configurar servicios, gestionar permisos, reducir la superficie de ataque y securizar dispositivos es una competencia transferible desde la administración de sistemas.
    
==**Seguridad en robótica y sistemas autónomos:**== plataformas como Robot Operating System y Robot Operating System 2 se usan en numerosos proyectos de investigación e industria, incluidos algunos relacionados con vehículos no tripulados.
    
==**Análisis de firmware y reversing:**== extraer y estudiar imágenes de firmware para comprender su funcionamiento o identificar fallos es una disciplina muy valorada.






# Ruta aprendizaje
___
### Fase 1
___
Priorizaría
- **Networking** TCP/IP, DNS, DHCP, VLAN, VPN, routing, Wireshark
- **Linux** Bash, permisos, procesos, logs, SSH, networking
- **Cyber** SIEM, IDS/IPS, incident response, authentication, vulnerabilities, threat detection, basic pentesting

>[!Info] Priorizar crear un portfolio
>Wireshark analysis → Linux hardening → SIEM → detection rules → incident investigation → network attacks
>
>Esto encaja muchísimo mejor con tu SMR que intentar entrar directamente como "Drone Cybersecurity Engineer".

## Fase 2 — entrar en un SOC
___
Tu primer objetivo profesional podría ser algo como:
Junior SOC Analyst / Security Operations Analyst / Junior Cybersecurity Analyst /IT Security / Network Security Technician

El SOC me parece especialmente interesante para ti porque aprovecha lo que ya tienes de IT/networking y no exige necesariamente una carrera universitaria.
De hecho, ENISA señala que una parte importante de los profesionales actuales entraron desde otros roles y que una proporción considerable no posee formación/certificación formal específica en cybersecurity.

## Fase 3 — empezar con drones
____
**UAS fundamentals**
- arquitectura de drones
- flight controllers
- telemetry
- MAVLink
- PX4 / ArduPilot
- ground control stations
- GPS/GNSS
- radio communications
- FPV


**UAS cybersecurity**

>[!Info] Laboratorio
>ArduPilot/PX4 -> MAVLink  ->  Ground Control Station  -> Wireshark  -> analizar tráfico  -> identificar vulnerabilidades  -> implementar autenticación/cifrado -> monitorizar ataques
>
>Eso sería **mucho más potente para tu CV** que simplemente tener un certificado de piloto de drones.


# Hoja de ruta
___
Semana 1 Dominio básico de SITL
- Ejecutar una misión con waypoints, cambiar modos y comprender los parámetros principales.

Semana 2 Logs y telemetría
- Guardar los registros, visualizar la trayectoria y representar altitud y velocidad.

Semana 3 Python + MAVLink
- Leer telemetría de SITL y exportar datos a CSV.

Semana 4 Proyecto de portfolio
- Crear un analizador de vuelos con gráficas y detección básica de anomalías.

Semana 5 Explorar una especialidad
- Elegir seguridad de comunicaciones, GIS/sensores o integración y pruebas.

Semana 6 Documentar y orientar el CV
- Publicar el proyecto, escribir un informe técnico y comparar tus habilidades con ofertas reales.

# Aprendizaje Ardupilot
___
#### Paso 1. Comprender el funcionamiento del vuelo. 
Prioridad alta
- Aprende a iniciar SITL, conectar Mission Planner, armar y desarmar el vehículo en simulación, cambiar modos de vuelo, crear misiones con waypoints y comprender los parámetros principales.
Objetivo: poder explicar qué hace el autopiloto y qué sucede cuando una misión no sale como esperabas.

#### Paso 2. Aprender a analizar telemetría y registros
- Estudia los mensajes MAVLink, los logs DataFlash, la posición, altitud, velocidad, modos de vuelo y estados de sensores. Compara una misión normal con otra en la que hayas alterado deliberadamente un parámetro de simulación.
Objetivo: detectar anomalías, explicar sus posibles causas y documentar los resultados.

#### Paso 3. Automatizar una tarea mediante Python
- Utiliza `pymavlink` para leer telemetría, guardar datos en un CSV y generar un informe. Después puedes explorar comandos de misión en un entorno de simulación.
Objetivo: pasar de utilizar una interfaz gráfica a interactuar con el sistema mediante código.

#### Paso 4. Elegir una dirección profesional
- Cuando hayas completado las tres prácticas anteriores, decide si quieres profundizar en programación, integración de sensores, ciberseguridad, análisis de datos o C-UAS.
No necesitas dominar todas las ramas para comenzar a construir un perfil profesional.


# Proyectos
___
#### Proyecto A — Analizador de vuelos UAS
Simula varios vuelos, exporta los logs y crea un programa Python que represente altitud, velocidad, trayectoria y estados del vehículo. Añade detección de valores anómalos y un informe automático.
Aprenderás: Python, datos, telemetría, depuración y documentación técnica.

Salidas profesionales relacionadas: pruebas de sistemas UAS, análisis de datos de vuelo, soporte técnico e integración.

#### Proyecto B — Monitor de telemetría MAVLink
- Crea una aplicación que se conecte al SITL, lea mensajes MAVLink y muestre la posición, altitud, modo de vuelo y estado del sistema. Guarda las lecturas para analizarlas posteriormente.
**Aprenderás:** protocolos, redes, Python y comunicación entre sistemas.
**Salidas profesionales relacionadas:** integración UAS, software de sistemas, soporte de comunicaciones y pruebas.

#### Proyecto C — Cartografía y planificación de misiones
- Exporta una trayectoria de vuelo, impórtala en QGIS y compárala con datos de elevación, terreno y zonas de interés. Documenta cómo el entorno geográfico condiciona la planificación.
**Aprenderás:** GIS, coordenadas, datos geoespaciales y planificación de operaciones.
**Salidas profesionales relacionadas:** cartografía con drones, GIS, operaciones de inspección y procesamiento geoespacial.

#### Proyecto D — Laboratorio de seguridad de comunicaciones UAS
- En tu propio SITL, captura tráfico MAVLink y estudia qué información transmiten los mensajes, cómo se identifican los componentes y qué riesgos existen cuando las comunicaciones carecen de las protecciones adecuadas. Documenta las limitaciones y medidas defensivas.
**Aprenderás:** Wireshark, redes, protocolos aeronáuticos y fundamentos de seguridad de UAS.
**Salidas profesionales relacionadas:** pruebas de seguridad, ciberseguridad de sistemas embebidos e integración segura de UAS.

#### Proyecto E — Sensores y percepción
- Investiga cómo integrar un sensor de distancia o LiDAR simulado, si el simulador y el modelo elegidos lo permiten. Registra sus medidas y explora cómo se podrían utilizar para detectar obstáculos o construir una representación del entorno.
**Aprenderás:** sensores, procesamiento de datos, simulación y percepción robótica.
**Salidas profesionales relacionadas:** integración de sensores, robótica, inspección y percepción para sistemas autónomos.

#### Proyecto: UAV Cybersecurity Lab
Laboratorio reproducible, documentado y ejecutado en simulación
1. Desplegar ArduPilot SITL y conectarlo a una estación de control terrestre.
2. Documentar la arquitectura, los componentes, los flujos de comunicación y la superficie de ataque.
3. Capturar y analizar tráfico MAVLink con Wireshark, identificando los mensajes y sus características.
4. Investigar mecanismos de autenticación, firma de mensajes y configuraciones de seguridad usando documentación oficial.
5. Diseñar pruebas controladas y autorizadas para detectar configuraciones débiles o anomalías en las comunicaciones.
6. Documentar los resultados, las limitaciones, las medidas de mitigación y un procedimiento de respuesta.
Entregables para el portfolio
- Diagrama de arquitectura UAV.
- Capturas de tráfico y análisis de protocolos.
- Matriz de amenazas y riesgos.
- Scripts de análisis o detección, si desarrollas esa parte.
- Informe técnico y guía de reproducción del laboratorio.


### Portfolio
| Tipo de puesto                   | Qué suele importar                                                             |
| -------------------------------- | ------------------------------------------------------------------------------ |
| Ciberseguridad UAS               | Redes, protocolos, sistemas embebidos y metodología de pruebas de seguridad    |
| Análisis de datos de vuelo       | Logs, Python, procesamiento de datos y comprensión de sensores                 |
| Integración y pruebas UAS        | Configuración, diagnóstico, telemetría, simulación y documentación             |
| Desarrollo de software de drones | Python/C++, MAVLink, sistemas embebidos y experiencia con el autopiloto        |
| Ingeniería de vuelo avanzada     | Experiencia práctica, dinámica de vuelo, control, integración y pruebas reales |
>[!Info] construir un perfil que combine:
>- Competencias que ya tienes: sistemas, redes, resolución de problemas y documentación
>- Nuevas competencias: ArduPilot, MAVLink, simulación, Python y análisis de telemetría.  
>- Evidencias: proyectos reproducibles, código, capturas, registros de pruebas e informes técnicos.


# JOB OFFERS
___

>[!Info] 1. Una oferta que encaja casi exactamente con DroneSec
>[Omnisent – Cybersecurity Engineer, Munich](https://join.com/companies/omnisent/16701835-cybersecurity-engineer-f-m-d?utm_source=chatgpt.com)
>Esta es probablemente la evidencia más interesante que he encontrado.
>Omnisent está desarrollando sistemas **Counter-UAS autónomos** en Alemania y busca un **Cybersecurity Engineer** para proteger sus sistemas frente a ataques.
>
>Piden:
>- cybersecurity / product security
>- embedded systems / IoT
>- protocolos de comunicación
>- threat modelling
>- vulnerability assessment
>- penetration testing / red teaming
>- encryption
>- secure boot
>- authentication
>- hardware + firmware + software
>- **RF security / SDR** como plus
>- experiencia frente a **jamming/spoofing** como plus
>
>| DroneSec                 | Omnisent                          |
>| ------------------------ | --------------------------------- |
>| Threat assessment        | Threat modelling                  |
>| Vulnerability assessment | Vulnerability assessment          |
>| Offensive security       | Penetration testing / red teaming |
>| Defensive security       | Product security                  |
>| Drone communications     | Communication protocols           |
>| Cyber-physical attacks   | Hardware/firmware/software        |
>| Counter-UAS              | Counter-UAS                       |
>| Jamming/spoofing         | Jamming/spoofing                  |
>| Drone security           | UAS security                      |
>

>[!Info] 2. Hay más empresas europeas contratando en este espacio
>
>Por ejemplo, una búsqueda sectorial de junio de 2026 identificaba empresas europeas de Counter-UAS contratando en:
>
>- cybersecurity
>- software
>- embedded
>- RF
>- radar
>- electronics
>- testing
>- systems engineering
>
>Entre ellas aparecen **Advanced Protection Systems, CERBAIR, Robin Radar Systems y Marduk Technologies**, entre otras.

>[!Info] 3. Incluso existe una oferta donde aparece MAVLink directamente
>
>He encontrado una posición de investigación en Estonia relacionada con **cybersecurity de sistemas no tripulados**.
>
>La posición trabaja con:
>
>- **MAVLink**
>- PX4
>- ArduPilot
>- GNSS denial
>- jamming
>- loss of control
>- cyber-physical attacks
>- vulnerability mapping
>- MITRE ATT&CK
>- STIX/TAXII [LinkedIn](https://ee.linkedin.com/jobs/view/ai-cybersecurity-researcher-at-data-oriented-defence-operations-4444461395?utm_source=chatgpt.com)
>
>Esto es especialmente interesante para ti porque demuestra que conocimientos como:
>
>**MAVLink + PX4 + ArduPilot + cybersecurity**
>
>no son simplemente "cosas de hobby"; aparecen en trabajos reales de investigación y desarrollo.
>
>Eso sí: esta posición concreta está orientada a un perfil investigador y menciona explícitamente estudiantes de máster/entornos académicos, por lo que no la tomaría como una puerta de entrada inmediata para ti.

>[!Info] 4. También existe demanda de C-UAS a nivel europeo
>
>La **European Defence Agency** publicó en 2026 un puesto de:
>
>### Project Officer – Counter UAS
>
>en Bruselas.
>
>Pedían:
>- conocimiento sólido de UAS
>- conocimiento de **C-UAS**
>- análisis de cuestiones de defensa
>- capability development
>- project management
>- conocimiento del entorno europeo de defensa
>- inglés
>
>y requerían habilitación de seguridad **SECRET UE/EU SECRET**. [Eda Vacancies](https://vacancies.eda.europa.eu/vacanciesnotice/1094?utm_source=chatgpt.com)
>
>Este puesto está muy por encima de tu nivel actual, pero sirve para demostrar que **C-UAS ya es una especialización profesional dentro del ecosistema europeo de defensa**, no solamente una actividad experimental.

>[!Info] 6. Hay incluso una tercera categoría muy interesante para ti
>
>Otra oferta de Orbotix en Brașov es:
>
>### FPGA Design Engineer — secure drone communications
>
>Trabajan con:
>- secure communications
>- drones autónomos
>- AES
>- cryptography
>- key generation/distribution/rotation
>- embedded security
>- cybersecurity
>- FPGA
>- VHDL/Verilog
>- comunicaciones resistentes [Orbotix Industries](https://orbotix.tech/company/careers/?utm_source=chatgpt.com)
>
>Este tipo de puesto está **muchísimo más especializado** que DroneSec.
>
>Pero muestra hacia dónde puede evolucionar el campo:
>
>**Cybersecurity + drones → embedded security + communications + cryptography + RF**

