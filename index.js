function generarPlantillaServipag() {
    const datos = document.getElementById('datosServipag').value;
    const lineas = datos.split('\n');

    if (lineas.length < 5) {
        return;
    }

    const nombreCliente = lineas[0];
    let rut = lineas[1].trim();
    const fechaPago = lineas[2].trim();
    let montos = lineas[3].trim(); // Ahora obtenemos los montos como una cadena
    const numeroOperacion = lineas[4].trim();

    rut = rut.slice(0, -1) + '-' + rut.slice(-1);

    let plantilla = `Estimado (a) cliente, <b>${nombreCliente}</b> / RUT : <b>${rut}</b><br><br>Junto con saludar, en respuesta a su requerimiento por una transferencia que no llego a destino, le informamos que esta fue abonada correctamente con número de operación <b>${numeroOperacion}</b> por un monto de $<b>${montos}</b> con fecha <b>${fechaPago}</b> y fue recibida de forma correcta en cuenta corriente N°<b>100013576</b> de BANCO ESTADO de cliente Rut <b>78053790-6</b> a nombre de <b>SERVIPAG</b>.<br><br><br><br><b>Para regularización o solicitud de la devolución debe contactar con el titular receptor de los fondos.</b> <br><br>Para más información comuníquese a la línea de atención 6002007000. <br><br>Por la resolución entregada, se procede al cierre de su requerimiento.`;

    document.getElementById('plantillaGenerada').innerHTML = plantilla;
}

function generarPlantillaServipags() {
    const datos = document.getElementById('datosServipag').value;
    const lineas = datos.split('\n');

    if (lineas.length < 5) {
        return;
    }

    const nombreCliente = lineas[0];
    let rut = lineas[1].trim();
    const fechaPago = lineas[2].trim();
    let montos = lineas[3].trim(); // Ahora obtenemos los montos como una cadena
    const numeroOperacion = lineas[4].trim();

    rut = rut.slice(0, -1) + '-' + rut.slice(-1);

    let plantilla = `Estimado (a) cliente, <b>${nombreCliente}</b> / RUT : <b>${rut}</b><br><br>Junto con saludar, en respuesta a su requerimiento por unas transferencias que no llegaron a destino, le informamos que estas fueron abonadas correctamente con números de operación <b>${numeroOperacion}</b> por montos de $<b>${montos}</b> con fecha <b>${fechaPago}</b> y fue recibida de forma correcta en cuenta corriente N°<b>100013576</b> de BANCO ESTADO de cliente Rut <b>78053790-6</b> a nombre de <b>SERVIPAG</b>.<br><br><br><br><b>Para regularización o solicitud de la devolución debe contactar con el titular receptor de los fondos.</b> <br><br>Para más información comuníquese a la línea de atención 6002007000. <br><br>Por la resolución entregada, se procede al cierre de su requerimiento.`;

    document.getElementById('plantillaGenerada').innerHTML = plantilla;
}


function generarPlantillaFintoc() {
    const datos = document.getElementById('datosFintoc').value;
    const lineas = datos.split('\n');

    if (lineas.length < 5) {
        return;
    }

    const nombreCliente = lineas[0];
    let rut = lineas[1].trim();
    const fechaPago = lineas[2].trim();
    let montos = lineas[3].trim(); // Obtener montos como cadena
    const numeroOperacion = lineas[4].trim();

    rut = rut.slice(0, -1) + '-' + rut.slice(-1);

    let plantilla = `Estimado (a) cliente, <b>${nombreCliente}</b> / RUT : <b>${rut}</b><br><br>Junto con saludar, en respuesta a su requerimiento por una transferencia que no llego a destino, le informamos que esta fue abonada correctamente con número de operación <b>${numeroOperacion}</b> por un monto de $<b>${montos}</b> con fecha <b>${fechaPago}</b> y fue recibida de forma correcta en cuenta corriente N°<b>34700038744</b> de BANCO ESTADO de cliente Rut <b>77143385-5</b> a nombre de <b>FINTOC</b>.<br><br><br><br><b>Para regularización o solicitud de la devolución debe contactar con el titular receptor de los fondos.</b> <br><br>Para más información comuníquese a la línea de atención 6002007000. <br><br>Por la resolución entregada, se procede al cierre de su requerimiento.`;

    document.getElementById('plantillaGenerada').innerHTML = plantilla;
}

