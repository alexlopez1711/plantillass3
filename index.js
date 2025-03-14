// Servipag
function generarPlantillaServipag() {
    const datos = document.getElementById('datosServipag').value;
    const lineas = datos.split('\n');

    if (lineas.length < 5) {
        return;
    }

    const nombreCliente = lineas[0];
    let rut = lineas[1].trim();
    const fechaPago = lineas[2].trim();
    let montos = lineas[3].trim().split(' ');
    const numeroOperacion = lineas[4].trim();

    rut = rut.slice(0, -1) + '-' + rut.slice(-1);
    montos = montos
        .map(monto => parseInt(monto))
        .filter(monto => !isNaN(monto))
        .map(monto => monto.toLocaleString('es-CL'))
        .join(', ');

    let plantilla = `Estimado (a) cliente,  <b>${nombreCliente}</b> / RUT : <b>${rut}</b><br><br>Junto con saludar, en respuesta a su requerimiento por una transferencia que no llego a destino, le informamos que esta fue abonada correctamente con número de operación <b>${numeroOperacion}</b> por un monto de $<b>${montos}</b> con fecha <b>${fechaPago}</b> y fue recibida de forma correcta en cuenta corriente N°<b>100013576</b> de BANCO ESTADO de cliente Rut <b>78053790-6</b> a nombre de <b>SERVIPAG</b>.<br><br><br>Para regularización o solicitud de la devolución debe contactar con el titular receptor de los fondos.    <br><br>Para más información comuníquese a la línea de atención 6002007000.    <br><br>Por la resolución entregada, se procede al cierre de su requerimiento.`;

    document.getElementById('plantillaGenerada').innerHTML = plantilla;
}

// Fintoc
function generarPlantillaFintoc() {
    const datos = document.getElementById('datosFintoc').value;
    const lineas = datos.split('\n');

    if (lineas.length < 5) {
        return;
    }

    const nombreCliente = lineas[0];
    let rut = lineas[1].trim();
    const fechaPago = lineas[2].trim();
    let montos = lineas[3].trim().split(' ');
    const numeroOperacion = lineas[4].trim();

    rut = rut.slice(0, -1) + '-' + rut.slice(-1);
    montos = montos
        .map(monto => parseInt(monto))
        .filter(monto => !isNaN(monto))
        .map(monto => monto.toLocaleString('es-CL'))
        .join(', ');

    let plantilla = `Estimado (a) cliente,  <b>${nombreCliente}</b> / RUT : <b>${rut}</b><br><br>Junto con saludar, en respuesta a su requerimiento por una transferencia que no llego a destino, le informamos que esta fue abonada correctamente con número de operación <b>${numeroOperacion}</b> por un monto de $<b>${montos}</b> con fecha <b>${fechaPago}</b> y fue recibida de forma correcta en cuenta corriente N°<b>34700038744</b> de BANCO ESTADO de cliente Rut <b>77143385-5</b> a nombre de <b>FINTOC</b>.<br><br><br>Para regularización o solicitud de la devolución debe contactar con el titular receptor de los fondos.    <br><br>Para más información comuníquese a la línea de atención 6002007000.    <br><br>Por la resolución entregada, se procede al cierre de su requerimiento.`;

    document.getElementById('plantillaGenerada').innerHTML = plantilla;
}

function generarPlantillaTransferencias() {
    const datos = document.getElementById('datosTransferencias').value;
    const lineas = datos.split('\n');

    if (lineas.length < 10) {
        return;
    }

    const cliente = lineas[0];
    const numeroOperacion = lineas[1].trim();
    const fecha = lineas[2].trim();
    let montos = lineas[3].trim().split(' ');
    const rutOrigen = lineas[4].trim();
    const rutDestino = lineas[5].trim();
    const numeroCuentaDestino = lineas[6].trim();
    const banco = lineas[7].trim();
    const aNombreDe = lineas[8].trim();
    const cuenta = lineas[9].trim();

    const rutOrigenFormateado = rutOrigen.slice(0, -1) + '-' + rutOrigen.slice(-1);
    const rutDestinoFormateado = rutDestino.slice(0, -1) + '-' + rutDestino.slice(-1);
    montos = montos
        .map(monto => parseInt(monto))
        .filter(monto => !isNaN(monto))
        .map(monto => monto.toLocaleString('es-CL'))
        .join(', ');

    let plantilla = `Estimado (a) cliente,  <b>${cliente}</b> / RUT : <b>${rutOrigenFormateado}</b><br><br>Junto con saludar, en respuesta a su requerimiento por una transferencia que no llego a destino, le informamos que esta fue abonada correctamente con número de operación <b>${numeroOperacion}</b> por un monto de $<b>${montos}</b> con fecha <b>${fecha}</b> y fue recibida de forma correcta en cuenta <b>${cuenta}</b> N°<b>${numeroCuentaDestino}</b> de BANCO <b>${banco}</b> de cliente Rut <b>${rutDestinoFormateado}</b> a nombre de <b>${aNombreDe}</b>.<br><br><br>Para regularización o solicitud de la devolución debe contactar con el titular receptor de los fondos.    <br><br>Para más información comuníquese a la línea de atención 6002007000.    <br><br>Por la resolución entregada, se procede al cierre de su requerimiento.`;

    document.getElementById('plantillaGenerada').innerHTML = plantilla;
}

