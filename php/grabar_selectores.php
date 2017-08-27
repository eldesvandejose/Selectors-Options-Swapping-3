<?php
	$datosRecibidos = $_POST; // Se recuperan los datos enviados por Post

	/* Se conecta con la Base de datos elegida. */
	$conexion = new PDO('mysql:host=localhost;dbname=provincias;charset=UTF8', 'root', '');
	$conexion->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

	/* Se recorre la matriz de elementos actualizando cada uno. */
	foreach ($datosRecibidos['items_array'] as $item){
		$consulta = 'UPDATE provincias SET ';
		$consulta .= 'seleccionada = "'.($item['seleccionada'] == "S"?"S":"N").'" ';
		$consulta .= 'WHERE valor = "'.$item['valor'].'";';
		$hacerConsulta = $conexion->prepare($consulta); // Se crea un objeto PDOStatement.
		$hacerConsulta->execute();
	}
?>