function generarPlantillaFintocs() {
    const datos = document.getElementById('datosFintoc').value;
    const lineas = datos.split('\n');

    if (lineas.length < 5) {
        return;
    }

    const nombreCliente = lineas[0];
    let rut = lineas[1].trim();
    const fechaPago = lineas[2].trim();
    let montos = lineas[3].trim(); // Obtener montos como cadena
    const numeroOperacion = lineas[4].trim();

    rut = rut.slice(0, -1) + '-' + rut.slice(-1);

    let plantilla = `Estimado (a) cliente, <b>${nombreCliente}</b> / RUT : <b>${rut}</b><br><br>Junto con saludar, en respuesta a su requerimiento por unas transferencias que no llegaron a destino, le informamos que estas fueron abonadas correctamente con números de operación <b>${numeroOperacion}</b> por montos de $<b>${montos}</b> con fecha <b>${fechaPago}</b> y fue recibida de forma correcta en cuenta corriente N°<b>34700038744</b> de BANCO ESTADO de cliente Rut <b>77143385-5</b> a nombre de <b>FINTOC</b>.<br><br><br><br><b>Para regularización o solicitud de la devolución debe contactar con el titular receptor de los fondos.</b> <br><br>Para más información comuníquese a la línea de atención 6002007000. <br><br>Por la resolución entregada, se procede al cierre de su requerimiento.`;

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
    let montos = lineas[3].trim(); // Obtener montos como cadena
    const rutOrigen = lineas[4].trim();
    const rutDestino = lineas[5].trim();
    const numeroCuentaDestino = lineas[6].trim();
    const banco = lineas[7].trim();
    const aNombreDe = lineas[8].trim();
    const cuenta = lineas[9].trim();

    const rutOrigenFormateado = rutOrigen.slice(0, -1) + '-' + rutOrigen.slice(-1);
    const rutDestinoFormateado = rutDestino.slice(0, -1) + '-' + rutDestino.slice(-1);

    let plantilla = `Estimado (a) cliente, <b>${cliente}</b> / RUT : <b>${rutOrigenFormateado}</b><br><br>Junto con saludar, en respuesta a su requerimiento por una transferencia que no llego a destino, le informamos que esta fue abonada correctamente con número de operación <b>${numeroOperacion}</b> por un monto de $<b>${montos}</b> con fecha <b>${fecha}</b> y fue recibida de forma correcta en cuenta <b>${cuenta}</b> N°<b>${numeroCuentaDestino}</b> de BANCO <b>${banco}</b> de cliente Rut <b>${rutDestinoFormateado}</b> a nombre de <b>${aNombreDe}</b>.<br><br><br><br><b>Para regularización o solicitud de la devolución debe contactar con el titular receptor de los fondos.</b> <br><br>Para más información comuníquese a la línea de atención 6002007000. <br><br>Por la resolución entregada, se procede al cierre de su requerimiento.`;

    document.getElementById('plantillaGenerada').innerHTML = plantilla;
}

function generarPlantillaTransferenciass() {
    const datos = document.getElementById('datosTransferencias').value;
    const lineas = datos.split('\n');

    if (lineas.length < 10) {
        return;
    }

    const cliente = lineas[0];
    const numeroOperacion = lineas[1].trim();
    const fecha = lineas[2].trim();
    let montos = lineas[3].trim(); // Obtener montos como cadena
    const rutOrigen = lineas[4].trim();
    const rutDestino = lineas[5].trim();
    const numeroCuentaDestino = lineas[6].trim();
    const banco = lineas[7].trim();
    const aNombreDe = lineas[8].trim();
    const cuenta = lineas[9].trim();

    const rutOrigenFormateado = rutOrigen.slice(0, -1) + '-' + rutOrigen.slice(-1);
    const rutDestinoFormateado = rutDestino.slice(0, -1) + '-' + rutDestino.slice(-1);

    let plantilla = `Estimado (a) cliente, <b>${cliente}</b> / RUT : <b>${rutOrigenFormateado}</b><br><br>Junto con saludar, en respuesta a su requerimiento por unas transferencias que no llegaron a destino, le informamos que estas fueron abonadas correctamente con números de operación <b>${numeroOperacion}</b> por montos de $<b>${montos}</b> con fecha <b>${fecha}</b> y fueron recibidas de forma correcta en cuenta <b>${cuenta}</b> N°<b>${numeroCuentaDestino}</b> de BANCO <b>${banco}</b> de cliente Rut <b>${rutDestinoFormateado}</b> a nombre de <b>${aNombreDe}</b>.<br><br><br><br><b>Para regularización o solicitud de la devolución debe contactar con el titular receptor de los fondos.</b> <br><br>Para más información comuníquese a la línea de atención 6002007000. <br><br>Por la resolución entregada, se procede al cierre de su requerimiento.`;

    document.getElementById('plantillaGenerada').innerHTML = plantilla;
}

