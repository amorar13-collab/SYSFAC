function abrirWhatsApp() { 
    window.open("https://wa.me/593985309958?text=Hola, solicito una demo del sistema SISFAC", '_blank'); 
}

function cotizarWhatsApp() { 
    window.open("https://wa.me/593985309958?text=Hola, deseo solicitar una cotización del sistema SISFAC", '_blank'); 
}

function mostrarPlanesModal() { 
    document.getElementById('modalPlanes').style.display = 'flex'; 
}

function cerrarModal() { 
    document.getElementById('modalPlanes').style.display = 'none'; 
}