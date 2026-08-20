function calcularPlan() {
    const vol = parseInt(document.getElementById('volumen').value);
    const neg = parseInt(document.getElementById('tipoNegocio').value);
    document.getElementById('precioFinal').innerText = `$${(vol + neg) * 12}.00 USD`;
}

function abrirWhatsApp() { 
    window.open("https://wa.me/593982648051?text=Hola, solicito una demo del sistema SYSFAC", '_blank'); 
}

function cotizarWhatsApp() { 
    window.open("https://wa.me/593982648051?text=Hola, deseo solicitar una cotización del sistema SYSFAC", '_blank'); 
}

function mostrarPlanesModal() { 
    document.getElementById('modalPlanes').style.display = 'flex'; 
}

function cerrarModal() { 
    document.getElementById('modalPlanes').style.display = 'none'; 
    window.location.hash = '#cotizador';
}

window.onload = calcularPlan;