function generarPlantillaWebpay() {
    const datos = document.getElementById('datosWebpay').value;
    const lineas = datos.split('\n');

    if (lineas.length < 6) {
        return;
    }

    const nombreCliente = lineas[0];
    let rut = lineas[1].trim();
    const fechaPago = lineas[2].trim();
    let monto = lineas[3].trim();
    const nombreEmpresa = lineas[4] ? lineas[4].trim() : ''; // Obtener nombre de empresa (opcional)
    let codigo = lineas[5].trim();

    rut = rut.slice(0, -1) + '-' + rut.slice(-1);

    let plantilla = `Estimado(a) <b>${nombreCliente} / RUT : ${rut}</b>,<br><br>Junto con saludar, en respuesta a su requerimiento referente a un pago cargado y no aplicado en el comercio, por el monto de $<b>${monto}</b>, se confirma que la transacción a la empresa recaudadora ${nombreEmpresa ? `<b>${nombreEmpresa}</b>` : ''} , con código de autorización <b>N°${codigo}</b>,se ha hecho exitosamente en fecha <b>${fechaPago}</b>. Los detalles a continuación:<br><br><br><br><b>La regularización y confirmación de la recepción del pago, debe ser solicitado con la empresa recaudadora.</b><br><br>Ante cualquier otra duda o consulta, puede comunicarse a la línea de atención 600 200 7000.<br><br>Por la resolución entregada, se procede al cierre de su requerimiento.`;

    document.getElementById('plantillaGenerada').innerHTML = plantilla;
}

function generarPlantillaWebpays() {
    const datos = document.getElementById('datosWebpay').value;
    const lineas = datos.split('\n');

    if (lineas.length < 6) {
        return;
    }

    const nombreCliente = lineas[0];
    let rut = lineas[1].trim();
    const fechaPago = lineas[2].trim();
    let monto = lineas[3].trim();
    const nombreEmpresa = lineas[4] ? lineas[4].trim() : ''; // Obtener nombre de empresa (opcional)
    let codigo = lineas[5].trim();

    rut = rut.slice(0, -1) + '-' + rut.slice(-1);

    let plantilla = `Estimado(a) <b>${nombreCliente} / RUT : ${rut}</b>,<br><br>Junto con saludar, en respuesta a su requerimiento referente a unos pagos cargados y no aplicados en el comercio, por los montos de $<b>${monto}</b>, se confirma que las transacciones a la empresa recaudadora ${nombreEmpresa ? `<b>${nombreEmpresa}</b>` : ''}, con códigos de autorización <b>N°${codigo}</b>, se han hecho exitosamente en fecha <b>${fechaPago}</b>. Los detalles a continuación:<br><br><br><br><b>La regularización y confirmación de la recepción de los pagos, debe ser solicitado con la empresa recaudadora.</b><br><br>Ante cualquier otra duda o consulta, puede comunicarse a la línea de atención 600 200 7000.<br><br>Por la resolución entregada, se procede al cierre de su requerimiento.`;

    document.getElementById('plantillaGenerada').innerHTML = plantilla;
}
function generarPlantillaLog() {
    const datos = document.getElementById('datosLog').value;
    const lineas = datos.split('\n');

    if (lineas.length < 6) {
        return;
    }

    const nombreCliente = lineas[0];
    let rut = lineas[1].trim();
    const fecha = lineas[2].trim();
    let monto = lineas[3].trim();
    const nombreEmpresa = lineas[4].trim();
    const idServicio = lineas[5].trim();
    

    rut = rut.slice(0, -1) + '-' + rut.slice(-1);

    let plantilla = `Estimado(a) cliente: <b>${nombreCliente}</b> / RUT : <b>${rut}</b><br><br>Junto con saludar, en respuesta a su requerimiento referente a un pago que no llego a destino, por un monto de $<b>${monto}</b>, se confirma que la transacción hacia la empresa recaudadora <b>${nombreEmpresa}</b>, con ID de servicio  N° <b>${idServicio}</b>, se encuentra realizada en forma exitosa y aplicado al comercio en fecha <b>${fecha}</b>. Se detalla información a continuación:<br><br><br><br><b>Para la regularización y confirmación de la recepción del pago, deberá solicitarlo a la empresa recaudadora.</b><br><br>Para más información comuníquese a la línea de atención 6002007000. <br><br>Por la resolución entregada, se procede al cierre de su requerimiento.`;

    document.getElementById('plantillaGenerada').innerHTML = plantilla;
}

