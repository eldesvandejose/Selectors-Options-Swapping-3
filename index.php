<html>
	<head>
		<link rel="stylesheet" href="css/estilos.css">
		<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
		<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap-theme.min.css">
	</head>
	<body>
		<!-- Se crea una capa que será el contenedor global de los selectores y los botones. -->
		<div id="contenedor_de_selectores"></div>

		<script src="https://code.jquery.com/jquery-3.1.0.min.js"></script>
		<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>

		<!-- Se incluye el plugin SOS (Selectors Options Swapping) -->
		<script language="javascript" src="js/jquery.sos.js"></script>
		<script language="javascript">
			/* Creamos un objeto sos sobre el contendor global.
			Si son necesarias opciones, las pasamos al constructor. */
			$(function(){
				$('#contenedor_de_selectores').sos();
			});
		</script>
	</body>
</html>