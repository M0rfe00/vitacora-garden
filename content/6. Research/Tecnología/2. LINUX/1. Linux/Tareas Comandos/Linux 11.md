1) muestra el nombre del equipo (uname)
![[paso1_11.jpg]]

2) muestra el nombre del equipo (uname -n/ hostname)
![[paso2_11.jpg]]


3) Muestra el nivel de ejecución de la máquina a la que estás conectado (runlevel/ who -r)
![[paso3_11.jpg]]


4) Muestra el usuario con el que estás conectado a la máquina. (whoami) 
![[paso4_11.jpg]]


5) Muestra los últimos 10 comandos que ha ejecutado en el sistema ese usuario. (history 10) / (history | head -10) 

![[paso5_11.jpg]]

![[paso5.3_11 1.jpg]]




6) Muestra el nivel de ocupación de los sistemas de ficheros que están montados en el sistema. (du/ df -h) 

![[paso6_11.jpg]]

7) Muestra el tamaño que ocupa el directorio home del usuario con el que estás conectado. (df -k /home) 
![[Paso7_11.jpg]]



8) Muestra las 20 primeras lineas del log de arranque del sistema. (head -20 "syslog") (dmesg | head -20) 
![[paso7.4_11.jpg]]


![[paso8.3_11.jpg]]


9) Muestra las direcciones HW (Mac Address) de los interfaces de red del sistema (hazlo con una sola línea de comando) y almacena en un fichero el resultado obtenido. (ip addr show > "fichero.txt") (ip m > “fichero.txt”)
![[Paso9_11.jpg]]

![[paso9.1_11.jpg]]


10) Haz un enlace simbólico en el escritorio al fichero creado anteriormente cuyo nombre sea "ips.txt". (ln -s "fichero anterior" ips.txt)
![[Paso10_11.jpg]]



_______

hostname

1) muestra el nombre del equipo (uname)


2) muestra el nombre del equipo (uname -n/ hostname)


3) Muestra el nivel de ejecución de la máquina a la que estás conectado (runlevel/ who -r)


4) Muestra el usuario con el que estás conectado a la máquina. (whoami)


5) Muestra los últimos 10 comandos que ha ejecutado en el sistema ese usuario. (history 10)


6) Muestra el nivel de ocupación de los sistemas de ficheros que están montados en el sistema. (du/ df -h)


7) Muestra el tamaño que ocupa el directorio home del usuario con el que estás conectado. (df /home)



8) Muestra las 20 primeras lineas del log de arranque del sistema. (cat -n 20 "pt_02.07.202.0_15.14.47.516.log")


9) Muestra las direcciones HW (Mac Address) de los interfaces de red del sistema (hazlo con una sola línea de comando) y almacena en un fichero el resultado obtenido.
(ip addr show > "fichero.txt")



10) Haz un enlace simbólico en el escritorio al fichero creado anteriormente cuyo nombre sea "ips.txt".
(ln -s "fichero anterior" ips.txt)