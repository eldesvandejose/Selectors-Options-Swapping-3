(function($) { // Se define todo el código en una función que se ejecuta a la carga.
	$.fn.sos = function(opcionesRecibidas){
		/* Definición de las opciones de botones para mostrar por defecto. */
		var opciones = {
			/* Nombres de elementos clave de la página. */
			SOS_3_nombreDelBotonDeAsignar:'boton_agregar', 
			SOS_3_nombreDelBotonDeQuitar:'boton_quitar', 
			SOS_3_nombreDelBotonDeGrabar:'boton_grabar', 

			/* Opciones para campos de búsqueda. */
			SOS_3_mostrarCamposDeBusqueda: false, 
			SOS_3_busquedasEnTiempoReal: false, 
			SOS_3_distinguirCapitalizacion: true, 
			SOS_3_ignorarAcentuadas: true, 

			/* Nombre de los scripts auxiliares. */
			SOS_3_scriptDeLecturaDeDatos:'php/leer_opciones_de_datos.php', 
			SOS_3_scriptDeGrabacionDeDatos:'php/grabar_selectores.php', 

			/* Nombres de clases para aplicar estilos. */
			SOS_3_claseParaContenedorGeneral: 'claseParaContenedorGeneral', 
			SOS_3_claseParaContenedoresDeBusqueda: 'claseParaContenedoresDeBusqueda', 
			SOS_3_claseParaContenedoresDeSelector: 'claseParaContenedoresDeSelector', 
			SOS_3_claseParaContenedoresDeTitulo: 'claseParaContenedoresDeTitulo', 
			SOS_3_claseParaContenedoresGlobales: 'claseParaContenedoresGlobales', 
			SOS_3_claseParaBotones: 'claseParaBotones', 
			SOS_3_claseParaSelectores: 'claseParaSelectores', 
			SOS_3_claseParaCamposDeBusqueda: 'claseParaCamposDeBusqueda', 

			/* Dimensiones del plugin */
			SOS_3_anchura: '80%', 
			SOS_3_altura: '400px', 

			/* Los campos clave de datos para interactuar con los PHP que, 
			a su vez, actúan con la base de datos. */
			SOS_3_campoDeValorDeOpcion:'valor', 
			SOS_3_campoDeTextoDeOpcion:'texto', 
			SOS_3_campoDeOpcionHabilitada:'habilitada', 
			SOS_3_campoDeOpcionSeleccionada:'seleccionada', 
			SOS_3_claveParaOpcionSeleccionada:'S', 
			SOS_3_claveParaOpcionDeseleccionada:'N', 
			SOS_3_claveParaOpcionHabilitada:'S', 
			SOS_3_claveParaOpcionDeshabilitada:'N', 

			/* Otras opciones */
			SOS_3_grabacionAutomatica: false, 
			SOS_3_globalLanguage:'es'
		};

		
		this.each(function(){
			var objetoPrincipal = $(this);
			/* Obtenemos la lista de opciones recibida, que sobrescribe la que se definió por defecto */
			$.extend(opciones, opcionesRecibidas);
			$(this).css({
				"height": opciones.SOS_3_altura,
				"width": opciones.SOS_3_anchura
			});
			/* Según el idioma, se escogen los rótulos para mostrar */
			switch(opciones.SOS_3_globalLanguage){
				case 'es':
					var titulos = {
						encabezadoDeDisponibles:'Opciones disponibles', 
						encabezadoDeSeleccionados:'Opciones asignadas', 
						enlaceAgregar:'Agregar', 
						enlaceQuitar:'Quitar', 
						enlaceGrabar:'Grabar', 
						PH_camposDeBusqueda: 'Buscar...'
					};
					break;
				case 'en':
					var titulos = {
						encabezadoDeDisponibles:'Available options', 
						encabezadoDeSeleccionados:'Attached options', 
						enlaceAgregar:'Add', 
						enlaceQuitar:'Remove', 
						enlaceGrabar:'Save', 
						PH_camposDeBusqueda: 'Search...'
					};
					break;
				case 'ca':
					var titulos = {
						encabezadoDeDisponibles:'Opcions disponibles', 
						encabezadoDeSeleccionados:'Opcions assignades', 
						enlaceAgregar:'Afegir', 
						enlaceQuitar:'Treure', 
						enlaceGrabar:'Gravar', 
						PH_camposDeBusqueda: 'Cercar...'
					};
					break;
				case 'pt':
					var titulos = {
						encabezadoDeDisponibles:'Opções disponíveis', 
						encabezadoDeSeleccionados:'Opções atribuídas', 
						enlaceAgregar:'Adicionar', 
						enlaceQuitar:'Remover', 
						enlaceGrabar:'Registro', 
						PH_camposDeBusqueda: 'Pesquisa...'
					};
					break;
				case 'fr':
					var titulos = {
						encabezadoDeDisponibles:'Options disponibles', 
						encabezadoDeSeleccionados:'Options attribuées', 
						enlaceAgregar:'Ajouter', 
						enlaceQuitar:'Supprimer', 
						enlaceGrabar:'Sauvegarder', 
						PH_camposDeBusqueda: 'Recherche...'
					};
					break;
			}; // Final de definición de idiomas

			/* Obtenemos el nombre del contenedor global en el que se van a incluir los selectores y 
			los botones, para poder referenciarlo en el código y aplicarle los distintos elementos. */
			var nombreDelContenedorGeneral = $(this).attr('id');
			/* Extendemos el nombre del contenedor general como objeto jQuery para poder emplearlo directamente en el resto del código. */
			var contenedorGeneral = $('#' + nombreDelContenedorGeneral);
			/* Le asignamos la clase CSS del contenedor general */
			contenedorGeneral.addClass(opciones.SOS_3_claseParaContenedorGeneral);

			/* Definimos los tres contenedores más globales que hay dentro del contenedor general del plugin:
			los dos de los lados son para encabezado y selector. El central es para botones. */
			var contenedorIzquierdo = "<div class='col-xs-5 " + opciones.SOS_3_claseParaContenedoresGlobales + "'>";
			contenedorIzquierdo += "</div>";
			var contenedorIzquierdoExtendido = $(contenedorIzquierdo);
			contenedorIzquierdoExtendido.appendTo(contenedorGeneral);

			var contenedorCentral = "<div class='col-xs-2 " + opciones.SOS_3_claseParaContenedoresGlobales + "'>";
			contenedorCentral += "</div>";
			var contenedorCentralExtendido = $(contenedorCentral);
			contenedorCentralExtendido.appendTo(contenedorGeneral);

			var contenedorDerecho = "<div class='col-xs-5 " + opciones.SOS_3_claseParaContenedoresGlobales + "'>";
			contenedorDerecho += "</div>";
			var contenedorDerechoExtendido = $(contenedorDerecho);
			contenedorDerechoExtendido.appendTo(contenedorGeneral);

			/* Se definen los contenedores de titulos */
			var contenedorDeRotuloDeDisponibles = "<div class='row " + opciones.SOS_3_claseParaContenedoresDeTitulo + "'>";
			contenedorDeRotuloDeDisponibles += titulos.encabezadoDeDisponibles + "</div>";
			contenedorDeRotuloDeDisponiblesExtendido = $(contenedorDeRotuloDeDisponibles);
			contenedorDeRotuloDeDisponiblesExtendido.appendTo(contenedorIzquierdoExtendido);

			var contenedorDeRotuloDeAsignados = "<div class='row " + opciones.SOS_3_claseParaContenedoresDeTitulo + "'>";
			contenedorDeRotuloDeAsignados += titulos.encabezadoDeSeleccionados + "</div>";
			contenedorDeRotuloDeAsignadosExtendido = $(contenedorDeRotuloDeAsignados);
			contenedorDeRotuloDeAsignadosExtendido.appendTo(contenedorDerechoExtendido);

			/* Se definen los contenedores de los campos de búsqueda */
			var contenedorDeBusquedaDeDisponibles = "<div class='row " + opciones.SOS_3_claseParaContenedoresDeBusqueda + "'></div>";
			contenedorDeBusquedaDeDisponiblesExtendido = $(contenedorDeBusquedaDeDisponibles);
			if (opciones.SOS_3_mostrarCamposDeBusqueda)
				contenedorDeBusquedaDeDisponiblesExtendido.appendTo(contenedorIzquierdoExtendido);

			var contenedorDeBusquedaDeAsignados = "<div class='row " + opciones.SOS_3_claseParaContenedoresDeBusqueda + "'></div>";
			contenedorDeBusquedaDeAsignadosExtendido = $(contenedorDeBusquedaDeAsignados);
			if (opciones.SOS_3_mostrarCamposDeBusqueda)
				contenedorDeBusquedaDeAsignadosExtendido.appendTo(contenedorDerechoExtendido);

			/* Se definen los contenedores de los selectores. */
			var contenedorDeSelectorDeDisponibles = "<div class='row " + opciones.SOS_3_claseParaContenedoresDeSelector + "'>";
			contenedorDeSelectorDeDisponibles += "</div>";
			contenedorDeSelectorDeDisponiblesExtendido = $(contenedorDeSelectorDeDisponibles);
			contenedorDeSelectorDeDisponiblesExtendido.appendTo(contenedorIzquierdoExtendido);

			var contenedorDeSelectorDeAsignados = "<div class='row " + opciones.SOS_3_claseParaContenedoresDeSelector + "'>";
			contenedorDeSelectorDeAsignados += "</div>";
			contenedorDeSelectorDeAsignadosExtendido = $(contenedorDeSelectorDeAsignados);
			contenedorDeSelectorDeAsignadosExtendido.appendTo(contenedorDerechoExtendido);

			/* Se define el contenedor de botones */
			var contenedorDeBotones = "<div class='row' style='padding-top:30px;'>";
			contenedorDeBotones += "<input type='button' id='" + opciones.SOS_3_nombreDelBotonDeAsignar + "' ";
			contenedorDeBotones += "class='btn btn-primary " + opciones.SOS_3_claseParaBotones + "' ";
			contenedorDeBotones += "value='" + titulos.enlaceAgregar + "'>";
			contenedorDeBotones += "<input type='button' id='" + opciones.SOS_3_nombreDelBotonDeQuitar + "' ";
			contenedorDeBotones += "class='btn btn-primary " + opciones.SOS_3_claseParaBotones + "' ";
			contenedorDeBotones += "value='" + titulos.enlaceQuitar + "'>";
			if (!opciones.SOS_3_grabacionAutomatica){
				contenedorDeBotones += "<input type='button' id='" + opciones.SOS_3_nombreDelBotonDeGrabar + "' ";
				contenedorDeBotones += "class='btn btn-primary " + opciones.SOS_3_claseParaBotones + "' ";
				contenedorDeBotones += "value='" + titulos.enlaceGrabar + "'>";
			}
			contenedorDeBotones += "</div>";
			var contenedorDeBotonesExtendido = $(contenedorDeBotones);
			contenedorDeBotonesExtendido.appendTo(contenedorCentralExtendido);

			/* Se definen los campos de texto para búsqueda que se colocarán sobre los selectores. */
			var idDeCampoDeBusquedaDeDisponibles = nombreDelContenedorGeneral + "_busquedaDeDisponibles";
			var campoDeBusquedaDeDisponibles = "<input type='text' id='" + idDeCampoDeBusquedaDeDisponibles + "' ";
			campoDeBusquedaDeDisponibles += "class='form-control " + opciones.SOS_3_claseParaCamposDeBusqueda + "' ";
			campoDeBusquedaDeDisponibles += "placeholder = '"+ titulos.PH_camposDeBusqueda +"'>";
			var campoDeBusquedaDeDisponiblesExtendido = $(campoDeBusquedaDeDisponibles);
			if (opciones.SOS_3_mostrarCamposDeBusqueda)
				campoDeBusquedaDeDisponiblesExtendido.appendTo(contenedorDeBusquedaDeDisponiblesExtendido);

			var idDeCampoDeBusquedaDeAsignados = nombreDelContenedorGeneral + "_busquedaDeAsignados";
			var campoDeBusquedaDeAsignados = "<input type='text' id='" + idDeCampoDeBusquedaDeAsignados + "' ";
			campoDeBusquedaDeAsignados += "class='form-control " + opciones.SOS_3_claseParaCamposDeBusqueda + "' ";
			campoDeBusquedaDeAsignados += "placeholder = '"+ titulos.PH_camposDeBusqueda +"'>";
			var campoDeBusquedaDeAsignadosExtendido = $(campoDeBusquedaDeAsignados);
			if (opciones.SOS_3_mostrarCamposDeBusqueda)
				campoDeBusquedaDeAsignadosExtendido.appendTo(contenedorDeBusquedaDeAsignadosExtendido);


			/* Se definen los selectores */
			var idDeSelectorDeDisponibles = nombreDelContenedorGeneral + "_selectorDisponibles";
			var selectorDeDisponibles = "<select id='" + idDeSelectorDeDisponibles + "' multiple ";
			selectorDeDisponibles += "class='form-control " + opciones.SOS_3_claseParaSelectores + "'></select>";
			var selectorDeDisponiblesExtendido = $(selectorDeDisponibles);
			selectorDeDisponiblesExtendido.appendTo(contenedorDeSelectorDeDisponiblesExtendido);

			var idDeSelectorDeAsignados = nombreDelContenedorGeneral + "_selectorAsignados";
			var selectorDeAsignados = "<select id='" + idDeSelectorDeAsignados + "' multiple ";
			selectorDeAsignados += "class='form-control " + opciones.SOS_3_claseParaSelectores + "'></select>";
			var selectorDeAsignadosExtendido = $(selectorDeAsignados);
			selectorDeAsignadosExtendido.appendTo(contenedorDeSelectorDeAsignadosExtendido);

			/* Se obtiene la matriz de elementos mediante PHP. Esto se 
			encapsula en una función para poder invocarlo en donde se 
			necesite. */
			var matrizDeOpciones = Array();
			$.fn.obtenerMatrizDeOpciones = function(){
				$.ajax({
					url:opciones.SOS_3_scriptDeLecturaDeDatos,
					data :{},
					type:'POST',
					dataType:'json',
					async:false, 
					success:function(resultado) {
						matrizDeOpciones = resultado;
					}
				});
				for (elemento in matrizDeOpciones) matrizDeOpciones[elemento]["SOS_3_index"] = elemento;
			};

			/* Definimos la funcionalidad que crea las opciones de los selectores 
			y las ubica en el que le corresponda a cada una. */
			$.fn.construirSelectores = function(){
				$("#" + idDeSelectorDeDisponibles + " option").each(function() {$(this).remove();});
				$("#" + idDeSelectorDeAsignados + " option").each(function() {$(this).remove();});
				$('#' + opciones.SOS_3_nombreDelBotonDeAsignar).prop('disabled', true);
				$('#' + opciones.SOS_3_nombreDelBotonDeQuitar).prop('disabled', true);
				for (elemento in matrizDeOpciones){
					var contenido_de_opcion = "<option value='" + matrizDeOpciones[elemento][opciones.SOS_3_campoDeValorDeOpcion] + "'";
					if (matrizDeOpciones[elemento][opciones.SOS_3_campoDeOpcionHabilitada] == opciones.SOS_3_claveParaOpcionDeshabilitada) contenido_de_opcion += " disabled";
					contenido_de_opcion += ">" + matrizDeOpciones[elemento][opciones.SOS_3_campoDeTextoDeOpcion] + "</option>";
					var opcion = $(contenido_de_opcion);
					if (matrizDeOpciones[elemento][opciones.SOS_3_campoDeOpcionSeleccionada] == opciones.SOS_3_claveParaOpcionSeleccionada){
						$(opcion).appendTo(selectorDeAsignadosExtendido);
					} else {
						$(opcion).appendTo(selectorDeDisponiblesExtendido);
					}
				}
			};

			/* Invocamos las funciones necesarias. */
			$(this).obtenerMatrizDeOpciones();
			$(this).construirSelectores();

			/* Cuando se clica una opción de un select se comprueba si se deben bloquear o desbloquear los botones. 
			Además, si se clica una opción de un selector, se desmarcan todas las que pudieran estar clicadas del otro. 
			Si los dos selectores quedan sin opciones marcadas, los dos botones de movimientos se desactivan. */
			$('#' + idDeSelectorDeDisponibles + ', #' + idDeSelectorDeAsignados).on('change', function(){
				var control = $(this).prop('id');
				var opsActivasEnClicado = false;
				$('#' + control + " option").each(function(){
					if ($(this)[0]['selected']) opsActivasEnClicado = true;
				});
				var controlOpuesto = (control == idDeSelectorDeDisponibles)?idDeSelectorDeAsignados:idDeSelectorDeDisponibles;
				var botonParaActivar = (control == idDeSelectorDeDisponibles)?opciones.SOS_3_nombreDelBotonDeAsignar:opciones.SOS_3_nombreDelBotonDeQuitar;
				var botonParaDesactivar = (control == idDeSelectorDeDisponibles)?opciones.SOS_3_nombreDelBotonDeQuitar:opciones.SOS_3_nombreDelBotonDeAsignar;
				if (opsActivasEnClicado){
					$('#' + controlOpuesto + " option").each(function() {$(this).prop('selected', false);});
					$('#' + botonParaActivar).prop("disabled", false);
					$('#' + botonParaDesactivar).prop("disabled", true);
				} else {
					$('#' + botonParaActivar).prop("disabled", true);
					$('#' + botonParaDesactivar).prop("disabled", true);
				}
			});

			/* Cuando se teclea "algo" en el campo de búsqueda de disponibles se 
			seleccionan los datos que coinciden con el criterio de búsqueda. */
			$("#" + idDeCampoDeBusquedaDeDisponibles + ", #" + idDeCampoDeBusquedaDeAsignados).on('change keyup', function(){
				if ($(this).prop('id') == idDeCampoDeBusquedaDeDisponibles){
					var idDeSelector = idDeSelectorDeDisponibles;
					var campoDeBusqueda = campoDeBusquedaDeDisponiblesExtendido;
					var selectorElegido = "D";
				} else {
					var idDeSelector = idDeSelectorDeAsignados;
					var campoDeBusqueda = campoDeBusquedaDeAsignadosExtendido;
					var selectorElegido = "A";
				}
				if (!opciones.SOS_3_busquedasEnTiempoReal){ // Si las búsquedas se hacen sobre los datos ya cargados, en lugar de actualizar desde fuente.
					$('#' + idDeSelector +' option').each(function(){
						if($(this).prop('text').indexOf(campoDeBusqueda.prop('value')) > -1){
							$(this).css('display', 'block');
						} else {
							$(this).css('display', 'none');
						}
					});
				} else { // Las búsquedas se hacen sobre una recarga de datos.
					matrizDeOpciones.length = 0;
					$.ajax({
						url:opciones.SOS_3_scriptDeLecturaDeDatos,
						data :{
							'ignora_acentos': (opciones.SOS_3_ignorarAcentuadas)?'S':'N', 
							'capitalizacion': (opciones.SOS_3_distinguirCapitalizacion)?'S':'N', 
							'selector': selectorElegido,
							'busqueda': campoDeBusqueda.prop('value')
						},
						type:'POST',
						dataType:'json',
						async:false, 
						success:function(resultado) {
							matrizDeOpciones = resultado;
						}
					});
					for (elemento in matrizDeOpciones) matrizDeOpciones[elemento]["SOS_3_index"] = elemento;
					objetoPrincipal.construirSelectores();
				}
			});

			/* Cuando se pulsa un boton se cambia la opción de las opciones seleccionadas y se reconstruyen los select. 
			Si está habilitada la opción de grabación automática, se llama a la función que hace la grabación. */
			$('#' + opciones.SOS_3_nombreDelBotonDeAsignar + ', #' + opciones.SOS_3_nombreDelBotonDeQuitar).on('click', function(e){
				e.preventDefault();
				var botonPulsado = $(this).prop('id');
				var selectorAfectado = (botonPulsado == opciones.SOS_3_nombreDelBotonDeAsignar)?idDeSelectorDeDisponibles:idDeSelectorDeAsignados;
				$("#" + selectorAfectado + " option:selected").each(function(){
					for(elemento in matrizDeOpciones){
						if (matrizDeOpciones[elemento][opciones.SOS_3_campoDeValorDeOpcion] == $(this).attr('value')){
							matrizDeOpciones[elemento][opciones.SOS_3_campoDeOpcionSeleccionada] = (matrizDeOpciones[elemento][opciones.SOS_3_campoDeOpcionSeleccionada] == opciones.SOS_3_claveParaOpcionSeleccionada)?opciones.SOS_3_claveParaOpcionDeseleccionada:opciones.SOS_3_claveParaOpcionSeleccionada;
						}
					}
				});
				if (opciones.SOS_3_grabacionAutomatica) objetoPrincipal.grabarEstadoDeOpciones();
				$(this).construirSelectores();
			});

			/* Cuando se pulsa el botón de grabar los cambios. */
			$('#' + opciones.SOS_3_nombreDelBotonDeGrabar).on('click', function(e){
				e.preventDefault();
				objetoPrincipal.grabarEstadoDeOpciones();
			});
			$.fn.grabarEstadoDeOpciones = function(){
				$.post(
					opciones.SOS_3_scriptDeGrabacionDeDatos,
					{
						'items_array':matrizDeOpciones
					},
					function(){
					}
				);
			};

		});
		return this;
	};
})(jQuery);