function generarPlantillaLogs() {
    const datos = document.getElementById('datosLog').value;
    const lineas = datos.split('\n');

    if (lineas.length < 6) {
        return;
    }

    const nombreCliente = lineas[0];
    let rut = lineas[1].trim();
    const fecha = lineas[2].trim();
    let monto = lineas[3].trim();
    const nombreEmpresa = lineas[4].trim();
    const idServicio = lineas[5].trim();
    

    rut = rut.slice(0, -1) + '-' + rut.slice(-1);

    let plantilla = `Estimado(a) cliente: <b>${nombreCliente}</b> / RUT : <b>${rut}</b><br><br>Junto con saludar, en respuesta a su requerimiento referente a unos pagos que no llegaron a destino, por montos de $<b>${monto}</b>, se confirma que las transacciones hacia la empresa recaudadora <b>${nombreEmpresa}</b>, con ID de servicio  N° <b>${idServicio}</b>, se encuentran realizadas en forma exitosa y aplicado al comercio en fecha <b>${fecha}</b>. Se detalla información a continuación:<br><br><br><br><b>Para la regularización y confirmación de la recepción de los pagos, deberá solicitarlo a la empresa recaudadora.</b><br><br>Para más información comuníquese a la línea de atención 6002007000. <br><br>Por la resolución entregada, se procede al cierre de su requerimiento.`;

    document.getElementById('plantillaGenerada').innerHTML = plantilla;
}

function generarPlantillaCompraAqui() {
    const datos = document.getElementById('datosCompraAqui').value;
    const lineas = datos.split('\n');

    if (lineas.length < 5) {
        return;
    }

    const nombreCliente = lineas[0];
    let rut = lineas[1].trim();
    const fecha = lineas[2].trim();
    let monto = lineas[3].trim();
    const nombreEmpresa = lineas[4].trim();

    rut = rut.slice(0, -1) + '-' + rut.slice(-1);

    let plantilla = `Estimado(a) cliente <b>${nombreCliente}</b> / RUT : <b>${rut}</b><br><br>Junto con saludar, en respuesta a su requerimiento referente a un pago <b>COMPRAQUÍ</b> que no llego a destino, cuyo monto es de $<b>${monto}</b>, se confirma que la transacción a la empresa recaudadora <b>${nombreEmpresa}</b> se ha hecho exitosamente en fecha <b>${fecha}</b>. Los detalles a continuación:<br><br>Para la regularización y confirmación de la recepción del pago, deberá solicitarlo a la empresa recaudadora.<br><br>Para más información comuníquese a la línea de atención 6002007000.<br><br>Por la resolución entregada, se procede al cierre de su requerimiento.`;

    document.getElementById('plantillaGenerada').innerHTML = plantilla;
}

