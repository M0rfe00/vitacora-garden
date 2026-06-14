1. Busca el fichero "syslog" en el sistema mostrando la ruta en la que se encuentra.



2. Muestra el número de líneas de componen el fichero anterior.

3. Muestra el campo del UID de los usuarios del sistema. 
cut -d ‘:’ -f2 var/log/passwd



4. Haz un pequeño script (programa) que muestre cada 10 segundos las últimas 10 líneas del fichero /var/log/syslog.:

touch /home/alumno /Destop/Fichero.sh 
chmod +x Fichero.sh 
nano fichero.sh 
	while true 
	 do 
		 tail -n 10 /var/log/syslog 
		 sleep 10 
	done

