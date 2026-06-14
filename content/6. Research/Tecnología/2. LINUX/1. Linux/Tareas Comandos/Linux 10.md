01 Averiguar uid y gid del usuario man. 

02 Averiguar el nombre del grupo al que pertenece el usuario man.
![[SIstemas10_1-2.jpg]]

03 Crear dos usuarios en el sistema con diferentes passwords
![[Sistemas10_3.jpg]]

04 Comprobar que las contraseñas son diferentes, comparando los bashes, ir a etc/shadow con (sudo more shadow)/ grep

![[Practica10_4 1.jpg]]

05 Cambiar las password de los dos usuarios para que sean iguales.

![[Practica10_5 1.jpg]]

06 Comprobar que las passwords son iguales.
![[Practica10_6.jpg]]


07 Añade un grupo al sistema cuyo nombre sea smr1.
![[Practica10_7.jpg]]

08 Comprueba que el grupo está creado en el fichero correspondiente e indica el número de GID que se la ha dado.
![[Practica10_8.jpg]]

09 Asigna uno de los usuarios que creamos con anterioridad, al grupo que hemos creado
![[Practica10_9.jpg]]

10 Borrar grupo creado
![[Practica10_10.jpg]]

11 Borrar usuarios creados
![[Practica10-11.jpg]]

12 Crear un usuario cuyo nombre sea puestoX.
![[Practica10_12.jpg]]
![[Practica12-1.jpg]]

13 Crea un fichero vacío en el escritorio desde ese usuario.
![[Practica10_13.jpg]]

14 Muestra los permisos del fichero
![[Practica10_14.jpg]]

15 Cambia el usuario propietario del fichero y asígnale como propietario el usuario root.
![[Puesto10_15.jpg]]

16 Cambia el grupo propietario del fichero y asígnale como propietario el grupo root.
![[Practica10_16.jpg]]

17 Cambia los permisos del fichero y asígnale permisos totales al usuario propietario, al grupo propietario y quítale el resto de permisos al resto de usuarios del sistema.
![[Practica10_18.jpg]]





_______
1) mostrara id gid... (ID)
2) el comando anterior lo muestra
3) sudo adduser "nombre usuario"
4) Comprobar que las contraseñas son diferentes, comparando los bashes, ir a etc/shadow con (sudo more shadow)/ grep
5) cambiar contraseña (sudo passwd "nombre usuario")
6) Comprobar que son iguales (ir a shadow y repetir 4*)
7) añadir grupo (sudo groupadd "nombre del grupo")
8) ver grupo (cd shadow, sudo more group)
9) asignar 1 usuario al grupo (sudo usermod -a -g "nombre grupo" "nombre usuario ")
10) borrar grupo (sudo delgroup "nombre del grupo")
11) borrar usuario (sudo deluser "nombre usuario")
12) crear usuario puestoX (sudo adduser "puestoX")
12.1) salir de la terminal, cerrar sesion e iniciar sesion con el usuario creado
13) crear fichero vacio en el escritorio (touch "nombre")
14) muestra los permisos del fichero (ls -l)
15) cambia el propietario del fichero a root, desde el usuario principal (sudo chown root /home/puestoz/Escritorio/"fichero")
16 cambia el propietario del grupo a root (sudo chgrp root /home/puesto/escritorio)
16) cambia los permisos del fichero y asigna permisos totales (sudo chrp "nº grupo" /home/puesto/escritorio)