function generarPlantillaCompraAquis() {
    const datos = document.getElementById('datosCompraAqui').value;
    const lineas = datos.split('\n');

    if (lineas.length < 5) {
        return;
    }

    const nombreCliente = lineas[0];
    let rut = lineas[1].trim();
    const fecha = lineas[2].trim();
    let monto = lineas[3].trim();
    const nombreEmpresa = lineas[4].trim();

    rut = rut.slice(0, -1) + '-' + rut.slice(-1);

    let plantilla = `Estimado(a) cliente <b>${nombreCliente}</b> / RUT : <b>${rut}</b><br><br>Junto con saludar, en respuesta a su requerimiento referente a unos pagos <b>COMPRAQUÍ</b> que no llegaron a destino, cuyos montos son de $<b>${monto}</b>, se confirma que las transacciones a la empresa recaudadora <b>${nombreEmpresa}</b> se han hecho exitosamente en fecha <b>${fecha}</b>. Los detalles a continuación:<br><br>Para la regularización y confirmación de la recepción de los pagos, deberá solicitarlo a la empresa recaudadora.<br><br>Para más información comuníquese a la línea de atención 6002007000.<br><br>Por la resolución entregada, se procede al cierre de su requerimiento.`;

    document.getElementById('plantillaGenerada').innerHTML = plantilla;
}


function copiarPlantilla() {
    const plantilla = document.getElementById('plantillaGenerada').innerHTML;
 
    const tempElement = document.createElement('div');
    tempElement.innerHTML = plantilla;
    tempElement.style.position = 'absolute';
    tempElement.style.left = '-9999px';
    document.body.appendChild(tempElement);

    const selection = window.getSelection();
    selection.removeAllRanges();
    const range = document.createRange();
    range.selectNode(tempElement);
    selection.addRange(range);

    document.execCommand('copy');

    document.body.removeChild(tempElement);
}

function mostrarPlantillaServipag() {
    document.getElementById('formularioServipag').style.display = "block";
    document.getElementById('formularioFintoc').style.display = "none";
    document.getElementById('formularioTransferencias').style.display = "none";
    document.getElementById('formularioWebpay').style.display = "none";
    document.getElementById('formularioLog').style.display = "none";
    document.getElementById('formularioCompraAqui').style.display = "none";
}

function mostrarPlantillaFintoc() {
    document.getElementById('formularioServipag').style.display = "none";
    document.getElementById('formularioFintoc').style.display = "block";
    document.getElementById('formularioTransferencias').style.display = "none";
    document.getElementById('formularioWebpay').style.display = "none";
    document.getElementById('formularioLog').style.display = "none";
    document.getElementById('formularioCompraAqui').style.display = "none";
}

function mostrarPlantillaTransferencias() {
    document.getElementById('formularioServipag').style.display = "none";
    document.getElementById('formularioFintoc').style.display = "none";
    document.getElementById('formularioTransferencias').style.display = "block";
    document.getElementById('formularioWebpay').style.display = "none";
    document.getElementById('formularioLog').style.display = "none";
    document.getElementById('formularioCompraAqui').style.display = "none";
}

function mostrarPlantillaWebpay() {
    document.getElementById('formularioServipag').style.display = "none";
    document.getElementById('formularioFintoc').style.display = "none";
    document.getElementById('formularioTransferencias').style.display = "none";
    document.getElementById('formularioWebpay').style.display = "block";
    document.getElementById('formularioLog').style.display = "none";
    document.getElementById('formularioCompraAqui').style.display = "none";
}
function mostrarPlantillaLog() {
    document.getElementById('formularioServipag').style.display = "none";
    document.getElementById('formularioFintoc').style.display = "none";
    document.getElementById('formularioTransferencias').style.display = "none";
    document.getElementById('formularioWebpay').style.display = "none";
    document.getElementById('formularioLog').style.display = "block";
    document.getElementById('formularioCompraAqui').style.display = "none";
}
function mostrarPlantillaCompraAqui() {
    document.getElementById('formularioServipag').style.display = "none";
    document.getElementById('formularioFintoc').style.display = "none";
    document.getElementById('formularioTransferencias').style.display = "none";
    document.getElementById('formularioWebpay').style.display = "none";
    document.getElementById('formularioLog').style.display = "none";
    document.getElementById('formularioCompraAqui').style.display = "block";
}