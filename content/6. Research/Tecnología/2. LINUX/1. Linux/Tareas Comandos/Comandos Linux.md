
1 crear fichero (touch)
2 mostrar paginadamente el fichero anterior (cat)
3 sobreescribir el fichero anterior con el contenido del escritorio ()
4 mostrar el contenido del fihero sin paginar y ordenadamente
5 crear directorio en el escritorio y copiar el fichero en el ()
6 renombrar el otro fichero y moverlo al directorio
7 borrar el primer fichero
8 borrar el directorio
9 crear fichero en el escritorio con mi nombre y la fecha y hora
10 buscar el fichero creado con mi nombre


# 📁 1. Navegación y archivos
___
- **pwd**: muestra el directorio actual.
- **cd**: cambiar de directorio.
- **ls**: lista contenido de directorios.
    - **ls -l**: formato largo (permisos, propietario, tamaño…)
    - **ls -lat**: lista detallada, ordenada por fecha + ocultos.
- **mkdir**: crear directorios.
- **rmdir**: eliminar directorios vacíos.
- **touch**: crea un archivo vacío o actualiza su fecha.
- **cp**: copiar archivos o directorios.
    - **cp -p**: conserva permisos y metadatos.
- **mv**: mover o renombrar archivos/directorios.
- **rm**: eliminar archivos.
    - **rm -r**: eliminar directorios recursivamente (todo su contenido).
- **cat**: mostrar contenido de archivos (también concatenar).
- **more**: mostrar contenido paginado.
- **head**: primeras líneas de un archivo.
- **tail**: últimas líneas de un archivo.
    - **tail -50**: últimas 50 líneas.
- **sort**: ordenar líneas de texto.
- **diff**: comparar dos archivos.
- **cut**: extraer columnas de texto.
    - **cut -d: -f1**: separa por “:” y toma el primer campo.
- **wc (wordcount)**: contar líneas, palabras y caracteres.
    - **wc -l**: contar líneas.



# 🔧 2. Búsqueda y filtrado
___
- **grep**: buscar texto dentro de archivos.
- **find**: buscar archivos/directorios por criterios.
- **which**: muestra la ruta de un ejecutable.
- **locate**: búsqueda rápida de archivos en base de datos.


# ⚙️ 3. Sistema y información
___
- **who**: usuarios conectados.
- **whoami**: usuario actual.
- **id**: muestra UID, GID y grupos.
- **uptime**: tiempo encendido del sistema.
- **uname**: información del sistema operativo.
- **hostname**: nombre del equipo.
- **history**: historial de comandos.
- **dmesg**: mensajes del kernel (arranque y sistema).



# 💾 4. Disco y sistema de archivos
___
- **df**: espacio usado en sistemas de archivos.
    - **df -k**: muestra en kilobytes.
- **du**: uso de espacio por archivos y carpetas.
- **/dev**: directorio de dispositivos del sistema.



# 🌐 5. Red
___
- **ip**: gestión de red.
    - **ip address / ip addr**: interfaces y direcciones IP.
    - **ip -n**: información de red (interfaces/ARPs según contexto).
    - **ip route**: tabla de rutas.
- **ping**: comprobar conectividad.
- **nmcli**: gestión de red (NetworkManager).
- **ss**: estadísticas de sockets y conexiones.



# 👤 6. Usuarios y grupos
___
- **useradd**: crear usuario.
- **adduser**: crear usuario (más interactivo).
- **deluser**: eliminar usuario.
- **userdel**: borrar usuario.
- **id**: información de usuario/grupos.
- **/etc/passwd**: usuarios del sistema.
- **/etc/shadow**: contraseñas encriptadas.
- **/etc/group**: grupos del sistema.



# 🔐 7. Permisos y propiedad
___
- **chmod**: cambiar permisos (r, w, x).
- **chown**: cambiar propietario del archivo.
- **r (read)**: permiso de lectura.
- **w (write)**: permiso de escritura.
- **x (execute)**:
    - en archivos: ejecutar.
    - en directorios: acceder.


# ⚡ 8. Procesos y control del sistema
___
- **sleep**: pausa durante X segundos.
- **jobs**: procesos en segundo plano.
- **kill**: finalizar procesos.
- **history**: ver comandos ejecutados.


# 🔌 9. Apagado y reinicio
___
- **init 0**: apagar sistema.
- **init 6**: reiniciar sistema.
- **halt**: apagar sistema.
- **poweroff**: apagar sistema.
- **shutdown**: apagado ordenado.
- **reboot**: reiniciar sistema.
- **uptime**: tiempo encendido.



# 👑 10. Superusuario y ejecución
___
- **sudo**: ejecutar como administrador.
- **su -**: cambiar a root con entorno completo.
- **su root**: cambiar a usuario root.



# 📦 11. Paquetes y descargas
___
- **apt-get**: instalar/actualizar paquetes.
- **wget**: descargar archivos desde internet.



# 🔗 12. Redirecciones y tuberías
___
- **>**: redirige salida (sobrescribe).
- **>>**: redirige salida (añade).
- **|**: conecta comandos (pipe).


# 🧠 13. Otros útiles
___
- **echo**: imprimir texto.
- **man**: manual de comandos.
- **tar**: comprimir/descomprimir archivos.
- **ln**: crear enlaces (hard/soft links).
- **which**: ubicación de comandos.
- **PATH**: rutas donde el sistema busca ejecutables.

