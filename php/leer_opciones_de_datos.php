<?php
	mb_internal_encoding("UTF-8");
	function normalizarAcentos ($cadena){
		if ($_POST["ignora_acentos"] == "N") return $cadena;
		$originales = ['À','Á','Â','Ã','Ä','Å','Æ','Ç','È','É','Ê','Ë','Ì','Í','Î','Ï','Ð','Ñ','Ò','Ó','Ô','Õ','Ö','Ø','Ù','Ú','Û','Ü','Ý','Þ','ß','à','á','â','ã','ä','å','æ','ç','è','é','ê','ë','ì','í','î','ï','ð','ñ','ò','ó','ô','õ','ö','ø','ù','ú','û','ý','ý','þ','ÿ','Ŕ','ŕ'];
		$modificadas = ['A','A','A','A','A','A','A','C','E','E','E','E','I','I','I','I','D','N','O','O','O','O','O','O','U','U','U','U','Y','B','S','a','a','a','a','a','a','a','c','e','e','e','e','i','i','i','i','d','n','o','o','o','o','o','o','u','u','u','y','y','b','y','R','r'];
		$cadena = str_replace ($originales, $modificadas, $cadena);
		return $cadena;
	}

	/* Recuperamos los datos enviados por POST cuando la consulta viene causada por una 
	búsqueda en las cajas de texto de la parte superior. */
	$ignora_acentos = (isset($_POST["ignora_acentos"]))?$_POST["ignora_acentos"]:"N";
	$capitalizacion = (isset($_POST["capitalizacion"]))?$_POST["capitalizacion"]:"N";
	$selector = (isset($_POST["selector"]))?$_POST["selector"]:"";
	$busqueda = (isset($_POST["busqueda"]))?$_POST["busqueda"]:"";

	// Conexión a base de datos
	$conexion = new PDO('mysql:host=localhost;dbname=provincias;charset=UTF8', 'root', '');
	$conexion->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

	$consulta = "SELECT ";
	$consulta .= "provincias.valor, ";
	$consulta .= "provincias.texto, ";
	$consulta .= "provincias.seleccionada, ";
	$consulta .= "provincias.habilitada ";
	$consulta .= "FROM ";
	$consulta .= "provincias ";
	$consulta .= "WHERE 1 ";
	$consulta .= "ORDER BY texto;";
	$hacerConsulta = $conexion->query($consulta);
	$matrizDeItems = $hacerConsulta->fetchAll(PDO::FETCH_ASSOC);
	$hacerConsulta->closeCursor();

	// Si la llamada incluye una selección de datos por texto en caja de búsqueda, 
	// se eliminan aquellos elementos que correspondan al selector en el que se busca 
	// (disponibes = seleccionada No o seleccionados = seleccionada Si) y cuyo 
	// texto no encaje en el criterio de búsqueda. 
	if ($selector != "" && $busqueda != ""){
		$seleccionada = ($selector == "D")?"N":"S";
		foreach ($matrizDeItems as $keyItem=>$item){
			if ($capitalizacion == "S"){
				if (mb_strpos(normalizarAcentos($item["texto"]), normalizarAcentos($busqueda)) === false && $item["seleccionada"] == $seleccionada){
					unset($matrizDeItems[$keyItem]);
				}
			} else {
				if (mb_stripos(normalizarAcentos($item["texto"]), normalizarAcentos($busqueda)) === false && $item["seleccionada"] == $seleccionada){
					unset($matrizDeItems[$keyItem]);
				}
			}
		}
	}


	$matrizDeItems = array_values($matrizDeItems);
	$JSON_Items = json_encode($matrizDeItems);
	echo $JSON_Items;
?>