function generarPlantillaWebpay() {
    const datos = document.getElementById('datosWebpay').value;
    const lineas = datos.split('\n');

    if (lineas.length < 5) {
        return;
    }

    const nombreCliente = lineas[0];
    let rut = lineas[1].trim();
    const fechaPago = lineas[2].trim();
    let monto = lineas[3].trim();
    const codigoAutorizacion = lineas[4].trim();

    rut = rut.slice(0, -1) + '-' + rut.slice(-1);
    monto = parseInt(monto).toLocaleString('es-CL');

    let plantilla = `Estimado(a) <b>${nombreCliente}</b>,<br><br>Junto con saludar, en respuesta a su requerimiento referente a un pago cargado y no aplicado en el comercio, por el monto de $<b>${monto}</b>, se confirma que la transacción hacia la empresa recaudadora, con código de autorización N°<b>${codigoAutorizacion}</b>, se encuentra realizada en forma exitosa y aplicada al comercio con fecha <b>${fechaPago}</b>. Detalle a continuación:<br><br>La regularización y confirmación de la recepción del pago, debe ser solicitado con la empresa recaudadora.<br><br>Ante cualquier otra duda o consulta, puede comunicarse a la línea de atención 600 200 7000.<br><br>Por la resolución entregada, se procede al cierre de su requerimiento.`;

    document.getElementById('plantillaGenerada').innerHTML = plantilla;
}
// Copiar Plantilla
function copiarPlantilla() {
    const plantilla = document.getElementById('plantillaGenerada').innerHTML;

    // Crear un elemento temporal invisible
    const tempElement = document.createElement('div');
    tempElement.innerHTML = plantilla;
    tempElement.style.position = 'absolute';
    tempElement.style.left = '-9999px';
    document.body.appendChild(tempElement);

    // Seleccionar el elemento temporal
    const selection = window.getSelection();
    selection.removeAllRanges();
    const range = document.createRange();
    range.selectNode(tempElement);
    selection.addRange(range);

    // Ejecutar el comando de copia
    document.execCommand('copy');

    // Eliminar el elemento temporal
    document.body.removeChild(tempElement);
}

// Mostrar Plantillas
function mostrarPlantillaServipag() {
    document.getElementById('formularioServipag').style.display = "block";
    document.getElementById('formularioFintoc').style.display = "none";
    document.getElementById('formularioTransferencias').style.display = "none";
    document.getElementById('formularioWebpay').style.display = "none";
}

function mostrarPlantillaFintoc() {
    document.getElementById('formularioServipag').style.display = "none";
    document.getElementById('formularioFintoc').style.display = "block";
    document.getElementById('formularioTransferencias').style.display = "none";
    document.getElementById('formularioWebpay').style.display = "none";
}

function mostrarPlantillaTransferencias() {
    document.getElementById('formularioServipag').style.display = "none";
    document.getElementById('formularioFintoc').style.display = "none";
    document.getElementById('formularioTransferencias').style.display = "block";
    document.getElementById('formularioWebpay').style.display = "none";
}

function mostrarPlantillaWebpay() {
    document.getElementById('formularioServipag').style.display = "none";
    document.getElementById('formularioFintoc').style.display = "none";
    document.getElementById('formularioTransferencias').style.display = "none";
    document.getElementById('formularioWebpay').style.display = "block";
}